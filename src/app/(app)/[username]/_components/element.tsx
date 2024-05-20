"use client"
import useStore from "@/lib/utils/store"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context"
import Image from "next/image"

// TODO: figure out how to get type from drizzle
export const Element = ({ element }: { element: any }) => {
  const setElementToDelete = useStore((state) => state.setElementToDelete)

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <div key={element.image} className="w-fit h-auto mx-auto aspect-auto">
          <Image
            alt="an element"
            src={element?.image}
            width={298}
            height={298}
          />
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem className="text-text-critical hover:text-text-default">
          <button
            onClick={() => setElementToDelete(element?.image)}
            className="h-full w-full text-left"
          >
            Delete
          </button>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  )
}
