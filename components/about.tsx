import Link from "next/link"
import { CheckCircle2, Target, Eye, Award, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-[#a2ce39] uppercase tracking-wider mb-4">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Building Tomorrow&apos;s Success Today
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            Next General Trading is a diversified Ethiopian company delivering excellence across IT, 
            construction, and trading sectors since 2020.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#a2ce39]/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-[#a2ce39]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To provide innovative, reliable, and cost-effective solutions that empower businesses 
                    and contribute to Ethiopia&apos;s technological and infrastructural advancement.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#5971c8]/10 flex items-center justify-center">
                  <Eye className="h-6 w-6 text-[#5971c8]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Our Vision</h3>
                  <p className="text-muted-foreground">
                    Our technology company envisions becoming bigger and more profitable by leveraging cutting-edge innovations and expanding our reach to new markets around the world.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-foreground/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Our Values</h3>
                  <p className="text-muted-foreground">
                    Integrity, innovation, customer focus, and commitment to quality guide everything 
                    we do. We believe in building lasting partnerships.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button asChild className="bg-[#a2ce39] hover:bg-[#8fb82f] text-foreground font-semibold">
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Why Choose Us */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-6">Why Choose Us</h3>
            <div className="space-y-4">
              {[
                "15+ Years Industry Experts",
                "Certified and trained professionals",
                "End-to-end project management",
                "Competitive pricing with quality assurance",
                "24/7 customer support and maintenance",
                "Strong local and international partnerships",
                "Commitment to timely delivery",
                "Sustainable and ethical business practices",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#a2ce39] flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
