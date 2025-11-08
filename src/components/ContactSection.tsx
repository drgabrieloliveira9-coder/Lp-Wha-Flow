import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function ContactSection() {
  const { ref, isVisible } = useScrollReveal();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section ref={ref} className={`py-20 bg-transparent scroll-reveal ${isVisible ? 'visible' : ''}`} id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-accent font-semibold text-3xl sm:text-4xl lg:text-5xl mb-4 text-white neon-text-strong" data-testid="text-contact-title">
            Entre em Contato
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/70 neon-text-subtle" data-testid="text-contact-subtitle">
            Tem dúvidas? Nossa equipe está pronta para ajudar
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="lg:col-span-2">
            <Card className="p-6 sm:p-8 hover-elevate bg-black/60 backdrop-blur-sm border-primary/20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">Nome Completo</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      autoComplete="name"
                      aria-label="Nome completo"
                      required
                      data-testid="input-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      autoComplete="email"
                      aria-label="Endereço de email"
                      required
                      data-testid="input-email"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white">Telefone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(11) 99999-9999"
                      autoComplete="tel"
                      aria-label="Número de telefone"
                      data-testid="input-phone"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-white">Empresa</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Nome da empresa"
                      data-testid="input-company"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Como podemos ajudar?"
                    rows={5}
                    required
                    data-testid="input-message"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" data-testid="button-submit">
                  Enviar Mensagem
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6 hover-elevate bg-black/60 backdrop-blur-sm border-primary/20">
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-lg shadow-neon">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-white">Email</div>
                  <div className="text-sm text-white/60" data-testid="text-email">
                    contato@whatsapppro.com.br
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate bg-black/60 backdrop-blur-sm border-primary/20">
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-lg shadow-neon">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-white">Telefone</div>
                  <div className="text-sm text-white/60" data-testid="text-phone">
                    (11) 99999-9999
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate bg-black/60 backdrop-blur-sm border-primary/20">
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-lg shadow-neon">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-white">Horário</div>
                  <div className="text-sm text-white/60" data-testid="text-hours">
                    Seg-Sex: 9h às 18h
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
