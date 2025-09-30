import { Target, Zap, Users } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

export const About = () => {
  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Side */}
          <div className="relative animate-fade-in-up">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hover-lift">
              <img 
                src={aboutImage} 
                alt="Fitness Training" 
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
              <div className="absolute inset-0 gradient-hero opacity-20"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-card p-4 sm:p-6 rounded-xl shadow-xl border border-border">
              <div className="text-3xl sm:text-4xl font-bold gradient-text">10K+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Active Members</div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-semibold text-primary">About Vigilant Fitness</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Your Journey to
              <span className="gradient-text block">Peak Performance</span>
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              At Vigilant Fitness, we combine cutting-edge training methodologies with personalized 
              attention to help you achieve your fitness goals. Our state-of-the-art facilities and 
              expert trainers create an environment where transformation happens.
            </p>

            {/* Features */}
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Goal-Oriented Programs</h3>
                  <p className="text-sm text-muted-foreground">
                    Customized training plans designed to meet your specific fitness objectives.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">High-Intensity Training</h3>
                  <p className="text-sm text-muted-foreground">
                    Dynamic workouts that maximize results in minimum time.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Community Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Join a motivated community that pushes you to be your best self.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
