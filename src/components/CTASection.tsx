import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function CTASection() {
  const { ref, isVisible } = useScrollReveal();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={ref} className={`py-20 bg-transparent relative scroll-reveal-scale ${isVisible ? 'visible' : ''}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="font-accent font-bold text-4xl sm:text-5xl lg:text-6xl mb-6 text-white neon-text-strong" data-testid="text-cta-title">
          Pronto para Automatizar seu WhatsApp?
        </h2>
        <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto neon-text-subtle" data-testid="text-cta-subtitle">
          Junte-se a milhares de empresas que já estão economizando tempo e 
          aumentando suas vendas com nosso sistema.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            size="lg"
            className="text-base h-12 bg-primary hover:bg-primary/90 text-black font-semibold shadow-neon-button-strong animate-float-subtle border-2 border-primary"
            onClick={() => scrollToSection("pricing")}
            data-testid="button-cta-start"
          >
            Começar Agora Grátis
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base h-12 bg-black/60 backdrop-blur-sm text-white border-2 border-white/30 hover:border-white/60 hover:bg-white/10"
            onClick={() => scrollToSection("contact")}
            data-testid="button-cta-demo"
          >
            Falar com Especialista
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm text-white/60">
          <Shield className="w-4 h-4 text-primary drop-shadow-[0_0_8px_rgba(37,211,102,0.8)]" />
          <span data-testid="text-cta-guarantee">
            Sem cartão de crédito • 7 dias grátis • Cancele quando quiser
          </span>
        </div>
      </div>
    </section>
  );
}
