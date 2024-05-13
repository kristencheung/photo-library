import { db } from "@/db"
import { accounts } from "@/db/schema"
import { eq, sql } from "drizzle-orm"

export async function getUser(email: string) {
  const user = await db
    .select()
    .from(accounts)
    .where(sql`lower(${accounts.email}) = ${email?.toLowerCase()}`)
  return user
}
