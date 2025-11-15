import { useState, useEffect } from 'react'
import './opening.css'

export default function SplashScreen() {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true)
    }, 500000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-full flex overflow-hidden">
      {/* Left Section */}
      <div
        className={`absolute w-1/2 h-full flex items-center justify-center transition-all duration-[1.2s] ease-[cubic-bezier(0.76,0,0.24,1)] left-0 bg-gradient-to-r from-[oklch(0.55_0.14_44)] to-[oklch(0.45_0.12_44)] ${
          isAnimating ? 'animate-left' : ''
        }`}
      >
        <div className="relative z-10 w-full text-center px-10">
          <div className="text-wrapper">
            <h1 className="splash-text">Hey,</h1>
            <h1 className="splash-text">I am</h1>
            <h1 className="text-r splash-text">architect</h1>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div
        className={`absolute w-1/2 h-full flex items-center justify-center transition-all duration-[1.2s] ease-[cubic-bezier(0.76,0,0.24,1)] right-0 bg-gradient-to-r from-[oklch(0.45_0.12_44)] to-[oklch(0.55_0.14_44)] ${
          isAnimating ? 'animate-right' : ''
        }`}
      >
        <div className="relative z-10 w-full text-center px-10">
          <h1 className="splash-text gradient-text">architect</h1>
        </div>
      </div>
    </div>
  )
}
