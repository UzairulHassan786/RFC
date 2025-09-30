import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Have questions? We're here to help you start your fitness journey.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="flex-1 py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
