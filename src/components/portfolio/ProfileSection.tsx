import { useLanguage } from "@/contexts/LanguageContext";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const ProfileSection = () => {
  const { t } = useLanguage();

  return (
    <div className="mb-20 relative">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-portfolio-purple/20 rounded-full blur-3xl -z-10 animate-pulse"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center md:order-2">
          <div className="relative mt-12">
            <Avatar className="w-64 h-64 md:w-80 md:h-80 animate-scale-out">
              <AvatarImage
                src="public/lovable-uploads/f13ada45-df8d-46db-968d-d43209995135.png"
                alt="Fiorella Avegliano"
                className="object-cover rounded-full border-4 border-portfolio-purple/30"
              />
              <AvatarFallback className="text-4xl">FA</AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-portfolio-purple rounded-full animate-float"></div>
            <div
              className="absolute -top-4 -left-4 w-12 h-12 bg-portfolio-light-purple rounded-full animate-float"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>

        <div className="space-y-6 md:pr-10 animate-slide-in">
          <h3 className="text-2xl font-display font-bold text-portfolio-purple">
            {t("designerDeveloper")}
          </h3>
          <p className="text-lg">{t("portfolioDescription")}</p>
          <div className="flex gap-4 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-portfolio-light-purple text-portfolio-purple text-sm font-medium animate-fade-in hover:scale-110 transition-transform">
              UI/UX
            </span>
            <span
              className="px-3 py-1 rounded-full bg-portfolio-light-purple text-portfolio-purple text-sm font-medium animate-fade-in hover:scale-110 transition-transform"
              style={{ animationDelay: "0.1s" }}
            >
              React
            </span>
            <span
              className="px-3 py-1 rounded-full bg-portfolio-light-purple text-portfolio-purple text-sm font-medium animate-fade-in hover:scale-110 transition-transform"
              style={{ animationDelay: "0.2s" }}
            >
              Tailwind
            </span>
            <span
              className="px-3 py-1 rounded-full bg-portfolio-light-purple text-portfolio-purple text-sm font-medium animate-fade-in hover:scale-110 transition-transform"
              style={{ animationDelay: "0.3s" }}
            >
              Figma
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
