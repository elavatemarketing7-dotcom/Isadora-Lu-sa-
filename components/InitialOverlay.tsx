
import React from 'react';
import { IMAGES, WHATSAPP_URL } from '../constants';

interface InitialOverlayProps {
  onStartQuiz: () => void;
  onGoToSite: () => void;
}

const InitialOverlay: React.FC<InitialOverlayProps> = ({ onStartQuiz, onGoToSite }) => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-6 bg-black overflow-hidden">
      {/* Background Image - Enhanced Visibility */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.hero} 
          alt="Background" 
          className="w-full h-full object-cover object-top opacity-80 scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90 backdrop-blur-[1px]"></div>
      </div>

      <div className="max-w-md w-full space-y-8 text-center relative z-10">
        <div className="relative w-32 h-32 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full border-2 border-gold-500 animate-pulse shadow-[0_0_20px_rgba(212,175,55,0.6)]"></div>
          <img 
            src={IMAGES.hero} 
            alt="Dra Isadora Luísa" 
            className="w-full h-full object-cover rounded-full border-4 border-gold-500 shadow-2xl"
          />
        </div>
        
        <div className="space-y-3">
          <h1 className="text-3xl font-playfair font-bold text-white leading-tight drop-shadow-[0_4px_8px_rgba(0,0,0,1)]">
            Bem-vinda ao Universo <br /><span className="text-gold-400">Dra. Isadora Luísa</span>
          </h1>
          <p className="text-white leading-relaxed text-sm font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,1)] bg-black/20 backdrop-blur-sm rounded-lg py-2">
            Sua jornada de transformação começa agora. <br />Como você prefere iniciar?
          </p>
        </div>

        <div className="space-y-4 pt-4">
          <button 
            onClick={onStartQuiz}
            className="w-full py-5 px-8 gold-gradient text-black rounded-2xl font-black shadow-[0_10px_40px_rgba(212,175,55,0.5)] transition-all transform active:scale-95 flex flex-col items-center btn-pulse"
          >
            <span className="text-lg uppercase tracking-wider">Fazer Avaliação On-line</span>
            <span className="text-[10px] font-bold opacity-80 mt-1 uppercase tracking-widest">Quiz de Perfil Exclusivo</span>
          </button>

          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full py-5 px-8 bg-black/80 backdrop-blur-md border-2 border-white/30 text-white rounded-2xl font-black transition-all transform active:scale-95 gap-3 shadow-2xl"
          >
            <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.025 3.012l-.582 2.128 2.183-.573c.678.368 1.588.604 2.142.604 3.182 0 5.767-2.586 5.768-5.766 0-3.18-2.586-5.766-5.768-5.766zm3.446 8.212c-.149.42-.743.764-1.237.814-.347.035-.794.057-1.282-.1-.21-.067-.433-.146-.666-.245-1.996-.838-3.276-2.88-3.375-3.01-.1-.133-.733-.972-.733-1.854 0-.882.467-1.316.633-1.483.167-.167.366-.21.483-.21.117 0 .234 0 .334.004.106.003.249-.04.39.297.149.357.51.1.51 1.245 0 .117-.058.234-.117.334-.058.1-.117.167-.167.234-.05.067-.1.117-.117.167.117.2.234.4.417.6.284.284.534.467.784.6.25.133.467.2.667.25.2.05.384.034.534.017.15-.017.467-.184.534-.367.066-.183.066-.334.05-.367-.017-.033-.067-.05-.15-.1zM12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.247-.926-3.468.003-3.825 3.113-6.937 6.937-6.937 1.856 0 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.003 3.825-3.113 6.938-6.937 6.938z"/></svg>
            AGENDAR VIA WHATSAPP
          </a>

          <button 
            onClick={onGoToSite}
            className="w-full py-4 text-[12px] text-white/70 hover:text-white uppercase tracking-[0.3em] font-black transition-all bg-black/40 backdrop-blur-sm rounded-xl border border-white/10"
          >
            Acessar Site Direto
          </button>
        </div>
      </div>
    </div>
  );
};

export default InitialOverlay;
