"use client"
import Link from "next/link"
import { PhotoLibraryLogo } from "./icons/photo-library-logo"
import { Container } from "./container"
import { UserDropdown } from "./user-dropdown"
import { UploadModal } from "./upload-modal"

interface NavProps {
  url?: string
  name?: string
}

export const Nav = ({ url, name }: NavProps) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-surface-default z-50">
      <Container className="flex h-navigation-height">
        <Link className="flex items-center" href="/">
          <PhotoLibraryLogo className="h-6 w-6" />
        </Link>

        <div className="ml-auto h-full flex items-center gap-[18px]">
          {name && (
            <>
              <UploadModal />
              <UserDropdown url={url} name={name} />
            </>
          )}
        </div>
      </Container>
    </header>
  )
}
