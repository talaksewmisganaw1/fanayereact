import React, { useState, useEffect } from "react";
import { ChevronLeft } from "lucide-react";
import "./detail.css"

const betelMixedRendersImport = import.meta.glob('/src/assets/1betelMixed/renders/*.{jpg,png,jpeg,webp}', { eager: true });
const betelMixedRenders = Object.values(betelMixedRendersImport).map(img => img.default);

const labRendersImport = import.meta.glob('/src/assets/2lab/renders/*.{jpg,png,jpeg,webp}', { eager: true });
const labRenders = Object.values(labRendersImport).map(img => img.default);

const brookAptRendersImport = import.meta.glob('/src/assets/3brookApt/renders/*.{jpg,png,jpeg,webp}', { eager: true });
const brookAptRenders = Object.values(brookAptRendersImport).map(img => img.default);

const piassaRendersImport = import.meta.glob('/src/assets/piassa/renders/*.{jpg,png,jpeg,webp}', { eager: true });
const piassaRenders = Object.values(piassaRendersImport).map(img => img.default);

const fikirteRendersImport = import.meta.glob('/src/assets/fikirte/renders/*.{jpg,png,jpeg,webp}', { eager: true });
const fikirteRenders = Object.values(fikirteRendersImport).map(img => img.default);

const ultraGlobalRendersImport = import.meta.glob('/src/assets/ultraGlobal/*.{jpg,png,jpeg,webp}', { eager: true });
const officeRenders = Object.values(ultraGlobalRendersImport).map(img => img.default);

