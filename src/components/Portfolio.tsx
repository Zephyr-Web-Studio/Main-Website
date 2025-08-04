import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import Halcyon from '../assets/Halcyon.png'
const Portfolio = () => {
  const projects = [
    {
      title: "College Fest Website",
      description: "We have developed FullStack Website for a college fest.",
      image: Halcyon,
      tags: ["React", "Node.js", "Stripe", "MongoDB"],
      category: "E-commerce",
      url:"https://halcyonsit.in"
    },
    {
      title: "Healthcare Portal",
      description: "Patient management system with appointment scheduling and telemedicine features.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&h=600",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
      category: "Healthcare",
      url:"https://halcyonsit.in",
    },
    {
      title: "Finance Dashboard",
      description: "Real-time financial analytics platform with interactive charts and reporting.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=600",
      tags: ["React", "D3.js", "Python", "Redis"],
      category: "Fintech",
      url:"https://halcyonsit.in",
    },
    {
      title: "Restaurant Chain App",
      description: "Multi-location restaurant management with online ordering and delivery tracking.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&h=600",
      tags: ["React Native", "Firebase", "Stripe", "Maps API"],
      category: "Mobile App",
      url:"https://halcyonsit.in",
    },
    {
      title: "Educational Platform",
      description: "Learning management system with video streaming and progress tracking.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&h=600",
      tags: ["Vue.js", "Laravel", "MySQL", "Video.js"],
      category: "Education",
      url:"https://halcyonsit.in",
    },
    {
      title: "Real Estate Portal",
      description: "Property listing platform with virtual tours and mortgage calculator.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&h=600",
      tags: ["React", "Express", "MongoDB", "3D.js"],
      category: "Real Estate",
      url:"https://halcyonsit.in",
    }
  ];
   const handleViewProject = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="portfolio" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6">
            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary">Our Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-2">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
            Discover some of our recent work and see how we've helped businesses achieve their digital goals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-3 sm:p-4 flex space-x-2">
                    <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-white/20 hover:bg-white/30 text-xs sm:text-sm" onClick = {() => handleViewProject(project.url)}>
                      <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      View
                    </Button>
                    {/* <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur-sm text-white border-white/20 hover:bg-white/30">
                      <Github className="w-4 h-4" />
                    </Button> */}
                  </div>
                </div>
              </div>
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <p className="text-lg text-muted-foreground mb-6">
            Want to see more of our work?
          </p>
          <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
            View Full Portfolio
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Portfolio;