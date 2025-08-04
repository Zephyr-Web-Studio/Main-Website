import { Button } from "../components/ui/button";
import { ArrowRight, Sparkles, Zap, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-16 sm:top-20 left-4 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 bg-primary/10 rounded-full animate-float"></div>
        <div className="absolute top-32 sm:top-40 right-4 sm:right-20 w-20 h-20 sm:w-32 sm:h-32 bg-accent/10 rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-16 sm:bottom-20 left-1/4 w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 right-4 sm:right-10 w-16 h-16 sm:w-24 sm:h-24 bg-accent/15 rounded-full animate-float" style={{ animationDelay: "0.5s" }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <div className="flex items-center space-x-2 bg-primary/10 px-3 sm:px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <span className="text-xs sm:text-sm font-medium text-primary">Professional Web Development</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
            Crafting Digital
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
              Experiences
            </span>
            That Convert
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            Transform your vision into stunning, high-performance websites that captivate your audience and drive results. Modern, responsive, and built for success.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4">
            <Button size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-primary hover:bg-primary/90 shadow-glow animate-glow" asChild>
              <a href="#contact">
                <span>Start Your Project</span>
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 border-white/20 text-black" asChild>
              <a href="#portfolio">View Our Work</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-16 px-4">
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">40+</div>
              <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wide">Projects Delivered</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">99%</div>
              <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wide">Client Satisfaction</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">1+</div>
              <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wide">Years Experience</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">24/7</div>
              <div className="text-gray-400 text-xs sm:text-sm uppercase tracking-wide">Support Available</div>
            </div>
          </div>
        </div>

        {/* Floating tech icons - hidden on mobile */}
        <div className="hidden sm:block absolute bottom-10 left-4 sm:left-10 animate-float">
          <div className="bg-white/10 backdrop-blur-sm p-2 sm:p-3 rounded-lg">
            <Globe className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
          </div>
        </div>
        <div className="hidden sm:block absolute bottom-20 right-4 sm:right-10 animate-float" style={{ animationDelay: "1s" }}>
          <div className="bg-white/10 backdrop-blur-sm p-2 sm:p-3 rounded-lg">
            <Zap className="w-4 h-4 sm:w-6 sm:h-6 text-accent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;