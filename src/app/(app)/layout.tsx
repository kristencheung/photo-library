import { getUser } from "@/actions/get-user"
import { Nav } from "@/components/nav"
import { createClient } from "@/lib/utils/supabase"

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
  params: { username: string }
}>) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return (
      <>
        <Nav url="" />
        {children}
      </>
    )
  }

  const loggedInUser = await getUser()

  return (
    <>
      <div id="modal-root" className="h-full w-full"></div>
      <Nav name={loggedInUser?.name} url={loggedInUser?.profileImage || ""} />
      <main className="pt-navigation-height h-[calc(100dvh-theme(spacing.navigation-height))] px-[60px]">
        {children}
      </main>
    </>
  )
}
