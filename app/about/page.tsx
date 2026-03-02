import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckCircle2, Target, Eye, Award, Users, Building, Globe, Lightbulb } from "lucide-react"
import { teamMembers } from "@/lib/data/team"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image";

export const metadata = {
  title: "About Us | Next General Trading",
  description: "Learn about Next General Trading - your trusted partner for IT solutions, construction, and trading services in Ethiopia since 2010.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-[#a2ce39]/5 via-background to-[#5971c8]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block text-sm font-semibold text-[#a2ce39] uppercase tracking-wider mb-4">
                About Us
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
                Building Tomorrow&apos;s Success Today
              </h1>
              <p className="mt-6 text-lg text-muted-foreground text-pretty">
                Next General Trading is a diversified Ethiopian company delivering excellence across IT,
                construction, and trading sectors since 2020. We are committed to transforming businesses
                through innovative solutions and quality services.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Founded in 2020 in Addis Ababa, Next General Trading began with a simple mission:
                    to provide world-class IT and construction services to Ethiopian businesses. What started
                    as a small team of dedicated professionals has grown into one of the region&apos;s most
                    trusted technology and construction partners.
                  </p>
                  <p>
                    Over the years, we have successfully completed more than 25 projects across various
                    sectors including banking, healthcare, hospitality, government, and real estate. Our
                    commitment to quality, innovation, and customer satisfaction has earned us long-term
                    partnerships with leading organizations.
                  </p>
                  <p>
                    Today, with a team of over 20 skilled professionals, we continue to expand our services
                    and reach, bringing cutting-edge solutions to businesses throughout Ethiopia and East Africa.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <div className="text-4xl font-bold text-[#a2ce39] mb-2">15+</div>
                  <div className="text-muted-foreground">Years Industry Experts</div>
                </div>
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <div className="text-4xl font-bold text-[#5971c8] mb-2">25+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <div className="text-4xl font-bold text-[#a2ce39] mb-2">20+</div>
                  <div className="text-muted-foreground">Team Members</div>
                </div>
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <div className="text-4xl font-bold text-[#5971c8] mb-2">12+</div>
                  <div className="text-muted-foreground">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="w-14 h-14 rounded-xl bg-[#a2ce39]/10 flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-[#a2ce39]" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide innovative, reliable, and cost-effective solutions that empower businesses
                  and contribute to Ethiopia&apos;s technological and infrastructural advancement.
                </p>
              </div>
              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="w-14 h-14 rounded-xl bg-[#5971c8]/10 flex items-center justify-center mb-6">
                  <Eye className="h-7 w-7 text-[#5971c8]" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  Our technology company envisions becoming bigger and more profitable by leveraging cutting-edge innovations and expanding our reach to new markets around the world.
                </p>
              </div>
              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="w-14 h-14 rounded-xl bg-foreground/10 flex items-center justify-center mb-6">
                  <Award className="h-7 w-7 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Our Values</h3>
                <p className="text-muted-foreground">
                  Integrity, innovation, customer focus, and commitment to quality guide everything
                  we do. We believe in building lasting partnerships.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Strengths */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Choose Us</h2>
              <p className="text-muted-foreground">
                We combine industry expertise with cutting-edge technology to deliver exceptional results.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Users, title: "Expert Team", desc: "Certified professionals with years of experience" },
                { icon: Building, title: "Full-Service", desc: "End-to-end solutions under one roof" },
                { icon: Globe, title: "Local Expertise", desc: "Deep understanding of Ethiopian market" },
                { icon: Lightbulb, title: "Innovation", desc: "Cutting-edge technology and methods" },
              ].map((item, index) => (
                <div key={index} className="text-center p-6">
                  <div className="w-14 h-14 rounded-xl bg-[#a2ce39]/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-7 w-7 text-[#a2ce39]" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 bg-card rounded-2xl p-8 border border-border">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  "15+ years of industry experience",
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
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block text-sm font-semibold text-[#5971c8] uppercase tracking-wider mb-4">
                Our Team
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Meet the Experts Behind Our Success
              </h2>
              <p className="text-muted-foreground">
                Our leadership team brings decades of combined experience in technology, construction,
                and business management.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.slice(0, 8).map((member) => (
                <div
                  key={member.id}
                  className="bg-card rounded-2xl overflow-hidden border border-border hover:border-[#a2ce39]/50 hover:shadow-lg transition-all group"
                >
                  {member.profileImage ? (
                    <div className="relative h-48 w-full overflow-hidden bg-muted">
                      <Image
                        src={member.profileImage}
                        alt={member.name}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <div className="h-48 w-full bg-gradient-to-br from-[#a2ce39] to-[#5971c8] flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">
                        {member.name.split(" ").map(n => n[0]).join("")}
                      </span>
                    </div>
                  )}

                  <div className="p-6">
                    <div className="text-center">
                      <h3 className="font-semibold text-foreground group-hover:text-[#a2ce39] transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-sm text-[#5971c8] mb-2">{member.role}</p>
                      <p className="text-xs text-muted-foreground line-clamp-2">{member.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-[#1a1a2e] to-[#2d2d44]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Work with Us?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let&apos;s discuss how we can help transform your business with our comprehensive solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#a2ce39] hover:bg-[#8fb82f] text-foreground font-semibold">
                <Link href="/contact">Contact Us Today</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1a1a2e] bg-transparent">
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
