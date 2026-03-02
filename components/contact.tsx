"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Send, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-[#5971c8] uppercase tracking-wider mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Let&apos;s Start a Conversation
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            Ready to transform your business? Get in touch with our team to discuss 
            your project requirements.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#a2ce39]/10 flex items-center justify-center">
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
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#5971c8]/10 flex items-center justify-center">
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
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#a2ce39]/10 flex items-center justify-center">
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
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#5971c8]/10 flex items-center justify-center">
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

              <div className="mt-6 pt-6 border-t border-border">
                <Button asChild variant="outline" className="w-full border-[#5971c8] text-[#5971c8] hover:bg-[#5971c8] hover:text-white bg-transparent">
                  <Link href="/contact">
                    View Full Contact Page
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-6">Send Us a Message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#a2ce39]/10 flex items-center justify-center mx-auto mb-4">
                    <Send className="h-8 w-8 text-[#a2ce39]" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h4>
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
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="home-name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name
                      </label>
                      <Input
                        id="home-name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="home-email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input
                        id="home-email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="home-phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="home-phone"
                        type="tel"
                        placeholder="+251 9XX XXX XXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-background"
                      />
                    </div>
                    <div>
                      <label htmlFor="home-subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <Input
                        id="home-subject"
                        type="text"
                        placeholder="Project Inquiry"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        className="bg-background"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="home-message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="home-message"
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="bg-background resize-none"
                    />
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
  )
}
