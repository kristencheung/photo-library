"use server"
import { db } from "@/db"
import { elements } from "@/db/schema"
import { createClient } from "@/lib/utils/supabase"
import { eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"

export async function deleteElement({
  elementImageUrl,
}: {
  elementImageUrl: string
}) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error("User not found")
  }

  const url = new URL(elementImageUrl)
  const filename = url.pathname.split("/").pop()

  await db.delete(elements).where(eq(elements.image, elementImageUrl))

  const { data, error } = await supabase.storage
    .from("elements")
    .remove([filename!])

  revalidatePath(`/${user?.user_metadata?.username}`)
}
