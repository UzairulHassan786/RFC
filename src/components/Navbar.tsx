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
  <div className="md:hidden fixed inset-x-0 top-16 z-40 overflow-hidden">
    <div className="relative bg-background/90 backdrop-blur-xl border-t border-border shadow-2xl rounded-b-2xl animate-in slide-in-from-top duration-300 ease-out">
      <div className="flex flex-col px-6 py-6 space-y-5">
        {/* Main Nav Links */}
        {[
          { label: "Home", to: "/" },
          { label: "Contact", to: "/contact" },
          { label: "Join Us", to: "/join" },
        ].map((item) => (
          <Link
            key={item.to}
            to={item.to}
            onClick={() => setMobileOpen(false)}
            className="text-lg font-semibold tracking-wide relative group"
          >
            <span className="bg-gradient-to-r from-primary/80 to-primary bg-clip-text text-transparent">
              {item.label}
            </span>
            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
        ))}

        {/* Divider */}
        <div className="border-t border-border/40 my-4" />

        {/* Contact Info */}
        <div className="flex flex-col gap-3 text-sm font-medium">
          <a
            href="tel:+923419487674"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4 shrink-0" />
            +92 341 9487674
          </a>
          <a
            href="mailto:uzairulhassan005@gmail.com"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4 shrink-0" />
            uzairulhassan005@gmail.com
          </a>
        </div>

        {/* WhatsApp CTA */}
        <div className="pt-4">
          <a
            href="https://wa.me/923419487674"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-semibold shadow-lg transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M12 0C5.373 0 0 5.372 0 12c0 2.118.553 4.175 1.604 5.978L.06 23.938l6.104-1.574A11.933 11.933 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.77 9.77 0 0 1-5.006-1.36l-.356-.21-3.618.933.965-3.524-.233-.373A9.777 9.777 0 0 1 2.182 12C2.182 6.495 6.495 2.182 12 2.182S21.818 6.495 21.818 12 17.505 21.818 12 21.818zm5.455-7.124c-.298-.149-1.763-.867-2.036-.966-.273-.1-.472-.149-.67.149-.198.297-.767.966-.94 1.164-.174.198-.347.223-.645.074-.298-.149-1.258-.464-2.396-1.48-.886-.79-1.484-1.764-1.658-2.061-.174-.297-.018-.458.131-.606.135-.134.298-.347.447-.521.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.67-1.611-.916-2.205-.242-.58-.487-.502-.67-.511-.174-.007-.372-.009-.57-.009s-.521.074-.796.372c-.273.298-1.04 1.016-1.04 2.479 0 1.463 1.065 2.875 1.213 3.074.149.198 2.095 3.197 5.076 4.482.709.306 1.262.489 1.693.625.711.226 1.358.194 1.869.118.57-.085 1.763-.72 2.013-1.416.248-.696.248-1.292.174-1.416-.074-.124-.273-.198-.57-.347z" />
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  </div>
)}

    </nav>
  );
};
