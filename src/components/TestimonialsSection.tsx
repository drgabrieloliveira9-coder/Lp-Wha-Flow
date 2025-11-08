import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import testimonial1 from "@assets/generated_images/Female_entrepreneur_testimonial_photo_bab9a132.png";
import testimonial2 from "@assets/generated_images/Male_sales_manager_testimonial_ff21ba39.png";
import testimonial3 from "@assets/generated_images/Young_entrepreneur_testimonial_photo_77984911.png";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Proprietária",
    company: "Loja Fashion Brasil",
    image: testimonial1,
    content: "Aumentei minhas vendas em 300% após começar a usar o sistema. A facilidade de enviar mensagens personalizadas para meus clientes fez toda a diferença!",
    rating: 5,
  },
  {
    name: "Carlos Mendes",
    role: "Gerente de Vendas",
    company: "Imobiliária Prime",
    image: testimonial2,
    content: "O melhor investimento que fiz para minha equipe. Conseguimos alcançar muito mais leads e fechar mais negócios. Suporte excelente!",
    rating: 5,
  },
  {
    name: "João Pedro",
    role: "Empreendedor Digital",
    company: "Agência Digital Pro",
    image: testimonial3,
    content: "Sistema intuitivo e poderoso. Automatizei todo meu processo de follow-up com clientes. Economizo horas todos os dias!",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className={`py-20 bg-transparent scroll-reveal ${isVisible ? 'visible' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-accent font-semibold text-4xl sm:text-5xl mb-4 text-white neon-text-strong" data-testid="text-testimonials-title">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto neon-text-subtle" data-testid="text-testimonials-subtitle">
            Milhares de empresas já transformaram seus resultados
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover-elevate bg-black/60 border-primary/20 backdrop-blur-sm" data-testid={`card-testimonial-${index}`}>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary drop-shadow-[0_0_8px_rgba(37,211,102,0.8)]" />
                ))}
              </div>
              
              <p className="text-white/70 mb-6 italic" data-testid={`text-testimonial-content-${index}`}>
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-white neon-text" data-testid={`text-testimonial-name-${index}`}>
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-white/60" data-testid={`text-testimonial-role-${index}`}>
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 flex-wrap justify-center">
            <div>
              <div className="text-3xl font-bold text-white neon-text" data-testid="text-stat-customers">10.000+</div>
              <div className="text-sm text-white/60">Clientes Ativos</div>
            </div>
            <div className="h-12 w-px bg-primary/30 hidden sm:block" />
            <div>
              <div className="text-3xl font-bold text-white neon-text" data-testid="text-stat-rating">4.9/5</div>
              <div className="text-sm text-white/60">Avaliação Média</div>
            </div>
            <div className="h-12 w-px bg-primary/30 hidden sm:block" />
            <div>
              <div className="text-3xl font-bold text-white neon-text" data-testid="text-stat-countries">50+</div>
              <div className="text-sm text-white/60">Países</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
