import type { FC, ReactNode } from "react"

interface IconButtonInterface {
  icon?: ReactNode
  title: string
  rounded?: 'rounded-md' | 'rounded-lg' | 'rounded-xl' | 'rounded-2xl' | 'rounded-3xl' | 'rounded-4xl' | 'rounded-none'
  border?: string
  padding?: string
  color?: string
  bg?: string
  type?: 'submit' | 'button' | 'reset'
  iconStyle?: string
  cornerGlow?: 'blur-md' | 'blur-lg' | 'blur-xl'| 'blur-2xl'| 'blur-3xl' 
  hoverGlow?: 'hover:blur-md' | 'hover:blur-lg' | 'hover:blur-xl'| 'hover:blur-2xl'| 'hover:blur-3xl' 
  onClick?: ()=>void
}

const IconButton: FC<IconButtonInterface> = ({icon='',type='button', padding='py-3 px-6', title='Button', cornerGlow='blur-md', color='text-gray-300', border='border border-gray-400', hoverGlow="hover:blur-md", bg='bg-gray-800', iconStyle='text-xl', rounded='rounded-md', onClick}) => {
  const click = ()=>{
    if(onClick)
      onClick()
  }
  return (
    <div 
      className={`relative ${rounded} hover:-translate-y-[1px] w-full overflow-hidden transition-all duration-300 ease-out`}
    >
      <button 
        className={`reverse-icon-btn peer cursor-pointer text-gray-300 w-full font-medium 
          flex justify-center items-center gap-2 overflow-hidden
          ${padding} ${color} ${rounded} ${bg} ${border} hover:border-blue-600/60
        `}
        onClick={click}
        type={type}
      >
        <span className={`left-icon ${iconStyle}`}>{icon}</span>
        <span className="reverse-btn-label">{title}</span>
        <span className={`right-icon ${iconStyle}`}>{icon}</span>
      </button>
      
      <div className={`peer-hover:bg-blue-500 absolute bottom-0 left-0 w-[50%] h-[100%] -translate-x-[50%] translate-y-[25%] z-50 bg-gray-300/30 rounded-full opacity-30 ${cornerGlow} ${hoverGlow} pointer-events-none`} />
      <div className={`peer-hover:bg-blue-500 absolute top-0 right-0 w-[50%] h-[100%] translate-x-[50%] -translate-y-[25%] z-50 bg-gray-300/30 rounded-full opacity-30 ${cornerGlow} ${hoverGlow}  pointer-events-none`} />
      
    </div>
  )
}

export default IconButton