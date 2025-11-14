import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faDesktop, faBook, faGlobe, faHandshake, faBarsProgress } from '@fortawesome/free-solid-svg-icons';
import mainPhoto from '../assets/main-photo2.webp'
import bgrpic from '../assets/green-bgr4.webp'
import officeLogo from '../assets/logos/msoffice-logo.png'
import autoCADLogo from '../assets/logos/autocad-logo.png'
import revitLogo from '../assets/logos/revit.png'
import lumionLogo from '../assets/logos/lumion.png'
import photoshopLogo from '../assets/logos/photoshop-logo.png'
import illustratorLogo from '../assets/logos/illustrator-logo.png'
import sketchupLogo from '../assets/logos/sketchup.png'
import d5Logo from '../assets/logos/d5logo.png'

export default function About() {
  return (
    <section id="about">
        <div className="pt-14 md:px-18 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full max-w-7xl mx-auto">
                <div className="flex flex-col h-full gap-6 mx-3 md:ml-20 md:mr-12 pt-10 md:pt-28">
                    <h1 className="font-rougeScript font-medium text-accent text-9xl">Hi!!</h1>
                    <p className="text-2xl ml-6 font-delius font-medium">I am <strong className='inline text-accent'>Fanaye Girma</strong> a recent graduate architect from Woldia University. A passionate Architect dedicated to creating beautiful and functional architectural and other designs. I love creating ideas that solve problems.</p>
                    <div className="quote-box text-xl mx-16 my-10 flex flex-col gap-6 font-delius font-semibold">
                        <p className="ml-5">"We shape our buildings; thereafter they shape us."</p>
                        <p className="self-end pr-8">-- Winston Churchill</p>
                    </div>
                </div>
                <div className="image-and-bgr w-full md:w-[80%] mx-auto lg:w-full aspect-square overflow-hidden relative mt-6 group">
                    <img src={mainPhoto} alt="my photo" className="absolute main-img w-full h-full object-contain transition-all duration-500 ease-in-out group-hover:ml-4" />
                    <img src={bgrpic} alt="background shape" className="bgr absolute left-9 w-9/10 h-[98%] object-contain top-1/100 z-[-1] transition-all duration-500 ease-in-out group-hover:-ml-4" />
                </div>
            </div>
        </div>
        <div className="profiles-container bg-muted/30 w-full">
            {/* <div className="before-divider w-11/12 h-1 mx-auto bg-nav-bgr"></div> */}
            <div className="profiles grid grid-cols-1 lg:grid-cols-2 py-16 px-6 lg:px-36 gap-x-24">
                <div className="profile work-experience mt-12">
                    <h1 className="title flex items-center whitespace-nowrap w-full overflow-hidden mb-8 text-2xl font-semibold text-foreground">
                        <div className="icon-container flex items-center justify-center rounded-full text-accent text-2xl"><FontAwesomeIcon icon={faBriefcase} className="text-xl text-accent min-w-6 min-h-6" /></div>
                        <div className="line inline-block h-0.5 w-16 bg-gray-500 self-center mx-2"></div>
                        Work Experience
                        <div className="line2 inline-block h-0.5 w-full bg-gray-500 self-center ml-2"></div>
                    </h1>
                    <div className="profile-description experience flex flex-col gap-4 ml-7 md:ml-14 mb-5">
                        <div className="sb-ttl-yr flex justify-between items-center gap-8">
                            <ul className="list-disc">
                                <li><div className="sub-title text-lg font-[550]">Mark Consulting Architects</div></li>
                            </ul>
                            <div className="year text-base">Oct 30 - Jan 12, 2016 E.C.</div>
                        </div>
                        <h3 className="role ml-1 text-base font-semibold">Intern</h3>
                    </div>
                    <div className="profile-description experience flex flex-col gap-4 ml-7 md:ml-14 mb-5">
                        <div className="sb-ttl-yr flex justify-between items-center gap-8">
                            <ul className="list-disc">
                                <li><div className="sub-title text-lg font-[550]">Freelance Architectural Designer</div></li>
                            </ul>
                            <div className="year text-base">2015 E.C. – Present</div>
                        </div>
                        <h3 className="role ml-1 text-base font-semibold">Freelancer</h3>
                    </div>
                </div>
                
                <div className="profile academic-projects mt-12">
                    <h1 className="title flex items-center whitespace-nowrap w-full overflow-hidden mb-8 text-2xl font-semibold text-foreground">
                        <div className="icon-container flex items-center justify-center rounded-full text-accent"><FontAwesomeIcon icon={faBarsProgress} className="text-xl text-accent min-w-6 min-h-6" /></div>
                        <div className="line inline-block h-0.5 w-16 bg-gray-500 self-center mx-2"></div>
                        Featured Projects
                        <div className="line2 inline-block h-0.5 w-full bg-gray-500 self-center ml-2"></div>
                    </h1>
                    <div className="profile-description project-yr my-4 flex justify-between items-center gap-8 ml-7 md:ml-14">
                        <ul className="list-disc">
                            <li><div className="sub-title text-lg font-[550]">Legacy Apartment</div></li>
                        </ul>
                        <div className="year text-base">2018 E.C.</div>
                    </div>
                    <div className="profile-description project-yr my-4 flex justify-between items-center gap-8 ml-7 md:ml-14">
                        <ul className="list-disc">
                            <li><div className="sub-title text-lg font-[550]">G+1 Residence</div></li>
                        </ul>
                        <div className="year text-base">2018 E.C.</div>
                    </div>
                    <div className="profile-description project-yr my-4 flex justify-between items-center gap-8 ml-7 md:ml-14">
                        <ul className="list-disc">
                            <li><div className="sub-title text-lg font-[550]">Gunna St. Michael Church</div></li>
                        </ul>
                        <div className="year text-base">2018 E.C.</div>
                    </div>
                    <div className="profile-description project-yr my-4 flex justify-between items-center gap-8 ml-7 md:ml-14">
                        <ul className="list-disc">
                            <li><div className="sub-title text-lg font-[550]">G+2 Residence</div></li>
                        </ul>
                        <div className="year text-base">2018 E.C.</div>
                    </div>
                    <div className="profile-description project-yr my-4 flex justify-between items-center gap-8 ml-7 md:ml-14">
                        <ul className="list-disc">
                            <li><div className="sub-title text-lg font-[550]">G+2 Residence</div></li>
                        </ul>
                        <div className="year text-base">2018 E.C.</div>
                    </div>
                    <div className="profile-description project-yr my-4 flex justify-between items-center gap-8 ml-7 md:ml-14">
                        <ul className="list-disc">
                            <li><div className="sub-title text-lg font-[550]">Interior Design Rendering</div></li>
                        </ul>
                        <div className="year text-base">2018 E.C.</div>
                    </div>
                </div>
                
                <div className="profile education mt-12">
                    <h1 className="title flex items-center whitespace-nowrap w-full overflow-hidden mb-8 text-2xl font-semibold text-foreground">
                        <div className="icon-container flex items-center justify-center rounded-full min-w-6 min-h-6 text-accent"><FontAwesomeIcon icon={faGraduationCap} className="text-xl text-accent min-w-6 min-h-6" /></div>
                        <div className="line inline-block h-0.5 w-16 bg-gray-500 self-center mx-2"></div>
                        Education
                        <div className="line2 inline-block h-0.5 w-full bg-gray-500 self-center ml-2"></div>
                    </h1>
                    <div className="profile-description flex flex-col gap-4 ml-7 md:ml-14">
                        <div className="sb-ttl-yr flex justify-between items-center gap-8">
                            <ul className="list-disc">
                                <li><div className="sub-title text-lg font-[550]">Bachelor of Architecture</div></li>
                            </ul>
                            <div className="year text-base">2012 - 2017 E.C.</div>
                        </div>
                        <h3 className="place ml-1 text-base font-semibold">Woldia University</h3>
                    </div>
                </div>
                
                <div className="profile soft-skills mt-12">
                    <h1 className="title flex items-center whitespace-nowrap w-full overflow-hidden mb-8 text-2xl font-semibold text-foreground">
                        <div className="icon-container flex items-center justify-center rounded-full min-w-6 min-h-6 text-accent"><FontAwesomeIcon icon={faHandshake} className="text-xl text-accent min-w-6 min-h-6" /></div>
                        <div className="line inline-block h-0.5 w-16 bg-gray-500 self-center mx-2"></div>
                        Soft skills
                        <div className="line2 inline-block h-0.5 w-full bg-gray-500 self-center ml-2"></div>
                    </h1>
                    <ul className="lists list-disc flex flex-col gap-1 ml-7 md:ml-14 -mt-2 text-base">
                        <li>Critical thinking</li>
                        <li>Communication</li>
                        <li>Problem solving</li>
                    </ul>
                </div>
                
                <div className="profile languages mt-12">
                    <h1 className="title flex items-center whitespace-nowrap w-full overflow-hidden mb-8 text-2xl font-semibold text-foreground">
                        <div className="icon-container flex items-center justify-center rounded-full min-w-6 min-h-6 text-accent"><FontAwesomeIcon icon={faGlobe} className="text-xl text-accent min-w-6 min-h-6" /></div>
                        <div className="line inline-block h-0.5 w-16 bg-gray-500 self-center mx-2"></div>
                        languages
                        <div className="line2 inline-block h-0.5 w-full bg-gray-500 self-center ml-2"></div>
                    </h1>
                    <ul className="lists list-disc flex flex-col gap-1 ml-7 md:ml-14 -mt-2 text-base">
                        <li>Amharic</li>
                        <li>English</li>
                    </ul>
                </div>
                
                <div className="profile hobbies mt-12">
                    <h1 className="title flex items-center whitespace-nowrap w-full overflow-hidden mb-8 text-2xl font-semibold text-foreground ">
                        <div className="icon-container flex items-center justify-center rounded-full text-accent"><FontAwesomeIcon icon={faBook} className="text-xl text-accent min-w-6 min-h-6" /></div>
                        <div className="line inline-block h-0.5 w-16 bg-gray-500 self-center mx-2"></div>
                        Hobby
                        <div className="line2 inline-block h-0.5 w-full bg-gray-500 self-center ml-2"></div>
                    </h1>
                    <ul className="lists list-disc flex flex-col gap-1  ml-7 md:ml-14 -mt-2 text-base">
                        <li>Watching movies</li>
                        <li>Reading books</li>
                    </ul>
                </div>
                
                <div className="profile softwares mt-12">
                    <h1 className="title flex items-center whitespace-nowrap w-full overflow-hidden mb-8 text-2xl font-semibold text-foreground">
                        <div className="icon-container flex items-center justify-center rounded-full text-accent"><FontAwesomeIcon icon={faDesktop} className="text-xl text-accent min-w-6 min-h-6" /></div>
                        <div className="line inline-block h-0.5 w-16 bg-gray-500 self-center mx-2"></div>
                        Software skills
                        <div className="line2 inline-block h-0.5 w-full bg-gray-500 self-center ml-2"></div>
                    </h1>
                    <ul className="list-none flex flex-wrap justify-start ml-2 md:ml-12 max-w-12/12">
                        <li className="flex flex-col items-center justify-between w-30 h-11 mt-3">
                            <img src={officeLogo} alt="MS Office" className="w-4/5 h-4/5 object-contain" />
                        </li>
                        <li className="flex flex-col items-center justify-between w-22 h-11 mt-3">
                            <img src={autoCADLogo} alt="Auto CAD" className="w-full h-full object-contain" />
                            {/* <h5 className="text-foreground font-semibold">Auto CAD</h5> */}
                        </li>
                        <li className="flex flex-col items-center justify-between w-12 h-16">
                            <img src={revitLogo} alt="Revit logo" className="w-full h-full object-contain" />
                            {/* <h5 className="text-foreground font-semibold">Revit</h5> */}
                        </li>
                        <li className="flex flex-col items-center justify-center w-23 h-16">
                            <img src={lumionLogo} alt="Lumion logo" className="w-[145%] h-[145%] object-contain" />
                        </li>
                        <li className="flex flex-col items-center justify-center w-16 h-16">
                            <img src={photoshopLogo} alt="Photoshop logo" className="w-4/5 h-4/5 object-contain" />
                        </li>
                        <li className="flex flex-col items-center justify-center w-16 h-16">
                            <img src={illustratorLogo} alt="illustrator logo" className="w-4/5 h-4/5 object-contain" />
                        </li>
                        <li className="flex flex-col items-center justify-center w-36 h-16">
                            <img src={sketchupLogo} alt="sketchup logo" className="w-4/5 h-4/5 object-contain" />
                        </li>
                        <li className="flex flex-col items-center justify-center w-16 h-16">
                            <img src={d5Logo} alt="D5" className="w-4/5 h-4/5 object-contain" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>


  );
}
