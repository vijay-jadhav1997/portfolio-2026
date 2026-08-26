import type { FC, ReactElement } from "react"

interface GradientBorderInterface {
  children: ReactElement
  fromColor?: string
  viaColor?: string
  toColor?: string
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' |'4xl' | '5xl' | 'full' | 'none'
  borderSize?: '1px' | '0.5px' | '0px' | '2px' | '3px' | '4px'
  glow?: "top-left" | "bottom-left" | "top-right" | "bottom-right" | "top-middle" | "bottom-middle" | "left-middle" | "right-middle" | "center"
  glowColor?: "bg-emerald-500" | "bg-amber-500" | "bg-green-500" | "bg-blue-500" | "bg-indigo-500" | "bg-purple-500" | "bg-sky-500" | "bg-gray-500" | "bg-black" | "bg-white"
  glowOpacity?: "group-hover:opacity-40" | "group-hover:opacity-10" | "group-hover:opacity-20" | "group-hover:opacity-30" | "group-hover:opacity-50" | "group-hover:opacity-60" | "group-hover:opacity-70" 
}

const glowStyle = {
  "top-left" : "top-0 left-0 -translate-x-[50%] -translate-y-[50%]",
  "bottom-left" : "bottom-0 left-0 -translate-x-[50%] translate-y-[50%]",
  "top-right" : "top-0 right-0 translate-x-[50%] -translate-y-[50%]",
  "bottom-right" : "bottom-0 right-0 translate-x-[50%] translate-y-[50%]",
  "top-middle" : "top-0 left-[50%] -translate-x-[50%] -translate-y-[50%]",
  "bottom-middle" : "bottom-0 left-[50%] -translate-x-[50%] translate-y-[50%]",
  "left-middle" : "top-[50%] left-0 -translate-x-[50%] -translate-y-[50%]",
  "right-middle" : "top-[50%] right-0 translate-x-[50%] -translate-y-[50%]",
  "center": "top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
}
// const GradientBorder: FC<GradientBorderInterface> = ({children, color1='#398ae6', color2='#06131B', color3='#45f591', rounded='lg', borderSize='1px'}) => {
const GradientBorder: FC<GradientBorderInterface> = ({
  children, 
  borderSize='1px',  
  rounded='lg', 
  fromColor='from-[#c4c6c7]', 
  glowOpacity="group-hover:opacity-40", 
  glow="bottom-middle", 
  glowColor="bg-blue-500", 
  toColor='to-[#a7c3d4]', 
  viaColor='via-[#06131B]',
}) => {

  return (
    <div 

      className={`bg-gradient-to-br p-[${borderSize}] relative group rounded-${rounded} overflow-hidden
        ${fromColor} hover:from-[#398ae6]
        ${viaColor}
        ${toColor} hover:to-[#45f591]
        transition-all duration-200 ease-out
      `}
    >
      <div className={`absolute z-10 ${glowStyle[glow]} ${glowOpacity} ${glowColor} w-[70%] max-w-52 h-[70%] max-h-52 rounded-full opacity-0 blur-3xl pointer-events-none`} />
      
      <div className={`relative group overflow-hidden rounded-${rounded} bg-[#06131B]`}>
        {/* <div className="absolute z-50 w-full inset-0 bottom-0 left-[50%] translate-y-[50%]  -translate-x-[50%] bg-[radial-gradient(circle_at_90%_90%,rgba(56,189,248,0.3),rgba(0,100,255,0.5),rgba(0,0,0,0.05))] mix-blend-screen" /> */}
        {children}
      </div>
    </div>
  )
}

export default GradientBorder