import { Code, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="animate-fade-in sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-primary rounded-md flex items-center justify-center">
                <Code className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-bold">Zephyr Web Studio</span>
            </div>
            <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Creating exceptional digital experiences that help businesses thrive in the modern digital landscape.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {/* <a href="https://facebook.com/zephyrwebstudio" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a> */}
              <a href="https://twitter.com/zephyrwebstudio" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="https://www.linkedin.com/in/zephyr-web-studio-081755379/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="https://instagram.com/zephyrwebstudio" target="_blank" rel="noopener noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">Website Designing</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">Mobile Application</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">Website Hosting</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">UI/UX Design</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">SEO & Marketing</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">About Us</a></li>
              <li><a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">Portfolio</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">Services</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">Contact</a></li>
              {/* <li><a href="https://blog.zephyrwebstudio.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">Blog</a></li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in sm:col-span-2 lg:col-span-1" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contact Info</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:forwork.zephyrwebstudio@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base break-all">forwork.zephyrwebstudio@gmail.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <a href="tel:+917050218002" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base">+91 7050 218002</a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground text-sm sm:text-base">HSR Layout, Bengaluru, Karnataka</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 sm:mt-12 pt-6 sm:pt-8 text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p className="text-muted-foreground text-sm sm:text-base">
            © 2025 Zephyr Web Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;