import { db } from "@/db"
import { elements } from "@/db/schema"
import { createClient } from "@/lib/utils/supabase"

export async function createElement({ imageUrl }: { imageUrl: string }) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error("User not found")
  }
  const element = await db
    .insert(elements)
    .values({ image: imageUrl, accountId: user?.id, description: "" })
    .returning()

  return element?.[0]
}
