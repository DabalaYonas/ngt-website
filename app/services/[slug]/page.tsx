import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { services, getServiceBySlug } from "@/lib/data/services"
import { projects } from "@/lib/data/projects"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, CheckCircle2, Phone, Mail } from "lucide-react"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return { title: "Service Not Found" }
  
  return {
    title: `${service.title} | Next General Trading`,
    description: service.description,
  }
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  
  if (!service) {
    notFound()
  }

  const relatedProjects = projects.filter(
    (p) => p.serviceCategory === service.title
  ).slice(0, 3)

  const currentIndex = services.findIndex((s) => s.slug === slug)
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : null
  const nextService = currentIndex < services.length - 1 ? services[currentIndex + 1] : null

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-[#a2ce39]/5 via-background to-[#5971c8]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              href="/services"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Services
            </Link>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  <service.icon className="h-8 w-8" style={{ color: service.color }} />
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                  {service.title}
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  {service.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-[#a2ce39] hover:bg-[#8fb82f] text-foreground font-semibold">
                    <Link href="/contact">Get a Quote</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-[#5971c8] text-[#5971c8] hover:bg-[#5971c8] hover:text-white bg-transparent">
                    <a href="tel:+251911473611">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Us Now
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <a 
                    href="tel:+251911473611"
                    className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <Phone className="h-5 w-5 text-[#a2ce39]" />
                    <div>
                      <p className="text-sm text-muted-foreground">Call us</p>
                      <p className="font-medium text-foreground">+251 911 473 611</p>
                    </div>
                  </a>
                  <a 
                    href="mailto:info@ngtechet.com"
                    className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <Mail className="h-5 w-5 text-[#5971c8]" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email us</p>
                      <p className="font-medium text-foreground">info@ngtechet.com</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features & Benefits */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Features */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">What We Offer</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div 
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
                    >
                      <ArrowRight className="h-5 w-5 text-[#a2ce39] flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Key Benefits</h2>
                <div className="bg-card rounded-2xl p-8 border border-border">
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-[#a2ce39] flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="py-16 lg:py-24 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-foreground">Related Projects</h2>
                <Link 
                  href={`/projects?category=${service.title}`}
                  className="text-sm font-medium text-[#5971c8] hover:text-[#a2ce39] transition-colors flex items-center"
                >
                  View All
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedProjects.map((project) => (
                  <Link
                    key={project.id}
                    href={`/projects/${project.slug}`}
                    className="group bg-card rounded-2xl p-6 border border-border hover:border-[#a2ce39]/50 hover:shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#5971c8]/10 flex items-center justify-center mb-4">
                      <project.icon className="h-6 w-6 text-[#5971c8]" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-[#a2ce39] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Navigation */}
        <section className="py-8 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              {prevService ? (
                <Link
                  href={`/services/${prevService.slug}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span className="hidden sm:inline">{prevService.title}</span>
                  <span className="sm:hidden">Previous</span>
                </Link>
              ) : (
                <div />
              )}
              {nextService ? (
                <Link
                  href={`/services/${nextService.slug}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="hidden sm:inline">{nextService.title}</span>
                  <span className="sm:hidden">Next</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-[#1a1a2e] to-[#2d2d44]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Get Started with {service.title}?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Contact us today for a free consultation and discover how our {service.title.toLowerCase()} 
              solutions can benefit your organization.
            </p>
            <Button asChild size="lg" className="bg-[#a2ce39] hover:bg-[#8fb82f] text-foreground font-semibold">
              <Link href="/contact">Request a Consultation</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
