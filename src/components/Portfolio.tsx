import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Halcyon from '../assets/Halcyon.png';
import Health from '../assets/health.png';

const projects = [
  {
    title: "College Fest Website",
    description: "Developed a secure, beautiful high-performance FullStack Website for a college fest.",
    image: Halcyon,
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
    category: "Full Stack",
    url: "https://halcyonsit.in"
  },
  {
    title: "Healthcare Portal",
    description: "Patient management system with appointment scheduling and telemedicine features.",
    image: Health,
    tags: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
    category: "Healthcare",
    url: "http://shree-nathjii-pet-clinic.vercel.app"
  },
  {
    title: "Finance Dashboard",
    description: "Real-time financial analytics platform with interactive charts and reporting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=600",
    tags: ["React", "D3.js", "Python", "Redis"],
    category: "Fintech",
    url: "https://halcyonsit.in"
  },
  {
    title: "Restaurant Chain App",
    description: "Multi-location restaurant management with online ordering and delivery tracking.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&h=600",
    tags: ["React Native", "Firebase", "Stripe", "Maps API"],
    category: "Mobile App",
    url: "https://halcyonsit.in"
  },
  {
    title: "Educational Platform",
    description: "Learning management system with video streaming and progress tracking.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&h=600",
    tags: ["Vue.js", "Laravel", "MySQL", "Video.js"],
    category: "Education",
    url: "https://halcyonsit.in"
  },
  {
    title: "Real Estate Portal",
    description: "Property listing platform with virtual tours and mortgage calculator.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&h=600",
    tags: ["React", "Express", "MongoDB", "3D.js"],
    category: "Real Estate",
    url: "https://halcyonsit.in"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
      stiffness: 80,
      damping: 15
    }
  }
};

const Portfolio = () => {
  const handleViewProject = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="portfolio" className="py-24 bg-zephyr-texture relative overflow-hidden">
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
              whileHover={{ scale: 1.1, rotate: 45 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-5 h-5 sm:w-10 sm:h-10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
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
            Projects
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16 sm:mb-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group overflow-hidden bg-[#0d0d0f] border border-white/10 rounded-[2rem] hover:border-primary/20 transition-all duration-300 shadow-2xl flex flex-col justify-between cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/3] rounded-t-[2rem]">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover filter brightness-[0.8] select-none"
                  whileHover={{ scale: 1.06, filter: "brightness(0.95)" }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 sm:p-6 w-full flex justify-end">
                    <Button 
                      size="sm" 
                      className="bg-primary text-black hover:bg-primary/95 font-black border-none touch-target"
                      onClick={() => handleViewProject(project.url)}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Preview
                    </Button>
                  </div>
                </div>
              </div>

              <CardContent className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center mb-3">
                    <span className="text-[10px] font-bold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/70 mb-5 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-[10px] sm:text-xs font-semibold bg-white/5 text-white/50 border border-white/5 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </motion.div>
          ))}
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

export default Portfolio;