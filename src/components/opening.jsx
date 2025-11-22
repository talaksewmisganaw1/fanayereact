import { useState, useEffect } from 'react'
import './opening.css'

export default function Opening({isAnimating, setIsAnimating, loader}) {

  const [ispadding, setIspadding] = useState(false)

  useEffect(() => {
    if(loader === false ) {
      const timerer = setTimeout(() => {
        setIsAnimating(true)
      }, 5000)
      return () => clearTimeout(timerer)
    }

  }, [loader])

  useEffect(() => {
    if(isAnimating) {
          const timerer = setTimeout(() => {
            setIspadding(true)
          }, 1100)

          return () => clearTimeout(timerer)
    }


  }, [isAnimating])

  return (
    <div className="splash-container z-40">
      {/* Left Section */}
      <div className={`splash-section left ${isAnimating ? 'animate-left' : ''} w-[45%] bg-linear-to-r from-background to-muted`}>
        <div className="splash-content h-full relative">
          <div className="text-wrapper mt-[17vh] relative">
            <h1 className={`${!loader? ' animate-fade-in ': '' } splash-text font-rougeScript font-medium text-accent/85 text-[11vh] md:text-[16vh] lg:text-[17vh]`}>Hey,</h1>
            <h1 className="text-[5vh] md:text-[7vh] lg:text-[10vh] text-foreground/85 mt-[3vh] md:mt-[2.7vh] lg:mt-[1vh] relative text-end mr-2 font-[Georgia]">I am</h1>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className={`splash-section right ${isAnimating ? 'animate-right' : ''} w-[55%] bg-linear-to-l from-background to-muted relative`}>
        <div className="splash-content h-full">
          <h1 className="text-[5vh] md:text-[7vh] lg:text-[10vh] text-foreground/85 pl-3 font-[Georgia] w-full text-start absolute top-[39.9vh]">Architect </h1>
        </div>
      </div>

      <div className={`${!loader? ' animate-fade-in ': '' } ${isAnimating ? ' go-top ' : ''} ${ispadding? ' md:ml-4 lg:pl-[8.4vw] h-20 flex items-center text-accent ': ''} name font-[Delius] fixed mt-0 text-accent w-full`}>Fanaye Girma</div>

    </div>
  )
}