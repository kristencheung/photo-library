"use client"

import { Button } from "./ui/button"
import { Modal, ModalContent, ModalTrigger } from "./ui/modal"
import { UploadImageInput } from "./upload-image-input"

interface UploadModalProps {}

export const UploadModal = ({}: UploadModalProps) => {
  return (
    <Modal>
      <ModalTrigger asChild>
        <Button variant="secondary">Create</Button>
      </ModalTrigger>
      <ModalContent className="sm:max-w-[425px]">
        <UploadImageInput />
      </ModalContent>
    </Modal>
  )
}
