import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/data/projects"

export function Projects() {
  const displayedProjects = projects.slice(0, 6)

  return (
    <section id="projects" className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-sm font-semibold text-[#a2ce39] uppercase tracking-wider mb-4">
            Our Projects
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Delivering Excellence Across Sectors
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            Explore our portfolio of successful projects that showcase our expertise and 
            commitment to quality in every engagement.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-[#a2ce39]/50 hover:shadow-xl transition-all"
            >
              {/* Project Image */}
              <div className="relative h-40 w-full overflow-hidden bg-muted">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#5971c8]/10 to-[#a2ce39]/10">
                    <project.icon className="h-12 w-12 text-[#5971c8]/50" />
                  </div>
                )}
                <span className={cn(
                  "absolute top-3 right-3 text-xs font-medium px-3 py-1 rounded-full",
                  project.status === "Completed" 
                    ? "bg-[#a2ce39] text-[#1a1a2e]" 
                    : "bg-[#5971c8] text-white"
                )}>
                  {project.status}
                </span>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-[#5971c8] transition-colors line-clamp-2">
                  {project.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{project.serviceCategory}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-[#a2ce39] group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-[#5971c8] text-[#5971c8] hover:bg-[#5971c8] hover:text-white bg-transparent">
            <Link href="/projects">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
