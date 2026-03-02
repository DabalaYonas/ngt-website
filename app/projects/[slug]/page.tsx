import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { projects, getProjectBySlug } from "@/lib/data/projects"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Clock,
  Building2,
  Zap
} from "lucide-react"
import { notFound } from "next/navigation"
import { cn } from "@/lib/utils"

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: "Project Not Found" }
  
  return {
    title: `${project.title} | Next General Trading Projects`,
    description: project.description,
  }
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  
  if (!project) {
    notFound()
  }

  const relatedProjects = projects
    .filter((p) => p.serviceCategory === project.serviceCategory && p.id !== project.id)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-[#5971c8]/5 via-background to-[#a2ce39]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              href="/projects"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Projects
            </Link>
            
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#5971c8]/10 flex items-center justify-center">
                    <project.icon className="h-7 w-7 text-[#5971c8]" />
                  </div>
                  <span className={cn(
                    "text-sm font-medium px-4 py-1.5 rounded-full",
                    project.status === "Completed" 
                      ? "bg-[#a2ce39]/10 text-[#a2ce39]" 
                      : "bg-[#5971c8]/10 text-[#5971c8]"
                  )}>
                    {project.status}
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                  {project.title}
                </h1>
                <p className="text-lg text-muted-foreground">
                  {project.fullDescription}
                </p>
              </div>
              
              {/* Project Info Card */}
              <div className="bg-card rounded-2xl p-6 border border-border h-fit">
                <h3 className="text-lg font-semibold text-foreground mb-6">Project Details</h3>
                <div className="space-y-4">
                  {project.client && (
                    <div className="flex items-start gap-3">
                      <Building2 className="h-5 w-5 text-[#a2ce39] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Client</p>
                        <p className="font-medium text-foreground">{project.client}</p>
                      </div>
                    </div>
                  )}
                  {project.location && (
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-[#5971c8] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="font-medium text-foreground">{project.location}</p>
                      </div>
                    </div>
                  )}
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-[#a2ce39] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Year</p>
                      <p className="font-medium text-foreground">{project.year}</p>
                    </div>
                  </div>
                  {project.duration && (
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-[#5971c8] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-muted-foreground">Duration</p>
                        <p className="font-medium text-foreground">{project.duration}</p>
                      </div>
                    </div>
                  )}
                  <div className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-[#a2ce39] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Category</p>
                      <p className="font-medium text-foreground">{project.serviceCategory}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Image */}
        {project.image && (
          <section className="py-8 lg:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative h-96 w-full rounded-2xl overflow-hidden border border-border">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </section>
        )}

        {/* Highlights & Technologies */}
        {/* 
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Project Highlights</h2>
                <div className="space-y-3">
                  {project.highlights.map((highlight, idx) => (
                    <div 
                      key={idx}
                      className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
                    >
                      <CheckCircle2 className="h-5 w-5 text-[#a2ce39] flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-8">
                {project.technologies && project.technologies.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-6">Technologies Used</h2>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span 
                          key={idx}
                          className="px-4 py-2 rounded-full bg-[#5971c8]/10 text-[#5971c8] text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.results && project.results.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-6">Key Results</h2>
                    <div className="bg-gradient-to-br from-[#a2ce39]/5 to-[#5971c8]/5 rounded-2xl p-6 border border-border">
                      <ul className="space-y-3">
                        {project.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <ArrowRight className="h-5 w-5 text-[#a2ce39] flex-shrink-0 mt-0.5" />
                            <span className="text-foreground">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section> 
        */}

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="py-16 lg:py-24 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-foreground">Related Projects</h2>
                <Link 
                  href="/projects"
                  className="text-sm font-medium text-[#5971c8] hover:text-[#a2ce39] transition-colors flex items-center"
                >
                  View All Projects
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedProjects.map((relProject) => (
                  <Link
                    key={relProject.id}
                    href={`/projects/${relProject.slug}`}
                    className="group bg-card rounded-2xl p-6 border border-border hover:border-[#a2ce39]/50 hover:shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#5971c8]/10 flex items-center justify-center mb-4">
                      <relProject.icon className="h-6 w-6 text-[#5971c8]" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-[#a2ce39] transition-colors">
                      {relProject.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{relProject.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-[#1a1a2e] to-[#2d2d44]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Inspired by This Project?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let&apos;s discuss how we can create similar success for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#a2ce39] hover:bg-[#8fb82f] text-foreground font-semibold">
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1a1a2e] bg-transparent">
                <Link href={`/services/${project.serviceCategory.toLowerCase().replace(/\s+/g, '-')}`}>
                  Learn About {project.serviceCategory}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
