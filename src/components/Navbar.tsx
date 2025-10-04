import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, Palette, Dumbbell, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type Theme =
  | "default"
  | "female"
  | "sportsman"
  | "blackwhite"
  | "royal"
  | "yellowzinc"
  | "imperial"
  | "aurora"
  | "eclipse";

export const Navbar = () => {
  const [theme, setTheme] = useState<Theme>("imperial");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (theme === "default") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  const cycleTheme = () => {
    const themes: Array<Theme> = [
      "imperial",
      "sportsman",
      "default",
      "female",
      "blackwhite",
      "royal",
      "yellowzinc",
      "aurora",
      "eclipse",
    ];
    const currentIndex = themes.indexOf(theme);
    const nextTheme = themes[(currentIndex + 1) % themes.length];
    setTheme(nextTheme);

    if (nextTheme === "default") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", nextTheme);
    }
  };

  const getThemeName = () => {
    switch (theme) {
      case "imperial":
        return "Imperial";
      case "sportsman":
        return "Power";
      case "default":
        return "Vigilant";
      case "female":
        return "Elegant";
      case "blackwhite":
        return "Monochrome";
      case "royal":
        return "Royal Blue & Yellow";
      case "yellowzinc":
        return "Sunset Zinc";
      case "aurora":
        return "Aurora";
      case "eclipse":
        return "Eclipse";
      default:
        return "Imperial";
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 gradient-primary rounded-lg flex items-center justify-center">
              <Dumbbell className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
            <span className="font-bold text-lg sm:text-xl gradient-text hidden sm:inline">
              RockFitnessClub
            </span>
          </Link>

          {/* Center contact info (hidden on mobile) */}
          <div className="hidden sm:flex flex-1 items-center justify-center mx-4 sm:mx-8 gap-3">
            <a
              href="tel:+923419487674"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              +923419487674
            </a>
            <div className="h-4 w-px bg-border"></div>
            <a
              href="mailto:uzairulhassan005@gmail.com"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              uzairulhassan005@gmail.com
            </a>
          </div>

          {/* Desktop Nav + Theme Switcher */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/join"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Join Us
            </Link>
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

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              onClick={cycleTheme}
              title="Switch Theme"
              className="p-2"
            >
              <Palette className="w-4 h-4" />
            </Button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md hover:bg-accent transition"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border/50 shadow-lg">
          <div className="flex flex-col px-4 py-3 space-y-3">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/join"
              onClick={() => setMobileOpen(false)}
              className="text-base font-medium hover:text-primary transition-colors"
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
