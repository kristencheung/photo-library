"use client"
import Link from "next/link"
import { PhotoLibraryLogo } from "./icons/photo-library-logo"
import { Container } from "./container"
import { UserDropdown } from "./user-dropdown"

interface NavProps {
  url?: string
  name?: string
}

export const Nav = ({ url, name }: NavProps) => {
  return (
    <header className="fixed top-0 left-0 w-full">
      <Container className="flex h-navigation-height">
        <Link className="flex items-center" href="/">
          <PhotoLibraryLogo className="w-6 h-6" />
        </Link>

        <div className="ml-auto h-full flex items-center">
          {name ? (
            <UserDropdown url={url} name={name} />
          ) : (
            // TODO: replace with link button
            <Link href="/">Sign in</Link>
          )}
        </div>
      </Container>
    </header>
  )
}
