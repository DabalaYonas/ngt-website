"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { products, getProductCategories } from "@/lib/data/products"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const categories = getProductCategories()

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-[#a2ce39]/5 via-background to-[#5971c8]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block text-sm font-semibold text-[#a2ce39] uppercase tracking-wider mb-4">
                Our Products
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
                Enterprise Solutions for Every Need
              </h1>
              <p className="mt-6 text-lg text-muted-foreground text-pretty">
                Explore our comprehensive catalog of premium products across networking, security, 
                smart systems, and infrastructure solutions designed to power your business.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b border-border bg-background/95 backdrop-blur-md sticky top-16 lg:top-20 z-40">
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

        {/* Products Grid */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-[#a2ce39]/50 hover:shadow-xl transition-all"
                >
                  {/* Product Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-muted">
                    {product.image ? (
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div 
                        className="w-full h-full flex items-center justify-center"
                        style={{ backgroundColor: `${product.color}15` }}
                      >
                        <product.icon className="h-16 w-16" style={{ color: product.color }} />
                      </div>
                    )}
                    <span className="absolute top-3 right-3 text-xs font-medium px-3 py-1 rounded-full bg-white/95 text-foreground">
                      {product.category}
                    </span>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-[#a2ce39] transition-colors">
                      {product.name}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {product.shortDescription}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="text-xs text-muted-foreground">
                        {product.features.length} features
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-[#a2ce39] group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No products found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24 bg-gradient-to-r from-[#1a1a2e] to-[#2d2d44]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Need Help Selecting the Right Product?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Our product specialists are ready to understand your requirements and recommend 
              the perfect solution for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-[#a2ce39] hover:bg-[#8fb82f] text-foreground font-semibold">
                <Link href="/contact">Get Expert Advice</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1a1a2e] bg-transparent">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
