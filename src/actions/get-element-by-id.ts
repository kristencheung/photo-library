import { db } from "@/db"
import { elements } from "@/db/schema"
import { createClient } from "@/lib/utils/supabase"
import { eq } from "drizzle-orm"

export async function getElementById({ id }: { id: string }) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error("User not found")
  }
  const element = await await db
    .select()
    .from(elements)
    .where(eq(elements.id, id))

  return element?.[0]
}
