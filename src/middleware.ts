import { createClient } from "@/lib/utils/supabase/middleware"
import { NextResponse, type NextRequest } from "next/server"

const publicRoutes = ["/", "/auth/callback"]

function isPublicRoute(route: string): boolean {
  return publicRoutes.includes(route)
}

export async function middleware(request: NextRequest) {
  const { supabase, response } = createClient(request)
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user && !isPublicRoute(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/", request.url))
  } else if (user && request.nextUrl.pathname === "/") {
    return NextResponse.redirect(
      new URL(`/${user?.user_metadata?.user_name}`, request.url)
    )
  }
  return response
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}
