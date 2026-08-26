import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Tilt from "react-parallax-tilt"
import { RiArrowRightLine, RiCloseLine, RiExternalLinkLine } from "react-icons/ri"
import LazyImage from "./shared/LazyImage"
import { projects, type Project } from "../data/projects"
import { IoFolderOutline } from "react-icons/io5"
import { FaLaptopCode } from "react-icons/fa6"
import TypeWriter from "./features/TypeWriter"


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showRespons, setShowRespons] = useState(false)

  return (
    <motion.section
      id="projects"
      className="rounded-lg bg-gradient-to-br from-[#060b20] to-[#041b2d] text-white"
      initial={{ opacity: 0.95, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Heading */}
      <div className="px-6 md:px-10 space-y-3 py-2 mb-12">
        <h3 className="mt-4 flex items-center gap-3 uppercase font-semibold text-gray-300">
          <IoFolderOutline className="text-xl" />
          My recent work
        </h3>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold leading-[1.25] bg-gradient-to-br from-white  via-gray-200 to-slate-400 bg-clip-text text-transparent"
        >
          Featured Projects 
        </motion.h2>
        {/* <p className="mt-4 text-gray-300 text-lg">
          “Code is not just logic — it’s the art of transforming ideas into experiences.”
        </p> */}
        <TypeWriter />
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 px-6 md:px-10 pb-4">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.015}>
              <div
                className="bg-gradient-to-bl from-[#5c6587] hover:from-blue-400 via-[#041b2d] to-[#6c7596] hover:to-blue-400 p-[1px] backdrop-blur-lg rounded-xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => {
                  setSelectedProject(project)
                  setIsModalOpen(true)
                }}
              >
                <div className="bg-gradient-to-br from-[#0f354d] via-[#041b2d] to-[#1c2a49] hover:to-blue-400/50 hover:backdrop-blur-lg rounded-xl overflow-hidden transition-all duration-300">
                  <LazyImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-60 object-cover hover:scale-110 transition-transform duration-500"
                  />

                  <div className="p-5">
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                    {/* <p className="text-gray-400 mt-2 line-clamp-3">{project.description}</p> */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tech.slice(0, 2).map((item, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-sm bg-blue-500/10 border border-blue-300/40 rounded-full text-blue-300"
                        >
                          {item}
                        </span>
                      ))}
                      {project.tech.length > 1 && (
                        <span className=" w-8 h-8 flex justify-center items-center px-3 py-1 text-sm bg-gray-700 rounded-full text-gray-300">
                          +{project.tech.length - 2}
                        </span>
                      )}
                    </div>
                    <div className="inline-flex items-center gap-2 mt-4 text-blue-400 hover:text-blue-300 transition-colors">
                      <RiExternalLinkLine className="w-[18px]" />
                      <span>Preview</span>
                    </div>
                  </div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-[500] px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="space-y-4 bg-gradient-to-br from-gray-900/30 via-gray-800/60 to-blue-800/30 hover:to-blue-400/40 text-white p-6 rounded-xl w-full max-w-xl relative border border-gray-700 transition-all ease-out duration-500"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute group -top-8 -right-3 md:-right-8 p-1 sm:p-2 text-gray-400 border rounded-full border-gray-400/60 cursor-pointer hover:text-white hover:scale-105 text-xl"
                onClick={() => setIsModalOpen(false)}
              >
                <RiCloseLine className="group-hover:rotate-180 transition-transform ease-in-out duration-500" />
              </button>

              <div className="w-full max-h-72 overflow-y-auto no-scrollbar rounded-lg">
                <LazyImage src={selectedProject.image}
                  alt={selectedProject.title}
                  className="rounded-lg mb-4 w-full max-h-72 sm:max-h-max h-full object-cover"
                />
              </div>

              <h3 className="text-3xl  font-semibold text-transparent bg-gradient-to-bl from-blue-500 via-cyan-300 to-green-300 bg-clip-text w-max">{selectedProject.title}</h3>
              <p className="text-gray-300 mt-3 leading-relaxed">
                {selectedProject.description}
              </p>

              
              {
                isModalOpen && selectedProject && showRespons && (
                  <motion.div
                    className="fixed inset-0 bg-sky/70 backdrop-blur-xl flex items-center justify-center z-[502] px-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.div
                      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 hover:to-gray-600/50 space-y-4 text-white p-4 py-8 rounded-lg max-w-[550px] w-full border border-gray-700"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                      transition={{ duration: 0.4, }}
                    >
                      <div className="list-disc text-xl list-inside text-transparent bg-gradient-to-br from-pink-400 via-cyan-300 to-green-300 bg-clip-text">
                        <h5 className="text-2xl flex items-center gap-3 underline underline-offset-2 font-bold py-2"><FaLaptopCode className="text-pink-400 text-2xl" />My contribution:</h5>
                        {selectedProject.my_respons.map((resp, i) => (
                          <p
                            key={i}
                            className="pl-2 py-1 font-semibold "
                          >
                            {`●  ` + resp}
                          </p>
                        ))}
                      </div>
                      <button
                        className="absolute group top-2 right-3 p-1 text-gray-400 border rounded-full border-gray-400/60 cursor-pointer hover:text-white hover:scale-110 text-xl"
                        onClick={() => setShowRespons(false)}
                      >
                        <RiCloseLine className="group-hover:rotate-90 transition-transform ease-in-out duration-500" />
                      </button>
                    </motion.div>
                  </motion.div>
                )
              }

              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-lg font-medium text-blue-200">Tech Stack: </span>
                {selectedProject.tech.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-blue-400/10 border border-blue-400/30 rounded-full text-blue-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex justify-center flex-col gap-3 items-center mt-6 md:flex-row sm:gap-2 md:gap-3">
                <div
                  className="relative group cursor-pointer font-bold py-2 text-lg flex justify-center gap-1 items-center border border-gray-400/80 hover:border-blue-600/90 rounded-md overflow-hidden  w-[270px] hover:gap-4"
                  onClick={()=> setShowRespons(true)}
                >
                  {/* <span className="absolute inset-0 bg-gradient-to-r w-[50%] from-blue-500 to-green-400 rounded-lg blur-xl opacity-70 hover:opacity-90 transition-all"></span> */}
                  <RiArrowRightLine className=" text-xl text-pink-600 font-bold opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-2 transition-all duration-500 ease-out" />
                  <span className=" font-semibold -translate-x-1 group-hover:translate-x-1  transition-transform duration-500 ease-out text-transparent bg-gradient-to-r from-pink-500 via-cyan-300 to-green-300 bg-clip-text">My contributions</span>
                  <RiArrowRightLine className=" text-xl text-green-300 font-bold opacity-100 group-hover:opacity-0 -translate-x-1 group-hover:translate-x-10 transition-all duration-500 ease-out" />
                </div>

                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  // className="inline-flex items-center gap-2 mt-6 text-blue-400 hover:text-blue-300 transition-colors"
                  className="relative group cursor-pointer font-bold py-2 text-lg flex justify-center gap-1 items-center border border-gray-400/80 hover:border-blue-600/90 rounded-md overflow-hidden  w-[270px] hover:gap-4"
                >
                  {/* <span className="absolute inset-0 bg-gradient-to-r w-[50%] from-blue-500 to-green-400 rounded-lg blur-xl opacity-70 hover:opacity-90 transition-all"></span> */}
                  <RiExternalLinkLine className=" text-xl text-blu-500 font-bold opacity-0 group-hover:opacity-100 -translate-x-10 group-hover:translate-x-2 transition-all duration-500 ease-out" />
                  <span className=" font-semibold -translate-x-1 group-hover:translate-x-1  transition-transform duration-500 ease-out text-transparent bg-gradient-to-r from-gray-300 via-sky-500 to-gray-300 bg-clip-text"> Visit Project</span>
                  <RiExternalLinkLine className=" text-xl text-gray-300 font-bold opacity-100 group-hover:opacity-0 -translate-x-1 group-hover:translate-x-10 transition-all duration-500 ease-out" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}

export default Projects
