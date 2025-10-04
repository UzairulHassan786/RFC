import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Sparkles } from "lucide-react";

const JoinUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 gradient-hero relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/30 rounded-full blur-3xl"></div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm font-semibold text-white">20% Off First Month</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Join RockFitnessClub
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Take the first step towards transforming your life. Fill out the form below and 
            our team will contact you within 1 hours.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-8 sm:py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-card rounded-xl border border-border">
              <div className="text-3xl font-bold gradient-text mb-2">20</div>
              <div className="text-sm text-muted-foreground">Active Members</div>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border border-border">
              <div className="text-3xl font-bold gradient-text mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Expert Trainers</div>
            </div>
            <div className="text-center p-6 bg-card rounded-xl border border-border">
              <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Gym Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="flex-1 py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm 
            title="Start Your Transformation"
            subtitle="Tell us about yourself and your fitness goals. We'll create a personalized plan just for you."
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JoinUs;
