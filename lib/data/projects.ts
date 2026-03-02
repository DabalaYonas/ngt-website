import { Building2, Building, Plane, Layout, Globe, Zap, Cpu, Network, Server, Shield, Video, Phone, Code2, Users, Radio, Monitor } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface Project {
  id: string
  slug: string
  title: string
  category: string
  serviceCategory: string
  description: string
  fullDescription: string
  icon: LucideIcon
  image?: string
  year: string
  status: "Completed" | "In Progress"
  client?: string
  location?: string
  duration?: string
  highlights: string[]
  technologies?: string[]
  results?: string[]
}

export const projects: Project[] = [
  {
    "id": "1",
    "slug": "oromia-region-egp-project",
    "title": "Oromia Regional State E-GP Project",
    "category": "Data Centers",
    "serviceCategory": "Data Centers",
    "description": "We built the secure Data, Application, and Portal Server infrastructure for the Oromia Region E-GP Project, enabling transparent digital public procurement.",
    "fullDescription": "Next General Trading designed and deployed the core server architecture for the Oromia Bureau of Finance's Electronic Government Procurement (e-GP) system. This involved the implementation of high-availability Data, Application, and Portal servers designed to handle high transaction volumes while ensuring data integrity.",
    "icon": Server,
    "image": "/images/projects/egp-project.jpg",
    "year": "2025",
    "status": "Completed",
    "client": "Oromia Bureau of Finance",
    "location": "Addis Ababa, Ethiopia",
    "duration": "1 month",
    "highlights": [
      "High-availability server cluster deployment",
      "Secure database architecture for procurement records",
      "Redundant portal hosting for 24/7 vendor access",
      "Seamless integration with national E-GP frameworks",
      "Advanced data encryption and security protocols",
      "Scalable infrastructure for regional growth"
    ],
    "technologies": ["Enterprise Server Hardware", "SQL Database Management", "Network Security", "Virtualization Technology"],
    "results": [
      "100% digitization of regional procurement workflows",
      "Significant reduction in tender processing time",
      "Enhanced transparency and auditability",
      "Zero downtime during system launch"
    ]
  },
  {
    "id": "2",
    "slug": "dambi-dollo-university-fm-radio-station",
    "title": "Dambi Dollo University FM Radio Station",
    "category": "Media",
    "serviceCategory": "Media",
    "description": "Full establishment and commissioning of the Dambi Dollo University FM Radio Station (104.0 MHz).",
    "fullDescription": "This project involved the complete 'turnkey' setup of a community-focused radio station for Dambi Dollo University. Next General Trading managed the design, procurement, and installation of the FM transmitter, antenna systems, and professional-grade acoustic studio environments.",
    "icon": Radio,
    "image": "/images/projects/radio-station.jpg",
    "year": "2022",
    "status": "Completed",
    "client": "Dambi Dollo University",
    "location": "Dambi Dollo, Ethiopia",
    "duration": "18 months",
    "highlights": [
      "Professional acoustic studio treatment",
      "High-gain FM antenna system installation",
      "Digital audio mixing and production suites",
      "Emergency power backup for continuous broadcast",
      "Compliance with EBA broadcasting standards",
      "Training provided for station technicians"
    ],
    "technologies": ["FM Transmitters", "Digital Audio Workstations (DAW)", "STL (Studio-to-Transmitter Link)", "Sound Processing Gear"],
    "results": [
      "Successful broadcast coverage across Dambi Dollo City",
      "Launched 24/7 educational and community programming",
      "Fully operational digital production workflow",
      "Reliable signal strength with minimal interference"
    ]
  },
  {
    "id": "3",
    "slug": "dambi-dollo-university-meeting-hall",
    "title": "Dambi Dollo University Meeting Hall",
    "category": "Construction",
    "serviceCategory": "Construction",
    "description": "Fast-track construction of a state-of-the-art multipurpose meeting hall completed in a record 29 days.",
    "fullDescription": "In an extraordinary feat of engineering and project management, Next General Trading constructed the Dambi Dollo University Meeting Hall in just 29 days. The hall features high-quality interior finishes, advanced integrated AV systems, and flexible seating arrangements.",
    "icon": Building,
    "image": "/images/projects/ddu-meeting-hall.jpg",
    "year": "2023",
    "status": "Completed",
    "client": "Dambi Dollo University",
    "location": "Dambi Dollo, Ethiopia",
    "duration": "29 days",
    "highlights": [
      "Record-breaking 29-day construction timeline",
      "Integrated high-definition AV and sound systems",
      "Modern interior architectural finishing",
      "Structural integrity and safety compliance",
      "Energy-efficient LED lighting systems",
      "Multipurpose floor plan for various events"
    ],
    "technologies": ["Pre-fabricated Construction Elements", "Integrated AV Systems", "Fast-cure Concrete Tech", "Climate Control"],
    "results": [
      "Project delivered 100% on time despite aggressive schedule",
      "Instant capacity for 500+ attendees",
      "Zero compromise on structural or aesthetic quality",
      "Set a regional benchmark for fast-track construction"
    ]
  },
  {
    "id": "4",
    "slug": "yabelo-airport-field-construction",
    "title": "Yabelo Airport Field Construction",
    "category": "Construction",
    "serviceCategory": "Construction",
    "description": "Expert execution of airfield development and runway preparation for Ethiopian Airlines in Yabelo.",
    "fullDescription": "Commissioned by Ethiopian Airlines, Next General Trading executed the field construction works for the Yabelo Airport. This critical infrastructure project involved airfield clearing, runway leveling, and the preparation of supporting ground infrastructure.",
    "icon": Plane,
    "image": "/images/projects/yabelo-airport-runway.jpg",
    "year": "2024",
    "status": "Completed",
    "client": "Ethiopian Airlines",
    "location": "Yabelo, Ethiopia",
    "duration": "6 months",
    "highlights": [
      "Precision runway leveling and grading",
      "Strategic airfield drainage systems",
      "Safety-compliant perimeter fencing",
      "Supporting ground infrastructure development",
      "Heavy machinery deployment and management",
      "Strict adherence to aviation safety standards"
    ],
    "technologies": ["Civil Engineering", "Geotechnical Surveying", "Heavy Earthmoving Equipment", "GPS-guided Grading"],
    "results": [
      "On track for scheduled airport commissioning",
      "Met all stringent Ethiopian Airlines technical specs",
      "Boosted local employment during construction",
      "Enhanced regional transport logistics potential"
    ]
  },
  {
    "id": "5",
    "slug": "dambi-dollo-university-president-office",
    "title": "Dambi Dollo University President Office",
    "category": "Construction",
    "serviceCategory": "Construction",
    "description": "Premium interior design and executive finishing for the University President's Office.",
    "fullDescription": "Next General Trading provided comprehensive interior design and high-end finishing services for the President’s Office at Dambi Dollo University, focusing on professional and prestigious environments.",
    "icon": Layout,
    "image": "/images/projects/ddu-president-office.jpg",
    "year": "2022",
    "status": "Completed",
    "client": "Dambi Dollo University",
    "location": "Dambi Dollo, Ethiopia",
    "duration": "2 months",
    "highlights": [
      "Executive-grade interior finishing",
      "Custom-designed furniture and cabinetry",
      "Acoustic treatment for privacy",
      "Modern lighting and electrical layout",
      "Premium flooring and wall treatments",
      "Ergonomic workspace design"
    ],
    "technologies": ["Interior Architecture", "Acoustic Engineering", "Custom Joinery", "Smart Lighting"],
    "results": [
      "Created a professional, high-standard leadership space",
      "Completed within strict 2-month timeline",
      "Highly praised for aesthetic and functional quality",
      "Increased operational privacy for university executives"
    ]
  },
  {
    "id": "6",
    "slug": "loft-hotel",
    "title": "Loft Hotel",
    "category": "IT Infrastructure",
    "serviceCategory": "Security",
    "description": "Full-scale ICT infrastructure supply and configuration including networking and guest services.",
    "fullDescription": "Next General Trading delivered a comprehensive ICT ecosystem for Loft Hotel, encompassing Wi-Fi networks, administrative servers, and robust security integration.",
    "icon": Shield,
    "image": "/images/projects/loft-hotel.jpg",
    "year": "2023",
    "status": "Completed",
    "client": "Loft Hotel",
    "location": "Addis Ababa, Ethiopia",
    "duration": "1 month",
    "highlights": [
      "Campus-wide high-speed guest Wi-Fi",
      "Integrated Hotel Management System (HMS) infrastructure",
      "CCTV and IP-based security surveillance",
      "Structured cabling for the entire property",
      "IP Phone and communication systems",
      "Secure data storage for guest records"
    ],
    "technologies": ["Enterprise Networking", "IP Surveillance", "VoIP Systems", "WiFi 6 Infrastructure"],
    "results": [
      "Seamless connectivity across all guest rooms",
      "Enhanced security monitoring with 100% coverage",
      "Zero network failures since implementation",
      "Positive guest feedback on internet speeds"
    ]
  },
  {
    "id": "7",
    "slug": "addis-ababa-city-egp-project",
    "title": "Addis Ababa City E-GP Project",
    "category": "Data Centers",
    "serviceCategory": "Data Centers",
    "description": "Supply, installation, and training for the server infrastructure powering the Addis Ababa City E-GP system.",
    "fullDescription": "Next General Trading successfully delivered the robust server ecosystem required for the Addis Ababa City Administration's Electronic Government Procurement initiative. This included the supply and configuration of Portal, Application, and Data servers.",
    "icon": Server,
    "image": "/images/projects/egp-project.jpg",
    "year": "2024",
    "status": "Completed",
    "client": "AA City Administration Bureau of Finance",
    "location": "Addis Ababa, Ethiopia",
    "duration": "1 month",
    "highlights": [
      "Full stack supply: Portal, App, and Data servers",
      "Custom server configuration for E-GP software",
      "Comprehensive staff technical training program",
      "Enterprise-grade security and firewall setup",
      "Optimized for high-concurrency user traffic",
      "Post-installation support and maintenance"
    ],
    "technologies": ["Blade Server Infrastructure", "Virtualization", "Advanced Firewall Security", "Data Redundancy Systems"],
    "results": [
      "Seamless migration to digital procurement",
      "Staff fully trained and certified on system management",
      "99.9% system availability since launch",
      "Enhanced security for sensitive financial data"
    ]
  },
  {
    "id": "8",
    "slug": "african-union-consultancy-services",
    "title": "African Union Consultancy Services",
    "category": "Consulting",
    "serviceCategory": "Consulting",
    "description": "Consultancy for GIS deployment and satellite receiving station integration.",
    "fullDescription": "Next General Trading provided specialized technical consultancy to the African Union for the integration of a Geo-Information System (GIS) with a satellite receiving station.",
    "icon": Globe,
    "year": "2023",
    "status": "Completed",
    "client": "African Union",
    "location": "Addis Ababa, Ethiopia",
    "duration": "3 months",
    "highlights": [
      "Satellite data acquisition workflow design",
      "GIS platform integration and optimization",
      "Technical feasibility and architecture study",
      "Data security for geospatial assets",
      "Training on satellite imagery processing",
      "Strategic roadmap for regional monitoring"
    ],
    "technologies": ["GIS (Geographic Information Systems)", "Remote Sensing", "Satellite Signal Processing", "Data Analytics"],
    "results": [
      "Successfully integrated real-time satellite feeds",
      "Enhanced geospatial analysis capabilities for the AU",
      "Delivered a scalable data processing framework",
      "Achieved high data accuracy for regional mapping"
    ]
  },
  {
    "id": "9",
    "slug": "ethiopia-electric-utility",
    "title": "Ethiopia Electric Utility",
    "category": "IT Infrastructure",
    "serviceCategory": "Smart Systems",
    "description": "End-to-end design and installation of ICT infrastructure to support utility operations.",
    "fullDescription": "For the Ethiopia Electric Utility (EEU), Next General Trading executed a comprehensive ICT infrastructure project to ensure resilient digital operations.",
    "icon": Zap,
    "year": "2023",
    "status": "Completed",
    "client": "Ethiopia Electric Utility",
    "location": "Addis Ababa, Ethiopia",
    "duration": "6 months",
    "highlights": [
      "Robust network backbone for utility management",
      "Server infrastructure with high data redundancy",
      "Rigorous stress testing and quality assurance",
      "Fiber optic and wireless connectivity solutions",
      "Scalable architecture for future tech upgrades",
      "Cybersecurity hardening for critical infrastructure"
    ],
    "technologies": ["Networking Infrastructure", "Data Center Servers", "Fiber Optics", "Security Firewalls"],
    "results": [
      "Improved digital reliability for utility billing systems",
      "Reduced system latency for field operations",
      "Successful full-scale testing and commissioning",
      "Supported increased operational efficiency"
    ]
  },
  {
    "id": "10",
    "slug": "addis-ababa-university-networking-project",
    "title": "Addis Ababa University Networking Project",
    "category": "IT Infrastructure",
    "serviceCategory": "Networking",
    "description": "Campus-wide ICT networking infrastructure supply and configuration.",
    "fullDescription": "Next General Trading overhauled the networking infrastructure at Addis Ababa University, supplying and configuring advanced routing and fiber-optic backbones.",
    "icon": Network,
    "image": "/images/projects/university-network.jpg",
    "year": "2021",
    "status": "Completed",
    "client": "Addis Ababa University",
    "location": "Addis Ababa, Ethiopia",
    "duration": "6 months",
    "highlights": [
      "Multi-site fiber optic backbone installation",
      "High-density wireless access point deployment",
      "Enterprise routing and switching configuration",
      "Network segmentation for security and performance",
      "Redundant link design to prevent outages",
      "Support for student and staff digital portals"
    ],
    "technologies": ["Fiber Optics (FTTX)", "Layer 3 Switching", "Enterprise WiFi", "VLAN Management"],
    "results": [
      "Significant increase in campus-wide internet speeds",
      "99.9% uptime for academic digital services",
      "Seamless connectivity for over 10,000+ users",
      "Improved network management and security"
    ]
  },
  {
    "id": "11",
    "slug": "dambi-dollo-university-cctv-camera",
    "title": "Dambi Dollo University CCTV Camera",
    "category": "Security",
    "serviceCategory": "Security",
    "description": "Installation of a comprehensive campus-wide CCTV surveillance system.",
    "fullDescription": "To enhance the safety of the Dambi Dollo University campus, Next General Trading installed a modern IP-based CCTV system across all strategic locations.",
    "icon": Video,
    "image": "/images/projects/cctv-system.jpg",
    "year": "2022",
    "status": "Completed",
    "client": "Dambi Dollo University",
    "location": "Dambi Dollo, Ethiopia",
    "duration": "12 months",
    "highlights": [
      "High-resolution IP camera deployment",
      "Centralized Security Operations Center (SOC)",
      "Night vision and motion detection capabilities",
      "High-capacity NVR storage infrastructure",
      "Weather-proof outdoor camera installation",
      "Staff training on monitoring and retrieval"
    ],
    "technologies": ["IP Surveillance", "Network Video Recorders (NVR)", "Power over Ethernet (PoE)", "Video Management Software"],
    "results": [
      "Drastic improvement in campus security monitoring",
      "Reduced response time for security incidents",
      "100% coverage of critical campus zones",
      "Reliable evidence retrieval system established"
    ]
  },
  {
    "id": "12",
    "slug": "nile-view-hotel-ict-infrastructure",
    "title": "Nile View Hotel - ICT Infrastructure",
    "category": "Smart Systems",
    "serviceCategory": "Smart Systems",
    "description": "Full design-and-build ICT infrastructure for high-end hospitality services.",
    "fullDescription": "Next General Trading delivered the complete 'Digital Hotel' experience for Nile View Hotel, integrating hospitality systems with smart building features.",
    "icon": Building,
    "image": "/images/projects/nile-view.jfif",
    "year": "2022",
    "status": "Completed",
    "client": "Nile View Hotel",
    "location": "Addis Ababa, Ethiopia",
    "duration": "6 months",
    "highlights": [
      "Full ICT design and hardware procurement",
      "Seamless Wi-Fi roaming for guests",
      "Integrated Hotel Property Management System",
      "IP TV and digital guest services",
      "Smart climate and lighting control integration",
      "Comprehensive security and access control"
    ],
    "technologies": ["Hospitality ICT Framework", "Smart Building Systems", "Unified Communications", "Wireless Mesh Networks"],
    "results": [
      "Successfully launched as a tech-enabled hotel",
      "Optimized operational costs through smart systems",
      "High guest satisfaction for connectivity",
      "Scalable infrastructure for future hospitality tech"
    ]
  },
  {
    "id": "13",
    "slug": "metu-university-fm-radio",
    "title": "Metu University FM Radio Project",
    "category": "Media",
    "serviceCategory": "Media",
    "description": "Ongoing establishment of a campus-based community radio station to enhance academic and regional communication.",
    "fullDescription": "Next General Trading is currently managing the turnkey establishment of the Metu University FM Radio station. This project encompasses the design and construction of professional-grade acoustic studios, the installation of high-power FM transmitters, and the integration of a digital broadcasting workflow. Once completed, the station will serve as a hub for student media training and community-focused information dissemination in the Metu area.",
    "icon": Radio,
    "year": "2026",
    "status": "In Progress",
    "client": "Metu University",
    "location": "Metu, Ethiopia",
    "duration": "8 months (Estimated)",
    "highlights": [
      "Specialized acoustic studio soundproofing and design",
      "High-gain FM antenna tower installation",
      "Digital broadcasting and live-streaming integration",
      "Redundant power backup systems for 24/7 reliability",
      "Technical capacity building for university media staff",
      "Advanced digital audio mixing and editing suites"
    ],
    "technologies": ["FM Transmitters", "Digital Audio Workstations", "Acoustic Engineering", "Broadcasting Software"],
    "results": [
      "Studio site preparation and acoustic treatment completed",
      "Core broadcasting hardware successfully procured",
      "Antenna tower structural assembly in progress",
      "On track for scheduled mid-2026 commissioning"
    ],
  },
  {
    "id": "14",
    "slug": "sidama-region-egp-project",
    "title": "Sidama Regional State E-GP Project",
    "category": "Data Centers",
    "serviceCategory": "Data Centers",
    "description": "Deployment of secure server infrastructure for the Sidama Region Bureau of Finance to digitize public procurement.",
    "fullDescription": "This ongoing project focuses on building the critical server infrastructure for the Sidama Regional State's Electronic Government Procurement (e-GP) system. Following the success of the Oromia and Addis Ababa projects, Next General Trading is deploying a secure, high-availability environment consisting of Data, Application, and Portal servers. This infrastructure is designed to handle the region's procurement workflows with maximum transparency and data security.",
    "icon": Server,
    "image": "/images/projects/egp-project.jpg",
    "year": "2026",
    "status": "In Progress",
    "client": "Sidama Bureau of Finance",
    "location": "Hawassa, Ethiopia",
    "duration": "4 months (Estimated)",
    "highlights": [
      "Multi-tier server architecture for high availability",
      "Secure SQL database cluster for procurement records",
      "Enterprise-grade firewall and network hardening",
      "Seamless integration with Ethiopia's national E-GP framework",
      "Scalable storage for long-term digital audit trails",
      "Advanced virtualization for resource optimization"
    ],
    "technologies": ["Enterprise Server Hardware", "SQL Database Management", "Virtualization", "Cybersecurity Protocols"],
    "results": [
      "Hardware delivery and staging completed",
      "Initial server configuration and OS installation finalized",
      "Data center network connectivity established",
      "Testing environment deployment currently underway"
    ],
  },
  {
    "id": "15",
    "slug": "dambi-dolo-university-smart-classroom",
    "title": "Dambi Dollo University Smart Classroom & Security Project",
    "category": "Education",
    "serviceCategory": "ICT Infrastructure",
    "description": "Implementation of an advanced interactive virtual classroom and campus-wide security system for Dambi Dollo University.",
    "fullDescription": "NGT Technology successfully completed a comprehensive turnkey project for Dambi Dollo University (DaDU), focusing on modernizing its educational and security infrastructure[cite: 25, 26]. [cite_start]This project involved the supply, installation, and configuration of high-end interactive virtual classroom equipment, enabling a state-of-the-art 'Smart Class' environment[cite: 16, 26]. [cite_start]Additionally, NGT deployed a robust campus security system, integrating IP-based CCTV surveillance to ensure a safe learning environment for students and staff[cite: 16, 26].",
    "icon": Monitor,
    "image": "/images/projects/ddu-smart-class.jpg",
    "year": "2021",
    "status": "Completed",
    "client": "Dambi Dollo University (DaDU)",
    "location": "Dambi Dollo, Ethiopia",
    "duration": "Completed December 2021",
    "highlights": [
      "Installation of interactive virtual classroom equipment",
      "Deployment of campus-wide IP CCTV security system",
      "Full hardware configuration and network integration",
      "Enhanced security monitoring with high-definition IP cameras",
      "Modernization of digital learning environments for students",
      "Technical training for university staff on new ICT infrastructure"
    ],
    "technologies": ["Interactive Displays", "Virtual Classroom Software", "IP Cameras", "CCTV Management Systems", "Network Infrastructure"],
    "results": [
      "Successful modernization of university learning facilities",
      "Enhanced campus safety through integrated surveillance",
      "Project delivered and commissioned on schedule in December 2021",
      "Seamless integration of smart education tools into the campus network"
    ]
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "All") return projects
  return projects.filter((project) => project.category === category || project.serviceCategory === category)
}

export function getProjectCategories(): string[] {
  return ["All", "IT Infrastructure", "Construction", "Smart Systems", "Software Development", "Data Centers", "Media", "Security", "Consulting"]
}
