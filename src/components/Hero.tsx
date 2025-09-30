import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Elevate Your Body.
            <br />
            <span className="gradient-text">Empower Your Mind.</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Transform your life through cutting-edge fitness programs designed for the modern warrior. 
            Join our vigilant community today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link to="/join">
              <Button variant="hero" size="lg" className="group w-full sm:w-auto">
                Join Us Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 gradient-primary rounded-full blur-3xl opacity-50 animate-float"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-secondary rounded-full blur-3xl opacity-50 animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-glow"></div>
        </div>
      </div>
    </section>
  );
};
