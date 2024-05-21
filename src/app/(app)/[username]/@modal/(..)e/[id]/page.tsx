import { getElementById } from "@/actions/get-element-by-id"
import { Modal } from "./modal"
import Image from "next/image"

export default async function ElementModal({
  params: { id: elementId },
}: {
  params: { id: string }
}) {
  const element = await getElementById({ id: elementId })

  return (
    <Modal>
      <div className="w-fit h-auto mx-auto aspect-auto">
        <Image
          alt="an element"
          src={element?.image}
          width={600}
          height={600}
          className="object-scale-down"
        />
      </div>
    </Modal>
  )
}
