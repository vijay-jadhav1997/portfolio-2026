import { motion } from "framer-motion"

const GlowingCard = () => {
  return (
    <motion.div
      initial={{ boxShadow: "0 0 0 rgba(147,51,234,0)" }}
      whileHover={{
        boxShadow: "0 0 25px rgba(147,51,234,0.5), 0 0 50px rgba(147,51,234,0.3)",
        transition: { duration: 0.4 },
      }}
      className="p-[2px] rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
    >
      <div className="bg-gray-900 rounded-xl p-6">
        <h3 className="text-white text-xl font-semibold">Framer Motion Glow ✨</h3>
        <p className="text-gray-400">Smooth hover & pulse animation using Framer Motion.</p>
      </div>
    </motion.div>
  )
}

export default GlowingCard
