
import { useLanguage } from "@/contexts/LanguageContext";
import { BookOpen } from "lucide-react";

const Education = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-20 bg-portfolio-light-purple/20 dark:bg-portfolio-deep-blue/80">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16 text-portfolio-deep-blue dark:text-white">
            {t("educationTitle")}
          </h2>
          
          <div className="space-y-8">
            {/* Education Item 1 */}
            <div className="bg-white dark:bg-portfolio-deep-blue rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-16 flex justify-center">
                  <div className="rounded-full bg-portfolio-purple/20 p-3 h-fit">
                    <BookOpen className="w-6 h-6 text-portfolio-purple" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-portfolio-deep-blue dark:text-white mb-2">
                    {t("university")}
                  </h3>
                  <h4 className="text-lg font-medium text-portfolio-purple mb-3">
                    {t("universityDegree")}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t("universityDuration")}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Education Item 2 */}
            <div className="bg-white dark:bg-portfolio-deep-blue rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-16 flex justify-center">
                  <div className="rounded-full bg-portfolio-purple/20 p-3 h-fit">
                    <BookOpen className="w-6 h-6 text-portfolio-purple" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-portfolio-deep-blue dark:text-white mb-2">
                    {t("designInstitute")}
                  </h3>
                  <h4 className="text-lg font-medium text-portfolio-purple mb-3">
                    {t("designDegree")}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t("designDuration")}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Education Item 3 */}
            <div className="bg-white dark:bg-portfolio-deep-blue rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-16 flex justify-center">
                  <div className="rounded-full bg-portfolio-purple/20 p-3 h-fit">
                    <BookOpen className="w-6 h-6 text-portfolio-purple" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-portfolio-deep-blue dark:text-white mb-2">
                    {t("highSchool")}
                  </h3>
                  <h4 className="text-lg font-medium text-portfolio-purple mb-3">
                    {t("highSchoolDegree")}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t("highSchoolDuration")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
