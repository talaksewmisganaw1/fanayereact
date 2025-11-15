import React, { useState, useEffect } from "react";
import { useLocation, useNavigate  } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ZoomModal from "./Zoom";

const piassaElevationsImport = import.meta.glob('/src/assets/piassa/elevations/*.png', { eager: true });
const piassaSectionsImport = import.meta.glob('/src/assets/piassa/sections/*.png', { eager: true });
const piassaFloorplansImport = import.meta.glob('/src/assets/piassa/floor plans/*.png', { eager: true });
const piassaSiteplansImport = import.meta.glob('/src/assets/piassa/siteplan/*.png', { eager: true });
const piassaRendersImport = import.meta.glob('/src/assets/piassa/renders/*.{jpg,png,jpeg,webp}', { eager: true });
const piassaOthersImport = import.meta.glob('/src/assets/piassa/others/*.png', { eager: true });

const piassaElevations = Object.values(piassaElevationsImport).map(img => img.default);
const piassaSections = Object.values(piassaSectionsImport).map(img => img.default);
const piassaFloorplans = Object.values(piassaFloorplansImport).map(img => img.default);
const piassaSiteplans = Object.values(piassaSiteplansImport).map(img => img.default);
const piassaRenders = Object.values(piassaRendersImport).map(img => img.default);
const piassaOthers = Object.values(piassaOthersImport).map(img => img.default);

const hannaElevationsImport = import.meta.glob('/src/assets/hanna/elevations/*.png', { eager: true });
const hannaSectionsImport = import.meta.glob('/src/assets/hanna/sections/*.png', { eager: true });
const hannaFloorplansImport = import.meta.glob('/src/assets/hanna/floor plans/*.png', { eager: true });
const hannaSiteplansImport = import.meta.glob('/src/assets/hanna/siteplan/*.png', { eager: true });
const hannaRendersImport = import.meta.glob('/src/assets/hanna/renders/*.{jpg,png,jpeg,webp}', { eager: true });

const hannaElevations = Object.values(hannaElevationsImport).map(img => img.default);
const hannaSections = Object.values(hannaSectionsImport).map(img => img.default);
const hannaFloorplans = Object.values(hannaFloorplansImport).map(img => img.default);
const hannaSiteplans = Object.values(hannaSiteplansImport).map(img => img.default);
const hannaRenders = Object.values(hannaRendersImport).map(img => img.default);

const guna_Michael_ElevationsImport = import.meta.glob('/src/assets/guna_Michael_/elevations/*.png', { eager: true });
const guna_Michael_SectionsImport = import.meta.glob('/src/assets/guna_Michael_/sections/*.png', { eager: true });
const guna_Michael_FloorplansImport = import.meta.glob('/src/assets/guna_Michael_/floor plans/*.png', { eager: true });
const guna_Michael_SiteplansImport = import.meta.glob('/src/assets/guna_Michael_/siteplan/*.png', { eager: true });
const guna_Michael_RendersImport = import.meta.glob('/src/assets/guna_Michael_/renders/*.{jpg,png,jpeg,webp}', { eager: true });


const guna_Michael_Elevations = Object.values(guna_Michael_ElevationsImport).map(img => img.default);
const guna_Michael_Sections = Object.values(guna_Michael_SectionsImport).map(img => img.default);
const guna_Michael_Floorplans = Object.values(guna_Michael_FloorplansImport).map(img => img.default);
const guna_Michael_Siteplans = Object.values(guna_Michael_SiteplansImport).map(img => img.default);
const guna_Michael_Renders = Object.values(guna_Michael_RendersImport).map(img => img.default);

const eskinderElevationsImport = import.meta.glob('/src/assets/eskinder/elevations/*.png', { eager: true });
const eskinderSectionsImport = import.meta.glob('/src/assets/eskinder/sections/*.png', { eager: true });
const eskinderFloorplansImport = import.meta.glob('/src/assets/eskinder/floor plans/*.png', { eager: true });
const eskinderRendersImport = import.meta.glob('/src/assets/eskinder/renders/*.{jpg,png,jpeg,webp}', { eager: true });
const eskinderOthersImport = import.meta.glob('/src/assets/eskinder/others/*.png', { eager: true });
const eskinderDetailsImport = import.meta.glob('/src/assets/eskinder/details/*.png', { eager: true });

