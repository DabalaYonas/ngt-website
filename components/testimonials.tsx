"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { testimonials } from "@/lib/data/testimonials"
import { cn } from "@/lib/utils"

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const handlePrev = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const activeTestimonial = testimonials[activeIndex]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-[#1a1a2e] to-[#0f1419]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-[#a2ce39] uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-balance">
            What Our Clients Say
          </h2>
          <p className="mt-6 text-lg text-gray-400 text-pretty">
            Don&apos;t just take our word for it. Here&apos;s what our valued clients have to say 
            about working with Next General Trading.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
            <Quote className="h-12 w-12 text-[#a2ce39]/30 mb-6" />
            
            <p className="text-xl md:text-2xl text-white leading-relaxed mb-8">
              &quot;{activeTestimonial.content}&quot;
            </p>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#a2ce39] to-[#5971c8] flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-white">
                    {activeTestimonial.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-white">{activeTestimonial.title} {activeTestimonial.name}</p>
                  <p className="text-sm text-gray-400">
                    {activeTestimonial.role}, {activeTestimonial.company}
                  </p>
                </div>
              </div>

              <div className="flex gap-1">
                {[...Array(activeTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#a2ce39] text-[#a2ce39]" />
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setActiveIndex(index)
                  }}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all",
                    index === activeIndex
                      ? "bg-[#a2ce39] w-8"
                      : "bg-white/20 hover:bg-white/40"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
