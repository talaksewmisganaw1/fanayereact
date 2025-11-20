import React, { useState, useEffect } from "react";
import { useLocation, useNavigate  } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ZoomModal from "./Zoom";


const piassaFloorplansImport = import.meta.glob('/src/assets/piassa/floor plans/*.png', { eager: true });
const piassaSiteplansImport = import.meta.glob('/src/assets/piassa/siteplan/*.png', { eager: true });
const piassaRendersImport = import.meta.glob('/src/assets/piassa/renders/*.{jpg,png,jpeg,webp}', { eager: true });

const piassaFloorplans = Object.values(piassaFloorplansImport).map(img => img.default);
const piassaSiteplans = Object.values(piassaSiteplansImport).map(img => img.default);
const piassaRenders = Object.values(piassaRendersImport).map(img => img.default);

const hannaFloorplansImport = import.meta.glob('/src/assets/hanna/floor plans/*.png', { eager: true });
const hannaSiteplansImport = import.meta.glob('/src/assets/hanna/siteplan/*.png', { eager: true });
const hannaRendersImport = import.meta.glob('/src/assets/hanna/renders/*.{jpg,png,jpeg,webp}', { eager: true });

const hannaFloorplans = Object.values(hannaFloorplansImport).map(img => img.default);
const hannaSiteplans = Object.values(hannaSiteplansImport).map(img => img.default);
const hannaRenders = Object.values(hannaRendersImport).map(img => img.default);

const guna_Michael_FloorplansImport = import.meta.glob('/src/assets/guna_Michael_/floor plans/*.png', { eager: true });
const guna_Michael_SiteplansImport = import.meta.glob('/src/assets/guna_Michael_/siteplan/*.png', { eager: true });
const guna_Michael_RendersImport = import.meta.glob('/src/assets/guna_Michael_/renders/*.{jpg,png,jpeg,webp}', { eager: true });


const guna_Michael_Floorplans = Object.values(guna_Michael_FloorplansImport).map(img => img.default);
const guna_Michael_Siteplans = Object.values(guna_Michael_SiteplansImport).map(img => img.default);
const guna_Michael_Renders = Object.values(guna_Michael_RendersImport).map(img => img.default);

const eskinderFloorplansImport = import.meta.glob('/src/assets/eskinder/floor plans/*.png', { eager: true });
const eskinderRendersImport = import.meta.glob('/src/assets/eskinder/renders/*.{jpg,png,jpeg,webp}', { eager: true });
const eskinderDetailsImport = import.meta.glob('/src/assets/eskinder/details/*.png', { eager: true });

const eskinderFloorplans = Object.values(eskinderFloorplansImport).map(img => img.default);
const eskinderRenders = Object.values(eskinderRendersImport).map(img => img.default);

