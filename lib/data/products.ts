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
    name: "Raised Access Flooring System",
    category: "Networking Infrastructure",
    shortDescription: "High-load antistatic flooring for data centers and server rooms",
    description:
      "A premium modular flooring solution designed for modern data centers. It provides a dedicated under-floor space for structured cabling and pressurized cooling airflow while offering superior load-bearing capacity and antistatic properties.",
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
    name: "Enterprise Wireless Access Point",
    category: "Networking Equipment",
    shortDescription: "High-performance WiFi 6 access point for dense environments",
    description:
      "Professional-grade wireless access point featuring WiFi 6 (802.11ax) technology. Designed for seamless roaming and high-density connectivity in offices, university campuses, and large commercial venues.",
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
    name: "Layer 3 Managed Core Switch",
    category: "Networking Equipment",
    shortDescription: "High-speed backbone switch with 10Gbps fiber uplink",
    description:
      "An enterprise-level managed switch designed for the network core. It offers high-density Gigabit ports and multiple 10Gbps SFP+ fiber ports for ultra-fast data transmission and campus backbone connectivity.",
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
    name: "42U Professional Server Rack",
    category: "Networking Infrastructure",
    shortDescription: "Secure, ventilated enclosure for servers and networking gear",
    description:
      "A heavy-duty 42U equipment rack designed for organized cable management and optimal airflow. Features lockable mesh doors and removable side panels for high-security environments.",
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
    name: "Industrial Rugged Access Point",
    category: "Networking Equipment",
    shortDescription: "IP67-rated outdoor wireless for harsh environments",
    description:
      "Ruggedized outdoor access point engineered to withstand extreme temperatures and moisture. Perfect for industrial sites, construction zones, and outdoor campus coverage.",
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
    name: "Fiber Optic Patch Panel (High Density)",
    category: "Networking Infrastructure",
    shortDescription: "1U sliding fiber enclosure for organized termination",
    description:
      "A 1U rack-mount sliding patch panel designed for high-density fiber terminations. Supports LC, SC, and ST connectors with integrated splice trays for clean and protected fiber management.",
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
