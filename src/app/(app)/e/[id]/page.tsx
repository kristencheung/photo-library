import { getElementById } from "@/actions/get-element-by-id"
import Image from "next/image"
export default async function ElementPage({
  params: { id: elementId },
}: {
  params: { id: string }
}) {
  const element = await getElementById({ id: elementId })
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="w-fit h-auto mx-auto aspect-auto">
        <Image
          alt="an element"
          src={element?.image}
          width={600}
          height={600}
          className="object-scale-down"
        />
      </div>
    </div>
  )
}
