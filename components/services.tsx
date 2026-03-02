"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { services } from "@/lib/data/services"
import { Button } from "@/components/ui/button"

export function Services() {
  const [activeService, setActiveService] = useState(services[0].id)
  const activeServiceData = services.find(s => s.id === activeService) || services[0]

  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-[#5971c8] uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Comprehensive Solutions for Your Business
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            From technology to construction, we offer a full spectrum of services designed to meet 
            your unique business requirements and drive success.
          </p>
        </div>

        {/* Services Grid - Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-4">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="bg-card rounded-xl p-6 border border-border hover:border-[#a2ce39]/50 hover:shadow-lg transition-all group"
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${service.color}15` }}
              >
                <service.icon className="h-6 w-6" style={{ color: service.color }} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-[#a2ce39] transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{service.shortDescription}</p>
              <ul className="space-y-2">
                {service.features.slice(0, 2).map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ArrowRight className="h-3 w-3 text-[#a2ce39]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>

        {/* Services - Desktop Interactive */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8">
          {/* Service List */}
          <div className="col-span-4 space-y-2">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={cn(
                  "w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all",
                  activeService === service.id
                    ? "bg-[#a2ce39]/10 border border-[#a2ce39]/30"
                    : "hover:bg-muted border border-transparent"
                )}
              >
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ 
                    backgroundColor: activeService === service.id ? `${service.color}20` : `${service.color}10`
                  }}
                >
                  <service.icon 
                    className="h-5 w-5" 
                    style={{ color: service.color }} 
                  />
                </div>
                <span className={cn(
                  "font-medium",
                  activeService === service.id ? "text-foreground" : "text-muted-foreground"
                )}>
                  {service.title}
                </span>
              </button>
            ))}
          </div>

          {/* Service Details */}
          <div className="col-span-8">
            <div className="bg-card rounded-2xl p-8 border border-border h-full">
              <div className="flex items-start gap-6 mb-6">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: `${activeServiceData.color}15` }}
                >
                  <activeServiceData.icon 
                    className="h-8 w-8" 
                    style={{ color: activeServiceData.color }} 
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {activeServiceData.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {activeServiceData.description}
                  </p>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                  Key Features
                </h4>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {activeServiceData.features.slice(0, 4).map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
                    >
                      <ArrowRight 
                        className="h-4 w-4 flex-shrink-0" 
                        style={{ color: activeServiceData.color }} 
                      />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link 
                  href={`/services/${activeServiceData.slug}`}
                  className="inline-flex items-center text-sm font-medium text-[#5971c8] hover:text-[#a2ce39] transition-colors"
                >
                  Learn More About {activeServiceData.title}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-[#5971c8] text-[#5971c8] hover:bg-[#5971c8] hover:text-white bg-transparent">
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
