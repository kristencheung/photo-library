"use client"
import useStore from "@/lib/utils/store"
import { Button } from "./ui/button"
import { Modal, ModalContent, ModalTitle } from "./ui/modal"
import { deleteElement } from "@/actions/delete-element-by-id"
import { useTransition } from "react"
import LoadingSpinner from "./icons/loading-spinner"
import { useToast } from "./use-toast"

export const DeleteElementModal = () => {
  const elementToDelete = useStore((state) => state.elementToDelete)
  const setElementToDelete = useStore((state) => state.setElementToDelete)
  const [isPending, startTransition] = useTransition()
  const { toast } = useToast()

  const handleDelete = async () => {
    startTransition(async () => {
      await deleteElement({ elementImageUrl: elementToDelete! })
      setElementToDelete(null)
      toast({
        title: "Element deleted",
      })
    })
  }
  return (
    <Modal
      open={!!elementToDelete}
      onOpenChange={() => setElementToDelete(null)}
    >
      <ModalContent className="sm:max-w-[300px] bg-white-0 text-grey-500 justify-center items-center text-center">
        <ModalTitle className="text-grey-950">Delete Element?</ModalTitle>
        <p className="text-sm">
          This will permanently delete the photo from your Photo Library.
        </p>
        <div className="gap-1.5 flex flex-col mt-[30px]">
          <Button variant="secondary" onClick={handleDelete}>
            {isPending ? (
              <LoadingSpinner className="h-6 w-6 animate-spin fill-white" />
            ) : (
              "Delete"
            )}
          </Button>
          <Button variant="outline" onClick={() => setElementToDelete(null)}>
            Cancel
          </Button>
        </div>
      </ModalContent>
    </Modal>
  )
}
