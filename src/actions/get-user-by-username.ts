import { db } from "@/db"
import { accounts } from "@/db/schema"
import { eq } from "drizzle-orm"

export async function getUserByUserName({
  username = "",
}: {
  username: string
}) {
  const user = await db
    .select()
    .from(accounts)
    .where(eq(accounts.userName, username?.toLowerCase()))

  return user?.[0]
}
