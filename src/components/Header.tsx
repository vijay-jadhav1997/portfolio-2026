import { AiOutlineDesktop } from "react-icons/ai"
import { FaArrowRightLong } from "react-icons/fa6"
import { IoFolderOutline, IoHomeOutline, IoPersonOutline } from "react-icons/io5"
import { MdOutlineMail } from "react-icons/md"
import { NavLink } from "react-router-dom"
import IconButton from "./shared/IconButton"
import { triggerPhoneCall } from "../utils/contact"

function Header() {
  return (
    <header className="lg:sticky rounded-lg max-w-7xl h-max p-[0.75px] pl-[1px] overflow-hidden fixed bottom-2 left-[50%] -translate-x-[50%] lg:translate-0 lg:left-[0%] lg:top-0 lg:mx-auto  z-[100] w-[96%] sm:w-[90%] bg-gradient-to-r from-[#398ae6] to-green-400 ">
      
      <div className="absolute z-200 bottom-0 left-[50%] -translate-x-[50%] translate-y-[25%] w-[15%] max-w-96 h-20 bg-blue-500 rounded-full opacity-60 blur-3xl pointer-events-none" />
      <div className="absolute z-201 bottom-0 left-0 -translate-x-[50%] translate-y-[50%] w-20 h-20 bg-blue-600 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute z-202 top-0 right-0 translate-x-[50%] -translate-y-[50%] w-20 h-20 bg-emerald-600 rounded-full blur-2xl pointer-events-none" />

      <div className="flex justify-between items-center flex-wrap py-3 md:py-2 px-6 lg:px-10 xl:px-12 bg-[#06131B] rounded-lg">
        <div className="hidden md:flex items-center gap-2">
          <AiOutlineDesktop className="text-2xl text-blue-500" /> 
          <div className="text-2xl font-bold text-transparent bg-gradient-to-br from-white via-cyan-300 to-blue-500 bg-clip-text">
            VJ.
            <span className="">DEV</span>
          </div>
        </div>
        <div className="lg:pl-10">
          <nav className="flex flex-wrap gap-3 md:gap-4 xl:gap-6 ">
            <NavLink to='' 
              className={({isActive})=> `text-white flex justify-center items-center gap-2 px-2 py-[2px] md:py-1 lg:px-4 lg:py-2  rounded-md cursor-pointer 
                ${ isActive ? 'bg-gradient-to-tr from-sky-600 to-sky-300 ' : 'hover:bg-sky-500/20'}`
              }
              onClick={()=>{document.getElementById('#')?.scrollIntoView({behavior: 'smooth'})}}
            >
              <IoHomeOutline /> Home
            </NavLink>
            <NavLink to='/about-me' 
              className={({isActive})=> `text-white flex justify-center items-center gap-2 px-2 py-[2px] md:py-1 lg:px-4 lg:py-2  rounded-md cursor-pointer 
                ${ isActive ? 'bg-gradient-to-tr from-sky-600 to-sky-300 ' : 'hover:bg-sky-500/20'}`
              }
              onClick={()=>{document.getElementById('#about')?.scrollIntoView({behavior: 'smooth'})}}
            >
              <IoPersonOutline /> About
            </NavLink>
            <NavLink to='/projects' 
              className={({isActive})=> `text-white flex justify-center items-center gap-2 px-2 py-[2px] md:py-1 lg:px-4 lg:py-2  rounded-md cursor-pointer 
                ${ isActive ? 'bg-gradient-to-tr from-sky-600 to-sky-300 ' : 'hover:bg-sky-500/20'}`
              }
              onClick={()=>{document.getElementById('#projects')?.scrollIntoView({behavior: 'smooth'})}}
            >
              <IoFolderOutline /> Projects
            </NavLink>
            <NavLink to='/contact-me' 
              className={({isActive})=> `text-white flex justify-center items-center gap-2 px-2 py-[2px] md:py-1 lg:px-4 lg:py-2  rounded-md cursor-pointer 
                ${ isActive ? 'bg-gradient-to-tr from-sky-600 to-sky-300 ' : 'hover:bg-sky-500/20'}`
              }
              onClick={()=>{document.getElementById('#contact-me')?.scrollIntoView({behavior: 'smooth'})}}
            >
              <MdOutlineMail /> Contact
            </NavLink>
          </nav>
        </div>
        <div className="cursor-pointer hidden lg:block"
          onClick={()=>triggerPhoneCall()}
        >
          <IconButton title="Let's Talk"
            icon={<FaArrowRightLong  className='' />}
          />
          
        </div>
      </div>
    </header>
  )
}

export default Header