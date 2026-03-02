export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  rating: number
  image?: string
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Leta Tesfaye",
    title: "Dr.",
    role: "Former President",
    company: "Dembi Dollo University",
    content:
      "I am thrilled to commend Next General Trading for their exceptional IT and construction services. Their expertise has significantly enhanced our campus infrastructure and technological capabilities. The professionalism, quality, and reliability they bring to every project have made a profound impact on our institution. I highly recommend Next General Trading for their outstanding commitment to excellence.",
    rating: 5,
  },
]
