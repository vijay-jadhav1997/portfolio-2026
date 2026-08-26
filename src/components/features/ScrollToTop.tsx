import { useEffect, useState } from "react"
import { FaArrowUp } from "react-icons/fa6"

const ScrollToTop = () => {
  const [scrollHeight, setScrollHeight] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight
      const winHeight = document.documentElement.clientHeight
      const scrollableHeight = docHeight - winHeight

      const scrollPercent = (scrollTop / scrollableHeight) * 100
      setScrollHeight(scrollPercent)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div  
      className="sm:w-14 sm:h-14 w-12 h-12 bg-[#0f0f0f] overflow-hidden cursor-pointer hover:-translate-y-2 rounded-full fixed left-2 bottom-24 md:bottom-20 md:left-6 xl:left-8 lg:bottom-8"
      onClick={() => {
        document?.getElementById('app')?.scrollIntoView({behavior:'smooth'})
      }}
      style={{
        display: scrollHeight < 10 ? 'none' : 'block'
      }}
    >
      <div
        className="absolute bottom-0 left-0 w-full bg-[#139bfd] z-50 transition-all duration-150"
        style={{ height: `${scrollHeight + 10}%`, }}
      >
        <div className="rotate-180 -translate-y-2">
          <svg
            width="100%"
            height="100%"
            id="svg"
            viewBox="0 0 1440 490"
            xmlns="http://www.w3.org/2000/svg"
            className="transition duration-300 ease-in-out delay-150"
          >
            <path
              d="M 0,500 L 0,187 C 66.61773338266123,210.3228264890862 133.23546676532246,233.6456529781724 178,234 C 222.76453323467754,234.3543470218276 245.67586632137136,211.7402145763966 295,196 C 344.32413367862864,180.2597854236034 420.0610679491922,171.3934887162412 477,164 C 533.9389320508078,156.6065112837588 572.0798618818598,150.68583055863854 625,178 C 677.9201381181402,205.31416944136146 745.6194845233691,265.8631890492046 807,238 C 868.3805154766309,210.1368109507954 923.4422000246641,93.86141324454309 972,101 C 1020.5577999753359,108.13858675545691 1062.6117153779753,238.69115797262305 1113,267 C 1163.3882846220247,295.30884202737695 1222.1109384634356,221.37395486496482 1278,191 C 1333.8890615365644,160.62604513503518 1386.9445307682822,173.81302256751758 1440,187 L 1440,500 L 0,500 Z"
              stroke="none"
              strokeWidth={0}
              fill="#000000"
              fillOpacity={1}
              className="path-0 transition-all duration-300 ease-in-out delay-150 "
            />
          </svg>

        </div>
      </div>
      <div className="w-full h-full absolute z-60 flex justify-center items-center text-white">
        <FaArrowUp className="text-xl md:text-2xl" />
      </div>
    </div>

  )
}

export default ScrollToTop