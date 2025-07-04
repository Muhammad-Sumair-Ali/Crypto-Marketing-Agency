"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const servicesLinks = [
  { href: "/services/smm", label: "Social media marketing (SMM)" },
  { href: "/services/community", label: "Community Management" },
  { href: "/services/pr", label: "PR (Public Relations)" },
  { href: "/services/influencer", label: "Influencer Marketing" },
  { href: "/services/ppc", label: "Paid advertising (PPC)" },
  { href: "/services/seo", label: "SEO promotion" },
  { href: "/services/web-development", label: "Website development" },
]

const industriesLinks = [
  { href: "/industries/ico-marketing", label: "ICO marketing" },
  { href: "/industries/ido-marketing-services", label: "IDO marketing" },
  { href: "/industries/ieo-marketing", label: "IEO marketing" },
  { href: "/industries/defi-marketing", label: "DeFi marketing" },
  { href: "/industries/nft-marketing", label: "NFT marketing" },
  { href: "/industries/gamefi-marketing", label: "GameFi marketing" },
  { href: "/industries/cryptocurrency-exchange-marketing", label: "Crypto Exchange" },
]

const companyLinks = [
  { href: "/blog", label: "Blog" },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-coinband-dark/95 backdrop-blur-sm py-2 shadow-md"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
       
            <h4 className="text-2xl font-bold">Logo Here</h4>
          </motion.div>
        </Link>

      {/* Desktop Navigation */}
<div className="hidden lg:flex items-center justify-between gap-8">

  <nav className="flex items-center gap-1 relative z-50">
    {[
      { label: 'Services', links: servicesLinks },
      { label: 'Industries', links: industriesLinks },
      { label: 'Company', links: companyLinks },
    ].map(({ label, links }) => (
      <div
        key={label}
        className="relative group"
        onMouseEnter={() => setActiveDropdown(label)}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <button
          className="flex items-center px-4 py-2 text-white hover:text-lime-500 transition-colors"
        >
          {label}
          <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 text-lime-500 group-hover:rotate-180" />
        </button>

        <AnimatePresence>
          {activeDropdown === label && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 mt-2 w-64 bg-coinband-darkGray rounded-xl shadow-xl py-3 z-40"
            >
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-5 py-2 text-sm text-white hover:bg-coinband-green/20 hover:text-coinband-green transition-all duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    ))}

    <Link
      href="/cases"
      className="px-4 py-2 text-white hover:text-lime-500 transition-colors"
    >
      Cases
    </Link>
    <Link
      href="/contact-us"
      className="px-4 py-2 text-white hover:text-lime-500 transition-colors"
    >
      Contacts
    </Link>
  </nav>


</div>
<Button
    className="bg-lime-500 text-black hover:bg-coinband-green/80 font-medium"
    asChild
  >
    <Link href="/contact-us">Contact us</Link>
  </Button>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-coinband-dark pt-10">
              <nav className="flex flex-col gap-4">
                <div className="px-2 py-4 border-b border-gray-800">
                  <p className="text-coinband-green font-medium mb-2">Services</p>
                  <div className="flex flex-col gap-3 pl-2">
                    {servicesLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-sm text-white hover:text-coinband-green"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="px-2 py-4 border-b border-gray-800">
                  <p className="text-coinband-green font-medium mb-2">Industries</p>
                  <div className="flex flex-col gap-3 pl-2">
                    {industriesLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-sm text-white hover:text-coinband-green"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href="/cases"
                  className="px-2 py-2 text-white hover:text-coinband-green border-b border-gray-800"
                >
                  Cases
                </Link>

                <div className="px-2 py-4 border-b border-gray-800">
                  <p className="text-coinband-green font-medium mb-2">Company</p>
                  <div className="flex flex-col gap-3 pl-2">
                    {companyLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-sm text-white hover:text-coinband-green"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contacts"
                  className="px-2 py-2 text-white hover:text-coinband-green"
                >
                  Contacts
                </Link>

                <div className="mt-4">
                  <Button
                    className="w-full bg-coinband-green text-black hover:bg-coinband-green/80"
                    asChild
                  >
                    <Link href="/contact-us">Contact us</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Navbar
