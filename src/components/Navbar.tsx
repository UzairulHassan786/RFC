import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [theme, setTheme] = useState<"default" | "female" | "sportsman">("sportsman"); // ✅ default is now "sportsman"

  useEffect(() => {
    // apply theme when component mounts
    document.documentElement.setAttribute("data-theme", theme === "default" ? "" : theme);
  }, [theme]);

  const cycleTheme = () => {
    const themes: Array<"default" | "female" | "sportsman"> = ["sportsman", "default", "female"];
    const currentIndex = themes.indexOf(theme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme === "default" ? "" : nextTheme);
  };

  const getThemeName = () => {
    switch (theme) {
      case "sportsman": return "Power";
      case "default": return "Vigilant";
      case "female": return "Elegant";
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 sm:w-10 sm:h-10 gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg sm:text-xl">R</span>
            </div>
            <span className="font-bold text-lg sm:text-xl gradient-text hidden sm:inline">
              RockFitnessClub
            </span>
          </Link>

          {/* Center - Contact Info */}
          <div className="flex-1 flex items-center justify-center mx-4 sm:mx-8 gap-2 sm:gap-3">
            <a
              href="tel:+923419487674"
              className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">+923419487674</span>
            </a>
            <div className="h-4 w-px bg-border"></div>
            <a
              href="mailto:uzairulhassan005@gmail.com"
              className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">uzairulhassan005@gmail.com</span>
            </a>
          </div>

          {/* Right - Navigation Links & Theme Switcher */}
          <div className="flex items-center space-x-2 sm:space-x-6">
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">
                Contact
              </Link>
              <Link to="/join" className="text-sm font-medium hover:text-primary transition-colors">
                Join Us
              </Link>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={cycleTheme}
              className="gap-2"
              title="Switch Theme"
            >
              <Palette className="w-4 h-4" />
              <span className="hidden sm:inline">{getThemeName()}</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-center space-x-4 pb-3 border-t border-border/50 pt-3">
          <Link to="/" className="text-xs font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/contact" className="text-xs font-medium hover:text-primary transition-colors">
            Contact
          </Link>
          <Link to="/join" className="text-xs font-medium hover:text-primary transition-colors">
            Join Us
          </Link>
        </div>
      </div>
    </nav>
  );
};
