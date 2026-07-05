import { motion } from "framer-motion";
import { Paintbrush, Search, Smartphone, FileText, PhoneCall, Image, Cloud, LifeBuoy } from "lucide-react";

const capabilitiesList = [
  {
    icon: Paintbrush,
    title: "UI/UX Design",
    description: "Bespoke themes, wireframing, and custom interfaces aligned with your brand identity."
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Semantic coding structures and meta-tag optimization for search engines."
  },
  {
    icon: Smartphone,
    title: "Mobile Optimization",
    description: "Fluid responsive designs ensuring a premium experience on phones, tablets, and desktop."
  },
  {
    icon: FileText,
    title: "Interactive Forms",
    description: "Contact forms, customer inquiry flows, and custom admission intakes."
  },
  {
    icon: PhoneCall,
    title: "Voice & Video Call",
    description: "High-fidelity in-app voice calling and secure real-time video communication."
  },
  {
    icon: Image,
    title: "Media Galleries",
    description: "Premium banner sliders, custom image grids, lightboxes, and video integrations."
  },
  {
    icon: Cloud,
    title: "AWS Integration",
    description: "Setup of AWS hosting, secure cloud databases, and scalable file storage systems."
  },
  {
    icon: LifeBuoy,
    title: "1-Year Support",
    description: "One year of comprehensive technical support and layout corrections included."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 85,
      damping: 15
    }
  }
};

const Features = () => {
  return (
    <section id="features" className="py-24 bg-zephyr-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-zephyr-texture pointer-events-none opacity-20 z-0"></div>

      <div className="container-responsive relative z-10 px-4 sm:px-12 lg:px-20">
        
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

        {/* Balanced Capabilities Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16 sm:mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {capabilitiesList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#0c0c0e] border border-white/10 rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between hover:border-primary/20 transition-all duration-300 shadow-xl"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-white font-extrabold text-base sm:text-lg mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
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
    </section>
  );
};

export default Features;
