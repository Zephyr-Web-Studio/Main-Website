import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-white py-16 border-t border-white/5 relative overflow-hidden">
      {/* Background grain overlay */}
      <div className="absolute inset-0 bg-zephyr-texture pointer-events-none opacity-20 z-0"></div>

      <div className="container-responsive relative z-10 px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 mb-12 sm:mb-16">
          
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col justify-start">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-black flex items-center justify-center border border-white/10 shadow-[0_0_15px_rgba(163,230,53,0.1)]">
                <svg className="w-5 h-5 text-primary" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 20H90L50 60H90L30 100V80L70 40H30V20Z" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-xl font-extrabold uppercase tracking-wider text-white">
                Zephyr <span className="text-primary font-normal text-sm lowercase tracking-widest block -mt-1 opacity-70">web studio</span>
              </span>
            </div>
            <p className="text-white/60 mb-6 leading-relaxed text-sm sm:text-base">
              Creating exceptional digital experiences that help businesses thrive in the modern digital landscape.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com/zephyrwebstudio" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-black transition-all border border-white/10" 
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/in/zephyr-web-studio-081755379/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-black transition-all border border-white/10" 
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com/zephyrwebstudio" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary hover:text-black transition-all border border-white/10" 
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-extrabold mb-6 uppercase tracking-wider text-white">Services</h3>
            <ul className="space-y-3 font-semibold text-sm sm:text-base">
              <li><a href="#services" className="text-white/60 hover:text-primary transition-colors">Design & Branding</a></li>
              <li><a href="#services" className="text-white/60 hover:text-primary transition-colors">Advertising & Ads</a></li>
              <li><a href="#services" className="text-white/60 hover:text-primary transition-colors">Website Hosting</a></li>
              <li><a href="#services" className="text-white/60 hover:text-primary transition-colors">UI/UX Design</a></li>
              <li><a href="#services" className="text-white/60 hover:text-primary transition-colors">Digital Marketing</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-extrabold mb-6 uppercase tracking-wider text-white">Quick Links</h3>
            <ul className="space-y-3 font-semibold text-sm sm:text-base">
              <li><a href="#about" className="text-white/60 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#features" className="text-white/60 hover:text-primary transition-colors">Our Features</a></li>
              <li><a href="#portfolio" className="text-white/60 hover:text-primary transition-colors">Our Work</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-extrabold mb-6 uppercase tracking-wider text-white">Contact Info</h3>
            <div className="space-y-4 font-semibold text-sm sm:text-base text-white/70">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:forwork.zephyrwebstudio@gmail.com" className="hover:text-primary transition-colors break-all">
                  forwork.zephyrwebstudio@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+917050218002" className="hover:text-primary transition-colors">
                  +91 7050 218002
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>HSR Layout, Bengaluru, Karnataka</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-white/40 text-xs sm:text-sm font-semibold tracking-wider uppercase">
            © 2026 Zephyr Web Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;