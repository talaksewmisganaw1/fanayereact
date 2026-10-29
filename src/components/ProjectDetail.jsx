import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, Maximize2, ZoomIn, ArrowLeft } from "lucide-react";
import "./detail.css"


const betelMixedRendersImport = import.meta.glob('/src/assets/1betelMixed/renders/*.{jpg,png,jpeg,webp}', { eager: true });
const betelMixedRenders = Object.values(betelMixedRendersImport).map(img => img.default);

const labRendersImport = import.meta.glob('/src/assets/2lab/renders/*.{jpg,png,jpeg,webp}', { eager: true });
const labRenders = Object.entries(labRendersImport)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, img]) => img.default);

const brookAptRendersImport = import.meta.glob('/src/assets/3brookApt/renders/*.{jpg,png,jpeg,webp}', { eager: true });
const brookAptRenders = Object.values(brookAptRendersImport).map(img => img.default);

const piassaRendersImport = import.meta.glob('/src/assets/piassa/renders/*.{jpg,png,jpeg,webp}', { eager: true });
const piassaRenders = Object.values(piassaRendersImport).map(img => img.default);

const fikirteRendersImport = import.meta.glob('/src/assets/fikirte/renders/*.{jpg,png,jpeg,webp}', { eager: true });
const fikirteRenders = Object.values(fikirteRendersImport).map(img => img.default);

const ultraGlobalRendersImport = import.meta.glob('/src/assets/ultraGlobal/*.{jpg,png,jpeg,webp}', { eager: true });
const officeRenders = Object.values(ultraGlobalRendersImport).map(img => img.default);

const terraceGameZoneRendersImport = import.meta.glob('/src/assets/terrace home game zone/renders/*.{jpg,png,jpeg,webp}', { eager: true });
const terraceGameZoneRenders = Object.entries(terraceGameZoneRendersImport)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, img]) => img.default);

const pandaRestaurantRendersImport = import.meta.glob('/src/assets/panda restaurant design/renders/*.{jpg,png,jpeg,webp}', { eager: true });
const pandaRestaurantRenders = Object.entries(pandaRestaurantRendersImport)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, img]) => img.default);

