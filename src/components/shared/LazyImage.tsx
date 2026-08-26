import { useState } from "react"

interface LazyImageProps {
  src: string
  alt: string
  className?: string
}

const LazyImage = ({ src, alt, className = "" }: LazyImageProps) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Shimmer Skeleton */}
      {!loaded && (
        // <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700" />
        <div className="absolute inset-0 shimmer" />

      )}

      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full transition-opacity duration-700 ease-in-out ${
          loaded ? "opacity-100" : "opacity-0"
        } ${className}`}
      />
    </div>
  )
}

export default LazyImage
