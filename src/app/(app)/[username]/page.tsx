import { getUser } from "@/actions/get-user"
import { ProfileComponent } from "./_components/profile-component"
import { ElementsSection } from "./_components/elements-section"

export default async function Page() {
  const user = await getUser()

  return (
    <main className="w-full h-1/2">
      <ProfileComponent
        className="mt-12"
        username={user?.userName!}
        url={user?.profileImage!}
        fullName={user?.name!}
      />
      <ElementsSection />
    </main>
  )
}
