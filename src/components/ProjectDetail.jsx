import React, { useState, useEffect } from "react";
import { ChevronLeft } from "lucide-react";

const betelMixedRendersImport = import.meta.glob('/src/assets/1betelMixed/renders/*.{jpg,png,jpeg,webp}', { eager: true });
const betelMixedRenders = Object.values(betelMixedRendersImport).map(img => img.default);

const labRendersImport = import.meta.glob('/src/assets/2lab/renders/*.{jpg,png,jpeg,webp}', { eager: true });
const labRenders = Object.values(labRendersImport).map(img => img.default);

const brookAptRendersImport = import.meta.glob('/src/assets/3brookApt/renders/*.{jpg,png,jpeg,webp}', { eager: true });
const brookAptRenders = Object.values(brookAptRendersImport).map(img => img.default);

const cafeRendersImport = import.meta.glob('/src/assets/4cafe/renders/*.{jpg,png,jpeg,webp}', { eager: true });
const cafeRenders = Object.values(cafeRendersImport).map(img => img.default);

const aptInSholaRendersImport = import.meta.glob('/src/assets/5aptInShola/renders/*.{jpg,png,jpeg,webp}', { eager: true });
const aptInSholaRenders = Object.values(aptInSholaRendersImport).map(img => img.default);

const residenceInKoyeRendersImport = import.meta.glob('/src/assets/6residenceInKoye/renders/*.{jpg,png,jpeg,webp}', { eager: true });
const residenceInKoyeRenders = Object.values(residenceInKoyeRendersImport).map(img => img.default);

const aptInHaileGarmentRendersImport = import.meta.glob('/src/assets/7aptInHaileGarment/renders/*.{jpg,png,jpeg,webp}', { eager: true });
const aptInHaileGarmentRenders = Object.values(aptInHaileGarmentRendersImport).map(img => img.default);

const piassaRendersImport = import.meta.glob('/src/assets/piassa/renders/*.{jpg,png,jpeg,webp}', { eager: true });
const piassaRenders = Object.values(piassaRendersImport).map(img => img.default);

const hannaRendersImport = import.meta.glob('/src/assets/hanna/renders/*.{jpg,png,jpeg,webp}', { eager: true });
const hannaRenders = Object.values(hannaRendersImport).map(img => img.default);

const guna_Michael_RendersImport = import.meta.glob('/src/assets/guna_Michael_/renders/*.{jpg,png,jpeg,webp}', { eager: true });
const guna_Michael_Renders = Object.values(guna_Michael_RendersImport).map(img => img.default);

const eskinderRendersImport = import.meta.glob('/src/assets/eskinder/renders/*.{jpg,png,jpeg,webp}', { eager: true });
const eskinderRenders = Object.values(eskinderRendersImport).map(img => img.default);

const fikirteRendersImport = import.meta.glob('/src/assets/fikirte/renders/*.{jpg,png,jpeg,webp}', { eager: true });
const fikirteRenders = Object.values(fikirteRendersImport).map(img => img.default);

const interiorRendersImport = import.meta.glob('/src/assets/interior/*.{jpg,png,jpeg,webp}', { eager: true });
const interiorRenders = Object.values(interiorRendersImport).map(img => img.default);

