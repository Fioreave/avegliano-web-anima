import { useLanguage } from "@/contexts/LanguageContext";
import { MoveRight } from "lucide-react";

const ViewMoreButton = () => {
  const { t } = useLanguage();

  return (
    <div className="flex justify-center">
      <div className="relative group cursor-pointer inline-block">
        <a
          href="https://www.behance.net/fiorellaveglia"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-portfolio-purple text-white rounded-lg inline-flex items-center group-hover:bg-portfolio-dark-purple transition-all duration-300"
        >
          {t("viewMore")}
          <MoveRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
        </a>
        <div className="absolute -inset-1 bg-gradient-to-r from-portfolio-purple via-portfolio-light-purple to-portfolio-purple rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-300  pointer-events-none"></div>
      </div>
    </div>
  );
};

export default ViewMoreButton;
