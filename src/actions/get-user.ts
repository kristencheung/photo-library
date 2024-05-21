import { db } from "@/db"
import { accounts } from "@/db/schema"
import { createClient } from "@/lib/utils/supabase"
import { eq } from "drizzle-orm"

export async function getUser() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    throw new Error("User not found")
  }

  const account = await db
    .select()
    .from(accounts)
    .where(eq(accounts.id, user?.id!))

  return account?.[0]
}
