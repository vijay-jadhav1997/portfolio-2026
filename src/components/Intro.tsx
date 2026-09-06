import { useState } from 'react'
import { toast } from 'react-toastify'
import Tilt from "react-parallax-tilt"

import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { IoCopyOutline, IoMailOutline, IoReloadCircleOutline } from 'react-icons/io5'
import { FaGithub, FaWhatsapp } from 'react-icons/fa'
import { FiPhoneCall } from 'react-icons/fi'
// import { motion } from "framer-motion"

import IconButton from './shared/IconButton'
import LazyImage from './shared/LazyImage'
import GradientBorder from './shared/GradientBorder'
import { openWhatsAppMessage, sendEmail, triggerPhoneCall } from '../utils/contact'

import profileImg from '/vijay01.webp'
import { ImNpm } from 'react-icons/im'


function Intro() {
  const [loading, setLoading] = useState(false)

  const copyEmailToClipboard = async () => {
    try {
      setLoading(true)
      const email = 'vijayjadhav.techsunet@gmail.com'

      await navigator.clipboard.writeText(email)
      toast.success('📧 Email copied to clipboard!', {position:'bottom-center'})
    } catch (err:unknown) {
      if(err instanceof Error)
        console.error(err.message)
        
      toast.error('❌ Failed to copy email', {position:'bottom-center'})
    } finally{
      setLoading(false)
    }
  }

  

  return (
    <section id='intro' className='xl:max-w-4/12 xl:sticky xl:top-6  max-h-screen overflow-y-auto no-scrollbar '>
      <Tilt tiltMaxAngleX={3} tiltMaxAngleY={2} scale={1.0001}>
        <GradientBorder >
          <div className="overflow-hidden  bg-[#06131B] pb-6 md:px-6 lg:px-2 px-2 sm:px-4  rounded-lg space-y-4 xl:pt-2 ">
            <div className="w-full space-y-4 md:space-y-6 xl:space-y-4 px-4 xl:px-2 md:px-8 lg:px-12">
              <div id='profile-img' className="p-1 pb-0 lg:max-w-[600px] w-full max-w-[450px]  mx-auto rounded-sm overflow-hidden ">
                {/* <img className='w-full drop-shadow-2xl drop-shadow-blue-500/40 overflow-hidden rounded-md' src={profileImg} alt="profile" /> */}
                <LazyImage className='w-full h-full hover:scale-105 transition-transform duration-300 ease-in-out drop-shadow-2xl drop-shadow-blue-500/40 rounded-md' src={profileImg} alt="profile" />
              </div>
              <div className="space-y-2">
                <h1 className='text-3xl text-white font-bold'>Vijay Jadhav</h1>
                {/* <p className="text-gray-300">A passionate Full Stack (MERN) Developer with 3.5+ years of experience crafting robust scalable APIs, fluid UI interactions, and seamless user experiences.</p> */}
                <p className="text-gray-300 sm:text-lg">
                  Experienced Software Developer with 4+ years of expertise in building high-performance web apps, microservices, and crafting intuitive UIs using Node.js, React, Next.js, and modern cloud-native technologies. 
                  <span className='block'>💡 "Code. Scale. Innovate. - is my Mantra."</span>
                </p>
              </div>

              <div className="space-y-2 bg-[#141C21] rounded-lg p-4 ">
                <p className="text-gray-200">Phone: +91 9112872176</p>
                <p className="text-gray-200">Email: vijay.jadhav1997.dev@gmail.com</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <IconButton onClick={triggerPhoneCall} title='Book A Call' icon={<FiPhoneCall />}/>
                <IconButton onClick={copyEmailToClipboard} title='Copy Email' 
                  icon={ loading ? <IoReloadCircleOutline/> : <IoCopyOutline />}
                />
              </div>

              

              <div className="flex justify-center items-center py-4 px-6 gap-4">
                <a className='' href="https://x.com/VijayJadha93653" target='_blank'>
                  <button className='text-white hover:bg-white hover:text-black transition-all hover:scale-125 duration-500 cursor-pointer bg-[#152F41] grid place-items-center rounded-full h-10 w-10'><FaXTwitter /></button>
                </a>
                <a className='' onClick={()=>openWhatsAppMessage()}>
                  <button className='text-green-400 hover:bg-green-400 hover:text-white transition-all hover:scale-125 cursor-pointer bg-[#152F41] grid place-items-center rounded-full h-10 w-10'><FaWhatsapp /></button>
                </a>
                <a className='' onClick={() => sendEmail()}>
                  <button className='hover:bg-blue-400 hover:text-white text-blue-500 transition-all hover:scale-125 cursor-pointer bg-[#152F41] grid place-items-center rounded-full h-10 w-10'><IoMailOutline /></button>
                </a>
                <a className='' href="https://github.com/vijay-jadhav1997" target='_blank'>
                  <button className='text-white hover:bg-white hover:text-black transition-all hover:scale-125 duration-500 cursor-pointer bg-[#152F41] grid place-items-center rounded-full h-10 w-10'><FaGithub /></button>
                </a>
                <a className='' href="https://linkedin.com/in/vijay-jadhav1997" target='_blank'>
                  <button className='text-white hover:bg-white hover:text-blue-600 transition-all hover:scale-125 duration-500 cursor-pointer bg-[#152F41] grid place-items-center rounded-full h-10 w-10'><FaLinkedinIn /></button>
                </a>
                <a className='' href="https://www.npmjs.com/~vijay-jadhav1997" target='_blank' title="NPM">
                  <button className='text-red-500 group  hover:bg-red-500 hover:text-white transition-all hover:scale-125 duration-500 cursor-pointer bg-[#152F41] grid place-items-center rounded-full h-10 w-10'><ImNpm className="" /></button>
                </a>
              </div>
            </div>
          </div>
        </GradientBorder>
      </Tilt>
    </section>
  )
}

export default Intro