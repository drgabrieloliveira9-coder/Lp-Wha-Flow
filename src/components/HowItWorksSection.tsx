import { Card } from "@/components/ui/card";
import { QrCode, Upload, Send, BarChart } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const steps = [
  {
    number: "01",
    icon: QrCode,
    title: "Conecte seu WhatsApp",
    description: "Escaneie o código QR para conectar sua conta WhatsApp de forma segura em segundos.",
  },
  {
    number: "02",
    icon: Upload,
    title: "Importe sua lista",
    description: "Faça upload do seu arquivo Excel com contatos ou cole os números manualmente.",
  },
  {
    number: "03",
    icon: Send,
    title: "Configure e envie",
    description: "Personalize sua mensagem, defina intervalos e inicie o disparo automatizado.",
  },
  {
    number: "04",
    icon: BarChart,
    title: "Acompanhe resultados",
    description: "Monitore em tempo real as estatísticas de envio, entrega e respostas.",
  },
];

export default function HowItWorksSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className={`py-20 bg-transparent scroll-reveal ${isVisible ? 'visible' : ''}`} id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-accent font-semibold text-3xl sm:text-4xl lg:text-5xl mb-4 text-white neon-text-strong" data-testid="text-how-it-works-title">
            Como Funciona?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-3xl mx-auto neon-text-subtle" data-testid="text-how-it-works-subtitle">
            Em apenas 4 passos simples você estará enviando mensagens automatizadas
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative" data-testid={`step-${index}`}>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-24 left-1/2 w-full h-0.5 bg-primary/20" />
              )}
              <Card className="relative p-6 sm:p-8 text-center hover-elevate bg-black/60 backdrop-blur-sm border-primary/20">
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-primary/20 rounded-full mb-4 sm:mb-6 relative z-10 shadow-neon">
                  <step.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg sm:text-xl mb-2 sm:mb-3 text-white" data-testid={`text-step-title-${index}`}>
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-white/60" data-testid={`text-step-desc-${index}`}>
                  {step.description}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
