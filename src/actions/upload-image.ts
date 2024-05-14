"use server"
import { createClient } from "@/lib/utils/supabase"
import { createElement } from "./create-element"
import { revalidatePath } from "next/cache"

export const uploadImage = async (formData: FormData) => {
  const file = formData.get("file") as File

  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error("User not found")
  }

  const filePath = `${user.id}/${file?.name}`

  const { data } = await supabase.storage
    .from("elements")
    .createSignedUploadUrl(filePath)

  const { error: uploadedError } = await supabase.storage
    .from("elements")
    .uploadToSignedUrl(filePath, data?.token || "", file)

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
