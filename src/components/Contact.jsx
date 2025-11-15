import styles from './icons.module.css'
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTelegram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", project: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Ready to discuss your architectural vision? Let's collaborate and create something extraordinary together.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 w-full">
              {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 order-2 gap-12 mb-12 lg:max-w-2xl w-[95%] md:w-[80%] lg:w-[87%] md:p-10 lg:p-0 mx-auto">
            <div className="bg-card w-full rounded-lg p-8 border border-border text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              {/* <h3 className="font-bold mb-2">Email</h3> */}
              <a className="text-foreground/60 wrap-break-word" href="mailto:girmafanaye5@gmail.com" target="_blank">girmafanaye5@gmail.com</a>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              {/* <h3 className="font-bold mb-2">Phone</h3> */}
              <a className="text-foreground/60 no-underline inline-block mx-auto" href="tel:+251921266469">+251921266469</a>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border text-center md:col-span-2">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              {/* <h3 className="font-bold mb-2">Location</h3> */}
              <p className="text-foreground/60">Addis Ababa, Ethiopia</p>
            </div>
            <div className={`${styles['contact-btns']} flex items-center gap-2 md:col-span-2 justify-self-center -mt-8`}>
              <a className={`${styles['icon-container']} mt-16 w-16 h-16 text-2xl flex flex-col items-center justify-center gap-2 transition-all duration-500 ease-in-out no-underline`} target="_blank" href="https://t.me/fanayegirma">
                  <div className={`${styles.icon} ${styles.telegram} w-12 h-12 flex relative transition-all duration-300 ease-in-out`}>
                      <span className={`${styles['main-icon']} absolute inset-0 flex items-center justify-center opacity-80`}><FontAwesomeIcon icon={faTelegram} /></span>
                      <span className="layer absolute inset-0"></span>
                      <span className="layer absolute inset-0"></span>
                      <span className="layer absolute inset-0"></span>
                  </div>
                  <div className={styles.text}>Telegram</div>
              </a>
              <a className={`${styles['icon-container']} mt-16 w-16 h-16 text-2xl flex flex-col items-center justify-center gap-2 transition-all duration-500 ease-in-out no-underline`} target="_blank" href="https://wa.me/+251921266469">
                  <div className={`${styles.icon} ${styles.whatsapp} w-12 h-12 flex relative transition-all duration-300 ease-in-out`}>
                      <span className={`${styles['main-icon']} absolute inset-0 flex items-center justify-center opacity-80`}><FontAwesomeIcon icon={faWhatsapp} /></span>
                      <span className="layer absolute inset-0"></span>
                      <span className="layer absolute inset-0"></span>
                      <span className="layer absolute inset-0"></span>
                  </div>
                  <div className={styles.text}>WhatsApp</div>
              </a>
              <a className={`${styles['icon-container']} mt-16 w-16 h-16 text-2xl flex flex-col items-center justify-center gap-2 transition-all duration-500 ease-in-out no-underline`} target="_blank" href="https://www.instagram.com/girmafanaye5">
                  <div className={`${styles.icon} ${styles.instagram} w-12 h-12 flex relative transition-all duration-300 ease-in-out`}>
                      <span className={`${styles['main-icon']} absolute inset-0 flex items-center justify-center opacity-80`}><FontAwesomeIcon icon={faInstagram} /></span>
                      <span className="layer absolute inset-0"></span>
                      <span className="layer absolute inset-0"></span>
                      <span className="layer absolute inset-0"></span>
                  </div>
                  <div className={styles.text}>Instagram</div>
              </a>
              <a className={`${styles['icon-container']} mt-16 w-16 h-16 text-2xl flex flex-col items-center justify-center gap-2 transition-all duration-500 ease-in-out no-underline`} target="_blank" href="https://t.me/fanayegirma">
                  <div className={`${styles.icon} ${styles.facebook} w-12 h-12 flex relative transition-all duration-300 ease-in-out`}>
                      <span className={`${styles['main-icon']} absolute inset-0 flex items-center justify-center opacity-80`}><FontAwesomeIcon icon={faFacebookF} /></span>
                      <span className="layer absolute inset-0"></span>
                      <span className="layer absolute inset-0"></span>
                      <span className="layer absolute inset-0"></span>
                  </div>
                  <div className={styles.text}>Facebook</div>
              </a>
            </div>
          </div>
                  {/* Contact Form */}
          <div className="w-full md:max-w-2xl mx-auto bg-card rounded-lg border border-border p-12 md:p-12 sm:border-green-950 md:border-red-500 lg:border-white">
          {/* <div className="w-full lg:w-[800px] mx-auto bg-card rounded-lg border border-border p-12"> */}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="091 234 5678"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Project Type</label>
                  <input
                    type="text"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="e.g., Residential, Commercial"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>


      </div>
    </section>
  );
}
