import { SiWhatsapp, SiLinkedin, SiX, SiInstagram } from "react-icons/si";
import { Shield, Lock, Award } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black/80 border-t border-primary/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg shadow-neon-strong">
                <SiWhatsapp className="w-6 h-6 text-black" />
              </div>
              <span className="font-accent font-bold text-xl text-white neon-text">WhaFlow</span>
            </div>
            <p className="text-sm text-white/60 mb-4">
              Automatize seus disparos de mensagens no WhatsApp com inteligência e rapidez.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex items-center justify-center w-9 h-9 bg-muted rounded-lg hover-elevate"
                data-testid="link-linkedin"
              >
                <SiLinkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-9 h-9 bg-muted rounded-lg hover-elevate"
                data-testid="link-twitter"
              >
                <SiX className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-9 h-9 bg-muted rounded-lg hover-elevate"
                data-testid="link-instagram"
              >
                <SiInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white neon-text">Produto</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a href="#features" className="hover-elevate inline-block px-2 py-1 rounded-md">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover-elevate inline-block px-2 py-1 rounded-md">
                  Preços
                </a>
              </li>
              <li>
                <a href="#" className="hover-elevate inline-block px-2 py-1 rounded-md">
                  Integrações
                </a>
              </li>
              <li>
                <a href="#" className="hover-elevate inline-block px-2 py-1 rounded-md">
                  API
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white neon-text">Empresa</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a href="#" className="hover-elevate inline-block px-2 py-1 rounded-md">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="hover-elevate inline-block px-2 py-1 rounded-md">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover-elevate inline-block px-2 py-1 rounded-md">
                  Carreiras
                </a>
              </li>
              <li>
                <a href="#contact" className="hover-elevate inline-block px-2 py-1 rounded-md">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white neon-text">Recursos</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a href="#" className="hover-elevate inline-block px-2 py-1 rounded-md">
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a href="#" className="hover-elevate inline-block px-2 py-1 rounded-md">
                  Tutoriais
                </a>
              </li>
              <li>
                <a href="#" className="hover-elevate inline-block px-2 py-1 rounded-md">
                  Status do Sistema
                </a>
              </li>
              <li>
                <a href="#faq" className="hover-elevate inline-block px-2 py-1 rounded-md">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 py-6 border-t border-b border-primary/20">
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Shield className="w-4 h-4 text-primary drop-shadow-[0_0_8px_rgba(37,211,102,0.8)]" />
            <span>ISO 27001 Certificado</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Lock className="w-4 h-4 text-primary drop-shadow-[0_0_8px_rgba(37,211,102,0.8)]" />
            <span>LGPD Compliance</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Award className="w-4 h-4 text-primary drop-shadow-[0_0_8px_rgba(37,211,102,0.8)]" />
            <span>99.9% Uptime</span>
          </div>
        </div>

        <div className="pt-8 text-sm text-white/60 space-y-3">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p>&copy; 2025 WhaFlow. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover-elevate px-2 py-1 rounded-md hover:text-white">
                Privacidade
              </a>
              <a href="#" className="hover-elevate px-2 py-1 rounded-md hover:text-white">
                Termos
              </a>
              <a href="#" className="hover-elevate px-2 py-1 rounded-md hover:text-white">
                Cookies
              </a>
            </div>
          </div>
          <div className="text-center border-t border-primary/10 pt-4">
            <p className="text-white/50">Desenvolvido por: <span className="text-primary">João Layon</span> e <span className="text-primary">Paulo Davi</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
