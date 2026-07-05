import { Paintbrush, Code, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import RestaurantApp from '../assets/restaurant_app_mockup.png';

const capabilities = [
  {
    icon: Paintbrush,
    title: "Web & UI/UX Design",
    description: "We map out intuitive user experiences (UX), design clean interactive visual systems (UI), and establish style guides that ensure responsive accessibility across all screen sizes."
  },
  {
    icon: Code,
    title: "Full-Stack Web Development",
    description: "We build custom, high-speed websites, dashboards, and portals. Writing clean, semantic code in React, Next.js, and TypeScript, backed by scalable backend services."
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "We engineer native-feeling cross-platform iOS & Android mobile applications. Equipping them with real-time tracking, hardware API integrations, local caching, and secure payment pipelines."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-zephyr-texture relative overflow-hidden">
      <div className="absolute inset-0 bg-black/60 pointer-events-none z-0"></div>

      <div className="container-responsive relative z-10 px-4 sm:px-12 lg:px-20">
        
        {/* Top site URL */}
        <div className="mb-8 sm:mb-10 text-left">
          <span className="text-white/40 text-[10px] sm:text-sm font-medium tracking-widest font-sans uppercase">
            www.zephyrwebstudio.dev
          </span>
        </div>

        {/* Section Heading */}
        <div className="text-left mb-16">
          <div className="flex items-center flex-wrap">
            <motion.h2 
              className="text-5xl xs:text-6xl sm:text-8xl md:text-9xl font-black uppercase text-white tracking-tighter leading-none font-sans"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              What We
            </motion.h2>
            <motion.div 
              className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-primary flex items-center justify-center text-black ml-4 sm:ml-6 shadow-[0_0_20px_rgba(163,230,53,0.3)] cursor-pointer"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150, damping: 10, delay: 0.2 }}
              whileHover={{ scale: 1.1, rotate: 45 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-5 h-5 sm:w-10 sm:h-10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
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
            Do
          </motion.h2>
        </div>

        {/* Unified Services Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-center">
          
          {/* Left Column: Capabilities List */}
          <div className="lg:col-span-7 space-y-8 text-left">
            <div className="mb-6">
              <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase block mb-3">
                Unified design & engineering
              </span>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed font-medium">
                We design and engineer bespoke web and mobile experiences. By unifying high-end visual aesthetics with robust full-stack development, we deliver cohesive digital systems that command attention and drive growth.
              </p>
            </div>

            <div className="space-y-6">
              {capabilities.map((cap, idx) => {
                const Icon = cap.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex items-start p-6 bg-[#0c0c0e]/80 border border-white/10 rounded-[2rem] hover:border-primary/20 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mr-5 flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-extrabold text-lg sm:text-xl mb-2 group-hover:text-primary transition-colors uppercase tracking-tight">
                        {cap.title}
                      </h4>
                      <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-medium">
                        {cap.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: High-Fidelity Mobile App Showcase */}
          <div className="lg:col-span-5 flex justify-center relative">
            {/* Background Glow */}
            <div className="absolute w-72 h-72 bg-primary/10 rounded-full blur-[80px] -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            
            <motion.div 
              className="relative max-w-[280px] sm:max-w-[320px] rounded-[3rem] p-3 bg-gradient-to-b from-white/15 via-white/5 to-white/0 border border-white/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.2 }}
              whileHover={{ y: -6, rotate: 1 }}
            >
              {/* Sleek smartphone screen wrapper */}
              <div className="relative overflow-hidden rounded-[2.5rem] bg-black aspect-[9/18.5] border border-white/10">
                {/* Speaker grill / Notch */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-20 flex items-center justify-center">
                  <div className="w-8 h-1 bg-white/20 rounded-full mb-0.5"></div>
                </div>
                
                {/* Mockup image */}
                <img 
                  src={RestaurantApp} 
                  alt="App interface mockup showing food delivery and order tracking" 
                  className="w-full h-full object-cover filter brightness-[0.9] select-none"
                />
              </div>
            </motion.div>
          </div>

        </div>

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