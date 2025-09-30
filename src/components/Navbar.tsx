import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [theme, setTheme] = useState<"default" | "female" | "sportsman">("default");

  const cycleTheme = () => {
    const themes: Array<"default" | "female" | "sportsman"> = ["default", "female", "sportsman"];
    const currentIndex = themes.indexOf(theme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme === "default" ? "" : nextTheme);
  };

  const getThemeName = () => {
    switch (theme) {
      case "default": return "Vigilant";
      case "female": return "Elegant";
      case "sportsman": return "Power";
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 sm:w-10 sm:h-10 gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg sm:text-xl">V</span>
            </div>
            <span className="font-bold text-lg sm:text-xl gradient-text hidden sm:inline">
              VIGILANT
            </span>
          </Link>

          {/* Center - Search Button */}
          <div className="flex-1 max-w-md mx-4 sm:mx-8">
            <Button variant="ghost" size="sm" className="w-full justify-start text-muted-foreground">
              <Search className="w-4 h-4" />
              <span className="hidden sm:inline ml-2">Search...</span>
            </Button>
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
