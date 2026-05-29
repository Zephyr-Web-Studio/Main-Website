import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 85,
      damping: 15,
      delay: i * 0.15
    }
  })
};

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: { type: "spring", stiffness: 120, damping: 12 }
  }
};

const Features = () => {
  const basicFeatures = [
    "Professional Designing",
    "Enquiry Form",
    "Social Media Icons",
    "Click to Call",
    "Click to WhatsApp",
    "Google Map",
    "Visitor Counter",
    "Slider Banner",
    "Pop-Up Form",
    "Image and Video Gallery",
    "Animated Headlines",
    "Client Review"
  ];

  const technicalFeatures = [
    "Professional Theme",
    "SEO-Friendly Website",
    "Mobile-Friendly Website",
    "Free Webspace (Hosting)",
    "Easy Navigation"
  ];

  const supportFeatures = [
    "Basic Content Writing",
    "Basic Graphics Designing",
    "One Year Full Technical Support"
  ];

  return (
    <section id="features" className="py-24 bg-zephyr-dark relative overflow-hidden">
      <div className="container-responsive px-4 sm:px-12 lg:px-20">
        
        {/* Top site URL */}
        <div className="mb-8 sm:mb-10 text-left">
          <span className="text-white/40 text-[10px] sm:text-sm font-medium tracking-widest font-sans uppercase">
            www.zephyrwebstudio.dev
          </span>
        </div>

        {/* Heading */}
        <div className="text-left mb-16">
          <div className="flex items-center flex-wrap">
            <motion.h2 
              className="text-5xl xs:text-6xl sm:text-8xl md:text-9xl font-black uppercase text-white tracking-tighter leading-none font-sans"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
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
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            Features
          </motion.h2>
        </div>

        {/* Features Cards Grid (Three columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16 sm:mb-24 items-stretch">
          
          {/* Card 1: Basic Features (Lime Green) */}
          <motion.div 
            className="bg-primary rounded-[2.5rem] p-8 sm:p-10 flex flex-col hover:shadow-[0_20px_45px_-5px_rgba(163,230,53,0.3)] border border-transparent transition-all duration-300"
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -6, scale: 1.01, borderColor: "rgba(255, 255, 255, 0.3)" }}
          >
            <h3 className="text-2xl sm:text-3xl font-black text-[#050505] tracking-tight mb-8 uppercase">
              Basic Features
            </h3>
            <motion.ul 
              className="space-y-4 flex-1"
              variants={listVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {basicFeatures.map((item, i) => (
                <motion.li key={i} className="flex items-center text-[#050505] font-bold text-sm sm:text-base leading-tight" variants={itemVariants}>
                  <div className="w-2 h-2 bg-[#050505] rounded-full mr-3 flex-shrink-0"></div>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Card 2: Technical Features (White) */}
          <motion.div 
            className="bg-white rounded-[2.5rem] p-8 sm:p-10 flex flex-col hover:shadow-2xl border border-transparent transition-all duration-300"
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -6, scale: 1.01, borderColor: "rgba(163, 230, 53, 0.3)" }}
          >
            <h3 className="text-2xl sm:text-3xl font-black text-[#050505] tracking-tight mb-8 uppercase">
              Technical Features
            </h3>
            <motion.ul 
              className="space-y-4 flex-1"
              variants={listVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {technicalFeatures.map((item, i) => (
                <motion.li key={i} className="flex items-center text-[#050505]/80 font-bold text-sm sm:text-base leading-tight" variants={itemVariants}>
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Card 3: Support (White) */}
          <motion.div 
            className="bg-white rounded-[2.5rem] p-8 sm:p-10 flex flex-col hover:shadow-2xl border border-transparent transition-all duration-300"
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -6, scale: 1.01, borderColor: "rgba(163, 230, 53, 0.3)" }}
          >
            <h3 className="text-2xl sm:text-3xl font-black text-[#050505] tracking-tight mb-8 uppercase">
              Support
            </h3>
            <motion.ul 
              className="space-y-4 flex-1"
              variants={listVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {supportFeatures.map((item, i) => (
                <motion.li key={i} className="flex items-center text-[#050505]/80 font-bold text-sm sm:text-base leading-tight" variants={itemVariants}>
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

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
    </section>
  );
};

export default Features;
