import TwitterLogo from "@/components/icons/twitter-logo"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/utils/supabase"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { AnimatedTitle } from "@/components/animated-title"

// Landing page
export default function Home() {
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
    <main className="flex w-full min-h-screen flex-col items-center justify-center p-10 md:p-24 gap-6">
      <AnimatedTitle />

      <form action={signIn}>
        <Button className="flex gap-1">
          Continue with <span className="sr-only">X</span>{" "}
          <TwitterLogo className="h-4 w-4" />
        </Button>
      </form>
    </main>
  )
}
