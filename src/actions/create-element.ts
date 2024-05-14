import { db } from "@/db"
import { elements } from "@/db/schema"

export async function createElement({
  imageUrl,
  userId,
}: {
  imageUrl: string
  userId: string
}) {
  const element = await db
    .insert(elements)
    .values({ image: imageUrl, accountId: userId, description: "" })
    .returning()

  return element?.[0]
}
