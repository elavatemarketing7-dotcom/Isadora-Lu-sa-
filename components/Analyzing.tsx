
import React from 'react';

const Analyzing: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[120] flex flex-col items-center justify-center p-8 bg-black">
      <div className="w-full max-w-xs space-y-8 text-center">
        <div className="relative">
          <div className="w-20 h-20 border-[3px] border-gold-900 border-t-gold-400 rounded-full animate-spin mx-auto"></div>
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-2 h-2 bg-gold-500 rounded-full animate-ping"></div>
          </div>
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl font-playfair font-bold text-white tracking-wide">Analisando Perfil...</h2>
          <p className="text-[11px] text-gray-500 uppercase tracking-widest font-semibold">Cruzando dados com o Método Isadora Luísa</p>
        </div>
        <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
          <div className="h-full gold-gradient animate-[loading_3s_ease-in-out]"></div>
        </div>
      </div>
      <style>{`
        @keyframes loading {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default Analyzing;
