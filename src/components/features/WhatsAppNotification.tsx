import { useEffect, useState } from "react"
import soundEffect from "../../assets/sounds/message-pop-alert.mp3"
import { openWhatsAppMessage } from "../../utils/contact"
import { RiCloseCircleLine, RiWhatsappFill } from "react-icons/ri"

const WhatsAppNotification = () => {
  const [open, setOpen] = useState(false)

  const handleClose = (e: React.MouseEvent<HTMLOrSVGElement>)=>{
    e.stopPropagation()

    setOpen(false)

    
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true)

      // Play popup sound
      const audio = new Audio(soundEffect)
      audio.play().catch((err) => {
        console.warn("Audio autoplay blocked:", err)
      })
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    let timer:number

    if(!open){
      timer = setTimeout(() => {
        setOpen(true)
  
        // Play popup sound
        const audio = new Audio(soundEffect)
        audio.play().catch((err) => {
          console.warn("Audio autoplay blocked:", err)
        })
      }, (5*60*1000))
    }

    return () => clearTimeout(timer)
  }, [open])

  if (!open) return null

  return (
    <div
      className="fixed group right-2  md:right-6 bottom-56 xl:right-8 sm:w-10 sm:h-10 w-8 h-8 bg-white flex justify-center items-center rounded-full cursor-pointer 
        shadow-lg  hover:scale-90 transition-transform duration-300 ease-in-out 
        animate__animated animate__fadeInBottomRight z-100
      "
      onClick={() => {
        openWhatsAppMessage()
      }}
      aria-label="Open WhatsApp"
    >
      <div className="absolute animate-ping group-hover:animate-none rounded-full bg-green-200 w-3/4 h-3/4 "></div>
      <RiCloseCircleLine onClick={handleClose} className="text-gray-400 hover:text-white hidden group-hover:block transition-all duration-200 text-2xl absolute -top-4 -right-4" />
      <RiWhatsappFill className="text-3xl sm:text-4xl font-bold rotate-y-180 text-green-400" />
    </div>
  )
}

export default WhatsAppNotification