const eskinderElevations = Object.values(eskinderElevationsImport).map(img => img.default);
const eskinderSections = Object.values(eskinderSectionsImport).map(img => img.default);
const eskinderFloorplans = Object.values(eskinderFloorplansImport).map(img => img.default);
const eskinderRenders = Object.values(eskinderRendersImport).map(img => img.default);
const eskinderOthers = Object.values(eskinderOthersImport).map(img => img.default);
const eskinderDetails = Object.values(eskinderDetailsImport).map(img => img.default);

const fikirteElevationsImport = import.meta.glob('/src/assets/fikirte/elevations/*.png', { eager: true });
const fikirteSectionsImport = import.meta.glob('/src/assets/fikirte/sections/*.png', { eager: true });
const fikirteFloorplansImport = import.meta.glob('/src/assets/fikirte/floor plans/*.{jpg,png,jpeg}', { eager: true });
const fikirteRendersImport = import.meta.glob('/src/assets/fikirte/renders/*.{jpg,png,jpeg,webp}', { eager: true });

const fikirteElevations = Object.values(fikirteElevationsImport).map(img => img.default);
const fikirteSections = Object.values(fikirteSectionsImport).map(img => img.default);
const fikirteFloorplans = Object.values(fikirteFloorplansImport).map(img => img.default);
const fikirteRenders = Object.values(fikirteRendersImport).map(img => img.default);

const interiorRendersImport = import.meta.glob('/src/assets/interior/*.{jpg,png,jpeg,webp}', { eager: true });
const interiorRenders = Object.values(interiorRendersImport).map(img => img.default);


