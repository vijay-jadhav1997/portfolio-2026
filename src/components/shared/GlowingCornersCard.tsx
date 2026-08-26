// import { motion } from "framer-motion"

import type { FC, ReactNode } from "react"

interface GlowingCornersCardInterface {
  children: ReactNode
}

const GlowingCornersCard: FC<GlowingCornersCardInterface> = ({children}) => {
  return (
    <div
      className="relative group overflow-hidden bg-gray-900 text-white rounded-2xl p-6 border border-gray-800 hover:border-blue-500/60 transition-all duration-500"
    >
      {/* Top-left glow */}
      <div className="absolute hidden group-hover:block top-0 left-0 w-32 h-32 bg-blue-500 rounded-full opacity-30 blur-2xl pointer-events-none" />

      {/* Bottom-right glow */}
      <div className="absolute hidden group-hover:block bottom-0 right-0 w-10 h-32 bg-blue-500 rounded-full opacity-30 blur-2xl pointer-events-none" />

      {/* Card content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

export default GlowingCornersCard
