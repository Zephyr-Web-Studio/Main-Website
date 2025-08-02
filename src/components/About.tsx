import { Card, CardContent } from "../components/ui/card";
import { Users, Award, Target, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Every pixel, every line of code crafted with meticulous attention to detail."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Cutting-edge solutions using the latest technologies and design trends."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with clients to bring their unique vision to life."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering exceptional quality that exceeds expectations every time."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">About Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Creating Digital Excellence Since 2019
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We're a passionate team of designers, developers, and digital strategists dedicated to crafting exceptional web experiences. Our mission is to help businesses succeed in the digital world through innovative solutions and outstanding design.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From startups to enterprise companies, we've helped over 150+ businesses transform their digital presence and achieve their goals. Our approach combines creativity with technical expertise to deliver results that matter.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">40+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">1+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:animate-float">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;