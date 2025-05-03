
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useRef, useState } from "react";
import ProfileSection from "./portfolio/ProfileSection";
import ProjectCarousel from "./portfolio/ProjectCarousel";
import ImageDialog from "./portfolio/ImageDialog";
import ViewMoreButton from "./portfolio/ViewMoreButton";

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

        <ProfileSection />
        <ProjectCarousel 
          projects={projectImages} 
          onSelectImage={openImageDialog} 
        />
        <ViewMoreButton />
      </div>

      <ImageDialog 
        imageSrc={selectedImage} 
        isOpen={!!selectedImage}
        onOpenChange={() => setSelectedImage(null)} 
      />
    </section>
  );
};

export default Portfolio;
