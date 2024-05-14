import { cn } from "@/lib/utils/cn"
import { UploadIcon } from "@radix-ui/react-icons"
import * as React from "react"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const UploadImageInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const inputRef = React.useRef<HTMLInputElement | null>(null)

    const handleInputClicked = () => {
      inputRef.current?.click()
    }

    const setRefs = (element: HTMLInputElement | null) => {
      inputRef.current = element

      if (typeof ref === "function") {
        ref(element)
      } else if (ref) {
        ref.current = element
      }
    }
    return (
      <div className="h-[116px] w-full bg-button-tertiary relative">
        <input
          type="file"
          name="fileUpload"
          accept="image/png, image/jpeg, image/jpg"
          className={cn(
            "z-50 invisible w-0 h-0 absolute top-0 left-0 rounded-md bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={setRefs}
          {...props}
        />
        <button
          onClick={handleInputClicked}
          className="hover:bg-surface-subtle transition-colors flex flex-col w-full h-full rounded-lg top-[34.5px] left-[138.5px] justify-center items-center"
        >
          <div className="gap-2 flex flex-col justify-center items-center">
            <UploadIcon />
            <p>Upload</p>
          </div>
        </button>
      </div>
    )
  }
)
UploadImageInput.displayName = "Input"

export { UploadImageInput }