export default function ProjectDetail({projectIndex, setHome}) {
    const navigate = useNavigate();



    const projectsList = [
      {   
        title: "Legacy Apartment",
        year: "2018 E.C.",
        location: "Addis Ababa, Ethiopia",
        description: [
          "A G+11 mixed apartment located in Piassa. I was responsible for preparing the complete working drawings, ensuring that architectural details were accurate and construction-ready.",
          "I also created a high-quality video rendering to help visualize the building's design, materials, and overall aesthetic. The renderings provided a clear understanding of spatial relationships and design intent for the client."
        ],
        renders: [
          {
            id: 1,  
            title: "Image 1",
            url: piassaRenders[0]
          },
          {
            id: 2,  
            title: "Image 2",
            url: piassaRenders[1]
          },
          {
            id: 3,  
            title: "Image 3",
            url: piassaRenders[2]
          }
        ], 
        video: true,
        visuals: [
          {
            type: "Site Plan",
            items: [
              {
                id: 4,
                title: "Site Plan",
                url: piassaSiteplans[0]
              }
            ]
          }, {
            type: "Floor Plans",
            items: [
              {
                id: 5,
                title: "Semi Basement Plan (Service Floor)",
                url: piassaFloorplans[0]
              },
              {
                id: 6,
                title: "Second Basement Plan (Service Floor)",
                url: piassaFloorplans[1]
              },
              {
                id: 7,
                title: "Ground Floor Plan",
                url: piassaFloorplans[2]
              },
              {
                id: 8,
                title: "1st Floor Plan",
                url: piassaFloorplans[3]
              },
              {
                id: 9,  
                title: "2nd to 7th Floor Plan",
                url: piassaFloorplans[4]
              },
              {
                id: 10,  
                title: "8th to 11th Floor Plan",
                url: piassaFloorplans[5]
              },
              {
                id: 11,  
                title: "Roof Plan",
                url: piassaFloorplans[6]
              },
              {
                id: 12,  
                title: "Terrace Floor Plan",
                url: piassaFloorplans[7]
              },
            ]
          }, {
            type: "Elevations",
            items: [
              {
                id: 13,
                title: "North East Elevation",
                url: piassaElevations[0]
              },
              {
                id: 14,
                title: "Noth West Elevation",
                url: piassaElevations[1]
              },
              {
                id: 15,
                title: "South East Elevation",
                url: piassaElevations[2]
              },
              {
                id: 16,  
                title: "South West Elevation",
                url: piassaElevations[3]
              },
            ],
          }, {
            type: "Sections",
            items: [
              {
                id: 17,
                title: "Section A-A",
                url: piassaSections[0]
              }
            ]
          }, 
          {
            type: "Other Architectural Drawings",
            items: [
              {
                id: 18,  
                title: "Light and Switch",
                url: piassaOthers[0]
              },
              {
                id: 19,  
                title: "Window Door Schedule",
                url: piassaOthers[1]
              },
            ]
          },
        ]
      },
      {
        title: "G+1 Residence",
        year: "2018 E.C.",
        location: "Addis Ababa, Ethiopia",
        description: [
          "A G+1 private residence designed to meet modern living standards. I prepared all the working drawings, including floor plans, elevations, and sections, to ensure every design element was clearly documented.",
          "In addition, I produced detailed 3D renderings to showcase both the interior and exterior designs. These renderings helped communicate the spatial arrangement, materials, and overall aesthetic to the client."
        ],
        renders: [
          {
            id: 1,  
            title: "Image 1",
            url: hannaRenders[0]
          },
          {
            id: 2,  
            title: "Image 2",
            url: hannaRenders[1]
          },
          {
            id: 3,  
            title: "Image 3",
            url: hannaRenders[2]
          }
        ], 
        visuals: [
          {
            type: "Site Plan",
            items: [
              {
                id: 4,
                title: "Site Plan",
                url: hannaSiteplans[0]
              }
            ]
          }, {
            type: "Floor Plans",
            items: [
              {
                id: 5,
                title: "1st Basement Plan",
                url: hannaFloorplans[0]
              },
              {
                id: 6,
                title: "2nd Basement Plan",
                url: hannaFloorplans[1]
              },
              {
                id: 7,
                title: "Ground Floor Plan",
                url: hannaFloorplans[2]
              },
              {
                id: 8,
                title: "1st Floor Plan",
                url: hannaFloorplans[3]
              },
              {
                id: 9,  
                title: "Roof Plan",
                url: hannaFloorplans[4]
              },
            ]
          }, {
            type: "Elevations",
            items: [
              {
                id: 10,
                title: "Front Elevation",
                url: hannaElevations[0]
              },
              {
                id: 11,
                title: "Left Side Elevation",
                url: hannaElevations[1]
              },
              {
                id: 12,
                title: "Rare Elevation",
                url: hannaElevations[2]
              },
              {
                id: 13,  
                title: "Right Side Elevation",
                url: hannaElevations[3]
              },
            ],
          }, {
            type: "Sections",
            items: [
              {
                id: 14,
                title: "Section A-A",
                url: hannaSections[0]
              },
              {
                id: 15,
                title: "Section B-B",
                url: hannaSections[1]
              },{
                id: 16,
                title: "Section C-C",
                url: hannaSections[2]
              }
            ]
          },
        ]
      }, 
      {
        title: "Gunna St. Michael Church",
        year: "2018 E.C.",
        location: "Addis Ababa, Ethiopia",
        description: [
          "This project involved the renewal of Gunna St. Michael Church. I focused on producing detailed working drawings that addressed both structural and architectural elements.",
          "I also developed visualizations to guide the renovation process, ensuring that the historical and cultural significance of the church was preserved while introducing modern improvements where needed."
        ],
        renders: [
          {
            id: 1,  
            title: "Image 1",
            url: guna_Michael_Renders[0]
          },
          {
            id: 2,  
            title: "Image 2",
            url: guna_Michael_Renders[1]
          },
          {
            id: 3,  
            title: "Image 3",
            url: guna_Michael_Renders[2]
          }
        ], 
        visuals: [
          {
            type: "Site Plan",
            items: [
              {
                id: 4,
                title: "Site Plan",
                url: guna_Michael_Siteplans[0]
              }
            ]
          }, {
            type: "Floor Plans",
            items: [
              {
                id: 5,
                title: "Floor Plan",
                url: guna_Michael_Floorplans[0]
              },
              {
                id: 6,
                title: "Roof Plan 1",
                url: guna_Michael_Floorplans[1]
              },
              {
                id: 7,
                title: "Roof Plan 2",
                url: guna_Michael_Floorplans[2]
              },
            ]
          }, {
            type: "Elevations",
            items: [
              {
                id: 8,
                title: "North Elevation",
                url: guna_Michael_Elevations[0]
              },
              {
                id: 9,
                title: "Noth Elevation",
                url: guna_Michael_Elevations[1]
              },
            ],
          }, {
            type: "Sections",
            items: [
              {
                id: 10,
                title: "Section A-A",
                url: guna_Michael_Sections[0]
              }
            ]
          }
        ]
    },
    {
        title: "G+2 Residence",
        year: "2018 E.C.",
        location: "Addis Ababa, Ethiopia",
        description: [
          "A G+2 residential building. I prepared full working drawings and detailed drawings covering interiors, and exterior finishes to ensure the project could be built accurately.",
          "The detailed documentation allowed for smooth communication with contractors, minimizing errors during construction and maintaining the integrity of the original design."
        ],
        renders: [
          {
            id: 1,  
            title: "Image 1",
            url: eskinderRenders[0]
          },
          {
            id: 2,  
            title: "Image 2",
            url: eskinderRenders[1]
          },
          {
            id: 3,  
            title: "Image 3",
            url: eskinderRenders[2]
          }, {
            id: 4,  
            title: "Image 1",
            url: eskinderRenders[3]
          },
          {
            id: 5,  
            title: "Image 2",
            url: eskinderRenders[4]
          },
          {
            id: 6,  
            title: "Image 3",
            url: eskinderRenders[5]
          } , {
            id: 7,  
            title: "Image 1",
            url: eskinderRenders[6]
          },
          {
            id: 8,  
            title: "Image 2",
            url: eskinderRenders[7]
          },
        ], 
        visuals: [
          {
            type: "Floor Plans",
            items: [
              {
                id: 9,
                title: "Semi Basement Plan (Service Floor)",
                url: eskinderFloorplans[0]
              },
              {
                id: 10,
                title: "Second Basement Plan (Service Floor)",
                url: eskinderFloorplans[1]
              },
              {
                id: 11,
                title: "Ground Floor Plan",
                url: eskinderFloorplans[2]
              },
              {
                id: 12,
                title: "1st Floor Plan",
                url: eskinderFloorplans[3]
              },
              {
                id: 13,  
                title: "2nd to 7th Floor Plan",
                url: eskinderFloorplans[4]
              },
              {
                id: 14,  
                title: "8th to 11th Floor Plan",
                url: eskinderFloorplans[5]
              }
            ]
          }, {
            type: "Elevations",
            items: [
              {
                id: 15,
                title: "Front Elevation",
                url: eskinderElevations[0]
              },
              {
                id: 16,
                title: "Rare Elevation",
                url: eskinderElevations[1]
              },
              {
                id: 17,
                title: "Side Elevation",
                url: eskinderElevations[2]
              }
            ],
          }, {
            type: "Sections",
            items: [
              {
                id: 18,
                title: "Section A-A",
                url: eskinderSections[0]
              }, {
                id: 19,
                title: "Section B-B",
                url: eskinderSections[1]
              }
            ]
          }, {
            type: "Detail Drawings",
            items: [
              {
                id: 20,
                title: "Bath Room Detail",
                url: eskinderDetails[0]
              }, {
                id: 21,
                title: "Living and Dining Room Detail",
                url: eskinderDetails[1]
              } , {
                id: 22,
                title: "Master bedroom detail",
                url: eskinderDetails[2]
              }
            ]
          }, {
            type: "Other Architectural Drawings",
            items: [
              {
                id: 23,  
                title: "Wall ID",
                url: eskinderOthers[0]
              },
              {
                id: 24,  
                title: "Window Door Schedule",
                url: eskinderOthers[1]
              },
            ]
          },
        ]
    },
    {
        title: "G+2 Residence",
        year: "2018 E.C.",
        location: "Addis Ababa, Ethiopia",
        description: [
          "A G+2 residence covering 150 sqm. I created all working drawings, detailing every room, façade, and site layout, ensuring precise implementation of the design.",
          "I coordinated design details and created clear documentation for construction, allowing contractors to follow the design intent seamlessly while maintaining quality standards."
        ],
        renders: [
          {
            id: 1,  
            title: "Image 1",
            url: fikirteRenders[0]
          },
          {
            id: 2,  
            title: "Image 2",
            url: fikirteRenders[1]
          },
          {
            id: 3,  
            title: "Image 3",
            url: fikirteRenders[2]
          }
        ], 
        visuals: [
          {
            type: "Floor Plans",
            items: [
              {
                id: 4,
                title: "Ground Floor Plan",
                url: fikirteFloorplans[0]
              },
              {
                id: 5,
                title: "First Floor Plan",
                url: fikirteFloorplans[1]
              },
              {
                id: 6,
                title: "Second Floor Plan",
                url: fikirteFloorplans[2]
              },
              {
                id: 7,
                title: "Third Floor Plan",
                url: fikirteFloorplans[3]
              },
              {
                id: 8,  
                title: "Roof Plan",
                url: fikirteFloorplans[4]
              }
            ]
          }, {
            type: "Elevations",
            items: [
              {
                id: 9,
                title: "Front Elevation",
                url: fikirteElevations[0]
              },
              {
                id: 10,
                title: "Rare Elevation",
                url: fikirteElevations[1]
              }
            ],
          }, {
            type: "Sections",
            items: [
              {
                id: 11,
                title: "Section A-A",
                url: fikirteSections[0]
              }
            ]
          }
        ]
    },
    {
        title: "Interior Design Rendering",
        year: "2018 E.C.",
        location: "Addis Ababa, Ethiopia",
        description: [
          "A 64 sqm interior design rendering project. I created realistic 3D renderings capturing spatial arrangement, furniture placement, lighting, and material finishes.",
          "These renderings provided the client with a complete understanding of the proposed design, allowing for informed decisions before the execution of the interior design project."
        ],
        renders: [
          {
            id: 1,  
            title: "Image 1",
            url: interiorRenders[0]
          },
          {
            id: 2,  
            title: "Image 2",
            url: interiorRenders[1]
          },
          {
            id: 3,  
            title: "Image 3",
            url: interiorRenders[2]
          }, {
            id: 4,  
            title: "Image 4",
            url: interiorRenders[3]
          }, {
            id: 5,  
            title: "Image 5",
            url: interiorRenders[4]
          }
        ],
        visuals: []
    }
    ];

    const location = useLocation();
    
    const project = projectsList[projectIndex]

    console.log(project)

    const [currentPhoto, setCurrentPhoto] = useState(0);

    const [currentIndex, setCurrentIndex] = useState({
        "Elevations": 0,
        "Sections": 0,
        "Site Plan": 0,
        "Floor Plans": 0,
        "Renders": 0,
        "Detail Drawings": 0,
        "Other Architectural Drawings": 0,
    });

    const [openModal, setOpenModal] = useState(false);
    const [modalSrc, setModalSrc] = useState();
    const [modalAlt, setModalAlt] = useState()

    useEffect(() => {
      const htmlParent = document.getElementsByTagName("html")[0];
      if (openModal) {
        htmlParent.classList.add("overflow-hidden");
      } else {
        htmlParent.classList.remove("overflow-hidden");
      }
    }, [openModal]);

    const handleNext = (type) => {
      const category = project.visuals.find((cat) => cat.type === type);
      setCurrentIndex((prev) => ({
        ...prev,
        [type]: ((prev[type] || 0) + 1) % category.items.length,
      }));
    };

    const handlePrev = (type) => {
      const category = project.visuals.find((cat) => cat.type === type);
      setCurrentIndex((prev) => ({
        ...prev,
        [type]: ((prev[type] || 0) - 1 + category.items.length) % category.items.length,
      }));
    };

  // You can implement similar prev/next for floor, elevation, section

  return (
    <div id="project-detail" className="min-h-screen bg-linear-to-br from-background via-background to-muted/30 p-6 md:p-12">      
      {/* Header Section */}
      <div className="mb-13">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
          Project Showcase
        </h1>
        <div className="h-1 w-20 bg-linear-to-r from-primary to-accent rounded-full" />
      </div>

      {/* Back Button */}
      <button className="z-100 mb-9 sticky top-9 inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:scale-105 font-medium text-sm"
        onClick={() => {
          setHome(true)
          window.scrollTo(0, 0);
          }
        }
      >
        <ChevronLeft size={18} />
        Back to home
      </button>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Content */}
        <div className="space-y-8">


            {/* Content Card */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:border-primary/30">
              <h2 className="text-3xl font-bold text-foreground mb-4 text-balance">
                {project.title}
              </h2>

              {/* Meta Information */}
              <div className="space-y-3 mb-8 pb-8 border-b border-border/50">
                {/* <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">Subtitle Information</span>
                </div> */}
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <div className="text-muted-foreground inline-block">Year : {project.year}</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <div className="text-muted-foreground">Location : {project.location}</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-foreground/80 leading-relaxed mb-6 text-pretty">
                {project.description[0]}
              </p>
              <p className="text-foreground/80 leading-relaxed text-pretty">
                {project.description[1]}
              </p>
            </div>
        </div>

          {/* Right Column - Image Gallery */}
        <div className="space-y-8">
            {/* Image Carousel Cards */}


            {/* {project.renders.map((item , index) => ( */}
              <div
                // key={index}
                className="relative w-fit m-auto group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative md:w-fit md:h-148 m-auto bg-linear-to-br from-primary/20 to-accent/20 overflow-hidden">
                  <img
                    src={project.renders[currentPhoto].url}
                    alt={project.renders[currentPhoto].title}
                    className="w-full h-auto md:h-full md:w-auto object-cover m-auto group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Navigation Buttons */}
                  <button
                    onClick={() =>
                      setCurrentPhoto(prev => 
                        prev > 0 ? prev - 1: project.renders.length-1
                      )
                    }
                    className="absolute left-4 top-1/2 -translate-y-1/2 lg:bg-white/90 bg-white hover:bg-white text-secondary rounded-full p-2 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() =>
                      setCurrentPhoto(prev => 
                        prev < project.renders.length - 1 ? prev + 1 : 0
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 lg:bg-white/90 bg-white hover:bg-white text-secondary rounded-full p-2 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                      <ChevronRight size={20} />
                  </button>
                </div>

                {/* Image Info */}
                {/* <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-semibold">{project.renders[currentPhoto].title}</p>
                  <p className="text-white/80 text-sm">Beautiful project photography</p>
                </div> */}
              </div>

        </div>
      </div>
      {
      project.video && 
      <div className="col-span-2 w:[90vw] lg:w-fit my-9 mx-auto flex justify-center items-center">
        <iframe
          className="w-[560px] h-[315px] lg:w-[1120px] lg:h-[630px]"
          src="https://www.youtube.com/embed/3BLfain9X_w?si=cag90jbKqpg_Gl1C"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      }



      <div className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {project.visuals?.length > 0 && <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-bold text-foreground mb-11">Architectural Drawings</h2>
            {/* <button className="">lsdfk</button> */}
            {/* <a
              href=""
              download=""
              className="w-fit mb-12 inline-flex items-center gap-2 px-4 pb-2 underline text-foreground rounded-lg hover:opacity-55 font-medium text-sm"
            >
              Click here to download Architectural Drawings
            </a> */}
          </div>
          }
          
          <div className="space-y-16">
            { project.visuals.map((category) => (
              <div key={category.type} className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">{category.type}</h3>

                {/* Slider Container */}
                <div className="relative">
                  <div
                    className="bg-muted rounded-lg overflow-hidden aspect-video">
                      {category.items?.length > 0 && (
                        <img
                          onClick={
                            (e) => {
                              setModalSrc(category.items[currentIndex[category.type]].url)
                              setModalAlt(category.items[currentIndex[category.type]].title || "image")
                              setOpenModal(true)
                            }
                          }
                          src={category.items[currentIndex[category.type]].url}
                          alt={category.items[currentIndex[category.type]].title || "image"}
                          className="cursor-pointer"
                          />
                        )}

                      {/* modal */}
                      {openModal &&       
                        <div className="z-11000 fixed inset-0 min-h-screen flex items-center justify-center bg-gray-100 border border-red-700">
                          <ZoomModal isOpen={openModal} setIsOpen={setOpenModal} imgSrc={modalSrc} imgAlt={category.items[currentIndex[category.type]].title || "Image"} />
                        </div>
                      }
                  </div>


                  {/* Navigation Buttons */}
                  {category.items.length > 1 && (
                    <>
                      <button
                        onClick={() => handlePrev(category.type)}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary text-background rounded-full p-2 hover:bg-accent transition-colors z-10"
                        aria-label="Previous drawing"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        onClick={() => handleNext(category.type)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary text-background rounded-full p-2 hover:bg-accent transition-colors z-10"
                        aria-label="Next drawing"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </>
                  )}

                  {/* Slide Counter */}
                  <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm rounded px-3 py-1 text-sm font-medium text-foreground">
                    {(currentIndex[category.type] || 0) + 1} / {category.items.length}
                  </div>
                </div>

                {/* Current Item Title */}
                <p className="text-lg text-muted-foreground">{category.items[currentIndex  || 0]?.title}</p>

                {/* Thumbnail Navigation */}
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {category.items.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() =>
                        setCurrentIndex((prev) => ({
                          ...prev,
                          [category.type]: idx,
                        }))
                      }
                      className={`shrink-0 w-24 h-24 rounded overflow-hidden border-2 transition-all ${
                        (currentIndex[category.type] || 0) === idx
                          ? "border-primary"
                          : "border-muted hover:border-muted-foreground"
                      }`}
                    >
                      <img
                        src={item.url}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
