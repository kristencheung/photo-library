"use client"
import { use } from "react"
import { Element } from "./element"
import { DeleteElementModal } from "@/components/delete-element-modal"
import { useToast } from "@/components/use-toast"

// TODO: grab type from drizzle
export const Elements = ({ elements }: { elements: any }) => {
  const { toast } = useToast()
  return (
    <>
      <DeleteElementModal />
      <div className="self-start gap-[60px] grid grid-cols-1 sm:grid-cols-[repeat(2,minmax(0px,1fr))] md:grid-cols-[repeat(3,minmax(0px,1fr))] lg:grid-cols-[repeat(4,minmax(0px,1fr))]">
        {elements?.map((element: any) => {
          return <Element key={element?.image} element={element} />
        })}
      </div>
    </>
  )
}
