import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Clients } from "@/components/clients"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Clients />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
