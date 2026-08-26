import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const TEXTS = [
  'Code is not just logic — it’s the art of transforming ideas into experiences.',
  "I love scalability, clean architecture, and cloud-powered systems.",
  "I build products that scale from idea to production.",
  "Turning ideas into modern, reliable experiences."
]

const TypeWriter = () => {
  const [index, setIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  const typingSpeed = 100
  const deletingSpeed = 60
  const pauseTime = 4000 // 2s hold before deleting

  useEffect(() => {
    const currentText = TEXTS[index]
    let timer: ReturnType<typeof setTimeout>

    if (!isDeleting && displayText.length < currentText.length) {
      // Typing
      timer = setTimeout(
        () => setDisplayText(currentText.slice(0, displayText.length + 1)),
        typingSpeed
      )
    } else if (!isDeleting && displayText.length === currentText.length) {
      // Pause before deleting
      timer = setTimeout(() => setIsDeleting(true), pauseTime)
    } else if (isDeleting && displayText.length > 0) {
      // Deleting
      timer = setTimeout(
        () => setDisplayText(currentText.slice(0, displayText.length - 1)),
        deletingSpeed
      )
    } else if (isDeleting && displayText.length === 0) {
      // Move to next text
      setIsDeleting(false)
      setIndex((prev) => (prev + 1) % TEXTS.length)
    }

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, index])

  return (
    <motion.div
      className="text-xl md:text-2xl font-semibold text-blue-400"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0.5, 1, 0.5, 0, 0.5] }}
        transition={{ repeat: Infinity, duration: 1.6 }}
        className="ml-1 text-blue-500"
      >
        |
      </motion.span>
    </motion.div>
  )
}

export default TypeWriter
