import { getElements } from "@/actions/get-elements"
import { Elements } from "./elements"
import { UploadModal } from "@/components/upload-modal"

export const ElementsSection = async () => {
  const elements = await getElements()

  return (
    <>
      <div className="mt-14">
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
