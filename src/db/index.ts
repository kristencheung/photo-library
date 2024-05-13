import "@next/env"
import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import * as schema from "./schema"

const connection_string = process.env.DATABASE_URL
if (!connection_string) {
  throw new Error("DATABASE_URL is not set")
}

export const client = postgres(connection_string, { prepare: false })
export const db = drizzle(client, { schema })
