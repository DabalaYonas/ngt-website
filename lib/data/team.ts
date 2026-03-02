export interface TeamMember {
  id: string
  name: string
  role: string
  department: string
  bio: string
  profileImage?: string
  linkedin?: string
  email?: string
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Abraham Gizaw",
    role: "Chief Executive Officer",
    department: "Leadership",
    bio: "With over 20 years of experience in technology and business leadership, Alemayehu founded Next General Trading with a vision to transform Ethiopia's IT and construction landscape. He holds an MBA from Addis Ababa University and has led numerous successful enterprise projects.",
    linkedin: "#",
    email: "alemayehu@ngtechet.com",
    profileImage: "/images/team/abraham.jpg",
  },
  {
    id: "2",
    name: "Sisay Tolera",
    role: "Chief Finance Officer",
    department: "Leadership",
    bio: "Sara brings 15 years of expertise in IT infrastructure and software development. She oversees all technical operations and innovation initiatives, ensuring our solutions meet the highest industry standards.",
    linkedin: "#",
    email: "sara@ngtechet.com",
    profileImage: "/images/team/male-placeholder-image.jpeg",
  },
  {
    id: "3",
    name: "Chala Elias",
    role: "IT Project Manager",
    department: "Construction",
    bio: "A licensed civil engineer with 18 years of experience, Daniel leads our construction division. He has successfully delivered over 50 major construction projects across Ethiopia.",
    linkedin: "#",
    email: "daniel@ngtechet.com",
    profileImage: "/images/team/chala.jpg",
  },
  {
    id: "4",
    name: "Masfin Kasahun",
    role: "Site Engineer",
    department: "IT Solutions",
    bio: "Meron specializes in enterprise IT solutions and digital transformation. With certifications from Cisco, Microsoft, and AWS, she leads our IT services team to deliver world-class solutions.",
    linkedin: "#",
    email: "meron@ngtechet.com",
    profileImage: "/images/team/mesfin.jpg",
  },
  {
    id: "5",
    name: "Elias Alemu",
    role: "Senior Engineer",
    department: "IT Solutions",
    bio: "A CCIE-certified professional with expertise in designing and implementing complex network infrastructures for enterprise clients across various industries.",
    linkedin: "#",
    email: "yohannes@ngtechet.com",
    profileImage: "/images/team/male-placeholder-image.jpeg",
  },
  {
    id: "6",
    name: "Naol Gizaw",
    role: "Site Manager",
    department: "Operations",
    bio: "PMP-certified project manager with 12 years of experience managing large-scale IT and construction projects. Hana ensures all projects are delivered on time and within budget.",
    linkedin: "#",
    email: "hana@ngtechet.com",
    profileImage: "/images/team/naol.jpg",
  },
]

export function getTeamByDepartment(department: string): TeamMember[] {
  if (department === "All") return teamMembers
  return teamMembers.filter((member) => member.department === department)
}

export function getDepartments(): string[] {
  return [...new Set(teamMembers.map((member) => member.department))]
}
