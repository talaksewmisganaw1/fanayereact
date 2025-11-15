import React, { lazy, useState}  from 'react'
import { Routes, Route } from "react-router-dom"
import FeaturedProjects from './components/FeaturedProjects'
// import Services from './components/Services'
import About from './components/About'
import Navigation from './components/Navigation'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BuildingLoader from './components/BuildingLoader'
const ProjectDetail = lazy(() => import("./components/ProjectDetail"));

export default function App() {
  const [loader, setLoader] = useState(true)
  const [home, setHome] = useState(true);
  const [projectIndex, setProjectIndex] = useState();
  return (
    <div>
      {home && loader && <BuildingLoader setLoader={setLoader} />}
      {home && <>
          <Navigation />
          <FeaturedProjects setHome={setHome} setProjectIndex={setProjectIndex} />
          <About />
          <Contact />
        </>
      }
      {!home && 
          <ProjectDetail projectIndex={projectIndex} setHome={setHome} />
      }
    </div>
  )
}
