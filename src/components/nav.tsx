"use client"
import Link from "next/link"
import { PhotoLibraryLogo } from "./icons/photo-library-logo"
import { Container } from "./container"

export const Nav = () => {
  return (
    <header className="fixed top-0 left-0 w-full border-b border-white">
      <Container className="flex h-navigation-height">
        <Link className="flex items-center" href="/">
          <PhotoLibraryLogo className="w-6 h-6 mr-4" />
        </Link>

        <div className="ml-auto h-full flex items-center">
          <Link href="#" className="text-sm mr-6">
            Log in
          </Link>
        </div>
      </Container>
    </header>
  )
}
