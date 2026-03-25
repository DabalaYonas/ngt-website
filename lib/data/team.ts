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
    bio: "A Computer Engineer, educator, and PhD candidate with over 15 years of experience in ICT administration. Abraham leads NGT's strategic vision, driving innovation and sustainable growth across all business divisions.",
    linkedin: "#",
    email: "abrahamg@ngtechet.com",
    profileImage: "/images/team/abraham.jpg",
  },
  {
    id: "2",
    name: "Sisay Tolera",
    role: "Chief Finance Officer",
    department: "Leadership",
    bio: "A seasoned finance professional with extensive experience in corporate financial management, budgeting, and strategic planning. Sisay oversees NGT's financial operations, ensuring fiscal responsibility and long-term financial sustainability.",
    linkedin: "#",
    email: "sisay@ngtechet.com",
    profileImage: "/images/team/male-placeholder-image.jpeg",
  },
  {
    id: "3",
    name: "Chala Elias",
    role: "IT Project Manager",
    department: "IT Solutions",
    bio: "An experienced IT project manager with a strong background in delivering complex technology initiatives on time and within scope. Chala coordinates cross-functional teams and ensures NGT's IT projects align with client goals and industry best practices.",
    linkedin: "#",
    email: "chala@ngtechet.com",
    profileImage: "/images/team/chala.jpg",
  },
  {
    id: "4",
    name: "Masfin Kasahun",
    role: "Site Engineer",
    department: "Operations",
    bio: "A skilled site engineer with hands-on expertise in overseeing technical installations and infrastructure deployments. Masfin ensures all on-site operations meet engineering standards and project specifications.",
    linkedin: "#",
    email: "masfin@ngtechet.com",
    profileImage: "/images/team/mesfin.jpg",
  },
  {
    id: "5",
    name: "Elias Alemu",
    role: "Senior Engineer",
    department: "IT Solutions",
    bio: "A highly experienced senior engineer specializing in the design, implementation, and optimization of enterprise-grade IT systems. Elias brings deep technical expertise and a proven track record of delivering robust solutions for clients across multiple sectors.",
    linkedin: "#",
    email: "elias@ngtechet.com",
    profileImage: "/images/team/male-placeholder-image.jpeg",
  },
  {
    id: "6",
    name: "Naol Gizaw",
    role: "Site Manager",
    department: "Operations",
    bio: "A results-driven site manager responsible for coordinating day-to-day field operations across NGT's project sites. Naol ensures seamless execution of activities, maintaining safety standards, quality control, and operational efficiency.",
    linkedin: "#",
    email: "naol@ngtechet.com",
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