export default function ProjectDetail({ projectIndex, setHome }) {

    const projectsList = [
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
          "An educational facility project where I participated in the architectural rendering. The focus was on creating a functional yet modern aesthetic for a computer laboratory environment.",
          "My contribution involved producing detailed 3D visualizations that showcased the interior layout, lighting, and technical integration."
        ],
        contents: [
          {
            text: "The dining area features a bright, airy atmosphere characterized by large perimeter windows and soft, ambient illumination from oversized spherical pendant lights. This combination creates a cozy yet professional environment suitable for various times of day.",
            img: labRenders[0]
          }, {
            text: "The design utilizes light polished tile flooring and wood-toned furniture to establish a warm, organic foundation. A deep forest-green accent wall provides a sophisticated contrast, adding depth and modern flair to the overall color scheme.",
            img: labRenders[1]
          }, {
            text: "A rhythmic slatted timber ceiling serves as a key architectural feature, adding visual warmth and defining the primary dining zone. This textured element helps structure the space and distinguishes it from the expansive glass walls.",
            img: labRenders[2]
          }, {
            text: "The floor plan is optimized for flexibility, featuring a mix of individual tables and comfortable banquette seating. This functional arrangement supports a seamless transition from a casual coffee spot to a more formal dining setting while maintaining a clean flow.",
            img: labRenders[3]
          }
        ]
      },
      {
        title: "Brook Apartment",
        year: "2018 E.C.",
        location: "Addis Ababa, Ethiopia",
        description: [
          "A residential apartment project where I was involved in interior design and rendering. I worked on selecting materials and colors that create a warm and inviting atmosphere.",
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
        title: "River Side Cafe",
        year: "2018 E.C.",
        location: "Addis Ababa, Ethiopia",
        description: [
          "A hospitality project focusing on a riverside cafe. My role included interior design and architectural rendering, aiming to create a serene and enjoyable space for visitors.",
          "The design leverages its riverside location, incorporating natural elements and an open layout to maximize the customer experience."
        ],
        contents: [
          {
            text: "The dining area features a bright, airy atmosphere characterized by large perimeter windows and soft, ambient illumination from oversized spherical pendant lights. This combination creates a cozy yet professional environment suitable for various times of day.",
            img: cafeRenders[0]
          }, {
            text: "The design utilizes light polished tile flooring and wood-toned furniture to establish a warm, organic foundation. A deep forest-green accent wall provides a sophisticated contrast, adding depth and modern flair to the overall color scheme.",
            img: cafeRenders[1]
          }, {
            text: "A rhythmic slatted timber ceiling serves as a key architectural feature, adding visual warmth and defining the primary dining zone. This textured element helps structure the space and distinguishes it from the expansive glass walls.",
            img: cafeRenders[2]
          }, {
            text: "The floor plan is optimized for flexibility, featuring a mix of individual tables and comfortable banquette seating. This functional arrangement supports a seamless transition from a casual coffee spot to a more formal dining setting while maintaining a clean flow.",
            img: cafeRenders[3]
          }
        ]
      },
      {
        title: "Apartment Project",
        year: "2018 E.C.",
        location: "Addis Ababa, Ethiopia",
        description: [
          "Located in Shola, this apartment project involved interior design and rendering. I focused on creating a modern living space that caters to urban dwellers.",
          "The visualizations highlight the use of vertical space and the integration of natural light into the living areas."
        ],
        contents: [
          {
            text: "Smart interior solutions were implemented to make the most of the available space, ensuring a comfortable and functional home.",
            img: aptInSholaRenders[0]
          }
        ],
        visuals: [
          {
            type: "Renders",
            items: aptInSholaRenders.map((url, i) => ({ id: i, title: `Render ${i + 1}`, url }))
          }
        ]
      },
      {
        title: "Residence Project",
        year: "2018 E.C.",
        location: "Addis Ababa, Ethiopia",
        description: [
          "A residential project in Koye where I performed architectural rendering. The goal was to present the client with a realistic view of their future home.",
          "The renderings showcase the exterior design and the surrounding landscape, providing a comprehensive visualization of the project."
        ],
        contents: [
          {
            text: "The exterior rendering focuses on the building's form and its relationship with the surrounding environment.",
            img: residenceInKoyeRenders[0]
          }
        ],
        visuals: [
          {
            type: "Renders",
            items: residenceInKoyeRenders.map((url, i) => ({ id: i, title: `Render ${i + 1}`, url }))
          }
        ]
      },
      {
        title: "Apartment Project",
        year: "2018 E.C.",
        location: "Addis Ababa, Ethiopia",
        description: [
          "An apartment building in Haile Garment. My contribution was centered on architectural rendering, creating high-definition visualizations for the project.",
          "I focused on the architectural details and the material finishes to ensure a premium look and feel."
        ],
        contents: [
          {
            text: "The interior utilizes a seamless open-concept design that merges the living and dining areas into one cohesive social hub. The layout prioritizes flow, using a central axis that draws the eye from the casual lounge area straight through to the formal dining zone.",
            img: aptInHaileGarmentRenders[0]
          }, {
            text: "A refined neutral foundation of off-white walls is punctuated by a bold, sapphire-blue sofa that serves as the primary focal point. Warm gold accents and earthy wooden furniture balance these cool tones, creating a welcoming and upscale atmosphere.",
            img: aptInHaileGarmentRenders[1]
          }, {
            text: "The design features subtle geometric textures, particularly in the vertical paneling of the TV feature wall and the recessed ceiling tray. These \"quiet luxury\" elements add verticality and depth without the need for heavy ornamentation.",
            img: aptInHaileGarmentRenders[2]
          }, {
            text: "Strategic layered lighting—including recessed spotlights and halo pendants—ensures the space remains bright and dynamic. Minimalist abstract artwork echoes the room's color scheme, reinforcing a sense of intentionality and modern style.",
            img: aptInHaileGarmentRenders[3]
          }
        ]
      },
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
        title: "G+1 Residence",
        year: "2018 E.C.",
        location: "Addis Ababa, Ethiopia",
        description: [
          "A G+1 private residence designed to meet modern living standards. I prepared all the working drawings, including floor plans, elevations, and sections, to ensure every design element was clearly documented.",
          "In addition, I produced detailed 3D renderings to showcase both the interior and exterior designs. These renderings helped communicate the spatial arrangement, materials, and overall aesthetic to the client."
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
    },
    {
        title: "Interior Design Rendering",
        year: "2018 E.C.",
        location: "Addis Ababa, Ethiopia",
        description: [
          "A 64 sqm interior design rendering project. I created realistic 3D renderings capturing spatial arrangement, furniture placement, lighting, and material finishes.",
          "These renderings provided the client with a complete understanding of the proposed design, allowing for informed decisions before the execution of the interior design project."
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
          Project Showcase
        </h1>
        <div className="h-1 w-20 bg-linear-to-r from-primary to-accent rounded-full" />
      </div>

      <div className="w-full p-5">

        {/* 1st (odd) */}
        {project.contents.map((item, index) => {
          return <>
            {item.text ?
            <div className={`${index % 2 === 1 ? "bg-muted/90 mx-[-1.25rem] p-[1.2rem]" : ""}`}>
              <div className={`w-full flex flex-col md:flex-row items-center justify-between gap-1 md:h-[600px] max-w-7xl m-auto`}>
                <div className={`${index % 2 === 0 ? "md:order-2" : "md:order-1"} order-2 w-[80%] md:w-[50%] text-base md:text-lg text-foreground/60 pl-9 pb-9 pr-2 md:pr-9 mb-18 mt-8 flex flex-col items-end ml-auto justify-end md:items-center md:justify-center text-center`}>{item.text}
                  {item.author && <div className="my-4 w-full flex justify-end pr-5 italic">{item.author}</div>}
                </div>
                <div className={`${index % 2 === 0 ? "md:order-1" : "md:order-2"} p-5 md:py-12 order-1 w-full md:w-[50%] h-fit md:h-full flex items-center justify-center`}>
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
