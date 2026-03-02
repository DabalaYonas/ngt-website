export interface Client {
  id: string
  name: string
  description: string
  logo: string
  category: string
}

export const clients: Client[] = [
  {
    "id": "dambi-dollo-university",
    "name": "Dambi Dollo University (DaDU)",
    "description": "Public higher education institution in Ethiopia",
    "logo": "/images/clients/Dembidolo_University.webp",
    "category": "Education"
  },
  {
    "id": "adama-science-technology-university",
    "name": "Adama Science and Technology University (ASTU)",
    "description": "Leading research university focusing on science and technology",
    "logo": "/images/clients/astu.webp",
    "category": "Education"
  },
  {
    "id": "addis-ababa-university",
    "name": "Addis Ababa University (AAU)",
    "description": "The oldest and largest higher education institution in Ethiopia",
    "logo": "/images/clients/Addis_Ababa_University_logo.webp",
    "category": "Education"
  },
  {
    "id": "african-union",
    "name": "African Union (AU)",
    "description": "Continental body consisting of 55 member states",
    "logo": "/images/clients/au_logo.webp",
    "category": "International Organization"
  },
  {
    "id": "public-social-security-agency",
    "name": "Public Social Security Agency",
    "description": "Government agency managing social security funds",
    "logo": "/images/clients/public-social-security-agency.webp",
    "category": "Government"
  },
  {
    "id": "st-paul-hospital",
    "name": "St. Paul Hospital",
    "description": "Major referral hospital and medical college",
    "logo": "/images/clients/Pauls_hospital_logo.webp",
    "category": "Healthcare"
  },
  {
    "id": "ethiopia-electric-utility",
    "name": "Ethiopia Electric Utility (EEU)",
    "description": "National electricity provider of Ethiopia",
    "logo": "/images/clients/ethio_elec_logo.webp",
    "category": "Energy"
  },
  {
    "id": "commercial-bank-of-ethiopia",
    "name": "Commercial Bank of Ethiopia (CBE)",
    "description": "The largest commercial bank in Ethiopia",
    "logo": "/images/clients/cbe_logo.webp",
    "category": "Finance"
  },
  {
    "id": "dangote-cement",
    "name": "Dangote Cement Factory",
    "description": "Leading cement manufacturer in Ethiopia",
    "logo": "/images/clients/dangote_logo.webp",
    "category": "Manufacturing"
  },
  {
    "id": "addis-ababa-science-technology-university",
    "name": "Addis Ababa Science and Technology University (AASTU)",
    "description": "Specialized university for science and technology",
    "logo": "/images/clients/aastu_logo.webp",
    "category": "Education"
  },
  {
    "id": "amhara-agricultural-bureau",
    "name": "Amhara Agricultural Bureau",
    "description": "Regional government office for agricultural development",
    "logo": "/images/clients/Ahmara_agri_logo.webp",
    "category": "Government"
  },
  {
    "id": "metu-university",
    "name": "Metu University",
    "description": "Comprehensive public university in Ethiopia",
    "logo": "/images/clients/metu-university.webp",
    "category": "Education"
  },
  {
    "id": "oromia-bureau-finance",
    "name": "Oromia Bureau of Finance",
    "description": "Regional government financial administration",
    "logo": "/images/clients/oromia-bureau-finance.webp",
    "category": "Government/Finance"
  },
  {
    "id": "addis-ababa-city-finance",
    "name": "Addis Ababa City Administration Bureau of Finance",
    "description": "Municipal financial management for the capital city",
    "logo": "/images/clients/aa-administration-bureau-finance.webp",
    "category": "Government/Finance"
  },
  {
    "id": "ethiopian-airlines",
    "name": "Ethiopian Airlines",
    "description": "The national flag carrier of Ethiopia",
    "logo": "/images/clients/ethiopian-airline.webp",
    "category": "Aviation/Transport"
  }
]

export function getClientsByCategory(category: string) {
  if (category === "All") return clients
  return clients.filter(client => client.category === category)
}

export function getClientCategories() {
  const categories = ["All", ...Array.from(new Set(clients.map(c => c.category)))]
  return categories
}
