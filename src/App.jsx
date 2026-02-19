import React, { lazy, useEffect, useState}  from 'react'
import FeaturedProjects from './components/FeaturedProjects'
// import Services from './components/Services'
import About from './components/About'
import Navigation from './components/Navigation'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BuildingLoader from './components/BuildingLoader'
import Opening from './components/opening'
import ProjectDetail from './components/ProjectDetail'

export default function App() {
  const [loader, setLoader] = useState(true)
  const [home, setHome] = useState(true);
  const [projectIndex, setProjectIndex] = useState();
  const [isAnimating, setIsAnimating] = useState(false);
  const [logoname, setLogoname] = useState(false);
  const [cursor, setCursor] = useState(false);


  return (
    <div>
      <Opening  isAnimating={isAnimating} setIsAnimating={setIsAnimating} loader={loader} logoname={logoname} setLogoname={setLogoname} />
      {home && loader && <BuildingLoader setLoader={setLoader} />}
      {home && isAnimating && <>
          <Navigation logoname={logoname}/>
          <FeaturedProjects setHome={setHome} setProjectIndex={setProjectIndex} />
          <About />
          <Contact />
          <Footer />
        </>
      }
      {!home && <>
          <ProjectDetail projectIndex={projectIndex} setHome={setHome} />
          <Footer />
        </>
      }
    </div>
  )
}
