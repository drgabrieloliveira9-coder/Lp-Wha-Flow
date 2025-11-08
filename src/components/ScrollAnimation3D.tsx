import { Send, Check, UserCheck } from 'lucide-react';

export default function ScrollAnimation3D() {
  const MessageIcon = ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
    </svg>
  );

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-accent font-bold text-3xl sm:text-4xl md:text-5xl text-white neon-text-strong mb-4">
            Como Funciona o Disparo
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Processo automatizado em 3 etapas para máxima eficiência
          </p>
        </div>

        <div className="message-flow-container" data-testid="section-3d-scroll">
          {/* Etapa 1: Disparo */}
          <div className="flow-stage stage-dispatch">
            <div className="stage-icon">
              <Send className="w-8 h-8" />
            </div>
            <h3 className="stage-title">Disparo</h3>
            <p className="stage-description">Sistema envia</p>
          </div>

          {/* Etapa 2: Entrega */}
          <div className="flow-stage stage-delivery">
            <div className="stage-icon">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="stage-title">Entrega</h3>
            <p className="stage-description">99.9% entregues</p>
          </div>

          {/* Etapa 3: Lead */}
          <div className="flow-stage stage-lead">
            <div className="stage-icon">
              <UserCheck className="w-8 h-8" />
            </div>
            <h3 className="stage-title">Conversão</h3>
            <p className="stage-description">Lead gerado</p>
          </div>

          {/* Mensagens animadas */}
          <div className="message-icon message-1">
            <MessageIcon className="w-6 h-6" />
          </div>
          <div className="message-icon message-2">
            <MessageIcon className="w-6 h-6" />
          </div>
          <div className="message-icon message-3">
            <MessageIcon className="w-6 h-6" />
          </div>
          <div className="message-icon message-4">
            <MessageIcon className="w-6 h-6" />
          </div>
          <div className="message-icon message-5">
            <MessageIcon className="w-6 h-6" />
          </div>
        </div>
      </div>

      <style>{`
        .message-flow-container {
          position: relative;
          width: 100%;
          max-width: 900px;
          height: 400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 1rem;
        }

        .flow-stage {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          z-index: 10;
          position: relative;
        }

        .stage-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, #25d366 0%, #1ea952 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 0 30px rgba(37, 211, 102, 0.6), 0 0 60px rgba(37, 211, 102, 0.3);
          animation: pulse-icon 2s ease-in-out infinite;
        }

        .stage-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: white;
          text-shadow: 0 0 10px rgba(37, 211, 102, 0.8);
        }

        .stage-description {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.7);
        }

        @keyframes pulse-icon {
          0%, 100% { 
            transform: scale(1);
            box-shadow: 0 0 30px rgba(37, 211, 102, 0.6), 0 0 60px rgba(37, 211, 102, 0.3);
          }
          50% { 
            transform: scale(1.05);
            box-shadow: 0 0 40px rgba(37, 211, 102, 0.8), 0 0 80px rgba(37, 211, 102, 0.4);
          }
        }

        .message-icon {
          position: absolute;
          width: 32px;
          height: 32px;
          color: #25d366;
          filter: drop-shadow(0 0 8px #25d366) drop-shadow(0 0 16px #25d366);
          opacity: 0;
          animation: flowCurve 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .message-1 { animation-delay: 0s; }
        .message-2 { animation-delay: 0.8s; }
        .message-3 { animation-delay: 1.6s; }
        .message-4 { animation-delay: 2.4s; }
        .message-5 { animation-delay: 3.2s; }

        @keyframes flowCurve {
          0% {
            left: 15%;
            top: 50%;
            transform: translate(-50%, -50%) scale(0.5) rotate(0deg);
            opacity: 0;
            filter: drop-shadow(0 0 8px #25d366) drop-shadow(0 0 16px #25d366) brightness(1);
          }
          10% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1) rotate(10deg);
            filter: drop-shadow(0 0 12px #25d366) drop-shadow(0 0 24px #25d366) brightness(1.2);
          }
          35% {
            left: 50%;
            top: 30%;
            transform: translate(-50%, -50%) scale(1.1) rotate(20deg);
            opacity: 1;
            filter: drop-shadow(0 0 16px #25d366) drop-shadow(0 0 32px #25d366) brightness(1.5);
          }
          50% {
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
            opacity: 1;
            filter: drop-shadow(0 0 14px #25d366) drop-shadow(0 0 28px #25d366) brightness(1.3);
          }
          75% {
            left: 85%;
            top: 35%;
            transform: translate(-50%, -50%) scale(1.1) rotate(-20deg);
            opacity: 1;
            filter: drop-shadow(0 0 20px #25d366) drop-shadow(0 0 40px #25d366) brightness(1.8);
          }
          90% {
            left: 85%;
            top: 50%;
            transform: translate(-50%, -50%) scale(0.8) rotate(-10deg);
            opacity: 0.8;
            filter: drop-shadow(0 0 16px #25d366) drop-shadow(0 0 32px #25d366) brightness(1.5);
          }
          100% {
            left: 85%;
            top: 50%;
            transform: translate(-50%, -50%) scale(0.3) rotate(0deg);
            opacity: 0;
            filter: drop-shadow(0 0 8px #25d366) drop-shadow(0 0 16px #25d366) brightness(1);
          }
        }

        @media (max-width: 768px) {
          .message-flow-container {
            height: 500px;
            flex-direction: column;
            justify-content: space-evenly;
            max-width: 100%;
          }

          .stage-icon {
            width: 70px;
            height: 70px;
          }

          .stage-title {
            font-size: 1.125rem;
          }

          @keyframes flowCurve {
            0% {
              left: 50%;
              top: 18%;
              transform: translate(-50%, -50%) scale(0.5) rotate(0deg);
              opacity: 0;
              filter: drop-shadow(0 0 8px #25d366) drop-shadow(0 0 16px #25d366) brightness(1);
            }
            10% {
              opacity: 1;
              transform: translate(-50%, -50%) scale(1) rotate(10deg);
              filter: drop-shadow(0 0 12px #25d366) drop-shadow(0 0 24px #25d366) brightness(1.2);
            }
            35% {
              left: 35%;
              top: 50%;
              transform: translate(-50%, -50%) scale(1.1) rotate(20deg);
              opacity: 1;
              filter: drop-shadow(0 0 16px #25d366) drop-shadow(0 0 32px #25d366) brightness(1.5);
            }
            50% {
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%) scale(1) rotate(0deg);
              opacity: 1;
              filter: drop-shadow(0 0 14px #25d366) drop-shadow(0 0 28px #25d366) brightness(1.3);
            }
            75% {
              left: 65%;
              top: 82%;
              transform: translate(-50%, -50%) scale(1.1) rotate(-20deg);
              opacity: 1;
              filter: drop-shadow(0 0 20px #25d366) drop-shadow(0 0 40px #25d366) brightness(1.8);
            }
            90% {
              left: 50%;
              top: 82%;
              transform: translate(-50%, -50%) scale(0.8) rotate(-10deg);
              opacity: 0.8;
              filter: drop-shadow(0 0 16px #25d366) drop-shadow(0 0 32px #25d366) brightness(1.5);
            }
            100% {
              left: 50%;
              top: 82%;
              transform: translate(-50%, -50%) scale(0.3) rotate(0deg);
              opacity: 0;
              filter: drop-shadow(0 0 8px #25d366) drop-shadow(0 0 16px #25d366) brightness(1);
            }
          }
        }
      `}</style>
    </section>
  );
}
