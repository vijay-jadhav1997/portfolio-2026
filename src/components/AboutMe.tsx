import Tilt from "react-parallax-tilt"
import { motion } from "framer-motion"
import { FaUserGraduate } from "react-icons/fa6"
import { RiHomeGearLine, RiStackFill } from "react-icons/ri"

import GradientBorder from "./shared/GradientBorder"
import { FiTool } from "react-icons/fi"
import { myExpertise, mySpecialization } from "../data/skillsData"
import { IoPersonOutline } from "react-icons/io5"
import { AiOutlineProduct } from "react-icons/ai"
import { MdArrowOutward } from "react-icons/md"

const AboutMe = () => {
 
  
  return (
    <motion.section
      id="about-me"
      className="w-full text-white bg-[#06131B] rounded-xl space-y-10 md:space-y-16 shadow-lg px-2 sm:px-4 py-10"
      initial={{ opacity: 0.95, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut'}}
      // viewport={{ once: false, }}
    >
      {/* <section id="about" className='w-full text-white bg-[#06131B] rounded-xl space-y-8 md:space-y-10 lg:space-y-12 shadow-lg px-4 py-10'> */}
        <GradientBorder glow="bottom-left">
          <div className="w-full pt-6 pb-12 px-6 md:px-8 lg:px-10 xl:px-8 space-y-4 md:space-y-4 bg-gradient-to-br from-[#012a44] to-[#010130]  transition-all duration-200 rounded-xl overflow-hidden">
            <div className="text-blue-400 flex items-center gap-2 md:gap-3  w-max ">
              <RiHomeGearLine className="text-xl md:text-2xl text-blue-400"/>
              <h5 className="sm:text-xl text-lg font-semibold uppercase">INTRODUCE</h5>
            </div>
            <h2 className="lg:text-5xl text-2xl sm:text-3xl md:text-4xl font-bold leading-[1.25]">
              Say Hi from 
              <span className="bg-gradient-to-br from-blue-500 via-blue-300 to-green-300 bg-clip-text text-transparent px-1">
                Vijay Jadhav
              </span>
              , A 
              <span className="bg-gradient-to-br from-cyan-500 via-cyan-300 to-sky-300 bg-clip-text text-transparent px-1">
                Full Stack Developer
              </span> 
              .
            </h2>
            <p className="text-gray-300 text-lg">
              Having 4+ years of experience in building, optimizing, and deploying scalable web applications. Skilled in React.js, Next.js, Node.js, TypeScript, and MongoDB. Adept in cloud platforms (AWS), containerization (Docker, Kubernetes), and CI/CD. Focused on creating efficient, high-performance, secure, robust and reliable web solutions aligned with modern development standards. Collaborative, agile-driven developer committed to clean code, system reliability, and continuous learning
            </p>
            {/* <p className="text-gray-300 text-lg">I have more than three years of experience with MERN stack. And I can Design Your web application.</p> */}
          </div>
        </GradientBorder>


        <div className="w-full space-y-3  px-4 md:px-6 py-2">
          <div className="text-gray-300 flex items-center gap-2 md:gap-3  w-max ">
            <AiOutlineProduct className="text-2xl text-gray-300"/>
            <h5 className="text-xl font-semibold uppercase">My PRODUCTS</h5>
          </div>
          <h2 className="text-2xl sm:text-3xl my-3 font-semibold leading-[1.25]">
            Tools and solutions I’ve built to simplify developer workflows.
          </h2>
          <p className="text-gray-400 group-hover:text-gray-300 text-lg italic">
            “I believe in creating tools that make developers faster, happier, and more productive.”
          </p>
          <p className="bg-gradient-to-br from-pink-600 font-bold to-blue-400 bg-clip-text text-transparent text-2xl">
            Every great product begins with a line of thoughtful code.
          </p>
          <div className="mt-6 space-y-6 sm:space-y-8 md:mt-8 sm:mt-6 lg:mt-8">
            <motion.div
              initial={{opacity: 0, x: 0, y: 50}}
              whileInView={{opacity: 1, x: 0, y: 0}}
              transition={{duration: 0.5, ease: "easeOut", delay: 0.5}}
            >
              <Tilt
                tiltMaxAngleX={2}
                tiltMaxAngleY={3}
                scale={1.0001}
              >
                <GradientBorder glow="bottom-left">
                  <div className="w-full group p-8 pb-2 bg-gradient-to-br from-[#00131f] md:to-[#123354]  hover:to-[#1a3f64] to-[#1a3f64] transition-all duration-200 rounded-md border md:border-[#062539] hover:border-blue-500/60 border-blue-500/60">
                    <div className="space-y-0.5 mb-2">
                      <h6 className="text-2xl md:text-4xl flex items-center gap-2 text-transparent font-bold w-max bg-gradient-to-br from-blue-500 via-sky-400 to-green-400 bg-clip-text">
                        {/* <span className="px-2 rounded-lg flex justify-center items-center object-contain bg-white">
                          <FaNpm className="text-3xl text-red-500" />
                        </span> */}
                        tsnode-app-cli
                      </h6>
                      
                      {/* <button className="py-1 px-2 rounded-sm bg-gray-600 text-gray-100 group-hover:bg-sky-400">First Class - Grade A</button> */}
                      <p className="text-gray-300 mt-3 text-lg list-disc">
                        Developed and published an open-source npm package — a CLI tool that automates Express.js + TypeScript project scaffolding. Enables developers to generate production-ready backend setups following MVC architecture, complete with environment files and boilerplate configurations.
                      </p>
                      <a href="https://npmjs.com/package/tsnode-app-cli" target="_blank" 
                        className="text-xl text-blue-400 border px-6 py-1 hover:scale-105 hover:text-blue-600 transition-all ease-out duration-200 cursor-pointer w-max mt-8 rounded-3xl flex gap-2 items-center"
                      >
                        {/* <RiLink className="text-xl font-bold text-blue-400" /> */}
                        Preview
                        <MdArrowOutward className="text-xl font-bold text-blue-400" />
                      </a>
                    </div>
                  </div>
                </GradientBorder>
              </Tilt>
            </motion.div>
          </div>
        </div>

        
        <div className="w-full space-y-4  px-4 md:px-6 py-2">
          <div className="text-gray-300 flex items-center gap-2 md:gap-3  w-max ">
            <FiTool className="text-2xl text-gray-300"/>
            <h5 className="sm:text-xl text-lg font-medium uppercase">My Expertise</h5>
          </div>
          <h2 className="sm:text-xl text-lg text-gray-200 my-3 leading-[1.25]">
            Clean code, clear logic, and consistent excellence.
          </h2>

          <div className="space-y-6 mt-10">
            {
              myExpertise.map((expertise, i)=>(
                <div key={i} className="space-y-3 ">
                  <div className="flex items-center justify-between">
                    <h6 className="text-gray-300 text-lg font-medium capitalize">{expertise.name}</h6>
                    <span className="text-gray-400">{expertise.score}%</span>
                  </div>
                  <div className="rounded-2xl w-full bg-blue-600/40 relative overflow-hidden">
                    <motion.div
                      className={`bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-600  h-[10px] `}
                      style={{width: `${expertise.score}%`}}
                      initial={{width: '0%'}}
                      whileInView={{width: `${expertise.score}%`}}
                      transition={{duration:0.5, delay: 0.4}}
                    ></motion.div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        
        <div className="w-full pt-6 pb-16 px-6 md:px-8 lg:px-10 xl:px-8 space-y-6 bg-gradient-to-br from-[#00131f] md:to-[#123354]  hover:to-[#1a3f64] to-[#1a3f64]  transition-all duration-200 rounded-xl border md:border-[#062539] hover:border-blue-500/60 border-blue-500/60">
          <div className="text-gray-400 flex items-center gap-2 md:gap-4  w-max  ">
            <IoPersonOutline className="text-xl md:text-2xl text-gray-400"/>
            <h5 className="text-xl font-semibold uppercase">ABOUT ME</h5>
          </div>

          <p className="text-gray-300 text-lg">
            I’m a results-driven Full Stack Developer focused on writing elegant, maintainable, and high-performance code.  
            My passion lies in turning ideas into interactive, efficient, and visually appealing digital experiences.  
          </p>
          <p className="text-gray-300 text-lg">
           💡 “I love scalability, clean architecture, cloud-powered systems, and bringing ideas to life — from concept to production.”
          </p>
        </div>

        <div className="w-full space-y-3  px-4 md:px-6 py-2">
          <div className="text-gray-300 flex items-center gap-2 md:gap-3  w-max ">
            <FaUserGraduate className="text-2xl text-gray-300"/>
            <h5 className="text-xl font-semibold uppercase">My RESUME</h5>
          </div>
          <h2 className="text-2xl sm:text-3xl my-3 font-semibold leading-[1.25]">
            Experience & Education
          </h2>
          <div className="mt-6 space-y-6 sm:space-y-8 md:mt-8 sm:mt-6 lg:mt-8">
            <motion.div
              initial={{opacity: 0, x: 0, y: 50}}
              whileInView={{opacity: 1, x: 0, y: 0}}
              transition={{duration: 0.5, ease: "easeOut", delay: 0.5}}
            >
              <Tilt
                tiltMaxAngleX={2}
                tiltMaxAngleY={3}
                scale={1.0001}
              >
                <GradientBorder glow="bottom-left">
                  <div className="w-full group p-8 bg-gradient-to-br from-[#00131f] md:to-[#123354]  hover:to-[#1a3f64] to-[#1a3f64] transition-all duration-200 rounded-md border md:border-[#062539] hover:border-blue-500/60 border-blue-500/60">
                    <div className="space-y-0.5 mb-2">
                      <h6 className="text-2xl text-transparent font-bold capitalize bg-gradient-to-r from-blue-500 via-sky-400 to-green-400 bg-clip-text">Software Developer</h6>
                      <p className="text-xl text-gray-100">
                        NADSOFT IT Solution - Pune, India 
                      </p>
                      <p className="text-gray-400 group-hover:text-gray-300 text-lg italic">
                        Nov 2025 – Aug 2026
                      </p>
                      {/* <button className="py-1 px-2 rounded-sm bg-gray-600 text-gray-100 group-hover:bg-sky-400">First Class - Grade A</button> */}
                    </div>
                    <ul className="text-gray-300 mt-3 text-lg list-disc space-y-2">
                    <li>
                      Developed and contributed multiple features for <strong>production-grade, multi-tenant e-commerce applications</strong> using React.js, Next.js, Node.js, TypeScript, PostgreSQL, and MongoDB.
                    </li>
                    <li>
                      Built scalable <strong>REST APIs, backend services, and reusable UI components</strong> with a focus on clean architecture, performance, and maintainability.
                    </li>
                    <li>
                      Implemented <strong>Shopify integrations</strong> including OAuth, product/order/customer synchronization, webhooks, and GDPR compliance workflows.
                    </li>
                    <li>
                      Integrated multiple <strong>payment gateways</strong> including Stripe, Razorpay, Authorize.Net, and NMI, handling payments, webhooks, and transaction workflows.
                    </li>
                    <li>
                      Worked with <strong>AWS, Docker, Redis, CI/CD, and asynchronous background processing</strong> to build and deploy reliable cloud-based services.
                    </li>
                    <li>
                      Delivered complex <strong>sales, subscriptions, orders, invoices, and reporting features</strong> while collaborating through GitHub, Jira, code reviews, and Agile workflows.
                    </li>
                  </ul>

                  </div>
                </GradientBorder>
              </Tilt>
            </motion.div>
            <motion.div
              initial={{opacity: 0, x: 0, y: 50}}
              whileInView={{opacity: 1, x: 0, y: 0}}
              transition={{duration: 0.5, ease: "easeOut", delay: 0.5}}
            >
              <Tilt
                tiltMaxAngleX={2}
                tiltMaxAngleY={3}
                scale={1.0001}
              >
                <GradientBorder glow="bottom-left">
                  <div className="w-full group p-8 bg-gradient-to-br from-[#00131f] md:to-[#123354]  hover:to-[#1a3f64] to-[#1a3f64] transition-all duration-200 rounded-md border md:border-[#062539] hover:border-blue-500/60 border-blue-500/60">
                    <div className="space-y-0.5 mb-2">
                      <h6 className="text-2xl text-transparent font-bold capitalize bg-gradient-to-r from-blue-500 via-sky-400 to-green-400 bg-clip-text">Full Stack Web Developer (MERN Stack)</h6>
                      <p className="text-xl text-gray-100">
                        Techsunset - Bengaluru, India 
                      </p>
                      <p className="text-gray-400 group-hover:text-gray-300 text-lg italic">
                        Apr 2022 – Oct 2025
                      </p>
                      {/* <button className="py-1 px-2 rounded-sm bg-gray-600 text-gray-100 group-hover:bg-sky-400">First Class - Grade A</button> */}
                    </div>
                    <ul className="text-gray-300 mt-3 text-lg list-disc">
                      <li>
                        Contributed to developing and deploying multiple real-world web applications that handled 100k+ users and
                        Restful APIs in a team environment. 
                      </li>
                      <li>Delivered scalable full-stack applications using React.js, Node.js, Next.js, and TypeScript.</li>
                      <li>Built secure REST APIs, modular UI components, and cloud-deployed services on AWS.</li>
                      <li>Collaborated in an Agile team using GitHub, Jira, and CI/CD pipelines.  </li>
                      <li>Focused on clean architecture, reusability, and high performance across projects.  </li>
                    </ul>
                  </div>
                </GradientBorder>
              </Tilt>
            </motion.div>

            <motion.div
              initial={{opacity: 0, x: 0, y: 50}}
              whileInView={{opacity: 1, x: 0, y: 0}}
              transition={{duration: 0.5, ease: "easeOut", delay: 0.5}}
            >
              <Tilt
                tiltMaxAngleX={2}
                tiltMaxAngleY={3}
                scale={1.0001}
              >
                <GradientBorder glow="bottom-left">
                  <div className="w-full group p-8 bg-gradient-to-br from-[#00131f] md:to-[#123354]  hover:to-[#1a3f64] to-[#1a3f64] transition-all duration-200 rounded-md border md:border-[#062539] hover:border-blue-500/60 border-blue-500/60">
                    <div className="space-y-0.5 mb-2">
                      <h6 className="text-2xl text-transparent font-bold capitalize bg-gradient-to-r from-blue-500 via-sky-400 to-green-400 bg-clip-text">MERN Stack Web Development</h6>
                      <p className="text-xl text-gray-100">
                        WAP Institute
                      </p>
                      <p className="text-gray-400 group-hover:text-gray-300 text-lg italic">
                        (Apr 2020 – Jan 2021)
                      </p>
                      {/* <button className="py-1 px-2 rounded-sm bg-gray-600 text-gray-100 group-hover:bg-sky-400">First Class - Grade A</button> */}
                    </div>
                    <p className="text-gray-300 mt-3 text-lg">
                      Mastered MERN technologies, scalability, clean code, Restful & secure API design, authentication & authorization, and beyond.
                      {/* Studied core engineering principles, developing strong skills in creative problem-solving, technical evaluation, and integrated systems thinking. */}
                    </p>
                  </div>
                </GradientBorder>
              </Tilt>
            </motion.div>

            <motion.div
              initial={{opacity: 0, x: 0, y: 50}}
              whileInView={{opacity: 1, x: 0, y: 0}}
              transition={{duration: 0.5, ease: "easeOut", delay: 0.5}}
            >
              <Tilt
                tiltMaxAngleX={2}
                tiltMaxAngleY={3}
                scale={1.0001}
              >
                <GradientBorder glow="bottom-left">
                  <div className="w-full group p-8 bg-gradient-to-br from-[#00131f] md:to-[#123354]  hover:to-[#1a3f64] to-[#1a3f64] transition-all duration-200 rounded-md border md:border-[#062539] hover:border-blue-500/60 border-blue-500/60">
                    <div className="space-y-0.5 mb-2">
                      <h6 className="text-2xl text-transparent font-bold capitalize bg-gradient-to-r from-blue-500 via-sky-400 to-green-400 bg-clip-text">Bachelor of engineering</h6>
                      <p className="text-xl text-gray-100">
                        Savitribai Phule Pune University (2016 - 2020)
                      </p>
                      <p className="text-gray-400 group-hover:text-gray-300 text-lg italic">
                        First Class - Grade A
                      </p>
                      {/* <button className="py-1 px-2 rounded-sm bg-gray-600 text-gray-100 group-hover:bg-sky-400">First Class - Grade A</button> */}
                    </div>
                    <p className="text-gray-300 mt-3 text-lg">
                      Studied core engineering principles, developing strong skills in creative problem-solving, technical evaluation, and integrated systems thinking.
                    </p>
                  </div>
                </GradientBorder>
              </Tilt>
            </motion.div>
          </div>
        </div>

        
        <div className="w-full space-y-3  px-4 md:px-6 py-2">
          <div className="text-gray-300 flex items-center gap-2 md:gap-3  w-max ">
            <RiStackFill className="text-2xl text-gray-300"/>
            <h5 className="text-xl font-medium uppercase">My Skills</h5>
          </div>
          <h2 className="text-2xl sm:text-3xl my-3 font-semibold leading-[1.25]">
            My Specializations
          </h2>

          <div className="flex items-center flex-wrap gap-8 mt-10 ">
            {
              mySpecialization.map((skill, i)=>(
                <GradientBorder key={i} fromColor="bg-gray-800/10" toColor="bg-gray-800/10" glowOpacity="group-hover:opacity-70" glow="bottom-left">
                  <div className="flex flex-col backdrop-blur-3xl gap-3 sm:w-48 w-40 h-36 sm:h-44 justify-center items-center bg-gray-500/10">
                    <div className="w-10 rounded-lg overflow-hidden">
                      <img src={skill.img} alt={skill.name} className="w-full object-contain" />
                    </div>
                    <h6 className="md:text-4xl text-2xl sm:text-3xl font-bold text-gray-100">{skill.score}%</h6>
                    <span className="text-gray-300 text-lg sm:text-xl capitalize">{skill.name}</span>
                  </div>
                </GradientBorder>
              ))
            }

          </div>
        </div>
        

      {/* </section> */}
    </motion.section>
  )
}

export default AboutMe