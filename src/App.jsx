import React from 'react'
import { Routes, Route } from "react-router-dom"
import FeaturedProjects from './components/FeaturedProjects'
// import Services from './components/Services'
import About from './components/About'
import Navigation from './components/Navigation'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BuildingLoader from './components/BuildingLoader'
import ProjectDetail from './components/ProjectDetail'

export default function App() {
  return (
    <div>
      <BuildingLoader />
      <Routes>
        {/* Route 1: Home page */}
        <Route path="/" element={
          <>
            <Navigation />
            <FeaturedProjects />
            <About />
            <Contact />
          </>
        } />

        {/* Route 2: Project detail page */}
        <Route path="/project-detail" element={<ProjectDetail />} />
      </Routes>
    </div>
  )
}
