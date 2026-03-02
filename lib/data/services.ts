import { Cpu, Network, Building2, Code2, Server, Users, Shield, Video, Phone } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface Service {
  id: string
  slug: string
  icon: LucideIcon
  title: string
  shortDescription: string
  description: string
  features: string[]
  benefits: string[]
  color: string
  image?: string
}

export const services: Service[] = [
  {
    id: "smart-systems",
    slug: "smart-systems",
    icon: Cpu,
    title: "Smart Systems",
    shortDescription: "Intelligent automation solutions for homes and businesses.",
    description:
      "Transform your spaces with our cutting-edge smart systems solutions. We design and implement intelligent automation for homes and businesses, integrating IoT devices, building management systems, and smart infrastructure to enhance comfort, efficiency, and security.",
    features: [
      "Home & Building Automation",
      "IoT Integration & Management",
      "Access Control Systems",
      "Energy Management Solutions",
      "Smart Lighting Systems",
      "Climate Control Automation",
      "Automated Security Integration",
      "Remote Monitoring & Control",
    ],
    benefits: [
      "Reduce energy consumption by up to 30%",
      "Enhanced security and access control",
      "Improved comfort and convenience",
      "Centralized control of all systems",
      "Real-time monitoring and alerts",
      "Scalable solutions for future expansion",
    ],
    color: "#a2ce39",
  },
  {
    id: "networking",
    slug: "networking",
    icon: Network,
    title: "Networking",
    shortDescription: "Complete network infrastructure for enterprises of all sizes.",
    description:
      "Build a robust and reliable network foundation for your organization. Our networking solutions cover everything from LAN/WAN setup to wireless networks and cloud connectivity, ensuring seamless communication and data flow across your enterprise.",
    features: [
      "LAN/WAN Design & Setup",
      "Wireless Network Solutions",
      "Network Security Implementation",
      "Cloud Connectivity",
      "Network Monitoring & Management",
      "VPN & Remote Access Solutions",
      "Network Performance Optimization",
      "Structured Cabling Systems",
    ],
    benefits: [
      "99.9% network uptime guarantee",
      "Scalable infrastructure for growth",
      "Enhanced data security",
      "Faster data transfer speeds",
      "Reduced operational costs",
      "24/7 network monitoring",
    ],
    color: "#5971c8",
  },
  {
    id: "construction",
    slug: "construction",
    icon: Building2,
    title: "Construction",
    shortDescription: "Full-scale construction services with quality craftsmanship.",
    description:
      "From commercial buildings to residential projects, we deliver excellence in construction. Our experienced team manages projects from concept to completion, ensuring quality craftsmanship, timely delivery, and adherence to the highest safety standards.",
    features: [
      "Commercial Building Construction",
      "Residential Project Development",
      "Renovation & Remodeling",
      "Project Management",
      "Interior Finishing",
      "Structural Engineering",
      "Site Development",
      "Green Building Solutions",
    ],
    benefits: [
      "On-time project delivery",
      "Quality materials and workmanship",
      "Transparent pricing",
      "Experienced project management",
      "Safety compliance",
      "Post-construction support",
    ],
    color: "#a2ce39",
  },
  {
    id: "software-development",
    slug: "software-development",
    icon: Code2,
    title: "Software Development",
    shortDescription: "Custom software solutions tailored to your business needs.",
    description:
      "Leverage technology to drive your business forward with our custom software development services. We create web applications, mobile apps, and enterprise systems that streamline operations and enhance productivity.",
    features: [
      "Custom Application Development",
      "Web Development & Design",
      "Mobile App Development",
      "System Integration",
      "API Development",
      "Database Design & Management",
      "Cloud-Based Solutions",
      "Software Maintenance & Support",
    ],
    benefits: [
      "Tailored solutions for your needs",
      "Improved operational efficiency",
      "Competitive advantage through technology",
      "Scalable and maintainable code",
      "Full ownership of your software",
      "Ongoing support and updates",
    ],
    color: "#5971c8",
  },
  {
    id: "data-centers",
    slug: "data-centers",
    icon: Server,
    title: "Data Centers",
    shortDescription: "Design, build, and management of data center infrastructure.",
    description:
      "Create a secure and efficient data center with our comprehensive solutions. We handle everything from design and construction to ongoing management, ensuring your critical infrastructure operates at peak performance with maximum reliability.",
    features: [
      "Data Center Design & Build",
      "Server Infrastructure Setup",
      "Cooling Solutions",
      "Power Management Systems",
      "Disaster Recovery Planning",
      "Virtualization Services",
      "Colocation Services",
      "Data Center Migration",
    ],
    benefits: [
      "99.99% uptime guarantee",
      "Energy-efficient operations",
      "Scalable infrastructure",
      "Robust security measures",
      "Reduced total cost of ownership",
      "24/7 expert support",
    ],
    color: "#a2ce39",
  },
  {
    id: "consulting",
    slug: "consulting",
    icon: Users,
    title: "Consulting",
    shortDescription: "Strategic IT and business consulting for growth.",
    description:
      "Make informed decisions with our expert consulting services. We provide strategic guidance on IT infrastructure, digital transformation, and business optimization to help organizations achieve their goals and stay competitive.",
    features: [
      "IT Strategy Development",
      "Digital Transformation",
      "Process Optimization",
      "Technology Assessment",
      "Vendor Selection & Management",
      "IT Governance",
      "Risk Assessment",
      "Training & Knowledge Transfer",
    ],
    benefits: [
      "Expert guidance from industry veterans",
      "Data-driven recommendations",
      "Improved operational efficiency",
      "Cost optimization strategies",
      "Future-ready technology roadmap",
      "Change management support",
    ],
    color: "#5971c8",
  },
  {
    id: "security",
    slug: "security",
    icon: Shield,
    title: "Security",
    shortDescription: "Comprehensive physical and cyber security solutions.",
    description:
      "Protect your assets and data with our comprehensive security solutions. We offer both physical security systems and cybersecurity services to ensure complete protection for your organization.",
    features: [
      "CCTV Surveillance Systems",
      "Cybersecurity Solutions",
      "Alarm & Intrusion Detection",
      "Security Audits & Assessments",
      "Firewall & Network Security",
      "Physical Access Control",
      "Security Operations Center",
      "Incident Response Planning",
    ],
    benefits: [
      "Complete security coverage",
      "24/7 monitoring capabilities",
      "Rapid threat detection",
      "Compliance with regulations",
      "Reduced security risks",
      "Peace of mind for stakeholders",
    ],
    color: "#a2ce39",
  },
  {
    id: "media",
    slug: "media",
    icon: Video,
    title: "Media",
    shortDescription: "Audio-visual solutions and multimedia systems.",
    description:
      "Enhance communication and engagement with our media solutions. From conference rooms to digital signage, we design and implement audio-visual systems that deliver impactful experiences.",
    features: [
      "Audio-Visual System Design",
      "Digital Signage Solutions",
      "Conference Room Technology",
      "Broadcast Equipment",
      "Sound System Installation",
      "Video Walls & Displays",
      "Content Management Systems",
      "Interactive Display Solutions",
    ],
    benefits: [
      "Enhanced communication",
      "Professional presentations",
      "Engaging customer experiences",
      "Centralized content control",
      "Scalable display solutions",
      "Easy-to-use interfaces",
    ],
    color: "#5971c8",
  },
  {
    id: "unified-communications",
    slug: "unified-communications",
    icon: Phone,
    title: "Unified Communications",
    shortDescription: "Integrated communication platforms for modern teams.",
    description:
      "Connect your team with integrated communication solutions. Our unified communications services combine voice, video, messaging, and collaboration tools into a seamless platform that enhances productivity.",
    features: [
      "VoIP Solutions",
      "Video Conferencing Systems",
      "Team Collaboration Platforms",
      "Call Center Solutions",
      "PBX Systems",
      "Mobile Integration",
      "Unified Messaging",
      "Contact Center as a Service",
    ],
    benefits: [
      "Improved team collaboration",
      "Reduced communication costs",
      "Work from anywhere capability",
      "Single platform for all communications",
      "Enhanced customer service",
      "Increased productivity",
    ],
    color: "#a2ce39",
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}

export function getServiceCategories(): string[] {
  return ["IT Solutions", "Construction", "Trading"]
}
