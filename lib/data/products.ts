import { Layers, Wifi, Network, Server, ShieldCheck, Cable } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface Product {
  id: string
  slug: string
  name: string
  category: string
  shortDescription: string
  description: string
  icon: LucideIcon
  image?: string
  features: string[]
  specifications?: string[]
  color: string
  relatedService?: string
}

export interface ProductCategory {
  id: string
  name: string
  description: string
}

export const productCategories: ProductCategory[] = [
  {
    id: "networking-infrastructure",
    name: "Networking Infrastructure",
    description: "Enterprise-grade networking solutions and hardware",
  },
  {
    id: "security-equipment",
    name: "Networking Equipment",
    description: "Physical and cyber security products and solutions",
  },
]

export const products: Product[] = [
  {
    id: "1",
    slug: "raised-access-flooring",
    name: "Raised Floor",
    category: "Networking Infrastructure",
    shortDescription: "Antistatic modular flooring for data centers and server rooms",
    description:
      "Modular raised flooring built for data centers. Creates under-floor space for cabling and airflow management, with high load-bearing capacity and antistatic properties.",
    icon: Layers,
    image: "/images/products/raised-flooring.jpg",
    features: [
      "High Load-Bearing Capacity",
      "Antistatic & Flame Retardant",
      "Perforated Panels for Airflow",
      "Adjustable Pedestal Heights",
      "Interchangeable Modular Panels",
      "Easy Cable Access Management",
      "Corrosion Resistant Finish",
      "Seismic Bracing Options",
    ],
    color: "#5971c8",
    relatedService: "Data Centers",
  },
  {
    id: "2",
    slug: "enterprise-wireless-ap",
    name: "Wireless Access Point",
    category: "Networking Equipment",
    shortDescription: "WiFi 6 access point for high-density environments",
    description:
      "WiFi 6 access point built for offices, campuses, and commercial venues. Delivers fast, reliable wireless connectivity with support for hundreds of concurrent clients.",
    icon: Wifi,
    image: "/images/products/wireless-ap.jpg",
    features: [
      "WiFi 6 (802.11ax) Support",
      "Dual-Band MU-MIMO Technology",
      "Supports 500+ Concurrent Clients",
      "PoE+ (Power over Ethernet) Support",
      "Centralized Cloud Management",
      "Advanced WPA3 Security",
      "Beamforming Technology",
      "Seamless Roaming Integration",
    ],
    color: "#5971c8",
    relatedService: "Networking",
  },
  {
    id: "3",
    slug: "core-network-switch",
    name: "Core Switch",
    category: "Networking Equipment",
    shortDescription: "Backbone switch with 10Gbps fiber uplink",
    description:
      "Managed core switch for enterprise networks. Offers high-density Gigabit ports and 10Gbps SFP+ fiber uplinks for fast, reliable backbone connectivity.",
    icon: Network,
    image: "/images/products/network-switch.jpg",
    features: [
      "48 Gigabit Ethernet Ports",
      "4 x 10Gbps SFP+ Fiber Ports",
      "Full Layer 3 Routing Capabilities",
      "VLAN & QoS Management",
      "Redundant Hot-Swap Power",
      "Stackable Architecture",
      "Advanced Access Control Lists",
      "Real-time Traffic Analytics",
    ],
    color: "#5971c8",
    relatedService: "Networking",
  },
  {
    id: "4",
    slug: "server-network-rack",
    name: "Server Rack",
    category: "Networking Infrastructure",
    shortDescription: "Ventilated enclosure for servers and networking gear",
    description:
      "Heavy-duty 42U rack with organized cable management and optimal airflow. Features lockable mesh doors and removable side panels for secure equipment housing.",
    icon: Server,
    image: "/images/products/server-rack.jpg",
    features: [
      "42U Standard Rack Height",
      "Perforated High-Airflow Doors",
      "Vertical Cable Management Rails",
      "Adjustable Mounting Depths",
      "Heavy-Duty Locking Casters",
      "Grounding Lug for Safety",
      "Tool-less PDU Mounting",
      "Anti-Tip Bolt-Down Kit",
    ],
    color: "#5971c8",
    relatedService: "Data Centers",
  },
  {
    id: "5",
    slug: "industrial-outdoor-ap",
    name: "Rugged Access Point",
    category: "Networking Equipment",
    shortDescription: "IP67-rated outdoor wireless for harsh environments",
    description:
      "Ruggedized outdoor access point built for extreme conditions. Ideal for industrial sites, construction zones, and outdoor campuses where standard equipment won't hold up.",
    icon: ShieldCheck,
    image: "/images/products/industrial-ap.jpg",
    features: [
      "IP67 Weatherproof Rating",
      "Temp Range: -40°C to +70°C",
      "High-Gain External Antennas",
      "Lightning Surge Protection",
      "Long-Range Signal Beam",
      "PoE Pass-through Support",
      "Vibration & Shock Resistant",
      "Remote Health Monitoring",
    ],
    color: "#5971c8",
    relatedService: "Networking",
  },
  {
    id: "6",
    slug: "fiber-optic-patch-panel",
    name: "Fiber Patch Panel",
    category: "Networking Infrastructure",
    shortDescription: "High-density fiber enclosure for organized termination",
    description:
      "1U rack-mount sliding patch panel for high-density fiber terminations. Supports LC, SC, and ST connectors with integrated splice trays for clean fiber management.",
    icon: Cable,
    image: "/images/products/fiber-patch-panel.jpg",
    features: [
      "1U Rack Mountable Design",
      "Sliding Drawer for Easy Access",
      "Integrated Splice Trays",
      "High-Density Port Options",
      "Internal Cable Management",
      "Interchangeable Adapter Plates",
      "Durable Powder-Coated Steel",
      "Labeling Strips for Port ID",
    ],
    color: "#5971c8",
    relatedService: "Networking",
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") return products
  return products.filter((product) => product.category === category)
}

export function getProductCategories(): string[] {
  return ["All", ...productCategories.map((cat) => cat.name)]
}
