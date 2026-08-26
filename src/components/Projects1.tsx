import { useState } from "react"
import { motion, AnimatePresence, type Variants } from "framer-motion"
import Tilt from "react-parallax-tilt"
import { RiExternalLinkLine } from "react-icons/ri"

import furlenco from "../assets/images/projects/furlenco.webp"
import homelane from "../assets/images/projects/homelane.webp"
import livspace from "../assets/images/projects/livspace.webp"
import podarEducation from "../assets/images/projects/podareducation.webp"
import floweraura from "../assets/images/projects/floweraura.webp"
import LazyImage from "./shared/LazyImage"

interface Project {
  title: string
  description: string
  tech: string[]
  image: string
  link: string
}

const projects: Project[] = [
  {
    title: "Furlenco",
    description:
      "An online furniture and home appliances rental platform offering flexible subscription options, enabling customers to rent, swap, or upgrade items with ease.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "AWS", "TypeScript"],
    image: furlenco,
    link: "https://www.furlenco.com",
  },
  {
    title: "HomeLane",
    description:
      "India’s leading tech-enabled interior design platform delivering personalized 3D design consultations, modular interiors, and end-to-end home décor solutions.",
    tech: [
      "Next.js",
      "TypeScript",
      "React",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Docker",
      "AWS",
    ],
    image: homelane,
    link: "https://www.homelane.com",
  },
  {
    title: "Livspace",
    description:
      "Home interior and renovation platform offering customized design, modular furniture, and complete renovation services with tech-driven tools and professional designers.",
    tech: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS",
      "Docker",
    ],
    image: livspace,
    link: "https://www.livspace.com",
  },
  {
    title: "FlowerAura",
    description:
      "Online gifting platform offering flowers, cakes, and personalized gifts with same-day and midnight delivery services across 600+ cities in India.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TypeScript",
      "AWS",
      "Docker",
    ],
    image: floweraura,
    link: "https://www.floweraura.com",
  },
  {
    title: "Podar Education",
    description:
      "Educational network offering school operations and franchise support with digital solutions for admissions, payments, and student management.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "AWS"],
    image: podarEducation,
    link: "https://www.podareducation.org",
  },
]

// 🎬 Framer Motion Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 80, rotateY: 10, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    rotateY: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const Projects1 = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <motion.section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-900 to-black text-white perspective-1000"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold leading-[1.5] bg-gradient-to-br from-blue-600 via-cyan-400 to-green-400 bg-clip-text text-transparent"
        >
          My Projects
        </motion.h2>
        <p className="mt-4 text-gray-300 text-lg">
          A glimpse of my recent work
        </p>
      </div>

      {/* Project Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 px-6 md:px-20"
        variants={containerVariants}
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            animate={{
              y: [0, -10, 0], // floating motion
              rotateY: [0, 2, 0], // slight 3D wave
            }}
            transition={{
              duration: 4 + i, // small variation per card
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >

            
            <Tilt
              tiltMaxAngleX={3}
              tiltMaxAngleY={3}
              scale={1.05}
              transitionSpeed={2500}
              glareEnable={true}
              glareMaxOpacity={0.2}
              className="cursor-pointer"
            >
              <div
                onClick={() => {
                  setSelectedProject(project)
                  setIsModalOpen(true)
                }}
                className="bg-gray-800/60 backdrop-blur-lg rounded-xl overflow-hidden shadow-xl border border-gray-700 hover:border-blue-500 transition-all duration-500 hover:shadow-blue-500/20"
              >
                <LazyImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                />

                <div className="p-5">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="text-gray-400 mt-2 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tech.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-sm bg-blue-500/10 border border-blue-400/30 rounded-full text-blue-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-2 mt-4 text-blue-400 hover:text-blue-300 transition-colors">
                    <RiExternalLinkLine className="w-[18px]" />
                    <span>Preview</span>
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal Preview */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 text-white p-6 rounded-xl w-full max-w-2xl relative border border-gray-700"
              initial={{ scale: 0.8, opacity: 0, rotateX: -10 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl"
                onClick={() => setIsModalOpen(false)}
              >
                ✕
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="rounded-lg mb-4 w-full h-56 object-cover"
              />
              <h3 className="text-3xl font-semibold">
                {selectedProject.title}
              </h3>
              <p className="text-gray-300 mt-3 leading-relaxed">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {selectedProject.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-blue-500/10 border border-blue-400/30 rounded-full text-blue-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-blue-400 hover:text-blue-300 transition-colors"
              >
                Visit Project <RiExternalLinkLine className="w-[18px]" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}

export default Projects1
