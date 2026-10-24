import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import piassaImg from "../assets/covers/piassa.webp";
import fikirteImg from "../assets/covers/fikirte.webp";
import betelImg from "../assets/covers/betel1.webp";
import labImg from "../assets/covers/lab2.webp";
import brookImg from "../assets/covers/brook3.webp";
import ultraGlobalImg from "../assets/covers/ultraGlobal.webp";

const projects = [
  {
    id: 9,
    title: "Legacy Apartment",
    category: "Mixed",
    image: piassaImg,
    description:
      "G+11 Apartment I paticipated in working drawings and creating detailed video rendering.",
  },{
      id: 15,
      title: "Modern Executive Office",
      category: "Office",
      image: ultraGlobalImg,
      description:
        "A modern executive office interior that I participated in rendering and visualization of the project.",
  },
  {
      id: 1,
      title: "Mixed Use Apartment",
      category: "Mixed",
      image: betelImg,
      description:
        "A Mixed Use Apartment I paticipated in rendering the project.",
  },
  {
    id: 2,
    title: "Computer Laboratory",
    category: "Mixed",
    image: labImg,
    description:
      "Computer Laboratory I paticipated in rendering the project.",
  },
    {
    id: 3,
    title: "Brook Apartment",
    category: "Apartment",
    image: brookImg,
    description:
      "An Apartment I paticipated in intrior designing and rendering.",
  },
  {
    id: 13,
    title: "G+2 Residence",
    category: "Residential",
    image: fikirteImg,
    description:
      "A G+2 residence I contributed to creating working drawings and  design details for a smooth construction process.",
  },
];




export default function FeaturedProjects({setHome, setProjectIndex}) {
  const navigate = useNavigate();

  

  return (
    <section id="projects" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-muted/30 z-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            A curated selection of recent architectural projects showcasing
            diverse styles and innovative design solutions.
          </p>
        </div>



        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className="group cursor-pointer">
              <div 
                onClick={() => {
                  setHome(false)
                  setProjectIndex(index)
                  window.scrollTo(0, 0);
                }}

              className="relative h-64 rounded-lg overflow-hidden mb-4">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover object-bottom group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button 
                    onClick={() => {
                      setHome(false)
                      setProjectIndex(index)
                      window.scrollTo(0, 0);
                    }}
                    className="px-6 py-2 bg-primary text-primary-foreground rounded-lg flex items-center gap-2 font-medium">
                    View Project
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div>
                <p className="text-sm text-primary font-semibold mb-2">
                  {project.category}
                </p>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground/60 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
