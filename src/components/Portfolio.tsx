
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useRef, useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";
import { MoveRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogClose
} from "@/components/ui/dialog";

const Portfolio = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  useEffect(() => {
    // Para el efecto de parallax al hacer scroll
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const elements = containerRef.current.querySelectorAll('.parallax-element');
      const scrollPosition = window.scrollY;
      
      elements.forEach((element, index) => {
        const htmlElement = element as HTMLElement;
        const speed = index % 2 === 0 ? 0.1 : -0.1;
        htmlElement.style.transform = `translateY(${scrollPosition * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projectImages = [
    {
      src: "public/lovable-uploads/53df3ea9-902b-4eb9-9528-f4993f393e3d.png",
      alt: t("photoAlt1")
    },
    {
      src: "public/lovable-uploads/42979d34-a113-4f12-b6bd-ad1b50f27996.png",
      alt: t("photoAlt2")
    },
    {
      src: "public/lovable-uploads/f13ada45-df8d-46db-968d-d43209995135.png",
      alt: t("photoAlt3")
    }
  ];

  const openImageDialog = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-portfolio-deep-blue overflow-hidden">
      <div className="container mx-auto px-4" ref={containerRef}>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16 text-portfolio-deep-blue dark:text-white animate-fade-in">
          {t("portfolioTitle")}
        </h2>

        <div className="mb-20 relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-portfolio-purple/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center md:order-2">
              <div className="relative">
                <Avatar className="w-64 h-64 md:w-80 md:h-80 parallax-element animate-scale-in">
                  <AvatarImage
                    src="public/lovable-uploads/f13ada45-df8d-46db-968d-d43209995135.png"
                    alt="Fiorella Avegliano"
                    className="object-cover rounded-full border-4 border-portfolio-purple/30"
                  />
                  <AvatarFallback className="text-4xl">FA</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-portfolio-purple rounded-full animate-float"></div>
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-portfolio-light-purple rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
            
            <div className="space-y-6 md:pr-10 animate-slide-in">
              <h3 className="text-2xl font-display font-bold text-portfolio-purple">{t("designerDeveloper")}</h3>
              <p className="text-lg">{t("portfolioDescription")}</p>
              <div className="flex gap-4 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-portfolio-light-purple text-portfolio-purple text-sm font-medium animate-fade-in hover:scale-110 transition-transform">UI/UX</span>
                <span className="px-3 py-1 rounded-full bg-portfolio-light-purple text-portfolio-purple text-sm font-medium animate-fade-in hover:scale-110 transition-transform" style={{ animationDelay: '0.1s' }}>React</span>
                <span className="px-3 py-1 rounded-full bg-portfolio-light-purple text-portfolio-purple text-sm font-medium animate-fade-in hover:scale-110 transition-transform" style={{ animationDelay: '0.2s' }}>Tailwind</span>
                <span className="px-3 py-1 rounded-full bg-portfolio-light-purple text-portfolio-purple text-sm font-medium animate-fade-in hover:scale-110 transition-transform" style={{ animationDelay: '0.3s' }}>Figma</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-display font-bold text-center mb-10 text-portfolio-purple">{t("myProjects") || "Mis Trabajos"}</h3>
          
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {projectImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="p-2 h-full">
                    <div 
                      className="bg-white dark:bg-portfolio-deep-blue/50 rounded-xl overflow-hidden shadow-lg h-full transform transition-all duration-500 hover:scale-105 hover:shadow-xl cursor-pointer"
                      onClick={() => openImageDialog(image.src)}
                    >
                      <div className="h-72 overflow-hidden">
                        <img 
                          src={image.src} 
                          alt={image.alt} 
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="static translate-y-0 mr-2 hover:bg-portfolio-purple hover:text-white transition-colors" />
              <CarouselNext className="static translate-y-0 ml-2 hover:bg-portfolio-purple hover:text-white transition-colors" />
            </div>
          </Carousel>
        </div>

        <div className="flex justify-center">
          <div className="relative group cursor-pointer inline-block">
            <a 
              href="https://behance.net/fiorellaveglia" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 bg-portfolio-purple text-white rounded-lg inline-flex items-center group-hover:bg-portfolio-dark-purple transition-all duration-300"
            >
              {t("viewMore")}
              <MoveRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="absolute -inset-1 bg-gradient-to-r from-portfolio-purple via-portfolio-light-purple to-portfolio-purple rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-300"></div>
          </div>
        </div>
      </div>

      {/* Dialog para mostrar la imagen ampliada */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl w-[90vw] max-h-[90vh] p-1 bg-white/95 dark:bg-portfolio-deep-blue/95 backdrop-blur-sm border-portfolio-purple/30">
          <DialogClose className="absolute right-3 top-3 z-10 rounded-full bg-white/80 dark:bg-portfolio-deep-blue/80 p-2 opacity-70 ring-offset-background transition-opacity hover:opacity-100 hover:bg-portfolio-purple/20" />
          <div className="w-full h-full flex items-center justify-center overflow-hidden">
            {selectedImage && (
              <img 
                src={selectedImage} 
                alt="Proyecto ampliado" 
                className="w-full h-full object-contain animate-fade-in"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
