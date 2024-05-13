import { cn } from "@/lib/utils/cn"
import { UploadIcon } from "@radix-ui/react-icons"
import * as React from "react"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const UploadImageInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className="h-[116px] w-full bg-button-tertiary relative">
        <input
          type="file"
          className={cn(
            "z-50 opacity-0 flex h-full w-full rounded-md bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        <div className="z-10 absolute top-[34.5px] left-[138.5px] flex flex-col gap-2 justify-center items-center">
          <UploadIcon />
          <p>Upload image</p>
        </div>
      </div>
    )
  }
)
UploadImageInput.displayName = "Input"

export { UploadImageInput }
