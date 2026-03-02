import Image from "next/image"
import { clients } from "@/lib/data/clients"

export function Clients() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-[#a2ce39] uppercase tracking-wider mb-4">
            Our Trusted Partners
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Trusted by Leading Organizations
          </h2>
          <p className="text-lg text-muted-foreground">
            We partner with industry leaders across government, finance, healthcare, education, and telecommunications sectors to deliver exceptional solutions.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {clients.map((client) => (
            <div
              key={client.id}
              className="group flex flex-col items-center gap-4"
            >
              {/* Client Logo Container */}
              <div className="w-full aspect-square rounded-2xl overflow-hidden flex items-center justify-center p-6 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:border-[#a2ce39]/50 group-hover:shadow-lg group-hover:bg-muted/50">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={120}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
