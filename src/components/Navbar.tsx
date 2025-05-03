
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-2 bg-white/90 backdrop-blur-md shadow-md dark:bg-portfolio-deep-blue/90"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="font-display text-xl md:text-2xl font-bold text-portfolio-deep-blue dark:text-white">
          Fiorella
          <span className="text-portfolio-purple">.</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            onClick={() => scrollToSection("home")}
            className="nav-item text-sm font-medium cursor-pointer"
          >
            {t("home")}
          </a>
          <a
            onClick={() => scrollToSection("about")}
            className="nav-item text-sm font-medium cursor-pointer"
          >
            {t("about")}
          </a>
          <a
            onClick={() => scrollToSection("education")}
            className="nav-item text-sm font-medium cursor-pointer"
          >
            {t("education")}
          </a>
          <a
            onClick={() => scrollToSection("experience")}
            className="nav-item text-sm font-medium cursor-pointer"
          >
            {t("experience")}
          </a>
          <a
            onClick={() => scrollToSection("contact")}
            className="nav-item text-sm font-medium cursor-pointer"
          >
            {t("contact")}
          </a>
          
          <LanguageSwitcher />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <LanguageSwitcher />
          <Button
            variant="ghost"
            size="icon"
            className="ml-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-portfolio-deep-blue shadow-lg py-4">
          <nav className="flex flex-col space-y-4 px-6">
            <a
              onClick={() => scrollToSection("home")}
              className="text-base font-medium cursor-pointer"
            >
              {t("home")}
            </a>
            <a
              onClick={() => scrollToSection("about")}
              className="text-base font-medium cursor-pointer"
            >
              {t("about")}
            </a>
            <a
              onClick={() => scrollToSection("education")}
              className="text-base font-medium cursor-pointer"
            >
              {t("education")}
            </a>
            <a
              onClick={() => scrollToSection("experience")}
              className="text-base font-medium cursor-pointer"
            >
              {t("experience")}
            </a>
            <a
              onClick={() => scrollToSection("contact")}
              className="text-base font-medium cursor-pointer"
            >
              {t("contact")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
