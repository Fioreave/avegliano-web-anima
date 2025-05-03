
import { useLanguage } from "@/contexts/LanguageContext";
import { Phone, Mail, Briefcase } from "lucide-react";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white dark:bg-portfolio-deep-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12 text-portfolio-deep-blue dark:text-white">
            {t("aboutTitle")}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1">
              <div className="rounded-xl bg-portfolio-light-purple/40 dark:bg-portfolio-purple/10 p-6 h-full transform transition-transform hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-portfolio-purple/20 p-3">
                    <Phone className="w-6 h-6 text-portfolio-purple" />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-center mb-2">{t("phone")}</h3>
                <p className="text-center text-gray-600 dark:text-gray-300">+376 368 253</p>
              </div>
            </div>
            
            <div className="col-span-1">
              <div className="rounded-xl bg-portfolio-light-purple/40 dark:bg-portfolio-purple/10 p-6 h-full transform transition-transform hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-portfolio-purple/20 p-3">
                    <Mail className="w-6 h-6 text-portfolio-purple" />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-center mb-2">{t("email")}</h3>
                <p className="text-center text-gray-600 dark:text-gray-300">fiorella.avegliano@gmail.com</p>
              </div>
            </div>
            
            <div className="col-span-1">
              <div className="rounded-xl bg-portfolio-light-purple/40 dark:bg-portfolio-purple/10 p-6 h-full transform transition-transform hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-portfolio-purple/20 p-3">
                    <Briefcase className="w-6 h-6 text-portfolio-purple" />
                  </div>
                </div>
                <h3 className="text-lg font-medium text-center mb-2">{t("behance")}</h3>
                <p className="text-center text-gray-600 dark:text-gray-300">
                  <a href="https://behance.net/fiorellaveglia" target="_blank" rel="noopener noreferrer" className="story-link">
                    behance.net/fiorellaveglia
                  </a>
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-portfolio-light-purple/20 dark:bg-portfolio-purple/5 rounded-xl p-6 md:p-8">
            <p className="text-lg text-center max-w-3xl mx-auto">
              {t("aboutDescription")}
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center mt-8 space-y-4 md:space-y-0 md:space-x-12">
              <div className="text-center">
                <p className="text-sm text-portfolio-purple font-medium">{t("birthDate")}</p>
                <p className="font-medium">{t("birthDateValue")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
