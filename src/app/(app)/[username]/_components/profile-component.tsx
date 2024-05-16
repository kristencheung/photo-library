"use client"
import { Avatar } from "@/components/avatar"
import clsx from "clsx"

export const ProfileComponent = ({
  fullName,
  username,
  url,
  className = "",
}: {
  fullName: string
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
      <Avatar height={90} width={90} url={url || ""} />
      <h1 className="text-xl mt-4 capitalize">{fullName}</h1>
      <p className="text-text-muted text-sm font-medium">@{username || "--"}</p>
    </div>
  )
}
