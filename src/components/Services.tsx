
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  LayoutTemplate, 
  Briefcase, 
  Building, 
  Code, 
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: <LayoutTemplate className="h-8 w-8 text-portfolio-purple" />,
      title: t("landingPage"),
      price: t("fromPrice", { price: "299 USD" }),
      features: [
        t("landingPageFeature1"),
        t("landingPageFeature2"),
        t("landingPageFeature3"),
        t("landingPageFeature4"),
        t("landingPageFeature5"),
        t("landingPageFeature6"),
        t("landingPageFeature7"),
        t("landingPageFeature8"),
        t("landingPageFeature9"),
      ],
      description: t("landingPageDescription"),
    },
    {
      icon: <Briefcase className="h-8 w-8 text-portfolio-purple" />,
      title: t("portfolio"),
      price: t("fromPrice", { price: "349 USD" }),
      features: [
        t("portfolioFeature1"),
        t("portfolioFeature2"),
        t("portfolioFeature3"),
        t("portfolioFeature4"),
        t("portfolioFeature5"),
        t("portfolioFeature6"),
        t("portfolioFeature7"),
      ],
      description: t("portfolioDescription"),
    },
    {
      icon: <Building className="h-8 w-8 text-portfolio-purple" />,
      title: t("corporateWeb"),
      price: t("fromPrice", { price: "449 USD" }),
      features: [
        t("corporateWebFeature1"),
        t("corporateWebFeature2"),
        t("corporateWebFeature3"),
        t("corporateWebFeature4"),
        t("corporateWebFeature5"),
        t("corporateWebFeature6"),
        t("corporateWebFeature7"),
      ],
      description: t("corporateWebDescription"),
    },
    {
      icon: <Code className="h-8 w-8 text-portfolio-purple" />,
      title: t("customSoftware"),
      price: t("consultPrice"),
      features: [
        t("customSoftwareFeature1"),
        t("customSoftwareFeature2"),
        t("customSoftwareFeature3"),
        t("customSoftwareFeature4"),
        t("customSoftwareFeature5"),
      ],
      description: t("customSoftwareDescription"),
    }
  ];

  return (
    <section id="services" className="py-20 bg-accent/30 dark:bg-portfolio-deep-blue/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-portfolio-deep-blue dark:text-white">
            {t("services")}
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-portfolio-deep-blue/80 dark:text-white/80">
            {t("servicesDescription")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-portfolio-deep-blue border border-border rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 reveal-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <div className="mb-6 flex items-center justify-center h-16 w-16 rounded-full bg-portfolio-light-purple mx-auto">
                  {service.icon}
                </div>
                <h3 className="font-display font-bold text-xl mb-2 text-center">{service.title}</h3>
                <p className="text-portfolio-purple font-semibold text-lg mb-4 text-center">{service.price}</p>
                <p className="text-sm text-portfolio-deep-blue/80 dark:text-white/70 mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="text-portfolio-purple mr-2">•</span>
                      <span className="text-portfolio-deep-blue/80 dark:text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full bg-portfolio-purple hover:bg-portfolio-dark-purple text-white flex items-center justify-center gap-2"
                >
                  {t("requestQuote")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
