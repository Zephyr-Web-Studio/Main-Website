import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Mail, Phone, Send, Clock, CheckCircle } from "lucide-react";
import { useToast } from "../components/ui/use-toast";

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

    // Simulate form submission
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
        console.log("Form sent successfully!");
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
    <section id="contact" className="py-16 sm:py-20 bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-16 sm:top-20 left-4 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 bg-primary/5 rounded-full animate-float"></div>
        <div className="absolute bottom-16 sm:bottom-20 right-4 sm:right-20 w-20 h-20 sm:w-24 sm:h-24 bg-accent/5 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6">
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary">Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-2">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            Let's discuss your ideas and turn them into reality. Get a free consultation and project estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6 animate-slide-in-left">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader className="p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-white text-lg sm:text-xl">Email Us</CardTitle>
                <CardDescription className="text-gray-300 text-sm sm:text-base">
                  Send us an email and we'll respond within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <a href="mailto:forwork.zephyrwebstudio@gmail.com" className="text-primary hover:text-accent transition-colors text-sm sm:text-base break-all">
                  forwork.zephyrwebstudio@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader className="p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <CardTitle className="text-white text-lg sm:text-xl">Call Us</CardTitle>
                <CardDescription className="text-gray-300 text-sm sm:text-base">
                  Speak directly with our team about your project.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <a href="tel:+917050218002" className="text-primary hover:text-accent transition-colors text-sm sm:text-base">
                  +91 7050 218002
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Business Hours</CardTitle>
                <CardDescription className="text-gray-300">
                  Monday - Saturday : 9:00 AM - 6:00 PM EST
                </CardDescription>
              </CardHeader>
              
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-slide-in-right mt-8 lg:mt-0">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl text-white">Send us a message</CardTitle>
                <CardDescription className="text-gray-300 text-sm sm:text-base">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-primary"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-primary"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Type
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-primary"
                      placeholder="Website Development, Mobile App, E-commerce, etc."
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-primary resize-none"
                      placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg py-6"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                        <span>Sending Message...</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <p className="text-gray-300 mb-4">Prefer to schedule a call?</p>
          <Button variant="outline" className="border-white/20 text-black" asChild>
            <a href="https://calendly.com/zephyrwebstudio" target="_blank" rel="noopener noreferrer">
              Book a Free Consultation
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;