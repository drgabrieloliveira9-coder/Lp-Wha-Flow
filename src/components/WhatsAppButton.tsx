import { SiWhatsapp } from "react-icons/si";

export default function WhatsAppButton() {
  const whatsappLink = "https://wa.me/5531993640574?text=Ol%C3%A1%2C%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20WhaFlow...";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16 bg-primary rounded-full shadow-lg hover:scale-110 transition-all duration-300 animate-float"
      style={{
        boxShadow: "0 4px 20px rgba(37, 211, 102, 0.6), 0 0 40px rgba(37, 211, 102, 0.4)",
        animation: "float 3s ease-in-out infinite, glow 2s ease-in-out infinite",
      }}
      data-testid="button-whatsapp-float"
    >
      <SiWhatsapp className="w-8 h-8 text-white" />
    </a>
  );
}
