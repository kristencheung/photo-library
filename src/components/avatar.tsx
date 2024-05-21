import clsx from "clsx"
import Image from "next/image"

interface AvatarProps {
  url?: string
  className?: string
  height?: number
  width?: number
}

export const Avatar = ({
  url,
  className = "",
  height = 16,
  width = 16,
}: AvatarProps) => {
  const dimensionsClass = `h-[${height}px] w-[${width}px]`
  return (
    <div
      className={clsx(
        className,
        // default to a gradient in case profile image doesn't exist (should be replaced with colors from style guide)
        `${dimensionsClass} aspect-square relative bg-gradient-to-r from-green-400 to-blue-500 rounded-full`
      )}
    >
      {url && (
        <Image
          src={url}
          alt="Profile image"
          width={width}
          height={height}
          className="rounded-full"
          onError={(e) => {
            ;(e.target as HTMLImageElement).style.display = "none"
          }}
        />
      )}
    </div>
  )
}
