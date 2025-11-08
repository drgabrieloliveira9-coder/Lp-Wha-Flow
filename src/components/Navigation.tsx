import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent border-b border-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-transparent flex items-center justify-center">
              <SiWhatsapp className="w-6 h-6 text-primary" />
            </div>
            <span className="font-accent font-bold text-xl text-white neon-text-subtle">
              WhaFlow
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm font-medium text-white/90 hover:text-white hover-elevate px-3 py-2 rounded-md transition-all duration-200"
              data-testid="link-features"
            >
              Funcionalidades
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-sm font-medium text-white/90 hover:text-white hover-elevate px-3 py-2 rounded-md transition-all duration-200"
              data-testid="link-how-it-works"
            >
              Como Funciona
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm font-medium text-white/90 hover:text-white hover-elevate px-3 py-2 rounded-md transition-all duration-200"
              data-testid="link-pricing"
            >
              Planos
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm font-medium text-white/90 hover:text-white hover-elevate px-3 py-2 rounded-md transition-all duration-200"
              data-testid="link-faq"
            >
              FAQ
            </button>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              className="text-white border-white/20 hover:border-white/40"
              data-testid="button-login"
            >
              Login
            </Button>
            <Button
              className="bg-primary hover:bg-primary/90 text-black font-semibold shadow-neon-button animate-float-subtle border-2 border-primary"
              data-testid="button-start-trial"
            >
              Começar Grátis
            </Button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-primary/20 bg-black/95 backdrop-blur-md shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left px-3 py-2 text-base font-medium text-white/90 hover:text-white hover-elevate rounded-md"
              data-testid="link-mobile-features"
            >
              Funcionalidades
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="block w-full text-left px-3 py-2 text-base font-medium text-white/90 hover:text-white hover-elevate rounded-md"
              data-testid="link-mobile-how-it-works"
            >
              Como Funciona
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="block w-full text-left px-3 py-2 text-base font-medium text-white/90 hover:text-white hover-elevate rounded-md"
              data-testid="link-mobile-pricing"
            >
              Planos
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="block w-full text-left px-3 py-2 text-base font-medium text-white/90 hover:text-white hover-elevate rounded-md"
              data-testid="link-mobile-faq"
            >
              FAQ
            </button>
            <div className="pt-3 border-t border-primary/20 space-y-2">
              <Button variant="ghost" className="w-full text-white border-white/20" data-testid="button-mobile-login">
                Login
              </Button>
              <Button className="w-full bg-primary hover:bg-primary/90 text-black font-semibold shadow-neon-button" data-testid="button-mobile-start-trial">
                Começar Grátis
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}