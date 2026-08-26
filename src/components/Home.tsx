import { backendTechs, cloudAndDevOps, frontendTechs, workflowAndTools } from "../data/skillsData"
import Tilt from "react-parallax-tilt"
import { motion } from "framer-motion"
import GradientBorder from "./shared/GradientBorder"
import techsunsetLogo from "/techsunset-logo.webp"
import nadsoftLogo from "/nadosft_it_solution_cover.webp"


function Home() {
  return (
    <motion.section
      id="home"
      className="space-y-4"
      initial={{ opacity: 0.95, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut'}}
      viewport={{ once: true }}
    >

      <Tilt tiltMaxAngleX={3} tiltMaxAngleY={2} scale={1.0001}>
        <GradientBorder rounded="xl" fromColor="from-[#00131f]" toColor="from-[#00131f]">
          <div className="space-y-4 p-4 pb-8 bg-gradient-to-br from-[#00131f] to-[#0c2034] rounded-xl">
            <motion.h2 
              initial={{width: 0}}
              whileInView={{width: "100%"}}
              transition={{delay:0.2, duration: 1, type: "keyframes"}}
              className="text-2xl md:text-3xl mb-6 font-semibold text-gray-200 text-nowrap">
              Work Experience 
            </motion.h2>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 md:px-6 lg:px-10 py-6 md:py-4 text-gray-100 w-full  rounded-md bg bg-gray-600/20">
              <div className="overflow-hidden rounded-md p-1 bg-white w-32">
                <img src={nadsoftLogo}  alt="nadsoft" 
                  className=" w-full object-contain "
                />
              </div>
              <span className="hidden sm:block">-</span> 
              <span className="text-gray-300 italic text-sm">Nov 2025 - Aug 2026</span>
              <span className="hidden sm:block">-</span> 
            
              <div className=" flex flex-col items-center gap-1 md:gap-2 text-xl font-semibold text-white ">
                NADSOFT IT Solution
                <span className="text-sm md:text-base font-normal text-center text-gray-300 ">
                  Software Developer 
                  {/* <span className="text-gray-300 italic text-sm">Pune, India</span> */}
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 md:px-6 lg:px-10 py-6 md:py-4 text-gray-100 w-full  rounded-md bg bg-gray-600/20">
              <div className="overflow-hidden rounded-md p-1 bg-white w-32">
                <img src={techsunsetLogo}  alt="techsunset" 
                  className=" w-full object-contain "
                />
              </div>
              <span className="hidden sm:block">-</span> 
              <span className="text-gray-300 italic text-sm">Apr 2022 - Sept 2025</span>
              <span className="hidden sm:block">-</span> 
            
              <div className=" flex flex-col items-center gap-1 md:gap-2 text-xl font-semibold text-white ">
                Techsunset
                <span className="text-sm md:text-base font-normal text-center text-gray-300 ">
                  Full Stack Web Developer (MERN)
                  {/* <span className="text-gray-300 italic text-sm">Bengaluru, India</span> */}
                </span>
              </div>
            </div>
          </div>
        </GradientBorder>
      </Tilt>

      <div className="space-y-6 w-full py-6 px-2 sm:px-6 bg-gradient-to-br from-[#00131f] to-[#0c2034] rounded-xl">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-200">My Tech Skills</h2>
        <Tilt tiltMaxAngleX={3} tiltMaxAngleY={2} scale={1.0001}>
          <GradientBorder rounded="xl" fromColor="from-[#00131f]" toColor="from-[#00131f]">
            <div className="space-y-4 p-4">
              <h3 className="text-xl font-medium text-white">Backend technologies</h3>
              <div className="flex gap-6 items-center flex-wrap">
                {backendTechs.map((tech, i)=>(
                  <div key={tech.name} className="flex flex-col items-center gap-2 sm:gap-3">
                    <div className="px-6 py-3 sm:w-[120px] sm:h-[80px] w-[90px] h-[60px] flex justify-center items-center rounded-md bg bg-gray-500/10">
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 60 , x:30}}
                        whileInView={{ opacity: 1, y: 0 , x:0}}
                        transition={{ duration: 0.6, delay: i * 0.16, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }}
                      >
                        <img src={tech.img}  alt="nodejs" className={`rounded w-[35px] sm:w-[50px]`} />
                      </motion.div>
                    </div>
                    <h4 className="text-gray-300 font-medium">{tech.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </GradientBorder>
        </Tilt>
        <Tilt tiltMaxAngleX={3} tiltMaxAngleY={2} scale={1.0001}>
          <GradientBorder rounded="xl" fromColor="from-[#00131f]" toColor="from-[#00131f]">
            <div className="space-y-4 p-4">
              <h3 className="text-xl font-medium text-white">Infrastructure & DevOps:</h3>
              <div className="flex gap-6 items-center flex-wrap">
                {cloudAndDevOps.map((tech, i)=>(
                  <div key={tech.name} className="flex flex-col items-center gap-2 sm:gap-3">
                    <div className="px-6 py-3 sm:w-[120px] sm:h-[80px] w-[90px] h-[60px] flex justify-center items-center rounded-md bg bg-gray-500/10">
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 60 , x:30}}
                        whileInView={{ opacity: 1, y: 0 , x:0}}
                        transition={{ duration: 0.6, delay: i * 0.16, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }}
                      >
                        <img src={tech.img}  alt="nodejs" className={`rounded w-[35px] sm:w-[50px]`} />
                      </motion.div>
                    </div>
                    <h4 className="text-gray-300 font-medium">{tech.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </GradientBorder>
        </Tilt>
        <Tilt tiltMaxAngleX={3} tiltMaxAngleY={2} scale={1.0001}>
          <GradientBorder rounded="xl" fromColor="from-[#00131f]" toColor="from-[#00131f]">
            <div className="space-y-4 p-4">
              <h3 className="text-xl font-medium text-white">Frontend technologies</h3>
              <div className="flex gap-6 items-center flex-wrap">
                {frontendTechs.map((tech, i)=>(
                  <div key={tech.name} className="flex flex-col items-center gap-2 sm:gap-3">
                    <div className="px-6 py-3 sm:w-[120px] sm:h-[80px] w-[90px] h-[60px] flex justify-center items-center rounded-md bg bg-gray-500/10">
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 60 , x:30}}
                        whileInView={{ opacity: 1, y: 0 , x:0}}
                        transition={{ duration: 0.6, delay: i * 0.16, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }}
                      >
                        <img src={tech.img}  alt="nodejs" className={`rounded w-[35px] sm:w-[50px]`} />
                      </motion.div>
                    </div>
                    <h4 className="text-gray-300 font-medium">{tech.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </GradientBorder>
        </Tilt>
        <Tilt tiltMaxAngleX={3} tiltMaxAngleY={2} scale={1.0001}>
          <GradientBorder rounded="xl" fromColor="from-[#00131f]" toColor="from-[#00131f]">
            <div className="space-y-4 p-4">
              <h3 className="text-xl font-medium text-white">Workflow & Tools</h3>
              <div className="flex gap-6 items-center flex-wrap">
                {workflowAndTools.map((tech, i)=>(
                  <div key={tech.name} className="flex flex-col items-center gap-2 sm:gap-3">
                    <div className="px-6 py-3 sm:w-[120px] sm:h-[80px] w-[90px] h-[60px] flex justify-center items-center rounded-md bg bg-gray-500/10">
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 60 , x:30}}
                        whileInView={{ opacity: 1, y: 0 , x:0}}
                        transition={{ duration: 0.6, delay: i * 0.16, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }}
                      >
                        <img src={tech.img}  alt="nodejs" className={`rounded w-[35px] sm:w-[50px]`} />
                      </motion.div>
                    </div>
                    <h4 className="text-gray-300 font-medium">{tech.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </GradientBorder>
        </Tilt>
      </div>
    {/* </section> */}
    </motion.section>
  )
}

export default Home