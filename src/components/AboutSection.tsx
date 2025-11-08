import { Card } from "@/components/ui/card";
import { QrCode, Users, FileSpreadsheet, BarChart3, Clock } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const features = [
  {
    icon: QrCode,
    title: "Conexão via QR Code",
    description: "Conecte seu WhatsApp em segundos escaneando o código QR",
  },
  {
    icon: FileSpreadsheet,
    title: "Importação de Listas",
    description: "Importe contatos via Excel ou cole números manualmente",
  },
  {
    icon: Users,
    title: "Mensagens Personalizadas",
    description: "Personalize mensagens com nome, cidade e mais variáveis",
  },
  {
    icon: Clock,
    title: "Controle de Taxa",
    description: "Envie mensagens com intervalos para evitar bloqueios",
  },
  {
    icon: BarChart3,
    title: "Relatórios Detalhados",
    description: "Acompanhe envios, entregas e respostas em tempo real",
  },
];

function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className={`py-20 bg-transparent scroll-reveal ${isVisible ? 'visible' : ''}`} id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-accent font-semibold text-3xl sm:text-4xl lg:text-5xl mb-4 text-white neon-text-strong" data-testid="text-about-title">
            O que é o Sistema de Disparo WhatsApp?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/70 max-w-3xl mx-auto neon-text-subtle" data-testid="text-about-description">
            Uma plataforma completa e profissional para automatizar seus disparos de mensagens 
            no WhatsApp. Simples, seguro e eficiente.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 sm:p-8 hover-elevate bg-black/60 backdrop-blur-sm border-primary/20"
              data-testid={`card-feature-${index}`}
            >
              <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-primary/20 rounded-lg mb-4 sm:mb-6 shadow-neon">
                <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg sm:text-xl mb-2 sm:mb-3 text-white" data-testid={`text-feature-title-${index}`}>
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-white/60" data-testid={`text-feature-desc-${index}`}>
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
