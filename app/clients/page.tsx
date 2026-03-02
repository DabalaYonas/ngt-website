"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { clients, getClientCategories } from "@/lib/data/clients"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function ClientsPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const categories = getClientCategories()

  const filteredClients = activeCategory === "All"
    ? clients
    : clients.filter(c => c.category === activeCategory)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-[#a2ce39]/5 via-background to-[#5971c8]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block text-sm font-semibold text-[#a2ce39] uppercase tracking-wider mb-4">
                Our Partners
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
                Trusted by Industry Leaders
              </h1>
              <p className="mt-6 text-lg text-muted-foreground text-pretty">
                We are proud to partner with leading organizations across government, finance,
                healthcare, education, and telecommunications sectors to deliver exceptional solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b border-border bg-background/95 backdrop-blur-md sticky top-16 lg:top-20 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all",
                    activeCategory === category
                      ? "bg-[#5971c8] text-white"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 border border-border"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Clients Grid */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredClients.map((client) => (
                <div
                  key={client.id}
                  className="group flex flex-col items-center gap-4 p-6 rounded-2xl border border-border bg-card hover:border-[#a2ce39]/50 hover:shadow-lg hover:bg-muted/30 transition-all"
                >
                  {/* Client Logo Container */}
                  <div className="w-full aspect-square rounded-xl overflow-hidden bg-muted flex items-center justify-center p-8 grayscale opacity-60 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:bg-card">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={160}
                      height={160}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Client Info */}
                  <div className="text-center w-full">
                    <h3 className="text-base font-semibold text-foreground group-hover:text-[#5971c8] transition-colors">
                      {client.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">{client.category}</p>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                      {client.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {filteredClients.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No clients found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-[#a2ce39] mb-2">{clients.length}+</div>
                <p className="text-muted-foreground">Trusted Partners</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#5971c8] mb-2">
                  {Array.from(new Set(clients.map(c => c.category))).length}
                </div>
                <p className="text-muted-foreground">Industry Sectors</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#a2ce39] mb-2">15+</div>
                <p className="text-muted-foreground">Years of Partnership</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-[#1a1a2e] to-[#2d2d44]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Become Our Partner
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              We are always looking for new strategic partnerships to expand our reach
              and deliver better solutions to our clients.
            </p>
            <Button asChild size="lg" className="bg-[#a2ce39] hover:bg-[#8fb82f] text-foreground font-semibold">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
