"use client"
import { Avatar } from "@/components/avatar"
import clsx from "clsx"

export const ProfileComponent = ({
  name,
  username,
  url,
  className = "",
}: {
  name: string
  username: string
  url: string
  className?: string
}) => {
  return (
    <div
      className={clsx(
        className,
        "mx-auto w-fit text-center justify-center flex flex-col items-center"
      )}
    >
      <Avatar className="h-[90px] w-[90px]" url={url || ""} />
      <h1 className="text-xl mt-4">{name}</h1>
      <p className="text-text-muted text-sm font-medium">@{username || "--"}</p>
    </div>
  )
}
