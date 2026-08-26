import { MdOutlineMail } from "react-icons/md"
import { motion } from "framer-motion"
import Input from "./shared/Input"
import TextArea from "./shared/TextArea"
import IconButton from "./shared/IconButton"
import { RiArrowRightLine, RiPhoneLine } from "react-icons/ri"
import { triggerPhoneCall } from "../utils/contact"
import ContactForm from "./shared/ContactForm"

const ContactMe = () => {
  return (
    <motion.section
      id="contact-me"
      className="w-full space-y-4 py-8"
      initial={{ opacity: 0.95, y: 50 }}
      whileInView={{ opacity: 1, y: 10 }}
      transition={{ duration: 0.8, ease: 'easeOut'}}
      viewport={{ once: false }}
    >
      <div className="text-lg flex items-center gap-2 text-gray-300 font-semibold uppercase"><MdOutlineMail  /> Contact With Me</div>
      <h2 className="text-3xl text-white capitalize">Let's Work Together</h2>
      
      <ContactForm className='w-full bg-gradient-to-br from-[#06131b] via-[#0a1e2a] to-[#0a2333] space-y-8 mt-8 border border-gray-500/20 rounded-md py-16 px-4 sm:px-10'
        name="contact" 
      >
        
        <Input name="name" type="text" required />
        <Input name="email" type="email" required />
        <Input name="subject" type="text" required />
        <TextArea name="message"></TextArea>
        <IconButton rounded="rounded-4xl" padding="py-4 px-6" title="Contact With Me"
          icon={<RiArrowRightLine/>} cornerGlow="blur-3xl" hoverGlow="hover:blur-xl"
          type="submit"
        />
        <p className="text-gray-400 gap-3 flex justify-center items-center">
          Or call me now
          <a className="flex items-center cursor-pointer text-lg  gap-1 font-semibold text-white hover:text-blue-500"
            onClick={()=>triggerPhoneCall()}
          >
            <RiPhoneLine className="text-xl md:2xl " />
            +91 9112872176
          </a>
        </p>
      </ContactForm>

    </motion.section>
  )
}

export default ContactMe



