import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const plans = [
  {
    name: "Starter",
    price: "R$ 97",
    period: "/mês",
    description: "Ideal para começar",
    features: [
      "500 mensagens/mês",
      "1 dispositivo conectado",
      "Suporte por email",
      "Relatórios básicos",
      "Importação Excel",
    ],
    cta: "Começar Grátis",
    link: "https://pay.kirvano.com/b35c0c92-1197-42df-97db-995c625c7163",
    popular: false,
  },
  {
    name: "Professional",
    price: "R$ 197",
    period: "/mês",
    description: "Para quem quer crescer",
    features: [
      "3.000 mensagens/mês",
      "3 dispositivos conectados",
      "Suporte prioritário",
      "Relatórios avançados",
      "Importação Excel",
      "Agendamento avançado",
      "API de integração",
    ],
    cta: "Começar Agora",
    link: "https://pay.kirvano.com/e9f1410b-a2c3-47fd-b584-e0d2d238c12e",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "R$ 497",
    period: "/mês",
    description: "Solução completa",
    features: [
      "Mensagens ilimitadas",
      "Dispositivos ilimitados",
      "Suporte 24/7",
      "Relatórios personalizados",
      "Tudo do Professional",
      "Gerente de conta dedicado",
      "Treinamento personalizado",
      "Integração customizada",
    ],
    cta: "Falar com Vendas",
    link: "https://pay.kirvano.com/a884c8e3-d4a4-40a8-816b-2f124886299a",
    popular: false,
  },
];

export default function PricingSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className={`py-20 bg-transparent scroll-reveal ${isVisible ? 'visible' : ''}`} id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-accent font-semibold text-4xl sm:text-5xl mb-4 text-white neon-text-strong" data-testid="text-pricing-title">
            Planos e Preços
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto neon-text-subtle" data-testid="text-pricing-subtitle">
            Escolha o plano ideal para o seu negócio. Sem taxas ocultas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative p-8 hover-elevate bg-black/60 backdrop-blur-sm ${
                plan.popular ? "border-primary border-2 shadow-neon-strong" : "border-primary/20"
              }`}
              data-testid={`card-plan-${index}`}
            >
              {plan.popular && (
                <Badge
                  className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-black shadow-neon-button animate-pulse-subtle"
                  data-testid="badge-popular"
                >
                  Mais Popular
                </Badge>
              )}
              
              <div className="text-center mb-8">
                <h3 className="font-semibold text-2xl mb-2 text-white neon-text" data-testid={`text-plan-name-${index}`}>
                  {plan.name}
                </h3>
                <p className="text-sm text-white/60 mb-4" data-testid={`text-plan-desc-${index}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold font-accent text-white neon-text-strong" data-testid={`text-plan-price-${index}`}>
                    {plan.price}
                  </span>
                  <span className="text-white/60">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-3"
                    data-testid={`text-plan-feature-${index}-${featureIndex}`}
                  >
                    <div className="flex items-center justify-center w-5 h-5 bg-primary/20 rounded-full flex-shrink-0 mt-0.5 shadow-neon">
                      <Check className="w-3 h-3 text-primary drop-shadow-[0_0_6px_rgba(37,211,102,0.7)]" />
                    </div>
                    <span className="text-sm text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <a href={plan.link} target="_blank" rel="noopener noreferrer">
                <Button
                  variant={plan.popular ? "default" : "outline"}
                  className={`w-full ${
                    plan.popular 
                      ? "bg-primary hover:bg-primary/90 text-black font-semibold shadow-neon-button-strong animate-float-subtle border-2 border-primary" 
                      : "text-white border-2 border-white/30 hover:border-white/60 hover:bg-white/10"
                  }`}
                  data-testid={`button-plan-cta-${index}`}
                >
                  {plan.cta}
                </Button>
              </a>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-white/60 mt-8" data-testid="text-pricing-note">
          Todos os planos incluem 7 dias de teste grátis. Cancele quando quiser.
        </p>
      </div>
    </section>
  );
}
