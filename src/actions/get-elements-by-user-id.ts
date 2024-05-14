import { db } from "@/db"
import { elements } from "@/db/schema"
import { eq } from "drizzle-orm"

export async function getElementsByUserId({ userId = "" }: { userId: string }) {
  const usersElements = await db
    .select()
    .from(elements)
    .where(eq(elements.accountId, userId?.toLowerCase()))
  return usersElements
}
