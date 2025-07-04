import type { Metadata } from "next"
import "./globals.css"
import { cn } from "@/lib/utils"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Crypto & Blockchain Marketing Agency",
  description: "Crypto and blockchain digital marketing agency for Web3 projects - We specialize in cryptocurrency, NFT, blockchain, WEB 3.0!",
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "min-h-screen bg-background font-manrope antialiased"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="coin-theme"
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
