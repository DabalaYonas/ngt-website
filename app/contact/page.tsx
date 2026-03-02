"use client"

import React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const errors: Record<string, string> = {}

    if (!formData.name.trim()) {
      errors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required"
    } else if (!EMAIL_REGEX.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address"
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters"
    }

    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      setError("Please fix the errors below before submitting.")
      return
    }

    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      setIsSubmitted(true)
      setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" })
      setFieldErrors({})
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message. Please try again later.")
      console.error("[v0] Contact form error:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-[#5971c8]/5 via-background to-[#a2ce39]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block text-sm font-semibold text-[#5971c8] uppercase tracking-wider mb-4">
                Contact Us
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance">
                Let&apos;s Start a Conversation
              </h1>
              <p className="mt-6 text-lg text-muted-foreground text-pretty">
                Ready to transform your business? Get in touch with our team to discuss 
                your project requirements and discover how we can help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-12 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-4 p-6 bg-card rounded-2xl border border-border">
                <div className="w-12 h-12 rounded-xl bg-[#a2ce39]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-[#a2ce39]" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call Us</p>
                  <a href="tel:+251911473611" className="font-medium text-foreground hover:text-[#a2ce39] transition-colors">
                    +251 911 473 611
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-card rounded-2xl border border-border">
                <div className="w-12 h-12 rounded-xl bg-[#5971c8]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-[#5971c8]" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email Us</p>
                  <a href="mailto:info@ngtechet.com" className="font-medium text-foreground hover:text-[#5971c8] transition-colors">
                    info@ngtechet.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 p-6 bg-card rounded-2xl border border-border">
                <div className="w-12 h-12 rounded-xl bg-[#a2ce39]/10 flex items-center justify-center flex-shrink-0">
                  <Headphones className="h-6 w-6 text-[#a2ce39]" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Support</p>
                  <a href="tel:+251911285288" className="font-medium text-foreground hover:text-[#a2ce39] transition-colors">
                    +251 911 285 288
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Contact Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
                  <p className="text-muted-foreground mb-8">
                    Whether you have a question about our services, pricing, or anything else, 
                    our team is ready to answer all your questions.
                  </p>
                </div>

                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="font-semibold text-foreground mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#a2ce39]/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-[#a2ce39]" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Phone Numbers</p>
                        <a href="tel:+251911473611" className="block text-foreground hover:text-[#a2ce39] transition-colors">
                          +251 911 473 611
                        </a>
                        <a href="tel:+251911285288" className="block text-foreground hover:text-[#a2ce39] transition-colors">
                          +251 911 285 288
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#5971c8]/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-[#5971c8]" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Email Address</p>
                        <a href="mailto:info@ngtechet.com" className="text-foreground hover:text-[#5971c8] transition-colors">
                          info@ngtechet.com
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#a2ce39]/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-[#a2ce39]" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Office Address</p>
                        <p className="text-foreground">
                          Dabi Complex 3rd floor no. 004,<br />
                          Airport Road,<br />
                          Addis Ababa, Ethiopia
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#5971c8]/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-5 w-5 text-[#5971c8]" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Working Hours</p>
                        <p className="text-foreground">
                          Monday - Friday: 8:30 AM - 5:30 PM<br />
                          Saturday: 9:00 AM - 1:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Google Map */}
                <div className="rounded-2xl overflow-hidden border border-border">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.787997675463!2d38.7807289736116!3d8.991645989575407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8583ff290e33%3A0x207ed3cf38341298!2sNext%20General%20Trading!5e0!3m2!1sen!2set!4v1768863174874!5m2!1sen!2set" 
                    width="100%" 
                    height="256" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Next General Trading Location"
                    className="w-full"
                  />
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="bg-card rounded-2xl p-8 border border-border">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-[#a2ce39]/10 flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-[#a2ce39]" />
                    </div>
                    <h2 className="text-xl font-semibold text-foreground">Send Us a Message</h2>
                  </div>
                  
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-[#a2ce39]/10 flex items-center justify-center mx-auto mb-4">
                        <Send className="h-8 w-8 text-[#a2ce39]" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                      </p>
                      <Button 
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                        className="border-[#5971c8] text-[#5971c8] hover:bg-[#5971c8] hover:text-white bg-transparent"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {error && (
                        <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm">
                          {error}
                        </div>
                      )}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            type="text"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => {
                              setFormData({ ...formData, name: e.target.value })
                              if (fieldErrors.name) setFieldErrors({ ...fieldErrors, name: "" })
                            }}
                            required
                            className={`bg-background ${fieldErrors.name ? "border-destructive focus:ring-destructive" : ""}`}
                          />
                          {fieldErrors.name && (
                            <p className="text-xs text-destructive mt-1">{fieldErrors.name}</p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => {
                              setFormData({ ...formData, email: e.target.value })
                              if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: "" })
                            }}
                            required
                            className={`bg-background ${fieldErrors.email ? "border-destructive focus:ring-destructive" : ""}`}
                          />
                          {fieldErrors.email && (
                            <p className="text-xs text-destructive mt-1">{fieldErrors.email}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+251 9XX XXX XXX"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="bg-background"
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                            Company Name
                          </label>
                          <Input
                            id="company"
                            type="text"
                            placeholder="Your Company"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="bg-background"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                          Service of Interest
                        </label>
                        <select
                          id="service"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground"
                        >
                          <option value="">Select a service</option>
                          <option value="smart-systems">Smart Systems</option>
                          <option value="networking">Networking</option>
                          <option value="construction">Construction</option>
                          <option value="software-development">Software Development</option>
                          <option value="data-centers">Data Centers</option>
                          <option value="consulting">Consulting</option>
                          <option value="security">Security</option>
                          <option value="media">Media</option>
                          <option value="unified-communications">Unified Communications</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Message * <span className="text-xs text-muted-foreground">({formData.message.length} characters)</span>
                        </label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your project or inquiry... (minimum 10 characters)"
                          value={formData.message}
                          onChange={(e) => {
                            setFormData({ ...formData, message: e.target.value })
                            if (fieldErrors.message) setFieldErrors({ ...fieldErrors, message: "" })
                          }}
                          required
                          rows={6}
                          className={`bg-background resize-none ${fieldErrors.message ? "border-destructive focus:ring-destructive" : ""}`}
                        />
                        {fieldErrors.message && (
                          <p className="text-xs text-destructive mt-1">{fieldErrors.message}</p>
                        )}
                      </div>

                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-[#a2ce39] hover:bg-[#8fb82f] text-foreground font-semibold"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
