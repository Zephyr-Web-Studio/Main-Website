import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Mail, Phone, Send, Clock } from "lucide-react";
import { useToast } from "../components/ui/use-toast";
import { motion } from "framer-motion";

const cardContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = {
        access_key: 'b28e7177-60ca-4dd6-8325-ed64e698c0bc',
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: `
Contact Details:
Name: ${formData.name}
Email: ${formData.email}
Project Type: ${formData.subject}

Message:
${formData.message}

---
This message was sent from ZephyrWebStudio contact form.
Time: ${new Date().toLocaleString()}
  `,
        from_name: 'ZephyrWebStudio Contact Form',
        redirect: false,
        'h:Reply-To': formData.email,
        'h:X-Priority': '1',
        'h:Importance': 'high',
        template: 'basic',
        timestamp: new Date().toISOString(),
        user_agent: navigator.userAgent,
        source: 'ZephyrWebStudio Website Contact Form'
      };
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (result.success) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-zephyr-dark relative overflow-hidden">
      {/* Background grain overlay */}
      <div className="absolute inset-0 bg-zephyr-texture pointer-events-none opacity-25 z-0"></div>

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
              Get In
            </motion.h2>
            <motion.div 
              className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-primary flex items-center justify-center text-black ml-4 sm:ml-6 shadow-[0_0_20px_rgba(163,230,53,0.3)] cursor-pointer"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 150, damping: 10, delay: 0.2 }}
              whileHover={{ scale: 1.1, rotate: 90 }}
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
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            Touch
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start mb-16">
          
          {/* Contact Cards */}
          <motion.div 
            className="space-y-6 flex flex-col w-full"
            variants={cardContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
          >
            
            {/* Email card */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-[#0c0c0e] border border-white/10 text-white rounded-[2rem] p-6 sm:p-8 shadow-xl cursor-pointer hover:border-primary/20 transition-all duration-300"
            >
              <CardHeader className="p-0 mb-6">
                <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-extrabold text-white">Email Us</CardTitle>
                <CardDescription className="text-white/60 mt-1 text-xs sm:text-sm">
                  Send us an email and we'll respond within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <a href="mailto:forwork.zephyrwebstudio@gmail.com" className="text-primary font-bold hover:underline break-all text-xs sm:text-base touch-target inline-block">
                  forwork.zephyrwebstudio@gmail.com
                </a>
              </CardContent>
            </motion.div>

            {/* Phone card */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-[#0c0c0e] border border-white/10 text-white rounded-[2rem] p-6 sm:p-8 shadow-xl cursor-pointer hover:border-primary/20 transition-all duration-300"
            >
              <CardHeader className="p-0 mb-6">
                <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-extrabold text-white">Call Us</CardTitle>
                <CardDescription className="text-white/60 mt-1 text-xs sm:text-sm">
                  Speak directly with our team about your project.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <a href="tel:+917050218002" className="text-primary font-bold hover:underline text-xs sm:text-base touch-target inline-block">
                  +91 7050 218002
                </a>
              </CardContent>
            </motion.div>

            {/* Hours card */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-[#0c0c0e] border border-white/10 text-white rounded-[2rem] p-6 sm:p-8 shadow-xl cursor-pointer transition-all duration-300"
            >
              <CardHeader className="p-0">
                <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-extrabold text-white">Business Hours</CardTitle>
                <CardDescription className="text-white/60 mt-2 font-medium text-xs sm:text-sm">
                  Monday - Saturday: 9:00 AM - 6:00 PM EST
                </CardDescription>
              </CardHeader>
            </motion.div>

          </motion.div>

          {/* Contact Form Card */}
          <motion.div 
            className="lg:col-span-2 w-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.2 }}
          >
            <Card className="bg-[#0c0c0e] border border-white/10 rounded-[2.5rem] p-6 sm:p-10 shadow-2xl">
              <CardHeader className="p-0 mb-8">
                <CardTitle className="text-2xl sm:text-3xl font-extrabold text-white uppercase tracking-tight">
                  Send us a message
                </CardTitle>
                <CardDescription className="text-white/60 text-xs sm:text-base mt-2">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs sm:text-sm font-bold text-white/80 uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl py-6 text-sm transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs sm:text-sm font-bold text-white/80 uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl py-6 text-sm transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs sm:text-sm font-bold text-white/80 uppercase tracking-wider mb-2">
                      Project Type
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl py-6 text-sm transition-all duration-300"
                      placeholder="Website Development, Mobile App, E-commerce, etc."
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs sm:text-sm font-bold text-white/80 uppercase tracking-wider mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-primary focus:ring-1 focus:ring-primary rounded-[1.25rem] p-4 resize-none text-sm transition-all duration-300"
                      placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/95 text-black font-extrabold text-sm sm:text-lg py-7 rounded-full shadow-glow border-none touch-target"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center space-x-2 justify-center">
                          <div className="w-5 h-5 border-2 border-black/25 border-t-black rounded-full animate-spin"></div>
                          <span>Sending Message...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2 justify-center">
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </div>
                      )}
                    </Button>
                  </motion.div>

                </form>
              </CardContent>
            </Card>
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

export default Contact;