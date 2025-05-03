
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const { t } = useLanguage();

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative pt-16 bg-gradient-to-br from-white to-portfolio-light-purple dark:from-portfolio-deep-blue dark:to-portfolio-dark-purple"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-lg md:text-xl font-medium text-portfolio-purple animate-fade-in">
            {t("greeting")}
          </h2>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold mt-3 mb-6 animate-slide-in">
            Fiorella Avegliano
          </h1>
          
          <h3 className="text-xl md:text-2xl text-portfolio-deep-blue dark:text-white mb-8 animate-slide-up">
            {t("role")}
          </h3>
          
          <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button 
              onClick={scrollToAbout}
              className="bg-portfolio-purple hover:bg-portfolio-dark-purple text-white rounded-full px-8 py-6"
            >
              {t("cta")}
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-2 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
          
          {/* Animated dots */}
          <div className="hidden md:block absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-portfolio-purple opacity-70 animate-float" style={{ animationDelay: '0s' }} />
          <div className="hidden md:block absolute bottom-1/4 right-1/4 w-6 h-6 rounded-full bg-portfolio-purple opacity-50 animate-float" style={{ animationDelay: '1s' }} />
          <div className="hidden md:block absolute top-2/3 right-1/3 w-3 h-3 rounded-full bg-portfolio-purple opacity-60 animate-float" style={{ animationDelay: '1.5s' }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
