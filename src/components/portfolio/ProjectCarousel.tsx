
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";

interface Project {
  src: string;
  alt: string;
}

interface ProjectCarouselProps {
  projects: Project[];
  onSelectImage: (imageSrc: string) => void;
}

const ProjectCarousel = ({ projects, onSelectImage }: ProjectCarouselProps) => {
  const { t } = useLanguage();

  return (
    <div className="mb-20">
      <h3 className="text-2xl font-display font-bold text-center mb-10 text-portfolio-purple">
        {t("myProjects") || "Mis Trabajos"}
      </h3>
      
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full max-w-4xl mx-auto"
      >
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem key={index} className="md:basis-1/2">
              <div className="p-2 h-full">
                <div 
                  className="bg-white dark:bg-portfolio-deep-blue/50 rounded-xl overflow-hidden shadow-lg h-full transform transition-all duration-500 hover:scale-105 hover:shadow-xl cursor-pointer"
                  onClick={() => onSelectImage(project.src)}
                >
                  <div className="h-72 overflow-hidden">
                    <img 
                      src={project.src} 
                      alt={project.alt} 
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
  );
};

export default ProjectCarousel;
