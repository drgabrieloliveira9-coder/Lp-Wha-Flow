import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const faqs = [
  {
    question: "O sistema é seguro? Minha conta pode ser bloqueada?",
    answer: "Sim, nosso sistema é totalmente seguro e desenvolvido seguindo as melhores práticas. Implementamos controle de taxa de envio inteligente e intervalos entre mensagens para minimizar riscos de bloqueio. Seguimos todas as diretrizes do WhatsApp.",
  },
  {
    question: "Preciso de conhecimento técnico para usar?",
    answer: "Não! O sistema foi desenvolvido para ser extremamente intuitivo. Qualquer pessoa consegue usar sem dificuldades. Oferecemos tutoriais em vídeo e suporte completo para ajudar você a começar.",
  },
  {
    question: "Posso testar antes de assinar?",
    answer: "Sim! Todos os planos incluem 7 dias de teste grátis, sem necessidade de cartão de crédito. Você pode explorar todas as funcionalidades e decidir se o sistema é ideal para você.",
  },
  {
    question: "Como funciona a importação de contatos?",
    answer: "Você pode importar contatos de duas formas: fazendo upload de um arquivo Excel (.xlsx ou .csv) com os números e informações, ou colando manualmente os números na plataforma. O sistema aceita números com ou sem DDI/DDD.",
  },
  {
    question: "Posso personalizar as mensagens?",
    answer: "Sim! Você pode usar variáveis como {nome}, {cidade}, {produto} e outras para personalizar cada mensagem automaticamente. Isso aumenta significativamente a taxa de resposta.",
  },
  {
    question: "Quantos dispositivos posso conectar?",
    answer: "Depende do seu plano. O Starter permite 1 dispositivo, o Professional permite 3, e o Enterprise oferece dispositivos ilimitados. Você pode conectar diferentes números de WhatsApp.",
  },
  {
    question: "Como funciona o suporte?",
    answer: "Oferecemos suporte por email para todos os planos. O plano Professional tem suporte prioritário, e o Enterprise conta com suporte 24/7 e gerente de conta dedicado.",
  },
  {
    question: "Posso cancelar quando quiser?",
    answer: "Sim! Você pode cancelar sua assinatura a qualquer momento, sem multas ou taxas de cancelamento. Se cancelar, terá acesso até o fim do período pago.",
  },
];

export default function FAQSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className={`py-20 bg-transparent scroll-reveal ${isVisible ? 'visible' : ''}`} id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-accent font-semibold text-4xl sm:text-5xl mb-4 text-white neon-text-strong" data-testid="text-faq-title">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-white/70 neon-text-subtle" data-testid="text-faq-subtitle">
            Tire suas dúvidas sobre o sistema
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-black/60 backdrop-blur-sm rounded-lg border border-primary/20 px-6"
              data-testid={`accordion-item-${index}`}
            >
              <AccordionTrigger
                className="text-left font-semibold hover:no-underline text-white neon-text"
                data-testid={`accordion-trigger-${index}`}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent
                className="text-white/70"
                data-testid={`accordion-content-${index}`}
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
