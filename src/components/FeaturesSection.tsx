import { Card } from "@/components/ui/card";
import { 
  MessageSquare, 
  Upload, 
  Zap, 
  CalendarClock, 
  PieChart, 
  Shield,
  Smartphone,
  Target
} from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const features = [
  {
    icon: MessageSquare,
    title: "Conexão via QR Code",
    description: "Conecte seu WhatsApp rapidamente escaneando o código QR. Sem complicações.",
  },
  {
    icon: Upload,
    title: "Importação Excel",
    description: "Importe listas de contatos em Excel ou cole números manualmente.",
  },
  {
    icon: Zap,
    title: "Mensagens Personalizadas",
    description: "Personalize cada mensagem com variáveis: nome, cidade, produto e muito mais.",
  },
  {
    icon: CalendarClock,
    title: "Agendamento Inteligente",
    description: "Agende disparos e controle a taxa de envio para evitar bloqueios.",
  },
  {
    icon: PieChart,
    title: "Relatórios Completos",
    description: "Visualize estatísticas detalhadas de envio, entrega e respostas.",
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Sistema seguro com proteção de dados e conformidade com políticas.",
  },
  {
    icon: Smartphone,
    title: "Multi-dispositivo",
    description: "Acesse de qualquer lugar: computador, tablet ou smartphone.",
  },
  {
    icon: Target,
    title: "Segmentação Avançada",
    description: "Crie grupos e segmente seu público para campanhas mais efetivas.",
  },
];

export default function FeaturesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className={`py-20 bg-transparent scroll-reveal ${isVisible ? 'visible' : ''}`} id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-accent font-semibold text-4xl sm:text-5xl mb-4 text-white neon-text-strong" data-testid="text-features-title">
            Tudo o que você precisa para disparar com eficiência
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto neon-text-subtle" data-testid="text-features-subtitle">
            Recursos poderosos que tornam a automação de mensagens simples e eficaz
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate bg-black/60 border-primary/20 backdrop-blur-sm"
              data-testid={`card-feature-${index}`}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-lg mb-4 shadow-neon">
                <feature.icon className="w-6 h-6 text-primary drop-shadow-[0_0_8px_rgba(37,211,102,0.8)]" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white neon-text" data-testid={`text-feature-title-${index}`}>
                {feature.title}
              </h3>
              <p className="text-sm text-white/60" data-testid={`text-feature-desc-${index}`}>
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
