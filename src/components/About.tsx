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
    <section id="about" className="py-16 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <span className="text-xs sm:text-sm font-medium text-primary">About Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              Creating Digital Excellence Since 2023
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              We're a passionate team of designers, developers, and digital strategists dedicated to crafting exceptional web experiences. Our mission is to help businesses succeed in the digital world through innovative solutions and outstanding design.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              From startups to enterprise companies, we've helped over 150+ businesses transform their digital presence and achieve their goals. Our approach combines creativity with technical expertise to deliver results that matter.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">40+</div>
                <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">2+</div>
                <div className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right mt-8 lg:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:animate-float">
                      <value.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
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