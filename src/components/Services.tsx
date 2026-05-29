import { Palette, Megaphone, Bookmark, Globe } from "lucide-react";
import { motion } from "framer-motion";

const servicesList = [
  {
    icon: Palette,
    title: "Design"
  },
  {
    icon: Megaphone,
    title: "Advertising"
  },
  {
    icon: Bookmark,
    title: "Branding"
  },
  {
    icon: Globe,
    title: "Digital Marketing"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-zephyr-texture relative overflow-hidden">
      <div className="absolute inset-0 bg-black/40 pointer-events-none z-0"></div>

      <div className="container-responsive relative z-10 px-4 sm:px-12 lg:px-20">
        
        {/* Top site URL */}
        <div className="mb-8 sm:mb-10 text-left">
          <span className="text-white/40 text-[10px] sm:text-sm font-medium tracking-widest font-sans uppercase">
            www.zephyrwebstudio.dev
          </span>
        </div>

        {/* Section Heading */}
        <div className="text-left mb-8">
          <div className="flex items-center flex-wrap">
            <motion.h2 
              className="text-5xl xs:text-6xl sm:text-8xl md:text-9xl font-black uppercase text-white tracking-tighter leading-none font-sans"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Our
            </motion.h2>
            <motion.div 
              className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-primary flex items-center justify-center text-black ml-4 sm:ml-6 shadow-[0_0_20px_rgba(163,230,53,0.3)] cursor-pointer"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150, damping: 10, delay: 0.2 }}
              whileHover={{ scale: 1.1, rotate: -45 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-5 h-5 sm:w-10 sm:h-10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
              </svg>
            </motion.div>
          </div>
          <motion.h2 
            className="text-5xl xs:text-6xl sm:text-8xl md:text-9xl font-black uppercase text-outline text-white/95 tracking-tight leading-none -mt-1 sm:-mt-3 font-sans"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            Services
          </motion.h2>
        </div>

        {/* Thin Separator Line */}
        <motion.div 
          className="border-t border-white/20 w-full my-6 sm:my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ originX: 0 }}
        />

        {/* "Work with us" Neon Bullet */}
        <motion.div 
          className="flex items-center space-x-3 mb-10 sm:mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#a3e635]"></div>
          <span className="text-white/60 text-[10px] sm:text-sm tracking-widest uppercase font-semibold">
            Work with us
          </span>
        </motion.div>

        {/* Services Grid (4 Cards) */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {servicesList.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                className="flex items-center p-6 sm:p-8 bg-white rounded-[2rem] hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] transition-all duration-300 group border border-transparent cursor-pointer"
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.03, 
                  y: -5,
                  borderColor: "rgba(163, 230, 53, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#050505] flex items-center justify-center text-primary mr-5 sm:mr-6 flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
                  <IconComponent className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <span className="text-xl sm:text-3xl font-extrabold text-[#050505] tracking-tight">
                  {service.title}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Zephyr Footer Badge */}
        <motion.div 
          className="flex justify-center sm:justify-end mt-16 sm:mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.a 
            href="#contact" 
            className="px-10 py-3 border border-white/30 hover:border-primary rounded-full text-white/70 hover:text-primary tracking-[0.35em] text-[10px] sm:text-xs font-black uppercase transition-all duration-300 touch-target"
            whileHover={{ scale: 1.05, shadow: "0px 0px 15px rgba(163, 230, 53, 0.25)" }}
            whileTap={{ scale: 0.95 }}
          >
            Zephyr
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;