import { useState, type FC, type ReactNode } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import OverlayLoader from "./OverlayLoader"

interface ContactFormInterface {
  children: ReactNode
  className?: string
  name?: string
}

const ContactForm: FC<ContactFormInterface> = ({children, className='', name='contact' }) => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    setLoading(true)
    const formData = new FormData(e.currentTarget)
    const formEntries = Object.fromEntries(formData.entries())
    const body = new URLSearchParams(formEntries as Record<string, string>).toString()

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      })

      navigate("/success")
    } catch (error) {
      console.error("Form submission failed:", error)
      toast.error("Something went wrong! Please try again.", { position: "bottom-center"})
    }
    finally{
      setLoading(false)
    }

  }
  
  return (
    <>
      { loading &&  <OverlayLoader/>}
      <form className={className}
        name={name} 
        data-netlify="true" 
        // action="/success"
        onSubmit={handleFormSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        {children}
      </form>
    </>
  )
}

export default ContactForm