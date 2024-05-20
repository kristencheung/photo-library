"use server"
import { createClient } from "@/lib/utils/supabase"
import { createElement } from "./create-element"
import { revalidatePath } from "next/cache"
import { v4 as uuidv4 } from "uuid"

export const uploadImage = async (formData: FormData) => {
  const file = formData.get("file") as File

  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error("User not found")
  }

  // Generate a new UUID to handle duplicates
  const newUuid = uuidv4()
  const filePath = `${user.id}/${newUuid}-${file?.name}`

  const { data } = await supabase.storage
    .from("elements")
    .createSignedUploadUrl(filePath)

  const { error: uploadedError } = await supabase.storage
    .from("elements")
    .uploadToSignedUrl(filePath, data?.token || "", file)

  // TODO: handle error
  if (uploadedError) {
    console.error("Error uploading", uploadedError)
    return ""
  }

  const { data: urlData } = await supabase.storage
    .from("elements")
    .getPublicUrl(filePath)

  const element = await createElement({
    imageUrl: urlData?.publicUrl || "",
    userId: user.id,
  })

  revalidatePath(`/${user?.user_metadata?.username}`)

  return element?.image
}
