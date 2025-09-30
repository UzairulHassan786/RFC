import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/30 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm font-semibold text-white">Limited Time Offer</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
            Start Your Journey
            <br />
            <span className="text-secondary">Today</span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto">
            Join thousands of members who have transformed their lives. 
            Get your first month at 50% off when you sign up now.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link to="/join" className="w-full sm:w-auto">
              <Button 
                variant="hero" 
                size="lg" 
                className="group bg-white text-primary hover:bg-white/90 w-full sm:w-auto"
              >
                Join Now & Save 50%
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
              >
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 pt-8 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>10,000+ Members</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>50+ Expert Trainers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>24/7 Access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
