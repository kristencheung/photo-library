import { getElementsByUserId } from "@/actions/get-elements-by-user-id"
import { createClient } from "@/lib/utils/supabase"
import { Elements } from "./elements"
import { UploadModal } from "@/components/upload-modal"

export const ElementsSection = async () => {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const elements = await getElementsByUserId({ userId: user?.id! })

  return (
    <>
      <div className="pb-[80px] mt-14 w-full h-full">
        {elements && elements?.length > 0 ? (
          <Elements elements={elements} />
        ) : (
          <div className="w-full h-full flex flex-col justify-center items-center gap-6">
            <p>No elements found</p>
            <UploadModal />
          </div>
        )}
      </div>
    </>
  )
}
