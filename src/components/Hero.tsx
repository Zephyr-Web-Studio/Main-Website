import { Button } from "../components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen pt-28 pb-16 flex flex-col items-center justify-between bg-zephyr-dark relative overflow-hidden">
      {/* Background grain overlay */}
      <div className="absolute inset-0 bg-zephyr-texture pointer-events-none opacity-20 z-0"></div>

      {/* Floating Animated Neon Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          className="absolute top-[20%] left-[10%] w-32 h-32 bg-primary/10 rounded-full blur-[80px]"
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -50, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-[30%] right-[15%] w-48 h-48 bg-primary/5 rounded-full blur-[100px]"
          animate={{
            x: [0, -60, 30, 0],
            y: [0, 40, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="container-responsive flex-1 flex flex-col items-center justify-center text-center relative z-10 px-4 py-6">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Zephyr Stylized Logo */}
          <motion.div 
            className="flex flex-col items-center mb-6 sm:mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 15,
              delay: 0.1
            }}
          >
            <motion.div 
              className="w-16 h-16 mb-2 text-primary drop-shadow-[0_0_15px_rgba(163,230,53,0.4)] flex items-center justify-center cursor-pointer"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              <svg className="w-14 h-14" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 20H90L50 60H90L30 100V80L70 40H30V20Z" fill="currentColor"/>
              </svg>
            </motion.div>
            <span className="text-white text-sm sm:text-base font-black tracking-[0.25em] uppercase">
              Zephyr
            </span>
            <span className="text-primary text-[9px] sm:text-[10px] font-bold tracking-[0.35em] uppercase opacity-80 -mt-0.5">
              web studio
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 sm:mb-8 leading-tight tracking-tight px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            Looking to Upgrade <br className="hidden sm:inline" />
            Your <span className="text-primary font-black drop-shadow-[0_0_25px_rgba(163,230,53,0.25)]">Website?</span>
          </motion.h1>

          {/* Pill Button */}
          <motion.div 
            className="mb-10 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          >
            <Button 
              size="lg" 
              className="text-sm sm:text-lg px-8 sm:px-10 py-5 sm:py-7 rounded-full bg-primary hover:bg-primary/95 text-black font-extrabold shadow-glow animate-neon-glow hover:scale-105 active:scale-95 transition-all duration-300 border-none touch-target"
              asChild
            >
              <a href="#contact">
                Get Free Consultation Today!
              </a>
            </Button>
          </motion.div>

          {/* Black & White Hero Image */}
          <motion.div 
            className="w-full max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl mt-2 sm:mt-4 relative overflow-hidden"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 15, delay: 0.7 }}
          >
            <div className="absolute inset-x-0 bottom-0 h-24 sm:h-28 bg-gradient-to-t from-[#070708] to-transparent z-10 pointer-events-none"></div>
            <img 
              src="/hero-woman.png" 
              alt="Zephyr Web Studio upgrade" 
              className="w-full h-auto object-cover max-h-[300px] sm:max-h-[450px] mx-auto filter grayscale contrast-125 object-top select-none"
              style={{
                maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
              }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;