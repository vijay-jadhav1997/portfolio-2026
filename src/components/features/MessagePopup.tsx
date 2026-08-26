import { RiArrowRightLine } from "react-icons/ri"
import GradientBorder from "../shared/GradientBorder"
import IconButton from "../shared/IconButton"
import Input from "../shared/Input"
import TextArea from "../shared/TextArea"

const MessagePopup = () => {
  return (
    <GradientBorder rounded="xl" >
      <div className="w-full min-h-[350px] flex items-center bg-gradient-to-br from-[#06131B] via-[#101d32] to-[#06131B]">
        <form 
          className='w-full space-y-8 py-6 lg:py-8 px-4 sm:px-10
          '
          name="contact" method="POST" data-netlify="true" action='/email-success'
          >
            {/* bg-gradient-to-br from-[#06131b] via-[#0a1e2a] to-[#0a2333] */}
            <input type="hidden" name="form-name" value="contact" />
            
            <Input name="email" type="email" required={true} />
            <TextArea name="message" rows={2} required={true}></TextArea>
            <IconButton rounded="rounded-md" padding="py-3 px-6" title="Contact With Me"
              icon={<RiArrowRightLine/>} cornerGlow="blur-md" hoverGlow="hover:blur-md"
              type="submit"
            />
        </form>
      </div>
    </GradientBorder>
  )
}

export default MessagePopup