"use server"
import { createClient } from "@/lib/utils/supabase"
import { redirect } from "next/navigation"

export async function signOut() {
  const supabase = await createClient()
  const { error } = await supabase.auth.signOut()
  if (error) {
    // TODO: use an error boundary on client
    console.error("Sign out error", error)
  }
  redirect("/")
}
