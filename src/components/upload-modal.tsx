"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Modal, ModalContent, ModalTrigger } from "./ui/modal"
import { UploadImageInput } from "./upload-image-input"
import { uploadImage } from "@/actions/upload-image"

interface UploadModalProps {}

export const UploadModal = ({}: UploadModalProps) => {
  const [open, setOpen] = useState(false)

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e?.target?.files?.[0]) return

    const formData = new FormData()
    formData.append("file", e.target.files[0] as File)
    await uploadImage(formData)
    setOpen(false)
  }

  return (
    <Modal open={open} onOpenChange={setOpen}>
      <ModalTrigger asChild>
        <Button variant="secondary">Create</Button>
      </ModalTrigger>
      <ModalContent className="sm:max-w-[425px]">
        {/* TODO: add a loading spinner on handleChange */}
        <UploadImageInput onChange={handleChange} />
      </ModalContent>
    </Modal>
  )
}
