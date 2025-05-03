
import { useLanguage } from "@/contexts/LanguageContext";
import { Check } from "lucide-react";

const WorkProcess = () => {
  const { t } = useLanguage();
  
  const steps = [
    {
      number: "1",
      title: t("workProcessStep1Title"),
      description: t("workProcessStep1Description"),
    },
    {
      number: "2",
      title: t("workProcessStep2Title"),
      description: t("workProcessStep2Description"),
    },
    {
      number: "3",
      title: t("workProcessStep3Title"),
      description: t("workProcessStep3Description"),
    },
    {
      number: "4",
      title: t("workProcessStep4Title"),
      description: t("workProcessStep4Description"),
    },
    {
      number: "5",
      title: t("workProcessStep5Title"),
      description: t("workProcessStep5Description"),
    }
  ];

  return (
    <section id="work-process" className="py-20 bg-white dark:bg-portfolio-deep-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-portfolio-deep-blue dark:text-white">
            {t("workProcess")}
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-portfolio-deep-blue/80 dark:text-white/80">
            {t("workProcessDescription")}
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-4xl mx-auto mb-20">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col md:flex-row items-start gap-6 mb-12 reveal-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0 w-14 h-14 bg-portfolio-light-purple rounded-full flex items-center justify-center text-portfolio-purple font-bold text-xl">
                {step.number}
              </div>
              <div>
                <h3 className="text-xl font-display font-bold mb-2 text-portfolio-deep-blue dark:text-white">{step.title}</h3>
                <p className="text-portfolio-deep-blue/80 dark:text-white/80">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Satisfaction Guarantee */}
        <div className="bg-portfolio-light-purple/20 dark:bg-portfolio-purple/10 p-8 rounded-xl max-w-4xl mx-auto">
          <h3 className="text-2xl font-display font-bold mb-6 text-portfolio-deep-blue dark:text-white text-center">
            {t("satisfactionGuarantee")}
          </h3>
          <p className="mb-8 text-center text-portfolio-deep-blue/80 dark:text-white/80">
            {t("satisfactionGuaranteeDescription")}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-portfolio-deep-blue p-5 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <Check className="w-5 h-5 text-portfolio-purple mr-2" />
                <p className="font-medium">{t("satisfactionFeature1")}</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-portfolio-deep-blue p-5 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <Check className="w-5 h-5 text-portfolio-purple mr-2" />
                <p className="font-medium">{t("satisfactionFeature2")}</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-portfolio-deep-blue p-5 rounded-lg shadow-sm">
              <div className="flex items-center mb-3">
                <Check className="w-5 h-5 text-portfolio-purple mr-2" />
                <p className="font-medium">{t("satisfactionFeature3")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
