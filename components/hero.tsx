"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Cpu, Globe } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative flex items-center pt-24 lg:pt-28 pb-12 lg:pb-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#a2ce39]/5 via-background to-[#5971c8]/5" />
      <div className="absolute top-10 right-0 w-72 h-72 bg-[#a2ce39]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-0 w-72 h-72 bg-[#5971c8]/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#a2ce39]/10 border border-[#a2ce39]/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#a2ce39] animate-pulse" />
              <span className="text-sm font-medium text-[#a2ce39]">Trusted Partner Since 2020</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              <span className="text-foreground">Innovative Solutions for </span>
              <span className="text-[#a2ce39]">IT</span>
              <span className="text-foreground">, </span>
              <span className="text-[#5971c8]">Construction</span>
              <span className="text-foreground"> & </span>
              <span className="text-foreground">Trading</span>
            </h1>
            
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 text-pretty">
              Next General Trading delivers comprehensive business solutions across Ethiopia. 
              From cutting-edge technology to quality construction, we build your success.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-[#a2ce39] hover:bg-[#8fb82f] text-foreground font-semibold">
                <Link href="/services">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-[#5971c8] text-[#5971c8] hover:bg-[#5971c8] hover:text-white bg-transparent">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-[#a2ce39]">15+</div>
                <div className="text-sm text-muted-foreground">Years Industry Experts</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-[#5971c8]">30+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-foreground">20+</div>
                <div className="text-sm text-muted-foreground">Expert Team</div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[400px]">
              {/* Main Cards */}
              <Link 
                href="/services?category=IT"
                className="absolute top-0 right-0 w-64 bg-card rounded-2xl p-6 shadow-xl border border-border hover:shadow-2xl hover:border-[#a2ce39]/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#a2ce39]/10 flex items-center justify-center mb-4">
                  <Cpu className="h-6 w-6 text-[#a2ce39]" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-[#a2ce39] transition-colors">IT Solutions</h3>
                <p className="text-sm text-muted-foreground mt-2">Smart systems, networking, and software development</p>
              </Link>
              
              <Link 
                href="/services/construction"
                className="absolute top-40 left-0 w-64 bg-card rounded-2xl p-6 shadow-xl border border-border hover:shadow-2xl hover:border-[#5971c8]/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#5971c8]/10 flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-[#5971c8]" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-[#5971c8] transition-colors">Construction</h3>
                <p className="text-sm text-muted-foreground mt-2">Quality building and infrastructure development</p>
              </Link>
              
              <div className="absolute bottom-0 right-12 w-64 bg-card rounded-2xl p-6 shadow-xl border border-border hover:shadow-2xl transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-foreground/10 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">Trading</h3>
                <p className="text-sm text-muted-foreground mt-2">Import/export and general merchandise</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
