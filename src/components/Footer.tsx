
import { useLanguage } from "@/contexts/LanguageContext";
import { Heart } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-portfolio-deep-blue py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="font-display text-xl font-bold text-portfolio-deep-blue dark:text-white mb-4">
            Fiorella<span className="text-portfolio-purple">.</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-2">
            <span>© {currentYear} Fiorella Avegliano. {t("footerRights")}</span>
          </div>
          
          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
            <span>{t("designedBy")}</span>
            <Heart className="w-3 h-3 text-portfolio-purple mx-1" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
