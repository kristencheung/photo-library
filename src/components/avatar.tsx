import clsx from "clsx"
import Image from "next/image"

interface AvatarProps {
  url?: string
  className?: string
}

export const Avatar = ({ url, className }: AvatarProps) => {
  return (
    <div
      className={clsx(
        className,
        // default to a gradient in case profile image doesn't exist (should be replaces with colors from style guide)
        "h-16 w-16 aspect-square relative bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
      )}
    >
      {url && (
        <Image
          src={url}
          alt="Profile image"
          layout="fill"
          className="rounded-full"
          onError={(e) => {
            ;(e.target as HTMLImageElement).style.display = "none"
          }}
        />
      )}
    </div>
  )
}
