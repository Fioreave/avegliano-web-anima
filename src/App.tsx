
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/hooks/useTheme";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

const queryClient = new QueryClient();

// Componente para el efecto de cursor personalizado
const CursorEffect = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);
    
    const cursorDot = document.createElement('div');
    cursorDot.classList.add('cursor-dot');
    document.body.appendChild(cursorDot);
    
    const updateCursor = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    
    window.addEventListener('mousemove', updateCursor);
    
    // Efecto hover en elementos interactivos
    const handleMouseEnter = () => {
      cursor.classList.add('cursor-active');
    };
    
    const handleMouseLeave = () => {
      cursor.classList.remove('cursor-active');
    };
    
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });
    
    return () => {
      window.removeEventListener('mousemove', updateCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      document.body.removeChild(cursor);
      document.body.removeChild(cursorDot);
    };
  }, []);
  
  return null;
};

// Componente para el efecto de revelar al scroll
const ScrollRevealEffect = () => {
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    };
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    document.querySelectorAll('.reveal-on-scroll').forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      document.querySelectorAll('.reveal-on-scroll').forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);
  
  return null;
};

// Estilos globales para las animaciones
const GlobalStyles = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .custom-cursor {
        position: fixed;
        width: 30px;
        height: 30px;
        border: 2px solid #9b87f5;
        border-radius: 50%;
        pointer-events: none;
        transform: translate(-50%, -50%);
        transition: width 0.2s, height 0.2s, transform 0.15s;
        z-index: 9999;
        mix-blend-mode: difference;
      }
      
      .cursor-dot {
        position: fixed;
        width: 5px;
        height: 5px;
        background: #9b87f5;
        border-radius: 50%;
        pointer-events: none;
        transform: translate(-50%, -50%);
        transition: transform 0.1s;
        z-index: 10000;
      }
      
      .cursor-active {
        width: 50px;
        height: 50px;
        background-color: rgba(155, 135, 245, 0.2);
      }
      
      .reveal-on-scroll {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.8s ease, transform 0.8s ease;
      }
      
      .is-visible {
        opacity: 1;
        transform: translateY(0);
      }
      
      @media (prefers-reduced-motion: reduce) {
        .custom-cursor, .cursor-dot, .reveal-on-scroll {
          transition: none;
          animation: none;
        }
      }
      
      @media (max-width: 768px) {
        .custom-cursor, .cursor-dot {
          display: none;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <TooltipProvider>
          <GlobalStyles />
          <CursorEffect />
          <ScrollRevealEffect />
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
