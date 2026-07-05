import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "FAQs", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "py-4 bg-[#050505]/90 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]" 
            : "py-6 bg-transparent border-b border-transparent"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container-responsive px-4 sm:px-12 lg:px-20 flex items-center justify-between">
          
          {/* Logo */}
          <motion.a 
            href="#" 
            className="flex items-center space-x-3 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center border border-white/10 shadow-[0_0_15px_rgba(163,230,53,0.1)] group-hover:shadow-[0_0_20px_rgba(163,230,53,0.35)] transition-all">
              <svg className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform duration-300" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 20H90L50 60H90L30 100V80L70 40H30V20Z" fill="currentColor"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-black uppercase tracking-wider text-white">
                Zephyr
              </span>
              <span className="text-primary text-[8px] sm:text-[9px] font-bold tracking-[0.25em] uppercase opacity-80 -mt-1 block">
                web studio
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 bg-white/5 border border-white/10 backdrop-blur-md rounded-full px-2 py-1.5">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="relative text-white/70 hover:text-white px-5 py-2 text-xs font-black uppercase tracking-widest transition-colors rounded-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Consultation Button (Desktop) */}
          <div className="hidden md:block">
            <Button 
              size="sm"
              className="bg-primary hover:bg-primary/95 text-black font-extrabold text-xs px-6 py-4 rounded-full uppercase tracking-wider shadow-glow hover:scale-105 active:scale-95 transition-all border-none touch-target"
              asChild
            >
              <a href="#contact" className="flex items-center space-x-1">
                <span>Free Quote</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-primary p-2 border border-white/10 bg-white/5 rounded-full touch-target"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>

        </div>
      </motion.header>

      {/* Mobile Drawer (Framer Motion Overlay) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-40 bg-[#050505]/98 backdrop-blur-lg flex flex-col justify-center items-center md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col items-center space-y-6 mb-12">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-black text-white hover:text-primary uppercase tracking-[0.2em] transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/95 text-black font-extrabold text-sm px-10 py-6 rounded-full uppercase tracking-wider shadow-glow border-none touch-target"
                asChild
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <a href="#contact" className="flex items-center space-x-2">
                  <span>Free Quote</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;