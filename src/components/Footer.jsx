import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-80 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Fanaye Girma</h3>
            <p className="text-secondary-foreground/70 text-sm">
              Contemporary Architect specializing in innovative design solutions.
            </p>
          </div>

          {/* Developer Info */}
          <div>
            <h4 className="font-semibold mb-4 text-secondary-foreground text-sm">Developed by: Talaksew Agegnehu</h4>
            <a href="tel:+251904673003" className="text-secondary-foreground/70 text-sm mb-4 block hover:text-accent transition-colors">+251904673003</a>
            <div className="contact-btns contact flex gap-4 text-secondary-foreground/70">
              <a href="https://www.linkedin.com/in/talaksew-misganaw-a51a58253" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors"><FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" /></a>
              <a href="https://www.facebook.com/talaksew.agegnehu" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors"><FontAwesomeIcon icon={faFacebook} className="w-5 h-5" /></a>
              <a href="https://t.me/talaksewmisganaw" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors"><FontAwesomeIcon icon={faTelegram} className="w-5 h-5" /></a>
              <a href="https://wa.me/+251904673003" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors"><FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Navigation */}
          {/* <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#projects" className="hover:text-accent transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div> */}

          {/* Information */}
          {/* <div>
            <h4 className="font-semibold mb-4">Information</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Press Kit
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div> */}

          {/* Social Links */}
          {/* <div>
            <h4 className="font-semibold mb-4">Follow</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div> */}
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm text-secondary-foreground/70">
          <p>&copy; {currentYear} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
