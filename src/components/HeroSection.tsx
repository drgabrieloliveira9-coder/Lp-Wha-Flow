import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import phoneImage from "@assets/generated_images/Smartphone_with_WhatsApp_dashboard_fb2c9292.png";
import laptopImage from "@assets/generated_images/Laptop_with_WhatsApp_dashboard_20ed4def.png";

import image_removebg_preview__2_ from "@assets/image-removebg-preview (2).png";

import image_removebg_preview__1_ from "@assets/image-removebg-preview (1).png";

export default function HeroSection() {
  const laptopContainerRef = useRef<HTMLDivElement>(null);
  const phoneContainerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        const scroll = window.scrollY;
        const rotateYLaptop = scroll * 0.5;
        const rotateYPhone = scroll * -0.5;

        if (laptopContainerRef.current) {
          laptopContainerRef.current.style.transform = `perspective(1200px) rotateY(${rotateYLaptop}deg)`;
        }

        if (phoneContainerRef.current) {
          phoneContainerRef.current.style.transform = `perspective(1200px) rotateY(${rotateYPhone}deg)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/20 text-primary text-sm font-semibold rounded-full border border-primary/40 shadow-neon animate-pulse-subtle" data-testid="badge-trusted">
                Confiável por +10.000 empresas
              </span>
            </div>
            
            <h1 className="font-accent font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-white neon-text-strong" data-testid="text-hero-title">
              Automatize seus disparos de mensagens no{" "}
              <span className="text-primary neon-text-primary">WhatsApp</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl neon-text-subtle" data-testid="text-hero-subtitle">
              Envie centenas de mensagens personalizadas pelo WhatsApp de forma simples, 
              segura e automatizada. Economize tempo e aumente suas vendas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-base h-12 bg-primary hover:bg-primary/90 text-black font-semibold shadow-neon-button-strong animate-float-subtle border-2 border-primary"
                onClick={() => scrollToSection("pricing")}
                data-testid="button-hero-trial"
              >
                Testar Gratuitamente
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base h-12 bg-black/60 backdrop-blur-sm text-white border-2 border-white/30 hover:border-white/60 hover:bg-white/10"
                onClick={() => scrollToSection("how-it-works")}
                data-testid="button-hero-demo"
              >
                <Play className="mr-2 w-5 h-5" />
                Ver Demonstração
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8 pt-4">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white neon-text" data-testid="text-stat-messages">500K+</div>
                <div className="text-xs sm:text-sm text-white/60">Mensagens enviadas</div>
              </div>
              <div className="h-12 w-px bg-primary/30 hidden sm:block" />
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white neon-text" data-testid="text-stat-delivery">99.9%</div>
                <div className="text-xs sm:text-sm text-white/60">Taxa de entrega</div>
              </div>
              <div className="h-12 w-px bg-primary/30 hidden sm:block" />
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white neon-text" data-testid="text-stat-support">24/7</div>
                <div className="text-xs sm:text-sm text-white/60">Suporte</div>
              </div>
            </div>
          </div>
          
          <div className="relative flex items-center justify-center h-[400px] sm:h-[500px] lg:h-[600px] mt-8 lg:mt-0">
            <div className="absolute left-0 sm:left-0 top-1/2 -translate-y-1/2 z-10">
              <div 
                ref={laptopContainerRef}
                className="relative"
                style={{
                  transformStyle: "preserve-3d",
                  transition: "transform 0.3s ease-out",
                }}
              >
                <img
                  src={image_removebg_preview__2_}
                  alt="Dashboard WhaFlow no Notebook"
                  loading="eager"
                  className="w-[280px] sm:w-[350px] md:w-[400px] lg:w-[500px] h-auto"
                  style={{
                    animation: "float 6s ease-in-out infinite",
                    filter: "drop-shadow(0 20px 40px rgba(37, 211, 102, 0.4))",
                  }}
                  data-testid="img-hero-laptop"
                />
                <div 
                  className="absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-8 sm:h-12 bg-primary/30 blur-2xl rounded-full"
                  style={{
                    animation: "pulse 3s ease-in-out infinite",
                  }}
                />
              </div>
            </div>
            
            <div className="absolute right-0 sm:right-4 md:right-8 top-1/4 z-20">
              <div 
                ref={phoneContainerRef}
                className="relative"
                style={{
                  transformStyle: "preserve-3d",
                  transition: "transform 0.3s ease-out",
                }}
              >
                <img
                  src={image_removebg_preview__1_}
                  alt="Dashboard WhaFlow no Celular"
                  loading="eager"
                  className="w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px] h-auto"
                  style={{
                    animation: "float 5s ease-in-out infinite 0.5s",
                    filter: "drop-shadow(0 20px 40px rgba(37, 211, 102, 0.5))",
                  }}
                  data-testid="img-hero-phone"
                />
                <div 
                  className="absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 w-2/3 h-6 sm:h-8 bg-primary/40 blur-xl rounded-full"
                  style={{
                    animation: "pulse 3s ease-in-out infinite 0.5s",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
