import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getProductBySlug, products } from "@/lib/data/products"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, Check, Phone, Mail } from "lucide-react"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug)

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The product you are looking for does not exist.",
    }
  }

  return {
    title: `${product.name} | Next General Trading`,
    description: product.description,
    keywords: [product.name, product.category, "Next General Trading"],
  }
}

export default async function ProductDetailPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3)

  // Find index for navigation
  const currentIndex = products.findIndex(p => p.id === product.id)
  const prevProduct = products[currentIndex - 1]
  const nextProduct = products[currentIndex + 1]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-[#a2ce39]/5 via-background to-[#5971c8]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/products"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to All Products
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${product.color}15` }}
                >
                  <product.icon className="h-8 w-8" style={{ color: product.color }} />
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                  {product.name}
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  {product.description}
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

        {/* Product Image */}
        {product.image && (
          <section className="py-8 lg:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative h-96 w-full rounded-2xl overflow-hidden border border-border">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </section>
        )}

        {/* Features & Specifications */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">What We Offer</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {product.features.map((feature, idx) => (
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

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Key Benefits</h2>
                <div className="bg-card rounded-2xl p-8 border border-border">
                  <ul className="space-y-4">
                    {product.specifications && product.specifications.length > 0 ? (
                      product.specifications.map((spec, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-[#a2ce39] flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{spec}</span>
                        </li>
                      ))
                    ) : (
                      <>
                        <li className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-[#a2ce39] flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">Enterprise-grade reliability and performance</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-[#a2ce39] flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">Scalable solution for growing businesses</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-[#a2ce39] flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">24/7 technical support and maintenance</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-[#a2ce39] flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">Cost-effective implementation and operation</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-16 lg:py-24 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-foreground">Related Products</h2>
                <Link
                  href="/products"
                  className="text-sm font-medium text-[#5971c8] hover:text-[#a2ce39] transition-colors flex items-center"
                >
                  View All
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <Link
                    key={relatedProduct.id}
                    href={`/products/${relatedProduct.slug}`}
                    className="group bg-card rounded-2xl p-6 border border-border hover:border-[#a2ce39]/50 hover:shadow-lg transition-all"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${relatedProduct.color}15` }}
                    >
                      <relatedProduct.icon className="h-6 w-6" style={{ color: relatedProduct.color }} />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-[#a2ce39] transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{relatedProduct.shortDescription}</p>
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
              {prevProduct ? (
                <Link
                  href={`/products/${prevProduct.slug}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span className="hidden sm:inline">{prevProduct.name}</span>
                  <span className="sm:hidden">Previous</span>
                </Link>
              ) : (
                <div />
              )}
              {nextProduct ? (
                <Link
                  href={`/products/${nextProduct.slug}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="hidden sm:inline">{nextProduct.name}</span>
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
              Ready to Get Started with {product.name}?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Contact us today for a free consultation and discover how our {product.name.toLowerCase()}
              solution can benefit your organization.
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