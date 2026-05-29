import { motion } from "framer-motion";

const statsContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const statCardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15
    }
  }
};

const About = () => {
  return (
    <section id="about" className="bg-[#050505] relative overflow-hidden">
      
      {/* ----------------- SECTION 1: ABOUT US (Reference Image 3) ----------------- */}
      <div className="py-24 border-b border-white/5 relative">
        <div className="container-responsive px-4 sm:px-12 lg:px-20">
          
          {/* Top site URL */}
          <div className="mb-8 sm:mb-10 text-left">
            <span className="text-white/40 text-[10px] sm:text-sm font-medium tracking-widest font-sans uppercase">
              www.zephyrwebstudio.dev
            </span>
          </div>

          {/* Neon Light Image */}
          <motion.div 
            className="w-full max-w-4xl mx-auto mb-16 rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(163,230,53,0.15)] bg-black"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
          >
            <motion.img 
              src="/about-neon.png" 
              alt="Zephyr Web Studio glowing neon bar" 
              className="w-full h-auto object-cover max-h-[350px] select-none"
              animate={{
                filter: ["brightness(1) contrast(1)", "brightness(1.15) contrast(1.05)", "brightness(1) contrast(1)"]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>

          {/* Heading */}
          <div className="text-left mb-12">
            <motion.h2 
              className="text-5xl xs:text-6xl sm:text-8xl md:text-9xl font-black uppercase text-white tracking-tighter leading-none font-sans"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              About
            </motion.h2>
            <div className="flex items-center flex-wrap -mt-1 sm:-mt-3">
              <motion.h2 
                className="text-5xl xs:text-6xl sm:text-8xl md:text-9xl font-black uppercase text-outline text-white/95 tracking-tight leading-none font-sans"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              >
                Us
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
          </div>

          {/* Description Block with animating left line */}
          <div className="max-w-4xl text-left relative pl-6 sm:pl-8 py-2 mb-16 sm:mb-24">
            <motion.div 
              className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{ originY: 0 }}
            />
            <motion.p 
              className="text-white/80 text-base sm:text-xl md:text-2xl font-medium leading-relaxed tracking-wide"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              We are a website service provider that pushes the boundaries of traditional web development. 
              Our edgy approach to web design sets us apart, and our team of talented developers is dedicated to 
              bringing your vision to life. Get in touch. Let us help you make an impact and leave a lasting impression.
            </motion.p>
          </div>

          {/* Zephyr Footer Badge */}
          <motion.div 
            className="flex justify-center sm:justify-end"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.a 
              href="#contact" 
              className="px-10 py-3 border border-white/30 hover:border-primary rounded-full text-white/70 hover:text-primary tracking-[0.35em] text-[10px] sm:text-xs font-black uppercase transition-all duration-300 touch-target"
              whileHover={{ scale: 1.05, shadow: "0px 0px 15px rgba(163, 230, 53, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              Zephyr
            </motion.a>
          </motion.div>

        </div>
      </div>

      {/* ----------------- SECTION 2: WHY CHOOSE US (Reference Image 4) ----------------- */}
      <div className="py-24 relative bg-zephyr-texture border-b border-white/5">
        <div className="absolute inset-0 bg-black/50 pointer-events-none z-0"></div>
        
        <div className="container-responsive relative z-10 px-4 sm:px-12 lg:px-20">
          
          {/* Top site URL */}
          <div className="mb-8 sm:mb-10 text-left">
            <span className="text-white/40 text-[10px] sm:text-sm font-medium tracking-widest font-sans uppercase">
              www.zephyrwebstudio.dev
            </span>
          </div>

          {/* Heading */}
          <div className="text-left mb-16">
            <motion.h2 
              className="text-5xl xs:text-6xl sm:text-8xl md:text-9xl font-black uppercase text-white tracking-tighter leading-none font-sans"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Why
            </motion.h2>
            <motion.h2 
              className="text-5xl xs:text-6xl sm:text-8xl md:text-9xl font-black uppercase text-white tracking-tighter leading-none -mt-1 sm:-mt-3 font-sans"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              Choose
            </motion.h2>
            <div className="flex items-center flex-wrap -mt-1 sm:-mt-3">
              <motion.div 
                className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-primary flex items-center justify-center text-black mr-4 sm:mr-6 shadow-[0_0_20px_rgba(163,230,53,0.3)] cursor-pointer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 150, damping: 10, delay: 0.2 }}
                whileHover={{ scale: 1.1, rotate: 45 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5 sm:w-10 sm:h-10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                </svg>
              </motion.div>
              <motion.h2 
                className="text-5xl xs:text-6xl sm:text-8xl md:text-9xl font-black uppercase text-outline text-white/95 tracking-tight leading-none font-sans"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              >
                Us
              </motion.h2>
            </div>
          </div>

          {/* Grid Layout Stats (White and Lime Green Cards) */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto mb-16 sm:mb-24"
            variants={statsContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            
            {/* White Cards Column */}
            <div className="md:col-span-2 flex flex-col gap-6 sm:gap-8">
              
              {/* Wide Card 1 */}
              <motion.div 
                className="bg-white rounded-[2rem] p-8 sm:p-10 flex flex-col justify-center text-left hover:shadow-2xl border border-transparent cursor-pointer"
                variants={statCardVariants}
                whileHover={{ scale: 1.02, y: -4, borderColor: "rgba(163, 230, 53, 0.2)" }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-5xl sm:text-6xl font-black text-[#050505] tracking-tight mb-2">
                  2+
                </span>
                <span className="text-[#050505]/75 text-xs sm:text-base font-bold uppercase tracking-wider">
                  years of industry experience
                </span>
              </motion.div>

              {/* Two Column Grid for Narrow Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                
                {/* Narrow Card 2 */}
                <motion.div 
                  className="bg-white rounded-[2rem] p-8 flex flex-col justify-center text-left hover:shadow-2xl border border-transparent cursor-pointer"
                  variants={statCardVariants}
                  whileHover={{ scale: 1.03, y: -4, borderColor: "rgba(163, 230, 53, 0.2)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-4xl sm:text-5xl font-black text-[#050505] tracking-tight mb-2">
                    40+
                  </span>
                  <span className="text-[#050505]/75 text-xs sm:text-sm font-bold uppercase tracking-wider">
                    brand partners
                  </span>
                </motion.div>

                {/* Narrow Card 3 */}
                <motion.div 
                  className="bg-white rounded-[2rem] p-8 flex flex-col justify-center text-left hover:shadow-2xl border border-transparent cursor-pointer"
                  variants={statCardVariants}
                  whileHover={{ scale: 1.03, y: -4, borderColor: "rgba(163, 230, 53, 0.2)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-4xl sm:text-5xl font-black text-[#050505] tracking-tight mb-2">
                    15+
                  </span>
                  <span className="text-[#050505]/75 text-xs sm:text-sm font-bold uppercase tracking-wider">
                    team members
                  </span>
                </motion.div>

              </div>

            </div>

            {/* Lime Green Card Column (Customer Satisfaction) */}
            <motion.div 
              className="bg-primary rounded-[2rem] p-8 sm:p-10 flex flex-col justify-center text-left shadow-[0_0_30px_rgba(163,230,53,0.15)] border border-transparent cursor-pointer min-h-[250px]"
              variants={statCardVariants}
              whileHover={{ 
                scale: 1.02, 
                y: -4, 
                borderColor: "rgba(255, 255, 255, 0.2)",
                boxShadow: "0_0_40px_rgba(163,230,53,0.3)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="text-5xl sm:text-6xl font-black text-[#050505] tracking-tight mb-2">
                100%
              </span>
              <span className="text-[#050505]/75 text-sm sm:text-base font-bold uppercase tracking-wider leading-tight">
                Customer <br />
                Satisfaction
              </span>
            </motion.div>

          </motion.div>

          {/* Zephyr Footer Badge */}
          <motion.div 
            className="flex justify-center sm:justify-end"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.a 
              href="#contact" 
              className="px-10 py-3 border border-white/30 hover:border-primary rounded-full text-white/70 hover:text-primary tracking-[0.35em] text-[10px] sm:text-xs font-black uppercase transition-all duration-300 touch-target"
              whileHover={{ scale: 1.05, shadow: "0px 0px 15px rgba(163, 230, 53, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              Zephyr
            </motion.a>
          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default About;