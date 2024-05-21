"use client"

import { type ElementRef, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { createPortal } from "react-dom"
import { Cross2Icon } from "@radix-ui/react-icons"

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const dialogRef = useRef<ElementRef<"dialog">>(null)

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal()
    }
  }, [])

  function onDismiss() {
    router.back()
  }

  return createPortal(
    <div className="overflow-hidden bg-black/80 fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-[80]">
      <dialog
        ref={dialogRef}
        onClose={onDismiss}
        className="bg-transparent h-full w-full flex justify-center items-center flex-col"
      >
        <button
          onClick={onDismiss}
          className="absolute top-0 left-0 flex hover:bg-button-secondary-hover rounded-full h-9 w-9 justify-center items-center"
        >
          <Cross2Icon className="h-6 w-6" />
        </button>
        <div className="p-12">{children}</div>
      </dialog>
    </div>,
    document.getElementById("modal-root")!
  )
}
