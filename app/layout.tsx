import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { LanguageProvider } from "@/lib/i18n/context"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cyan3dScanningSolutions",
  description: "3d scanning solutions",
  keywords: ["3d scanning", "handheld", "blue laser scanner", "measurement", "Formbuilder"],
  authors: [{ name: "3dScanningSolutionsAtBlackboxcv", url: "https://cyan3dscanning.com" }],
  creator: "Cyan",
  openGraph: {
    title: "3DScanningSolutions",
    description: "3d scanning solutions",
    url: "https://cyan3dscanning.com",
    siteName: "3dScanningSolutions",
    images: [
      {
        url: "https://cyan3dscanning.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cyan3dScanningSolutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/public/me-whole.jpeg",
    shortcut: "/public/me-whole.jpeg",
    // apple: "/apple-touch-icon.png",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'