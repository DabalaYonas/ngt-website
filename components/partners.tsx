"use client"

import Image from "next/image"
import Link from "next/link"
import { partners } from "@/lib/data/partners"

export function Partners() {
  // Duplicate list for seamless infinite scroll
  const items = [...partners, ...partners]

  return (
    <section className="py-16 lg:py-24 bg-muted/30 border-y border-border/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-block text-sm font-semibold text-[#a2ce39] uppercase tracking-wider mb-3">
            Our Suppliers &amp; Partners
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Backed by World-Class Partners
          </h2>
          <p className="text-base text-muted-foreground">
            We work with trusted global suppliers and partners to source and
            deliver the highest quality products and solutions.
          </p>
        </div>
      </div>

      {/* Marquee Track */}
      <div className="relative w-full">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-muted/60 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-muted/60 to-transparent" />

        <div
          className="flex gap-6 w-max"
          style={{ animation: "partnerScroll 28s linear infinite" }}
        >
          {items.map((partner, index) => (
            <Link
              key={`${partner.id}-${index}`}
              href={partner.website ?? "#"}
              target={partner.website && partner.website !== "#" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group flex-shrink-0 flex items-center justify-center px-6 h-16 transition-all duration-300"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={48}
                className="h-12 w-auto object-contain opacity-50 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
