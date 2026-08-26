import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn, FaRegClock, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { openWhatsAppMessage, sendEmail } from "../utils/contact";
import { IoMailOutline } from "react-icons/io5";
import GradientBorder from "./shared/GradientBorder";
import Input from "./shared/Input";
import TextArea from "./shared/TextArea";
import IconButton from "./shared/IconButton";
import { RiArrowRightLine } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import ContactForm from "./shared/ContactForm";
import { ImNpm } from "react-icons/im";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
      className="relative w-[96%] max-w-[1324px] mx-auto mt-10 
        sm:px-4 pt-3 md:px-10 xl:px-6 xl:gap-x-8 gap-y-10 
      "
    >
      <div 
        className="
          rounded-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-8 gap-y-10 bg-gray-900 px-2 py-6 sm:py-8 sm:px-4 md:px-6 lg:py-16
        "
      >
        <GradientBorder rounded="xl" >
          <div className="relative px-4 sm:px-6 min-h-[440px] lg:px-8 rounded-xl xl:px-6 bg-gradient-to-br from-[#06131B] via-[#101d32] to-[#06131B] text-gray-300">
            <div className="relative z-10 flex flex-col gap-2 justify-center py-10 px-2 ">
              <h2 className="text-3xl font-bold bg-gradient-to-br from-blue-400 via-teal-300 to-green-500 bg-clip-text text-transparent mb-2">
                Vijay Jadhav
              </h2>
              <p className=" text-gray-300">
                Full Stack MERN Developer | Crafting scalable, cloud-ready solutions.
              </p>
              <p className=" text-gray-300 mb-4">
                💡 "Code. Scale. Innovate. - is my Mantra."
              </p>
              <a href="tel:919112872176" className="flex items-center gap-3 mb-3 text-blue-200 hover:text-blue-400 "><FiPhoneCall className="text-2xl text-blue-400" /> +919112872176</a>
              <p className="flex items-center gap-3 mb-3 text-gray-100"><FaRegClock  className="text-2xl text-blue-400" /> 24 x 7 available</p>
              <div className="flex  mb-6  gap-2 sm:gap-3">
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


              <div className="h-[1px] bg-gray-400/60 w-full mt-4 mb-2"></div>
              <p className="text-lg text-center mt-2 text-gray-500">
                © {new Date().getFullYear()} Vijay Jadhav. All rights reserved.
              </p>
            </div>
          </div>
        </GradientBorder>

        <GradientBorder rounded="xl" >
          <div className="w-full min-h-[440px] flex items-center bg-gradient-to-br from-[#06131B] via-[#101d32] to-[#06131B]">
            <ContactForm 
              className='w-full space-y-10 py-6 lg:py-8 px-4 sm:px-10'
                name="contact" 
              >
                {/* bg-gradient-to-br from-[#06131b] via-[#0a1e2a] to-[#0a2333] */}
                {/* <input type="hidden" name="form-name" value="contact" /> */}
                
                <Input name="email" type="email" required={true} />
                <TextArea name="message" rows={2} required={true}></TextArea>
                <IconButton rounded="rounded-md" padding="py-3 px-6" title="Contact With Me"
                  icon={<RiArrowRightLine/>} cornerGlow="blur-md" hoverGlow="hover:blur-md"
                  type="submit"
                />
            </ContactForm>
          </div>
        </GradientBorder>
      </div>

    </motion.footer>
  );
};

export default Footer;
