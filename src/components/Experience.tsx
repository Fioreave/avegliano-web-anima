
import { useLanguage } from "@/contexts/LanguageContext";
import { Briefcase, Check } from "lucide-react";

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 bg-white dark:bg-portfolio-deep-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16 text-portfolio-deep-blue dark:text-white">
            {t("experienceTitle")}
          </h2>
          
          <div className="space-y-12">
            {/* Current Job */}
            <div className="relative">
              <div className="bg-white dark:bg-portfolio-deep-blue border-l-4 border-portfolio-purple rounded-r-xl p-6 shadow-md hover:shadow-xl transition-shadow ml-6 md:ml-12">
                <div className="absolute top-6 -left-3 md:-left-6 bg-portfolio-purple text-white rounded-full p-3">
                  <Briefcase className="w-5 h-5" />
                </div>
                
                <div className="ml-4 md:ml-8">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <h3 className="text-xl font-bold text-portfolio-deep-blue dark:text-white">
                      {t("company3")}
                    </h3>
                    <span className="text-sm bg-portfolio-purple/20 text-portfolio-purple px-3 py-1 rounded-full mt-2 md:mt-0 w-max">
                      {t("company3Duration")}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-medium text-portfolio-purple mb-4">
                    {t("company3Role")}
                  </h4>
                  
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-portfolio-purple mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-600 dark:text-gray-300">{t("company3Description1")}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-portfolio-purple mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-600 dark:text-gray-300">{t("company3Description2")}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-portfolio-purple mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-600 dark:text-gray-300">{t("company3Description3")}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Job 2 */}
            <div className="relative">
              <div className="bg-white dark:bg-portfolio-deep-blue border-l-4 border-portfolio-purple rounded-r-xl p-6 shadow-md hover:shadow-xl transition-shadow ml-6 md:ml-12">
                <div className="absolute top-6 -left-3 md:-left-6 bg-portfolio-purple text-white rounded-full p-3">
                  <Briefcase className="w-5 h-5" />
                </div>
                
                <div className="ml-4 md:ml-8">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <h3 className="text-xl font-bold text-portfolio-deep-blue dark:text-white">
                      {t("company2")}
                    </h3>
                    <span className="text-sm bg-portfolio-purple/20 text-portfolio-purple px-3 py-1 rounded-full mt-2 md:mt-0 w-max">
                      {t("company2Duration")}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-medium text-portfolio-purple mb-4">
                    {t("company2Role")}
                  </h4>
                  
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-portfolio-purple mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-600 dark:text-gray-300">{t("company2Description1")}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-portfolio-purple mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-600 dark:text-gray-300">{t("company2Description2")}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-portfolio-purple mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-600 dark:text-gray-300">{t("company2Description3")}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Job 3 */}
            <div className="relative">
              <div className="bg-white dark:bg-portfolio-deep-blue border-l-4 border-portfolio-purple rounded-r-xl p-6 shadow-md hover:shadow-xl transition-shadow ml-6 md:ml-12">
                <div className="absolute top-6 -left-3 md:-left-6 bg-portfolio-purple text-white rounded-full p-3">
                  <Briefcase className="w-5 h-5" />
                </div>
                
                <div className="ml-4 md:ml-8">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <h3 className="text-xl font-bold text-portfolio-deep-blue dark:text-white">
                      {t("company1")}
                    </h3>
                    <span className="text-sm bg-portfolio-purple/20 text-portfolio-purple px-3 py-1 rounded-full mt-2 md:mt-0 w-max">
                      {t("company1Duration")}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-medium text-portfolio-purple mb-4">
                    {t("company1Role")}
                  </h4>
                  
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-portfolio-purple mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-600 dark:text-gray-300">{t("company1Description1")}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-portfolio-purple mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-600 dark:text-gray-300">{t("company1Description2")}</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-portfolio-purple mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-600 dark:text-gray-300">{t("company1Description3")}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
