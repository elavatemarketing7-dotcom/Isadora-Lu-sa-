
import React from 'react';
import { IMAGES } from '../constants';

const Analyzing: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[120] flex flex-col items-center justify-center p-8 bg-black overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.hero} 
          alt="Background" 
          className="w-full h-full object-cover object-top opacity-50 scale-105"
        />
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md"></div>
      </div>

      <div className="w-full max-w-xs space-y-8 text-center relative z-10">
        <div className="relative">
          <div className="w-20 h-20 border-[3px] border-gold-900 border-t-gold-400 rounded-full animate-spin mx-auto"></div>
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-2 h-2 bg-gold-500 rounded-full animate-ping"></div>
          </div>
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl font-playfair font-bold text-white tracking-wide drop-shadow-lg">Analisando Perfil...</h2>
          <p className="text-[11px] text-gray-400 uppercase tracking-widest font-bold">Cruzando dados com o Método Isadora Luísa</p>
        </div>
        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
          <div className="h-full gold-gradient animate-[loading_3s_ease-in-out] shadow-[0_0_15px_rgba(212,175,55,0.5)]"></div>
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
