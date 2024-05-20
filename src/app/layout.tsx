import type { Metadata } from "next"
import { Inter, PT_Serif } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import { Toaster } from "@/components/toaster"
import DarkIcon from "../../public/photo-library-dark.png"
import LightIcon from "../../public/photo-library-light.png"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const pt_serif = PT_Serif({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  weight: ["400", "700"],
})

export function generateMetadata(): Metadata {
  const url =
    `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` || "http://localhost:3000"

  return {
    metadataBase: new URL(url),
    icons: [
      {
        rel: "icon",
        media: "(prefers-color-scheme: light)",
        type: "image/png",
        url: LightIcon.src,
      },
      {
        rel: "icon",
        media: "(prefers-color-scheme: dark)",
        type: "image/png",
        url: DarkIcon.src,
      },
    ],
    title: "A Photo Library",
    description: "A library to curate your best photos",
    openGraph: {
      images: [`/api/og`],
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="US-en" suppressHydrationWarning>
      <body className={`${inter.variable} ${pt_serif.variable}`}>
        <ThemeProvider
          attribute="data-theme"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <Toaster />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
