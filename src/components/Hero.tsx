
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowDown, MoveDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";

const Hero = () => {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const particlesRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    setIsVisible(true);

    // Efecto de movimiento de partículas
    const handleMouseMove = (e: MouseEvent) => {
      if (!particlesRef.current) return;
      
      const particles = particlesRef.current.querySelectorAll('.particle');
      const x = (window.innerWidth / 2 - e.clientX) / 20;
      const y = (window.innerHeight / 2 - e.clientY) / 20;
      
      particles.forEach((particle, i) => {
        const htmlParticle = particle as HTMLElement;
        const speed = i % 5 === 0 ? 1 : i % 3 === 0 ? 0.5 : 0.25;
        htmlParticle.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative pt-16 bg-gradient-to-br from-white to-portfolio-light-purple dark:from-portfolio-deep-blue dark:to-portfolio-dark-purple overflow-hidden"
    >
      <div 
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none"
      >
        {Array(20).fill(0).map((_, i) => (
          <div 
            key={i} 
            className={`particle absolute rounded-full bg-portfolio-purple/10 transition-transform duration-500 ease-out`}
            style={{
              width: `${Math.random() * 50 + 10}px`,
              height: `${Math.random() * 50 + 10}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.1
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            className={`text-lg md:text-xl font-medium text-portfolio-purple transition-all duration-700 ease-out ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '300ms' }}
          >
            {t("greeting")}
          </h2>
          
          <h1 
            className={`text-4xl md:text-6xl font-display font-bold mt-3 mb-6 text-portfolio-deep-blue dark:text-white transition-all duration-700 ease-out ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '500ms' }}
          >
            Fiorella Avegliano
          </h1>
          
          <div 
            className={`overflow-hidden mb-8 transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '700ms' }}
          >
            <h3 
              className={`text-xl md:text-2xl text-portfolio-deep-blue dark:text-white transform transition-all duration-700 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}
            >
              {t("role")}
            </h3>
          </div>
          
          <div 
            className={`flex justify-center transition-all duration-700 ease-out ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '900ms' }}
          >
            <Button 
              onClick={scrollToAbout}
              className="bg-portfolio-purple hover:bg-portfolio-dark-purple text-white rounded-full px-8 py-6 group"
            >
              {t("cta")}
              <MoveDown className="ml-2 h-5 w-5 group-hover:animate-bounce" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-2 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      
      {/* Animated background shapes */}
      <div className="hidden md:block absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-portfolio-purple/10 blur-3xl animate-float" style={{ animationDelay: '0s' }} />
      <div className="hidden md:block absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-portfolio-purple/15 blur-3xl animate-float" style={{ animationDelay: '1s', animationDuration: '8s' }} />
      <div className="hidden md:block absolute top-2/3 right-1/3 w-40 h-40 rounded-full bg-portfolio-purple/10 blur-3xl animate-float" style={{ animationDelay: '1.5s', animationDuration: '7s' }} />
    </section>
  );
};

export default Hero;
