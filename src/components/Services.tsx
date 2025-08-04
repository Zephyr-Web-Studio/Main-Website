import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { 
  Globe, 
  Smartphone, 
  Palette, 
  Code, 
  Search,
  Zap,
  Cloud
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Application",
    description: "Custom websites built with modern technologies like React, Next.js, and TypeScript for optimal performance.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Cross-browser Compatible"]
  },
  {
    icon: Smartphone,
    title: "Mobile Application",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
    features: ["iOS & Android", "React Native", "Progressive Web Apps", "App Store Optimization"]
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that enhance user engagement and drive conversions for your business.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems","Figma"]
  },
  {
    icon: Search,
    title: "SEO & Marketing",
    description: "Comprehensive digital marketing strategies to increase your online visibility and drive traffic.",
    features: ["Technical SEO", "Content Strategy", "Social Media", "Analytics & Reporting"]
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed up your website and improve user experience with our advanced optimization techniques.",
    features: ["Core Web Vitals", "Image Optimization", "Code Splitting", "CDN Implementation"]
  },
  {
    icon: Cloud,
    title: "Hosting & Domain",
    description: "We will provide u with domain and hosting services without confusion regarding hosting.",
    features: ["AWS Hosting", "Godaddy domain", "Cheapest Price", "No extra convinience fee"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6">
            <Code className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-2">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            From concept to launch, we provide end-to-end digital services that help your business thrive in the modern digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center p-4 sm:p-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:animate-float">
                  <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center p-4 sm:p-6 pt-0">
                <CardDescription className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-xs sm:text-sm text-muted-foreground flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12 px-4">
          <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
            Don't see what you're looking for? We also offer custom solutions tailored to your specific needs.
          </p>
          <a href="#contact" className="inline-block bg-gradient-primary text-white px-6 sm:px-8 py-3 rounded-lg hover:shadow-glow transition-all duration-300 font-medium text-sm sm:text-base">
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;