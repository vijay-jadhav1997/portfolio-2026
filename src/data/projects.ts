
import furlenco from "../assets/images/projects/furlenco.webp"
import homelane from "../assets/images/projects/homelane.webp"
import livspace from "../assets/images/projects/livspace.webp"
import podarEducation from "../assets/images/projects/podareducation.webp"
import floweraura from "../assets/images/projects/floweraura.webp"

export interface Project {
  title: string
  description: string
  my_respons: string[]
  tech: string[]
  image: string
  link: string
}



export const projects: Project[] = [
  {
    title: "Podar Education",
    description:
      "Podar Education is a nationwide educational network that manages its own schools and franchises, offering digital solutions for admissions, payments, and student management.",
    my_respons:[
      "Developed dynamic frontend pages like About Us and Student Dashboard with responsive layouts.",
      "Built secure authentication APIs and implemented session management for students and staff.",
      "Created backend modules for handling student data, course updates, and announcements.",
    ],
    tech: ["TypeScript", "Next.js", "AWS", "Docker", "React", "Node.js", "Express.js", "MongoDB", ],
    image: podarEducation,
    link: "https://www.podareducation.org",
  },
   {
    title: "FlowerAura",
    description:
      "FlowerAura is a Gurugram-based online gifting brand offering flowers, cakes, and personalized gifts with same-day and midnight delivery across 600+ Indian cities.",
    my_respons:[
      "Built and optimized dynamic product catalogs for gifts, flowers, and cakes.",
      "Integrated same-day and midnight delivery scheduling and live tracking features.",
      "Implemented promotional offers, coupon handling, and notification systems for customers.",
    ],
    tech: [ "Next.js", "Node.js", "Express.js", "MongoDB", "TypeScript", "AWS", "Docker", ],
    image:floweraura,
    link: "https://www.floweraura.com",
  },
  {
    title: "Livspace",
    description:
      "Livspace is a home interior and renovation platform offering custom design, modular furniture, and full renovation services through a tech-driven marketplace model across India, Singapore, and the Middle East.",
    my_respons:[
      "Developed dynamic project catalogs with advanced filtering and search features for interior products.",
      "Integrated secure authentication, user onboarding, and profile management systems.",
      "Built and maintained online quotation, payment, and booking workflows.",
    ],
    tech: [ "React", "Redis", "Node.js", "Express.js", "MongoDB", "AWS", "Docker", ],
    image: livspace,
    link: "https://www.livspace.com",
  },
  {
    title: "Furlenco",
    description:
      "Furlenco is a leading Indian furniture and home appliances rental platform offering flexible subscription plans that allow users to rent, swap, or upgrade products for modern, mobile living.",
    my_respons:[
      "Optimized backend APIs for scalability, reducing response time and improving overall performance.",
      "Collaborated with UI/UX teams to ensure an intuitive and engaging user experience.",
      "Built and maintained order tracking features to improve customer visibility and satisfaction.",
    ],
    tech: ["Express.js", "React", "Node.js", "MongoDB", "AWS", 'Redis', "TypeScript"],
    image: furlenco,
    link: "https://www.furlenco.com",
  },
  {
    title: "HomeLane",
    description:
      "HomeLane is India’s leading tech-enabled interior design company delivering personalized 3D design consultations, modular furniture solutions, and end-to-end home décor services across major cities.",
    my_respons: [
      "Built modular furniture configurators for kitchens, wardrobes, and space-saving designs.",
      "Implemented secure login, session handling, and data synchronization features for design projects.",
      "Created backend APIs for project tracking, order processing, and installation workflows.",
      "Enhanced admin tools for managing pricing, vendors, and post-installation service modules.",
    ],
    tech: ["Node.js","AWS", "Docker", "Next.js", "TypeScript", "React", "Express.js", "MongoDB",  ],
    image:homelane,
    link: "https://www.homelane.com",
  },
  
]
