import type { Column } from "drizzle-orm"
import { sql } from "drizzle-orm"

export function lower(col: Column) {
  return sql<string>`lower(${col})`
}
