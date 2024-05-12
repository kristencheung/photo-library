import Image from "next/image"
import { redirect } from "next/navigation"
import { headers } from "next/headers"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/utils/supabase"

export default function LoginForm() {
  const signIn = async () => {
    "use server"

    const supabase = createClient()
    const origin = headers().get("origin")

    const { error, data } = await supabase.auth.signInWithOAuth({
      provider: "twitter",
      options: {
        redirectTo: `${origin}/auth/callback`,
      },
    })

    if (error) {
      console.log(error)
    } else {
      console.log("Successfully logged in with Twitter!")
      return redirect(data.url)
    }
  }

  return (
    <form
      action={signIn}
      className="flex-1 flex min-h-screen justify-center items-center"
    >
      <Button>Sign in with Twitter</Button>
    </form>
  )
}
