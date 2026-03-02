import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { services } from "@/lib/data/services"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Our Services | Next General Trading",
  description: "Explore our comprehensive range of services including Smart Systems, Networking, Construction, Software Development, Data Centers, Consulting, Security, Media, and Unified Communications.",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-[#5971c8]/5 via-background to-[#a2ce39]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block text-sm font-semibold text-[#5971c8] uppercase tracking-wider mb-4">
                Our Services
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
                Comprehensive Solutions for Your Business
              </h1>
              <p className="mt-6 text-lg text-muted-foreground text-pretty">
                From cutting-edge technology to quality construction, we offer a full spectrum of services 
                designed to meet your unique business requirements and drive success.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="group bg-card rounded-2xl p-8 border border-border hover:border-[#a2ce39]/50 hover:shadow-xl transition-all"
                >
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <service.icon className="h-7 w-7" style={{ color: service.color }} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-[#a2ce39] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.shortDescription}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <ArrowRight className="h-3 w-3 text-[#a2ce39]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center text-sm font-medium text-[#5971c8] group-hover:text-[#a2ce39] transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-[#1a1a2e] to-[#2d2d44]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Our team of experts is ready to understand your unique requirements and deliver 
              tailored solutions that drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#a2ce39] hover:bg-[#8fb82f] text-foreground font-semibold">
                <Link href="/contact">Request a Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1a1a2e] bg-transparent">
                <Link href="/projects">View Our Projects</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
