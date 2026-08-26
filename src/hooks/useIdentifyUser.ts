import { useState } from "react"

export const useIdentifyUser = ()=>{
  const [user, setUser] = useState<boolean>(
    JSON.parse(localStorage.getItem('user') || 'false')
  )

  if(!user){
    localStorage.setItem('user', JSON.stringify(true))
    setUser(true)
  }
  return user
}