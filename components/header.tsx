"use client"

import { useState } from "react"
import Link from "next/link"
import Image from 'next/image'
import { usePathname } from "next/navigation"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import logo from '@/images/logo_simple.png'
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    href: "/services",
    label: "Services",
    dropdown: [
      { href: "/services/smart-systems", label: "Smart Systems" },
      { href: "/services/networking", label: "Networking" },
      { href: "/services/construction", label: "Construction" },
      { href: "/services/software-development", label: "Software Development" },
      { href: "/services/data-centers", label: "Data Centers" },
      { href: "/services/consulting", label: "Consulting" },
      { href: "/services/security", label: "Security" },
      { href: "/services/media", label: "Media" },
      { href: "/services/unified-communications", label: "Unified Communications" },
    ],
  },
  { href: "/products", label: "Products" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logo}
              alt="Next General Trading"
              width={200}
              height={70}
              className="h-10 w-auto md:h-12 lg:h-13 object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                {link.dropdown ? (
                  <button
                    className={cn(
                      "flex items-center gap-1 text-sm font-medium transition-colors py-2",
                      isActive(link.href)
                        ? "text-[#a2ce39]"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    onMouseEnter={() => setOpenDropdown(link.href)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {link.label}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors py-2",
                      isActive(link.href)
                        ? "text-[#a2ce39]"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                )}
                
                {/* Dropdown Menu */}
                {link.dropdown && (
                  <div
                    className={cn(
                      "absolute top-full left-0 pt-2 transition-all duration-200",
                      openDropdown === link.href
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    )}
                    onMouseEnter={() => setOpenDropdown(link.href)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <div className="bg-card border border-border rounded-xl shadow-lg py-2 min-w-[220px]">
                      <Link
                        href={link.href}
                        className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                      >
                        All Services
                      </Link>
                      <div className="border-t border-border my-2" />
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "block px-4 py-2 text-sm transition-colors",
                            pathname === item.href
                              ? "text-[#a2ce39] bg-[#a2ce39]/5"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted"
                          )}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+251911473611"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="h-4 w-4" />
              +251 911 473 611
            </a>
            <Button asChild className="bg-[#a2ce39] hover:bg-[#8fb82f] text-foreground font-semibold">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border max-h-[calc(100vh-4rem)] overflow-y-auto">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.dropdown ? (
                    <>
                      <Link
                        href={link.href}
                        className={cn(
                          "block text-base font-medium py-2",
                          isActive(link.href)
                            ? "text-[#a2ce39]"
                            : "text-muted-foreground"
                        )}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                      <div className="pl-4 space-y-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                              "block text-sm py-1.5",
                              pathname === item.href
                                ? "text-[#a2ce39]"
                                : "text-muted-foreground"
                            )}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        "block text-base font-medium py-2",
                        isActive(link.href)
                          ? "text-[#a2ce39]"
                          : "text-muted-foreground"
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-border mt-2">
                <a
                  href="tel:+251911473611"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
                >
                  <Phone className="h-4 w-4" />
                  +251 911 473 611
                </a>
                <Button asChild className="w-full bg-[#a2ce39] hover:bg-[#8fb82f] text-foreground font-semibold">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
