import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, User, MessageSquare } from "lucide-react";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
}

export const ContactForm = ({ 
  title = "Get In Touch", 
  subtitle = "Fill out the form below and we'll get back to you within 24 hours." 
}: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    // Create mailto link
    const mailtoLink = `mailto:uzairulhassan005@gmail.com?subject=Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    toast.success("Opening your email client...");

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="text-center mb-8 sm:mb-12">
        <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
          <span className="text-sm font-semibold text-primary">Contact Us</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
          {subtitle}
        </p>
      </div>

      <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2 text-base">
              <User className="w-4 h-4 text-primary" />
              Full Name
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
              className="h-12 text-base"
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2 text-base">
              <Mail className="w-4 h-4 text-primary" />
              Email Address
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="h-12 text-base"
            />
          </div>

          {/* Message Field */}
          <div className="space-y-2">
            <Label htmlFor="message" className="flex items-center gap-2 text-base">
              <MessageSquare className="w-4 h-4 text-primary" />
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your fitness goals..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="text-base resize-none"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="hero"
            size="lg"
            className="w-full text-base sm:text-lg h-12 sm:h-14"
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};