const mediaDesignRendersImport = import.meta.glob('/src/assets/media design/renders/*.{jpg,png,jpeg,webp}', { eager: true });
const mediaDesignRenders = Object.entries(mediaDesignRendersImport)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, img]) => img.default);

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
            text: "A contemporary reception area featuring a minimalist ceiling with recessed spotlights and linear LED accents creates a sleek and professional atmosphere. The lighting design provides even illumination while highlighting the clean architectural lines, glass partition with frosted bands, and the modern reception desk, reinforcing the refined and corporate character of the space.",
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
    },
    {
      title: "Terrace Home Game Zone",
      year: "2018 E.C.",
      location: "Addis Ababa, Ethiopia",
      description: [
        "A modern terrace recreation and entertainment lounge designed for ultimate home leisure. The project integrates state-of-the-art gaming setups, a professional billiard zone, custom acoustic details, and immersive lighting design.",
        "I participated in the 3D visualization, spatial planning, and interior rendering of the space to showcase its dynamic ambiance."
      ],
      contents: [
        {
          text: "The entertainment lounge is organized around custom curved sofas with ambient LED base lighting, facing dual large-format gaming displays and media consoles for an immersive recreation experience.",
          img: terraceGameZoneRenders[0]
        },
        {
          text: "The dedicated gaming zone features a classic foosball table, custom graphic controller wall art, and direct access to full-height terrace glass windows that bring in natural light.",
          img: terraceGameZoneRenders[1]
        },
        {
          text: "A centrally positioned regulation billiard table is illuminated by a sculptural wave LED pendant fixture, complemented by light oak flooring and adjustable window blinds.",
          img: terraceGameZoneRenders[2]
        },
        {
          text: "A focused view of the entertainment center with fluted dark wood acoustic wall paneling, low-profile media cabinetry, and high-fidelity sound integration.",
          img: terraceGameZoneRenders[3]
        },
        {
          text: "",
          img: [terraceGameZoneRenders[4], terraceGameZoneRenders[5]]
        },
        {
          text: "",
          img: [terraceGameZoneRenders[6]]
        }
      ]
    },
    {
      title: "Panda Restaurant",
      year: "2018 E.C.",
      location: "Addis Ababa, Ethiopia",
      description: [
        "An Asian-inspired contemporary dining restaurant interior combining traditional Chinese cultural aesthetics with modern minimalist design.",
        "My contribution focused on the architectural visualization and detailed 3D rendering of the dining rooms, bar, and decorative spatial elements."
      ],
      contents: [
        {
          text: "An intimate private VIP dining room featuring a custom round banquet table with a rotating lazy susan, accented by a panoramic ink-wash bamboo mural and concealed ceiling cove lighting.",
          img: pandaRestaurantRenders[0]
        },
        {
          text: "The beverage and service counter integrates rich walnut millwork, an illuminated geometric wine display, and built-in trough planters with vibrant indoor greenery.",
          img: pandaRestaurantRenders[1]
        },
        {
          text: "The open dining layout incorporates natural wood dining furniture, black metal track lighting, and frosted decorative screen partitions that create private dining enclaves.",
          img: pandaRestaurantRenders[2]
        },
        {
          text: "A stylish bar counter featuring a dark marble waterfall surface, natural wood bar stools with metallic accents, and a warm backlit bottle display shelf.",
          img: pandaRestaurantRenders[3]
        },
        {
          text: "The main dining area features comfortable booth seating along accent walls with soft perimeter backlighting, framed by large windows overlooking the terrace.",
          img: pandaRestaurantRenders[4]
        },
        {
          text: "",
          img: [pandaRestaurantRenders[5], pandaRestaurantRenders[6]]
        },
        {
          text: "",
          img: [pandaRestaurantRenders[7], pandaRestaurantRenders[8]]
        },
        {
          text: "",
          img: [pandaRestaurantRenders[9]]
        }
      ]
    },
    {
      title: "Midea Showroom",
      year: "2018 E.C.",
      location: "Addis Ababa, Ethiopia",
      description: [
        "A sleek commercial retail showroom designed for Midea smart home appliances. The interior layout focuses on intuitive product categorization, modern brand identity, and high-end experiential displays.",
        "I was responsible for producing realistic 3D visualizations and renders capturing the showroom's materials, lighting, and spatial zoning."
      ],
      contents: [
        {
          text: "The central showroom concourse showcases commercial beverage coolers and cooking ranges on illuminated display plinths, surrounded by branded overhead signage and directional ceiling tracks.",
          img: mediaDesignRenders[0]
        },
        {
          text: "A dedicated television display wall in matte charcoal finish contrasts with warm wood-framed alcoves for side-by-side refrigerator models.",
          img: mediaDesignRenders[1]
        },
        {
          text: "The appliance gallery features built-in microwave and oven wall units alongside compact countertop appliances, illuminated by generous natural daylight from curved curtain walls.",
          img: mediaDesignRenders[2]
        },
        {
          text: "An interactive cooking appliance demonstration counter featuring modern gas ranges with brushed stainless steel details and integrated promotional displays.",
          img: mediaDesignRenders[3]
        },
        {
          text: "A clean symmetrical view of the kitchen appliance section highlighting copper pendant lights and structured product alignment.",
          img: mediaDesignRenders[4]
        }
      ]
    }
  ];

  const project = projectsList[projectIndex] || projectsList[0];

  const [fixed, setFixed] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setFixed(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Separate narrative items from standalone gallery items
  const narrativeItems = (project.contents || []).filter(
    (item) => item.text && item.text.trim().length > 0
  );

  const galleryImages = [];
  (project.contents || []).forEach((item) => {
    if (!item.text || item.text.trim().length === 0) {
      if (Array.isArray(item.img)) {
        item.img.forEach((img) => {
          if (img) galleryImages.push(img);
        });
      } else if (item.img) {
        galleryImages.push(item.img);
      }
    }
  });

  // Flat list of all project images for seamless Lightbox traversal
  const allProjectImages = [];
  narrativeItems.forEach((item) => {
    if (typeof item.img === "string" && item.img) {
      allProjectImages.push(item.img);
    } else if (Array.isArray(item.img)) {
      allProjectImages.push(...item.img.filter(Boolean));
    }
  });
  galleryImages.forEach((img) => {
    if (!allProjectImages.includes(img)) {
      allProjectImages.push(img);
    }
  });

  const openLightbox = (imgSrc) => {
    const idx = allProjectImages.indexOf(imgSrc);
    setLightboxIndex(idx !== -1 ? idx : 0);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const nextLightbox = () => {
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % allProjectImages.length));
  };

  const prevLightbox = () => {
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + allProjectImages.length) % allProjectImages.length
    );
  };

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextLightbox();
      if (e.key === "ArrowLeft") prevLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [lightboxIndex, allProjectImages.length]);

  return (
    <div id="project-detail" className="bg-linear-to-br from-background via-background to-muted/30 min-h-screen pb-24 w-full max-w-full overflow-x-hidden">
      {/* Sticky / Fixed Back to Projects Button */}
      <div className="fixed top-4 sm:top-6 left-0 right-0 z-40 pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            className={`pointer-events-auto inline-flex items-center gap-2 px-4 py-2 sm:py-2.5 rounded-full transition-all duration-300 hover:scale-105 font-medium text-xs sm:text-sm cursor-pointer ${
              fixed
                ? "bg-card/95 backdrop-blur-md text-foreground hover:text-primary-foreground hover:bg-primary border border-border shadow-md"
                : "bg-card/90 backdrop-blur-sm text-foreground hover:text-primary-foreground hover:bg-primary border border-border/80 shadow-xs"
            }`}
            onClick={() => {
              setHome(true);
              window.scrollTo({ top: 0, left: 0, behavior: "instant" });
            }}
            aria-label="Back to projects"
          >
            <ArrowLeft size={16} />
            <span>Back to Projects</span>
          </button>
        </div>
      </div>

      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3 tracking-tight">
          {project.title || "Project Showcase"}
        </h1>

        <div className="h-1.5 w-20 bg-linear-to-r from-primary to-accent rounded-full" />
      </div>

      {/* Narrative Section (Images with Descriptions: No crop, preserved proportion) */}
      {narrativeItems.length > 0 && (
        <div className="w-full flex flex-col gap-10 md:gap-16 py-6">
          {narrativeItems.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`${index % 2 === 1 ? "bg-muted/40 py-10" : "py-4"} transition-colors`}
              >
                <div
                  className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center"
                >
                  {/* Image side - strictly preserving aspect ratio, zero crop, zero distortion */}
                  <div className={`md:col-span-7 ${isEven ? "md:order-1" : "md:order-2"} flex items-center justify-center w-full`}>
                    <div
                      onClick={() => openLightbox(item.img)}
                      className="group relative max-w-full rounded-2xl overflow-hidden bg-card/60 border border-border/70 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg cursor-pointer"
                    >
                      <img
                        src={item.img}
                        alt={`${project.title} detail ${index + 1}`}
                        className="w-full h-auto max-h-[560px] object-contain block mx-auto transition-transform duration-500 group-hover:scale-[1.01]"
                      />
                      {/* Clean corner icon affordance without any dark overlay covering the image */}
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                        <span className="p-2 bg-black/60 text-white rounded-full backdrop-blur-md flex items-center justify-center shadow-md">
                          <Maximize2 size={14} />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Text side - No "Perspective 1/2" text label */}
                  <div className={`md:col-span-5 ${isEven ? "md:order-2" : "md:order-1"} flex flex-col justify-center w-full`}>
                    {item.author ? (
                      <blockquote className="relative pl-4 border-l-2 border-primary/60">
                        <p className="text-base md:text-lg text-foreground/85 leading-relaxed italic font-serif">
                          {item.text}
                        </p>
                        <footer className="mt-3 text-sm font-medium not-italic text-foreground/60">
                          — {item.author}
                        </footer>
                      </blockquote>
                    ) : (
                      <p className="text-base md:text-lg text-foreground/85 leading-relaxed font-normal">
                        {item.text}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Visual Perspectives Gallery (No descriptions: 100% full natural proportion masonry) */}
      {galleryImages.length > 0 && (
        <section className="mt-12 md:mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 pb-4 border-b border-border/60">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              Perspectives & Architectural Studies
            </h2>
            <p className="text-sm md:text-base text-foreground/60 mt-1 max-w-2xl">
              Additional high-resolution renders displayed in their natural proportions without cropping.
            </p>
          </div>

          {/* Masonry Columns Layout */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
            {galleryImages.map((src, idx) => (
              <div
                key={idx}
                onClick={() => openLightbox(src)}
                className="break-inside-avoid mb-6 group relative rounded-2xl overflow-hidden bg-card border border-border/70 hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <img
                  src={src}
                  alt={`${project.title} study ${idx + 1}`}
                  loading="lazy"
                  className="w-full h-auto block object-contain transition-transform duration-500 group-hover:scale-[1.015]"
                />
                {/* Clean corner icon affordance without any dark overlay covering the image */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <span className="p-2 bg-black/60 text-white rounded-full backdrop-blur-md flex items-center justify-center shadow-md">
                    <Maximize2 size={14} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Video Presentation */}
      {project.video && (
        <section className="w-full max-w-5xl mx-auto my-16 px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
              Video Presentation
            </h3>
          </div>
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-border/60 bg-black">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/3BLfain9X_w?si=cag90jbKqpg_Gl1C"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </section>
      )}


      {/* Fullscreen Lightbox Modal (Zero crop, zoom & pan inspection) */}
      {lightboxIndex !== null && allProjectImages.length > 0 && (
        <div
          className="fixed inset-0 z-[300] bg-black/98 flex flex-col justify-between p-4 sm:p-6 animate-fadeIn select-none"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox();
          }}
        >
          {/* Top Header */}
          <div className="relative z-50 flex items-center justify-between w-full max-w-7xl mx-auto py-2 px-2 pointer-events-auto">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-white/10 text-white/90 border border-white/20 shadow-sm">
                {project.title}
              </span>
              <span className="text-white/70 text-sm font-mono">
                {lightboxIndex + 1} / {allProjectImages.length}
              </span>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              aria-label="Close Lightbox"
              className="relative z-50 p-2.5 rounded-full bg-white/15 text-white hover:bg-white/30 transition-all duration-200 cursor-pointer hover:rotate-90 pointer-events-auto shadow-md"
            >
              <X size={24} />
            </button>
          </div>

          {/* Center Display: 100% UNCOMPROMISED ASPECT RATIO, ZERO CROP */}
          <div
            className="relative flex-1 flex items-center justify-center p-2 sm:p-6 overflow-hidden"
            onClick={(e) => {
              if (e.target === e.currentTarget) closeLightbox();
            }}
          >
            {allProjectImages.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prevLightbox();
                }}
                aria-label="Previous Image"
                className="absolute left-2 sm:left-6 z-30 p-3 rounded-full bg-black/70 text-white/90 hover:text-white hover:bg-black/95 border border-white/15 backdrop-blur-md transition-all duration-200 hover:scale-110 cursor-pointer pointer-events-auto"
              >
                <ChevronLeft size={28} />
              </button>
            )}

            <img
              key={lightboxIndex}
              src={allProjectImages[lightboxIndex]}
              alt={`${project.title} view ${lightboxIndex + 1}`}
              className="max-h-[82vh] max-w-[92vw] object-contain rounded-xl shadow-2xl animate-modalZoom pointer-events-auto"
            />

            {allProjectImages.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  nextLightbox();
                }}
                aria-label="Next Image"
                className="absolute right-2 sm:right-6 z-30 p-3 rounded-full bg-black/70 text-white/90 hover:text-white hover:bg-black/95 border border-white/15 backdrop-blur-md transition-all duration-200 hover:scale-110 cursor-pointer pointer-events-auto"
              >
                <ChevronRight size={28} />
              </button>
            )}
          </div>

          {/* Bottom Thumbnails Strip */}
          {allProjectImages.length > 1 && (
            <div className="relative z-30 w-full max-w-4xl mx-auto flex items-center justify-center gap-2 overflow-x-auto py-2 px-4 pointer-events-auto">
              {allProjectImages.map((thumb, tIdx) => (
                <button
                  key={tIdx}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex(tIdx);
                  }}
                  className={`shrink-0 w-12 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer pointer-events-auto ${
                    tIdx === lightboxIndex
                      ? "border-primary scale-110 shadow-lg"
                      : "border-transparent opacity-45 hover:opacity-100"
                  }`}
                >
                  <img src={thumb} className="w-full h-full object-cover" alt="" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

