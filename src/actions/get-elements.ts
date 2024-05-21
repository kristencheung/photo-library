import { db } from "@/db"
import { elements } from "@/db/schema"
import { createClient } from "@/lib/utils/supabase"
import { eq } from "drizzle-orm"

export async function getElements() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error("User not found")
  }
  const usersElements = await db
    .select()
    .from(elements)
    .where(eq(elements.accountId, user?.id?.toLowerCase()))
  return usersElements
}
