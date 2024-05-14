"use client"

import { useState, useTransition } from "react"
import { Button } from "./ui/button"
import { Modal, ModalContent, ModalTrigger } from "./ui/modal"
import { UploadImageInput } from "./upload-image-input"
import { uploadImage } from "@/actions/upload-image"
import LoadingSpinner from "./icons/loading-spinner"

interface UploadModalProps {}

export const UploadModal = ({}: UploadModalProps) => {
  const [open, setOpen] = useState(false)
  const [isPending, startTransition] = useTransition()

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e?.target?.files?.[0]) return

    const formData = new FormData()
    formData.append("file", e.target.files[0] as File)

    startTransition(async () => {
      await uploadImage(formData)
      setOpen(false)
    })
  }

  return (
    <Modal open={open} onOpenChange={setOpen}>
      <ModalTrigger asChild>
        <Button variant="secondary">Create</Button>
      </ModalTrigger>
      <ModalContent className="sm:max-w-[425px]">
        {isPending ? (
          <div className="h-[116px] w-full bg-button-tertiary flex flex-col justify-center items-center">
            <LoadingSpinner className="h-6 w-6 animate-spin fill-white" />
          </div>
        ) : (
          <UploadImageInput onChange={handleChange} />
        )}
      </ModalContent>
    </Modal>
  )
}
