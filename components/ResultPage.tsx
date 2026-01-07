
import React from 'react';
import { IMAGES, WHATSAPP_URL } from '../constants';
import { QuizAnswer } from '../types';

interface ResultPageProps {
  answers: QuizAnswer[];
  onContinue: () => void;
}

const ResultPage: React.FC<ResultPageProps> = ({ answers, onContinue }) => {
  const generateWaLink = (withAnswers: boolean) => {
    if (!withAnswers) return WHATSAPP_URL;
    
    const introText = "Olá Dra. Isadora! Finalizei meu quiz de avaliação e gostaria de conversar sobre meu caso. Aqui estão minhas respostas:\n\n";
    const answersText = answers.map(a => `*${a.question}*\nR: ${a.answer}`).join('\n\n');
    const fullText = encodeURIComponent(introText + answersText);
    
    // Tenta usar a API de URL para segurança, caso falhe, concatena manualmente
    try {
      const url = new URL(WHATSAPP_URL);
      url.searchParams.set('text', introText + answersText);
      return url.toString();
    } catch (e) {
      // Fallback robusto para concatenação manual se a URL base for complexa
      return `${WHATSAPP_URL}&text=${fullText}`;
    }
  };

  return (
    <div className="fixed inset-0 z-[130] bg-black flex flex-col overflow-y-auto animate-[fadeIn_0.5s_ease-out]">
      {/* Background Glow suave para profundidade */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[40vh] bg-gold-900/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="flex-1 w-full max-w-md mx-auto relative px-6 py-6 flex flex-col items-center justify-center text-center">
        
        {/* Header Badge Compacto */}
        <div className="bg-gold-500/10 text-gold-400 px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-[0.2em] mb-4 border border-gold-500/20">
          Perfil Compatível • Paciente Ideal
        </div>

        {/* Hero Frame Compacto */}
        <div className="relative mb-6 w-full flex justify-center">
           <div className="relative aspect-[4/5] w-48 overflow-hidden rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.6)] border-[2px] border-gold-500/30 transform transition-transform hover:scale-105">
             <img src={IMAGES.hero} alt="Dra Isadora" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
           </div>
           
           {/* Check Icon Compacto */}
           <div className="absolute -bottom-3 bg-gold-500 w-10 h-10 rounded-full border-[3px] border-black flex items-center justify-center text-black shadow-lg z-20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
              </svg>
           </div>
        </div>

        {/* Copy Compacto */}
        <div className="space-y-2 mb-6">
          <h2 className="text-xl font-playfair font-bold text-white leading-tight">
            Você está pronta para a <span className="text-gold-400">Naturalidade HD.</span>
          </h2>
          <p className="text-gray-400 text-xs leading-relaxed max-w-[260px] mx-auto">
            O Método Isadora Luísa consegue entregar exatamente a segurança que você procura.
          </p>
        </div>

        {/* Buttons Group Compacto */}
        <div className="w-full space-y-2.5 relative z-[150]">
          <a 
            href={generateWaLink(true)}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-[160] pointer-events-auto flex items-center justify-center w-full py-4 px-6 gold-gradient text-black rounded-xl font-black shadow-[0_8px_20px_rgba(212,175,55,0.3)] btn-pulse active:scale-95 transition-all text-[11px] uppercase tracking-widest cursor-pointer no-underline text-center"
          >
            1. Enviar minha avaliação à Dra.
          </a>
          
          <a 
            href={generateWaLink(false)}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-[160] pointer-events-auto flex items-center justify-center w-full py-3.5 px-6 bg-white/5 border border-white/10 text-white rounded-xl font-bold active:scale-95 transition-all text-[11px] uppercase tracking-widest cursor-pointer no-underline text-center"
          >
            2. Chamar no WhatsApp agora
          </a>

          <button 
            onClick={onContinue}
            className="relative z-[160] pointer-events-auto text-[9px] text-gray-500 hover:text-gray-300 uppercase tracking-[0.2em] font-bold py-2 transition-colors w-full cursor-pointer"
          >
            3. Continuar no site
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
