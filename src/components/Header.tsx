import { useState } from "react";
import { Button } from "../components/ui/button";
import { Menu, X } from "lucide-react";
import logo from '../assets/favicon.png';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md flex items-center justify-center">
            <a href=""><img src={logo} className="w-full h-full object-contain" alt="Zephyr Web Studio Logo"/></a>
          </div>
          <span className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            <a href="" className="hover:opacity-80 transition-opacity">Zephyr Web Studio</a>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">
            Services
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
            About
          </a>
          <a href="#portfolio" className="text-foreground hover:text-primary transition-colors font-medium">
            Portfolio
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
            Contact
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
          <Button variant="outline" size="sm" className="hidden lg:inline-flex" asChild>
            <a href="#contact">Get Quote</a>
          </Button>
          <Button size="sm" asChild>
            <a href="#contact" className="text-sm">Start Project</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted/50"
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-lg">
          <nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 space-y-4">
            <a
              href="#services"
              className="block text-foreground hover:text-primary transition-colors py-2 px-2 rounded-md hover:bg-muted/50 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="block text-foreground hover:text-primary transition-colors py-2 px-2 rounded-md hover:bg-muted/50 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#portfolio"
              className="block text-foreground hover:text-primary transition-colors py-2 px-2 rounded-md hover:bg-muted/50 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="block text-foreground hover:text-primary transition-colors py-2 px-2 rounded-md hover:bg-muted/50 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 pt-4 border-t border-border">
              <Button variant="outline" className="w-full sm:w-auto" asChild>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>Get Quote</a>
              </Button>
              <Button className="w-full sm:w-auto" asChild>
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>Start Project</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;