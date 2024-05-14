"use client"
import Image from "next/image"

// TODO: figure out how to get type from drizzle
export const Element = ({ element }: { element: any }) => {
  return (
    <div key={element.image} className="">
      <Image alt="an element" src={element?.image} width={298} height={298} />
    </div>
  )
}
