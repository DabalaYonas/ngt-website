import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Instagram } from "lucide-react"
import logo from '@/images/logo_simple.png'
import Image from 'next/image'

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
]

const serviceLinks = [
  { href: "/services/smart-systems", label: "Smart Systems" },
  { href: "/services/networking", label: "Networking" },
  { href: "/services/construction", label: "Construction" },
  { href: "/services/software-development", label: "Software Development" },
  { href: "/services/data-centers", label: "Data Centers" },
  { href: "/services/consulting", label: "Consulting" },
]

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/ngtechet/", label: "Facebook" },
  { icon: Linkedin, href: "https://linkedin.com/ngtechet/", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/ngtechet/", label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              {/* <span className="text-xl font-bold">
                <span className="text-[#a2ce39]">Next</span>
                <span className="text-[#5971c8]"> General</span>
                <span className="text-white"> Trading</span>
              </span> */}
              <Image
                src={logo}
                alt="Next General Trading"
                width={200}
                height={70}
                className="h-12 w-auto md:h-14 lg:h-16 object-contain"
                priority
              />
            </Link>
            <p className="text-gray-400 mb-6">
              Your trusted partner for innovative IT solutions, quality construction, 
              and reliable trading services across Ethiopia.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#a2ce39] transition-colors group"
                >
                  <social.icon className="h-5 w-5 text-gray-400 group-hover:text-[#1a1a2e]" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#a2ce39] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-[#a2ce39] transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-[#a2ce39] flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  Dabi Complex 3rd floor no. 004,<br />
                  Airport Road, Addis Ababa, Ethiopia
                </span>
              </li>
              <li>
                <a href="tel:+251911473611" className="flex gap-3 text-gray-400 hover:text-[#a2ce39] transition-colors">
                  <Phone className="h-5 w-5 text-[#a2ce39] flex-shrink-0" />
                  +251 911 473 611
                </a>
              </li>
              <li>
                <a href="tel:+251911285288" className="flex gap-3 text-gray-400 hover:text-[#a2ce39] transition-colors">
                  <Phone className="h-5 w-5 text-[#5971c8] flex-shrink-0" />
                  +251 911 285 288
                </a>
              </li>
              <li>
                <a href="mailto:info@ngtechet.com" className="flex gap-3 text-gray-400 hover:text-[#a2ce39] transition-colors">
                  <Mail className="h-5 w-5 text-[#a2ce39] flex-shrink-0" />
                  info@ngtechet.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Next General Trading. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Developed by <Link href="https://dabala.vercel.app" target="_blank" className="text-[#a2ce39]">Dabala Yonas</Link>
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-[#a2ce39] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-[#a2ce39] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
