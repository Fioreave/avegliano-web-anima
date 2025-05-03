
import { useLanguage } from "@/contexts/LanguageContext";
import { Heart, MoveUp } from "lucide-react";
import { useEffect, useState } from "react";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <footer className="bg-white dark:bg-portfolio-deep-blue py-12 border-t border-gray-200 dark:border-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute -top-24 left-1/4 w-40 h-40 rounded-full bg-portfolio-purple/5 blur-2xl"></div>
      <div className="absolute -bottom-20 right-1/4 w-60 h-60 rounded-full bg-portfolio-purple/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center">
          <div className="font-display text-2xl font-bold text-portfolio-deep-blue dark:text-white mb-6 transform transition-all duration-500 hover:scale-110">
            <span className={`inline-block transition-all duration-500 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-4'}`}>
              Fiorella<span className="text-portfolio-purple">.</span>
            </span>
          </div>
          
          <div className="flex space-x-6 mb-8">
            {["linkedin", "behance", "github", "instagram"].map((social, index) => (
              <a 
                key={social}
                href="#" 
                className={`w-10 h-10 rounded-full bg-portfolio-light-purple dark:bg-portfolio-purple/20 flex items-center justify-center text-portfolio-purple transition-all duration-500 hover:bg-portfolio-purple hover:text-white ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${index * 100 + 100}ms` }}
                aria-label={social}
              >
                <span className="sr-only">{social}</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.163 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.022A9.607 9.607 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.378.202 2.396.1 2.65.64.699 1.026 1.591 1.026 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.48A10.02 10.02 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                </svg>
              </a>
            ))}
          </div>
          
          <div className={`flex items-center text-sm text-gray-600 dark:text-gray-300 mb-3 transition-all duration-500 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '500ms' }}>
            <span>© {currentYear} Fiorella Avegliano. {t("footerRights")}</span>
          </div>
          
          <div className={`flex items-center text-xs text-gray-500 dark:text-gray-400 transition-all duration-500 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '600ms' }}>
            <span>{t("designedBy")}</span>
            <Heart className="w-3 h-3 text-portfolio-purple mx-1 animate-pulse" />
          </div>
          
          <button 
            onClick={scrollToTop}
            className="mt-6 w-10 h-10 rounded-full bg-portfolio-purple/10 flex items-center justify-center text-portfolio-purple transition-all duration-500 hover:bg-portfolio-purple hover:text-white hover:-translate-y-1 focus:outline-none"
            aria-label="Scroll to top"
          >
            <MoveUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
