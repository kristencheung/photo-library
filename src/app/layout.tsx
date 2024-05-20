import type { Metadata } from "next"
import { Inter, PT_Serif } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "next-themes"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const pt_serif = PT_Serif({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Photo library",
  description: "A place to curate your best photos",
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
