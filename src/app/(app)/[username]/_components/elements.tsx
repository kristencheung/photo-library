import { getElementsByUserId } from "@/actions/get-elements-by-user-id"
import { createClient } from "@/lib/utils/supabase"
import { Element } from "./element"

export const Elements = async () => {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const elements = await getElementsByUserId({ userId: user?.id! })

  return (
    <div className="gap-[60px] mt-14 grid grid-cols-1 sm:grid-cols-[repeat(2,minmax(0px,1fr))] md:grid-cols-[repeat(3,minmax(0px,1fr))] lg:grid-cols-[repeat(4,minmax(0px,1fr))]">
      {elements && elements?.length > 0 ? (
        elements?.map((element) => {
          return <Element element={element} />
        })
      ) : (
        <div>No elements found</div>
      )}
    </div>
  )
}
