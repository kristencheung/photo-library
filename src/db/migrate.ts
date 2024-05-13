import "next/env"
import { resolve } from "node:path"
import { migrate } from "drizzle-orm/postgres-js/migrator"
import { db } from "."
;(async () => {
  try {
    // @ts-ignore
    await migrate(db, {
      migrationsFolder: resolve(__dirname, "../../supabase/migrations"),
    })
    console.log("Migration successful")
    process.exit(0)
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
})()
