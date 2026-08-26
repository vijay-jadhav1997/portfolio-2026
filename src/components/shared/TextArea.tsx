import type { FC } from "react"

interface InputInterface {
  children?: string
  name: string
  placeholder?: string
  rows?: number
  required?: boolean
}

const TextArea: FC<InputInterface> = ({children, name, placeholder='', rows=4, required=false}) => {
  return (
    <div className="relative border-b border-b-gray-400/40">
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        className="peer block w-full px-2 text-white  bg-transparent py-4 outline-none"
        rows={rows}
        required={required}
      >{children}</textarea>
      <label
        htmlFor={name}
        className="absolute capitalize pointer-events-none  left-0 top-2 text-lg text-gray-200 transition-all duration-500
          peer-placeholder-shown:top-2
          peer-placeholder-shown:text-base
          peer-focus:-top-5
          peer-focus:text-sm
          peer-focus:text-blue-600
          peer-[&:not(:placeholder-shown)]:-top-5
          peer-[&:not(:placeholder-shown)]:text-sm
          peer-[&:not(:placeholder-shown)]:text-blue-600
        "
      >
        {name}
      </label>
      <div className="bg-blue-600 h-[2px] w-0 transition-all duration-500
        peer-focus:w-full
        peer-[&:not(:placeholder-shown)]:w-full"
      ></div>
    </div>


  )
}

export default TextArea