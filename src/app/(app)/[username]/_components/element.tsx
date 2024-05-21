"use client"
import useStore from "@/lib/utils/store"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context"
import Image from "next/image"
import { SelectElement } from "@/db/schema"
import Link from "next/link"

export const Element = ({ element }: { element: SelectElement }) => {
  const setElementToDelete = useStore((state) => state.setElementToDelete)

  return (
    <ContextMenu>
      <ContextMenuTrigger className="h-fit">
        <Link
          prefetch={true}
          href={`/e/${element.id}`}
          key={element.image}
          className="w-fit h-auto mx-auto aspect-auto hover:cursor-zoom-in hover:opacity-60"
          passHref
        >
          <Image
            alt="an element"
            src={element?.image}
            width={298}
            height={298}
          />
        </Link>
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
