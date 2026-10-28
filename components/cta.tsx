import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e] to-[#2d2d44]" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#a2ce39]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#5971c8]/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance">
          Ready to Transform Your Business?
        </h2>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto text-pretty">
          Partner with Next General Trading for innovative solutions that drive growth. 
          Let&apos;s discuss how we can help you achieve your goals.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-[#a2ce39] hover:bg-[#8fb82f] text-[#1a1a2e] font-semibold">
            <Link href="/contact">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent">
            <a href="tel:+251911473611">
              <Phone className="mr-2 h-4 w-4" />
              Call Us Now
            </a>
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-gray-400 text-sm">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#a2ce39]" />
            Free Consultation
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#5971c8]" />
            Expert Team
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#a2ce39]" />
            Quality Guaranteed
          </span>
        </div>
      </div>
    </section>
  )
}
