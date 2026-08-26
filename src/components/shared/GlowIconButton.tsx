import { motion, useMotionValue } from "framer-motion"
import { useState } from "react"

interface MagicGlowButtonProps {
  label: string
  onClick?: () => void
}

const MagicGlowButton: React.FC<MagicGlowButtonProps> = ({ label, onClick }) => {
  const [isHovered, setIsHovered] = useState(false)

  // motion values for mouse position
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.3 }}
      className="relative overflow-hidden rounded-full border border-gray-400 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 px-10 py-3 text-white font-semibold tracking-wide cursor-pointer shadow-inner"
    >
      {/* ===================== MOVING BORDER ===================== */}
      <motion.span
        initial={{ x: "-100%" }}
        animate={isHovered ? { x: "100%" } : { x: "-100%" }}
        transition={{
          duration: 1.8,
          ease: "linear",
          repeat: isHovered ? Infinity : 0,
        }}
        className="absolute inset-0 rounded-full border-2 border-gray-400/40"
      ></motion.span>

      {/* ===================== CURSOR FOLLOWING GLOW ===================== */}
      <motion.span
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mouseX.get()}px ${mouseY.get()}px, rgba(59,130,246,0.45), transparent 60%)`,
          mixBlendMode: "screen",
        }}
      ></motion.span>

      {/* ===================== OPPOSITE CORNER INNER GLOWS ===================== */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 10% 15%, rgba(56,189,248,0.3), transparent 65%), radial-gradient(circle at 90% 85%, rgba(56,189,248,0.3), transparent 65%)",
          mixBlendMode: "screen",
        }}
      ></motion.span>

      {/* ===================== BUTTON TEXT ===================== */}
      <span className="relative z-10">{label}</span>
    </motion.button>
  )
}

export default MagicGlowButton
