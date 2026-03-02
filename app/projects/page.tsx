"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { projects, getProjectCategories } from "@/lib/data/projects"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const categories = getProjectCategories()

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory || p.serviceCategory === activeCategory)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-[#a2ce39]/5 via-background to-[#5971c8]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block text-sm font-semibold text-[#a2ce39] uppercase tracking-wider mb-4">
                Our Projects
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
                Delivering Excellence Across Sectors
              </h1>
              <p className="mt-6 text-lg text-muted-foreground text-pretty">
                Explore our portfolio of successful projects that showcase our expertise and 
                commitment to quality in every engagement.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b border-border top-16 lg:top-20 bg-background/95 backdrop-blur-md z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all",
                    activeCategory === category
                      ? "bg-[#5971c8] text-white"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 border border-border"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.slug}`}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-[#a2ce39]/50 hover:shadow-xl transition-all"
                >
                  {/* Project Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-muted">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#5971c8]/10 to-[#a2ce39]/10">
                        <project.icon className="h-16 w-16 text-[#5971c8]/50" />
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

            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No projects found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-[#1a1a2e] to-[#2d2d44]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Have a Project in Mind?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let&apos;s discuss how we can bring your vision to life with our expertise and commitment to excellence.
            </p>
            <Button asChild size="lg" className="bg-[#a2ce39] hover:bg-[#8fb82f] text-foreground font-semibold">
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
