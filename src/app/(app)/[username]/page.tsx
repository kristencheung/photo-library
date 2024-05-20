import { getUserByUserName } from "@/actions/get-user-by-username"
import { ProfileComponent } from "./_components/profile-component"
import { Elements } from "./_components/elements"

export default async function Page({
  params,
}: {
  params: { username: string }
}) {
  const { username } = params
  const user = await getUserByUserName({
    username: username,
  })

  return (
    <main className="w-full h-1/2">
      <ProfileComponent
        className="mt-12"
        username={user?.userName!}
        url={user?.profileImage!}
        fullName={user?.name!}
      />
      <Elements />
    </main>
  )
}