export default function ProjectDetail({ projectIndex, setHome }) {

    const projectsList = [
      {   
        title: "Legacy Apartment",
        year: "2018 E.C.",
        location: "Addis Ababa, Ethiopia",
        description: [
          "A G+11 mixed apartment located in Piassa. The first steel structure building in Ethiopia, I was responsible for preparing the complete working drawings, ensuring that architectural details were accurate and construction-ready.",
        ],
        contents: [
          {
            text: "\“ Our design embraces Piassa's essence with a sophisticated color palette. A natural gradient of browns, from light to dark, creates elegant harmony with the historic surroundings,lending timeless warmth and distinction to Addis Legacy Apartment.\”",
            author: "Afewerk K",
            img: piassaRenders[0]
          },  {
            text: "This is the first steel structure building in Ethiopia. designed using a cold-formed steel structure, allowing for precise, lightweight, and highly durable construction. This method supports flexible layouts and clean architectural lines, making it ideal for modern design while ensuring long-term structural stability.",
            img: piassaRenders[1]
          }, {
            text: "open and wide windows that maximize natural light and create seamless visual connections with the outdoors. These expansive openings enhance the sense of space, making interiors feel bright, airy, and welcoming.",
            img: piassaRenders[2]
          }, {
            text: "designed with a focus on spacious, well-organized interiors that maximize comfort and functionality. Thoughtful layout planning ensures smooth circulation between rooms and creates clearly defined areas for living, dining, and private activities.",
            img: piassaRenders[3]
          }, {
            text: "",
            img: [piassaRenders[4]]
          }, {
            text: "",
            img: [piassaRenders[5]]
          }, {
            text: "",
            img: [piassaRenders[6]]
          }
        ],
        video: true
      },
      {
        title: "Executive Office Interior",
        year: "2018 E.C.",
        location: "Addis Ababa, Ethiopia",
        description: [
          "A contemporary office interior project that I contributed to the architectural visualization and rendering process. The design focuses on creating a refined and functional executive workspace. My role involved producing high-quality 3D renders that highlight the spatial layout, lighting design, and material composition of the office environment."
        ],
        contents: [
          {
            text: "The office is organized around a minimalist executive workstation that establishes a clear focal point while maintaining open circulation. Ergonomic visitor seating and a soft seating corner create a balanced space for both focused work and informal discussions.",
            img: officeRenders[0]
          },
          {
            text: "Large corner windows with horizontal blinds allow abundant natural light while offering expansive city views. The daylight enhances the bright interior palette and creates a comfortable and productive workspace.",
            img: officeRenders[1]
          },
          {
            text: "Built-in wall shelving with integrated LED lighting provides a combination of display and storage space. The warm wood tones contrast with the neutral interior, adding visual depth and sophistication to the office.",
            img: officeRenders[2]
          },
          {
            text: "A modern ceiling design featuring recessed lighting and a circular pendant fixture establishes a clean and contemporary atmosphere. The lighting scheme ensures balanced illumination while emphasizing the refined architectural details of the space.",
            img: officeRenders[3]
          },
          {
            text: "A refined workspace centered around a minimalist desk and built-in storage wall. Frosted glass partitions allow visual continuity and privacy, while the geometric ceiling lighting and neutral finishes reinforce the contemporary office aesthetic.",
            img: officeRenders[4]
          },
          {
            text: "A contemporary reception area featuring a minimalist ceiling with recessed spotlights and linear LED accents creates a sleek and professional atmosphere. The lighting design provides even illumination while highlighting the clean architectural lines, glass partition with frosted bands, and the modern reception desk, reinforcing the refined and corporate character of the space. ✨",
            img: officeRenders[5]
          }
        ]
      },
      {   
        title: "Mixed Use Apartment",
        year: "2018 E.C.",
        location: "Betel, Addis Ababa",
        description: [
          "A Mixed Use Apartment located in Betel. I was responsible for the architectural rendering of the project, focusing on creating realistic visualizations that highlight the building's design and materials.",
          "The renderings were used to communicate the design intent to stakeholders and provide a clear vision of the completed structure within its environment."
        ],
        contents: [
          {
            text: "This mixed-use apartment features a modern, clean façade with strong vertical lines and a balanced, symmetrical design. The upper floors are dedicated to residential units with spacious balconies and large windows for natural light.",
            img: betelMixedRenders[0]
          }, {
            text: "The ground and lower levels are designed for commercial use, creating an active street presence. Transparent glass fronts and open layouts make the spaces ideal for offices, cafés, or retail functions.",
            img: betelMixedRenders[1]
          }, {
            text: "A central entrance with clear signage creates a strong visual identity and easy access for both residents and visitors. The layered structure adds depth and architectural character.",
            img: betelMixedRenders[2]
          }, {
            text: "The overall design combines functionality, aesthetics, and urban integration, making the building suitable for high-density city living with mixed residential and commercial use.",
            img: betelMixedRenders[3]
          }
        ]
      },
      {
        title: "Computer Laboratory",
        year: "2018 E.C.",
        location: "Addis Ababa, Ethiopia",
        description: [
          "An educational facility project that I participated in the architectural rendering. The focus was on creating a functional yet modern aesthetic for a computer laboratory environment.",
          "My contribution involved producing detailed 3D visualizations that showcased the interior layout, lighting, and technical integration."
        ],
        contents: [
          {
            text: "The laboratory features an organized u-shaped workstation configuration that maximizes floor space and facilitates movement. Each station is equipped with dedicated monitors and ergonomic seating, creating a professional environment for focused research.",
            img: labRenders[0]
          }, {
            text: "Wall-mounted linear shelving with integrated LED lighting provides resource space while enhancing ambient brightness. Tall, wood-toned cabinetry offers vertical storage that balances technical utility with organic warmth.",
            img: labRenders[1]
          }, {
            text: "A grid-patterned drop ceiling with recessed LED panels provides the uniform, shadow-free illumination essential for a workspace. Large windows with horizontal blinds allow for precise control over natural light and glare.",
            img: labRenders[2]
          }, {
            text: "The lab maintains a professional palette of cool grays and natural wood tones. Vibrant blue chair cushions serve as a color pop that defines individual zones and ties the space into the broader project aesthetic.",
            img: labRenders[3]
          }
        ]
      },
      {
        title: "Brook Apartment",
        year: "2018 E.C.",
        location: "Addis Ababa, Ethiopia",
        description: [
          "A residential apartment project that I was involved in interior design and rendering. I worked on selecting materials and colors that create a warm and inviting atmosphere.",
          "The project showcases my ability to blend functionality with contemporary aesthetic choices in a residential setting."
        ],
        contents: [
          {
            text: "The design features a striking Contemporary Minimalist aesthetic, defined by a crisp white and charcoal palette. The central eight-story tower creates a strong vertical focus, balanced by two-story modern townhomes that establish a rhythmic, cohesive streetscape.",
            img: brookAptRenders[0]
          }, {
            text: "Expansive floor-to-ceiling glazing wraps the facade, promising bright, airy living spaces and panoramic views. These large window modules, paired with recessed balconies, add architectural depth and a sophisticated sense of transparency to the structure.",
            img: brookAptRenders[1]
          }, {
            text: "The project utilizes high-contrast materials like smooth masonry, dark metallic frames, and glass railings for an industrial-chic finish. This clean look is softened by integrated greenery on the rooftop and ground level, grounding the building in its environment.",
            img: brookAptRenders[2]
          }, {
            text: "By combining high-rise apartments with intimate townhomes, the development offers a mixed-typology approach. This design appeals to a diverse urban demographic, blending the luxury of elevated views with the privacy of street-level residential comfort.",
            img: brookAptRenders[3]
          }, {
            text: "",
            img: [brookAptRenders[4], brookAptRenders[5]]
          }, {
            text: "",
            img: [brookAptRenders[6], brookAptRenders[7]]
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
        ]
    }
  ];

  const project = projectsList[projectIndex]

  const [fixed, setFixed] = useState();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setFixed(true)
      }
      if (window.scrollY < 10) {
        setFixed(false)
      }
    })
  }, [])

  return (
    <div id="project-detail" className="bg-linear-to-br from-background via-background to-muted/30">
      {/* Back Button */}
      <button className={` ${fixed ? 'fixed' : ''} m-6 md:m-12 z-100 top-4 inline-flex items-center gap-2 px-2 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:scale-105 font-medium text-sm rounded-full`}
        onClick={() => {
          setHome(true)
          window.scrollTo(0, 0);
        }
        }
      >
        <ChevronLeft size={28} />
      </button>
      {/* Header Section */}
      <div className="mb-1 m-6 md:pb-12 md:mb-1">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-1">
          {project.title || "Project Showcase"}
        </h1>

        <div className="h-1 w-20 bg-linear-to-r from-primary to-accent rounded-full" />
        
        {/* {project.description && (
          <div className="mt-8 max-w-7xl text-lg text-foreground/80 flex flex-col gap-4 border mx-auto">
            {project.description.map((desc, i) => (
              <p key={i} className="leading-relaxed text-foreground/70">{desc}</p>
            ))}
          </div>
        )} */}
      </div>

      <div className="w-full p-5">

        {/* 1st (odd) */}
        {project.contents.map((item, index) => {
          return <>
            {item.text ?
            <div className={`${index % 2 === 1 ? "bg-muted/90" : ""}  mx-[-1.25rem] p-[1.2rem]`}>
              <div className={`w-full flex flex-col md:flex-row items-center justify-between gap-1 md:h-[600px] max-w-7xl m-auto`}>
                <div className={`${index % 2 === 0 ? "md:order-2" : "md:order-1"} order-2 w-[80%] md:w-[50%] text-base md:text-lg text-foreground/60 pl-9 pb-9 pr-2 md:pr-9 mb-18 mt-8 flex flex-col items-end ml-auto justify-end md:items-center md:justify-center text-center`}>{item.text}
                  {item.author && <div className="my-4 w-full flex justify-end pr-5 italic">{item.author}</div>}
                </div>
                <div className={`${index % 2 === 0 ? "md:order-1" : "md:order-2 border border-white"} w-full bg-red-300 aspect-[1/0.85] shimmer order-1 md:w-[50%] flex items-center justify-center`}>
                  <img src={item.img} className="h-full object-cover" alt="" />
                </div>
              </div>
            </div>:
            <div className={`${index % 2 === 1 ? "bg-muted/90 mx-[-1.25rem] px-[1.2rem]" : ""}`}>
              <div className={`${item.img.length === 2 ? "flex-col md:flex-row justify-between":"flex-col justify-center"} h-fit gap-5 items-center w-full py-5 flex flex-col md:flex-row gap-6 md:h-[500px] max-w-7xl m-auto`}>
                  <div className={`${item.img.length === 2 ? "w-full md:w-[48%] max-h-[90%]" : "w-fit"} h-full overflow-hidden`}>
                    <img src={item.img[0]} className="w-full h-full object-fill" alt="" />
                  </div>
                  {item.img[1] && <div className={`${item.img.length === 2 ? "w-full md:w-[48%] max-h-[90%]" : "w-full"} h-full overflow-hidden`}>
                    <img src={item.img[1]} className="w-full h-full object-cover" alt="" />
                  </div>}
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