const fikirteFloorplansImport = import.meta.glob('/src/assets/fikirte/floor plans/*.{jpg,png,jpeg}', { eager: true });
const fikirteRendersImport = import.meta.glob('/src/assets/fikirte/renders/*.{jpg,png,jpeg,webp}', { eager: true });

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
        contents: [
          {
            text: "\“ Our design embraces Piassa's essence with a sophisticated color palette. A natural gradient of browns, from light to dark, creates elegant harmony with the historic surroundings,lending timeless warmth and distinction to Addis Legacy Apartment.\”",
            author: "Afewerk K",
            img: piassaRenders[0]
          },  {
            text: "designed using a cold-formed steel structure, allowing for precise, lightweight, and highly durable construction. This method supports flexible layouts and clean architectural lines, making it ideal for modern design while ensuring long-term structural stability.",
            img: piassaRenders[1]
          }, {
            text: "open and wide windows that maximize natural light and create seamless visual connections with the outdoors. These expansive openings enhance the sense of space, making interiors feel bright, airy, and welcoming.",
            img: piassaRenders[2]
          }, {
            text: "designed with a focus on spacious, well-organized interiors that maximize comfort and functionality. Thoughtful layout planning ensures smooth circulation between rooms and creates clearly defined areas for living, dining, and private activities.",
            img: piassaRenders[3]
          }, {
            text: "",
            img: piassaRenders[4]
          }, {
            text: "",
            img: piassaRenders[5]
          }, {
            text: "",
            img: piassaRenders[6]
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
          }
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
        contents: [
          {
            text: "A modern exterior that combines clean box-shaped forms with elegantly curved walls, creating a dynamic and visually engaging façade. The thoughtful integration of natural stone adds texture and warmth, balancing contemporary geometry with a sense of timelessness.",
            img: hannaRenders[0]
          }, {
            text: "The design emphasizes layered volumes and up-level arrangements, which enhance the architectural depth and create interesting shadow patterns throughout the day. This combination of curves, boxes, and stone detailing results in a sophisticated, modern home that feels both striking and harmonious with its surroundings.",
            img: hannaRenders[1]
          }, {
            text: "designed with a strong emphasis on structural integrity, ensuring that every architectural element is both functional and resilient. Careful planning of load-bearing elements, cantilevered volumes, and up-level structures allows the design to achieve its modern aesthetic while maintaining safety and stability.",
            img: hannaRenders[2]
          }, {
            text: "Clean, white box forms that define the upper volumes, creating a crisp and modern aesthetic. The material combination emphasizes the building’s hierarchy, with while the white boxes appear light and floating above. The interplay of color, texture, and geometric form results in a balanced, visually striking residence that harmonizes modern design with natural materials.",
            img: hannaRenders[3]
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
          }
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
        contents: [
          {
            text: "The church is designed by thoughtfully adapting elements of ancient ecclesiastical architecture, blending historic interior and exterior motifs with modern functionality. The result is a harmonious space that honors heritage and elevates the worship experience.",
            img: guna_Michael_Renders[0]
          }, {
            text: "merging these ancient influences with modern design principles, the church achieves a balance of heritage and contemporary function. The result is a harmonious space that preserves the essence of traditional church architecture while offering a renewed, immersive, and spiritually uplifting environment.",
            img: guna_Michael_Renders[1]
          }, {
            text: "Enhanced the church by introducing a carefully curated material palette that respects the essence of the original structure. Natural material were selected to preserve the building’s timeless character, while subtle metal accents provided a refined contrast.",
            img: guna_Michael_Renders[2]
          }, {
            text: "improving visual harmony, the updated materials were chosen for their durability and long-term performance. The refined finishes create a cohesive environment that supports both daily use and special spiritual gatherings.",
            img: guna_Michael_Renders[3]
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
        contents: [
          {
            text: "A double-height bedroom designed to create a sense of grandeur and openness, giving the client an elevated spatial experience. This design enhances natural light penetration and improves ventilation, making the space feel more expansive and luxurious.",
            img: eskinderRenders[0]
          }, {
            text: "a double-height living room, designed to create a dramatic sense of space and openness. This vertical expansion enhances natural light, improves ventilation, and gives the area a grand, airy atmosphere that elevates the overall living experience.",
            img: eskinderRenders[1]
          }, {
            text: "The townhouse is designed to maximize space efficiency while providing a comfortable and modern living environment. Thoughtful planning ensures each area is functional, with clear zoning for private and communal spaces, creating a balanced and practical home for urban living.",
            img: eskinderRenders[2]
          }, {
            text: "The design integrates nature directly into the interior, creating dedicated plant spaces that bring greenery and life into the home. These areas not only enhance visual appeal but also promote a calming and refreshing atmosphere, fostering a strong connection between the occupants and the natural environment.",
            img: eskinderRenders[3]
          }
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
          }
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
        contents: [
          {
            text: "rooms with open balconies, designed to extend living spaces outdoors and enhance the connection with the surrounding environment. These balconies provide abundant natural light and fresh air, creating a relaxing and inviting atmosphere for residents. ",
            img: fikirteRenders[0]
          }, {
            text: "overlapping and interweaving volumes create a dynamic and visually engaging façade. This approach adds depth, texture, and a sense of movement, making the building stand out while maintaining a modern, cohesive look.",
            img: fikirteRenders[1]
          }, {
            text: "serve functional purposes, allowing for shaded areas, natural ventilation, and strategic spatial organization. By combining aesthetic appeal with practical benefits, the design results in a residence that is both striking and highly livable.",
            img: fikirteRenders[2]
          }, {
            text: "a contemporary color palette of crisp white and deep dark grey, creating a striking contrast that highlights the architectural volumes. White surfaces emphasize openness and light, while dark grey elements provide depth and visual grounding, resulting in a balanced and modern façade.",
            img: fikirteRenders[3]
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
        contents: [
          {
            text: "a light color palette, creating a bright, airy, and welcoming atmosphere. Soft neutral tones enhance the sense of spaciousness, while carefully selected materials add subtle texture and warmth to the space.",
            img: interiorRenders[0]
          }, {
            text: "The use of light colors maximizes natural illumination and reflects a clean, modern aesthetic. This approach not only makes the interiors feel more open and serene but also provides a versatile backdrop for furniture, décor, and personal expression, resulting in a comfortable and elegant living environment.",
            img: interiorRenders[1]
          }, {
            text: "The interior design incorporates grey-colored furniture, chosen for its versatility, elegance, and timeless appeal. Grey tones provide a neutral foundation that complements the overall color palette while adding depth and sophistication to the space.",
            img: interiorRenders[2]
          }, {
            text: "enhances the modern aesthetic of the interiors, allowing textures, materials, and subtle accents to stand out without overwhelming the design. Grey furniture creates a cohesive and balanced environment, offering both comfort and style for everyday living.",
            img: interiorRenders[3]
          }
        ],
        visuals: []
    }
    ];

    const location = useLocation();
    
    const project = projectsList[projectIndex]

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
    <div id="project-detail" className="min-h-screen bg-linear-to-br from-background via-background to-muted/30">      
      {/* Header Section */}
      <div className="mb-1 m-6 md:my-12 md:mb-1">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-1">
          Project Showcase
        </h1>
        <div className="h-1 w-20 bg-linear-to-r from-primary to-accent rounded-full" />
      </div>

      {/* Back Button */}
      <button className=" m-6 md:m-12 z-100 mb-9 sticky top-9 inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:scale-105 font-medium text-sm"
        onClick={() => {
          setHome(true)
          window.scrollTo(0, 0);
          }
        }
      >
        <ChevronLeft size={18} />
        Back to home
      </button>
      <div className="w-full p-5">

        {/* 1st (odd) */}
        {project.contents.map((item, index) => {
          return <>
          {item.text ? 
            <div className={`${index % 2 === 1? "bg-muted/30": ""} w-full flex flex-col md:flex-row items-center justify-between gap-1 md:h-[600px] max-w-7xl m-auto`}>
              <div className={`${index % 2 === 0? "md:order-2": "md:order-1"} order-2 w-[80%] md:w-[50%] text-base md:text-lg text-foreground/60 pl-9 pb-9 pr-2 md:pr-9 mb-18 mt-8 flex flex-col items-end ml-auto justify-end md:items-center md:justify-center text-center`}>{item.text}
                {item.author && <div className="my-4 w-full flex justify-end pr-5 italic">{item.author}</div>}
              </div>
              <div className={`${index % 2 === 0? "md:order-1": "md:order-2"} p-2 md:p-0 order-1 w-full md:w-[50%] h-fit md:h-full flex items-center justify-center`}>
                <img src={item.img} className="h-full object-cover" alt="" />
              </div>
            </div>:
            <div className={`${index % 2 === 1? "bg-muted/30": ""} w-fit mt-5 flex flex-col md:flex-row items-center justify-between gap-6 md:h-[500px] max-w-7xl m-auto`}>
              <div className="w-full h-full flex items-center justify-center">
                <img src={item.img} className="h-full object-cover" alt="" />
              </div> 
            </div>
          }
          </>
        }
        )}
      </div>
      {
      project.video && 
      <div className="w:[90vw] lg:w-fit my-9 mx-auto flex justify-center items-center">
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

    </div>
  );
}
