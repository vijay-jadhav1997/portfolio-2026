import type { FC } from "react"

interface InputInterface {
  name: string
  type: 'text' | 'email' | 'password' | 'number'
  placeholder?: string
  required?: boolean
}

const Input: FC<InputInterface> = ({name, type='text', placeholder='', required=false}) => {

  
  return (
    <div className="relative border-b border-b-gray-400/40">
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className="peer block w-full font-medium text-white  bg-transparent px-2 py-4 outline-none"
        required={required}
      />
      <label
        htmlFor={name}
        className="absolute font-medium capitalize pointer-events-none  left-0 top-2 text-lg text-gray-200 transition-all duration-500
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

export default Input