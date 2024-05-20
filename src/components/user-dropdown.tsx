import { Avatar } from "./avatar"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown"
import { signOut } from "@/actions/sign-out"

interface UserDropdownProps {
  url?: string
  className?: string
  name: string
}

export const UserDropdown = ({ url, name }: UserDropdownProps) => {
  const handleLogout = async () => {
    await signOut()
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex gap-1 items-center">
          <div className="flex items-center justify-center h-[38px] w-[38px]">
            <div className="absolute rounded-full h-8 w-8 border-white border-2"></div>
            <Avatar height={24} width={24} url={url} />
          </div>
          <button>
            <ChevronDownIcon />
          </button>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <div className="w-full mt-8 mb-2.5">
          <div className="mx-auto flex flex-col justify-center items-center gap-1.5">
            <Avatar height={64} width={64} url={url} />
            <h1 className="capitalize">{name}</h1>
          </div>
        </div>
        <DropdownMenuItem>
          <button onClick={handleLogout} className="text-left h-full w-full">
            Log out
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
