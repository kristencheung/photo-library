"use server"
import { createClient } from "@/lib/utils/supabase"
import { redirect } from "next/navigation"

export async function signOut() {
  const supabase = await createClient()
  const { error } = await supabase.auth.signOut()
  if (error) {
    // Let error boundary catch this
    console.error("Sign out error", error)
  }
  redirect("/")
}
