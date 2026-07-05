import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordian";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

const faqItems = [
  {
    question: "What are your website pricing plans?",
    answer: "We offer three flexible plans tailored to different needs: \n\n• Silver Plan: Perfect for landing pages or single-page sites. Includes a basic gallery, contact form, and 1 round of revisions.\n• Gold Plan: Up to 5 pages, custom branding, events calendar, announcement pop-ups, and 2 rounds of revisions.\n• Platinum Plan: Up to 10 pages, custom integrations, advanced inquiry forms, priority support, and 3 rounds of revisions.\n\nNote: Listed prices do not include domain name costs. Additional pages can be added to any plan for ₹300 per page."
  },
  {
    question: "What is the average timeline to complete a project?",
    answer: "For standard projects (such as our Silver or Gold plans), development is completed within 4 to 5 working days after content submission and advance payment. More complex custom projects (like full-stack portals and mobile apps) generally take 4 weeks from project kickoff."
  },
  {
    question: "What is your payment structure?",
    answer: "Our standard model requires a 50% advance payment upon project initiation and the remaining 50% upon final delivery before the website goes live. For complex projects, we offer structured milestone payments (e.g., 40% kickoff, 30% midway milestone, and 30% final delivery)."
  },
  {
    question: "Do I own the code and website assets after completion?",
    answer: "Yes, absolutely! Once the final payment is cleared and the project is delivered, 100% of the code ownership, design layouts, and asset rights are transferred directly to you. We do not charge hidden licensing fees."
  },
  {
    question: "Do you offer post-launch technical support?",
    answer: "Yes! Every project we deliver includes one full year of technical support. We assist with basic content writing adjustments, graphic design fixes, and complete technical support to keep your site running securely."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-zephyr-dark relative overflow-hidden">
      {/* Background grain overlay */}
      <div className="absolute inset-0 bg-zephyr-texture pointer-events-none opacity-20 z-0"></div>

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
              Common
            </motion.h2>
            <motion.div 
              className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-primary flex items-center justify-center text-black ml-4 sm:ml-6 shadow-[0_0_20px_rgba(163,230,53,0.3)] cursor-pointer"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150, damping: 10, delay: 0.2 }}
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            >
              <HelpCircle className="w-5 h-5 sm:w-10 sm:h-10" />
            </motion.div>
          </div>
          <motion.h2 
            className="text-5xl xs:text-6xl sm:text-8xl md:text-9xl font-black uppercase text-outline text-white/95 tracking-tight leading-none -mt-1 sm:-mt-3 font-sans"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            Questions
          </motion.h2>
        </div>

        {/* FAQ Accordion container */}
        <div className="max-w-4xl mx-auto bg-[#0c0c0e] border border-white/10 rounded-[2.5rem] p-6 sm:p-10 shadow-2xl">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border-b border-white/5 last:border-b-0 pb-2"
              >
                <AccordionTrigger className="text-white hover:text-primary font-bold text-base sm:text-lg text-left py-4 uppercase tracking-wide no-underline hover:no-underline transition-all duration-300">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 text-sm sm:text-base leading-relaxed pt-2 pb-4 whitespace-pre-line font-medium">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Zephyr Footer Badge */}
        <motion.div 
          className="flex justify-center sm:justify-end mt-16 sm:mt-24"
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

export default FAQ;
