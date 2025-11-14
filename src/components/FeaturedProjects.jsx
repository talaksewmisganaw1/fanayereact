import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import piassaImg from "../assets/covers/piassa.webp";
import gunaMikael from "../assets/covers/guna_Mikael.webp";
import eskinderImg from "../assets/covers/eskinder.webp";
import fikirteImg from "../assets/covers/fikirte.webp";
import freelanceImg from "../assets/covers/freelance.webp";
import hanaImg from "../assets/covers/hanna.webp";

const projects = [
  {
    id: 1,
    title: "Legacy Apartment",
    category: "Residential",
    image: piassaImg,
    description:
      "G+11 Apartment I paticipated in working drawings and creating detailed video rendering.",
  },
  {
    id: 2,
    title: "G+1 Residence",
    category: "Residential",
    image: hanaImg,
    description:
      "A G+1 residence I was responsible for preparing working drawings and producing high-quality renderings.",
  },
  {
    id: 3,
    title: "Gunna St. Michael Church",
    category: "Cultural",
    image: gunaMikael,
    description:
      "A project of Gunna St. Michael Church I participated in producing detailed plans and visualizations.",
  },
  {
    id: 4,
    title: "G+2 Residence (Addis Ababa)",
    category: "Residential",
    image: eskinderImg,
    description:
      "A G+2 residence I take part in preparing working drawings and detailed drawings to ensure crafted construction work.",
  },
  {
    id: 5,
    title: "G+2 Residence (Cub City, Lemi Kura)",
    category: "Residential",
    image: fikirteImg,
    description:
      "A G+2 residence I contributed to creating working drawings and  design details for a smooth construction process.",
  },
  {
    id: 6,
    title: "Interior Design Rendering",
    category: "Interior",
    image: freelanceImg,
    description:
      "A rendering project of an apartment interior I took part as a freelancer in producing realistic interior renderings.",
  },
];




export default function FeaturedProjects() {
  const navigate = useNavigate();

  return (
    <section id="projects" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
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
              <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover object-bottom group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button 
                    onClick={() =>
                      navigate("/project-detail", { state: {index} })
                    } 
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
