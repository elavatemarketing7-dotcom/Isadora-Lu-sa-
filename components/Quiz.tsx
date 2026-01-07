
import React, { useState } from 'react';
import { QUIZ_QUESTIONS, IMAGES } from '../constants';
import { QuizAnswer } from '../types';

interface QuizProps {
  onComplete: (answers: QuizAnswer[]) => void;
  onGoBack: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onComplete, onGoBack }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);

  const handleOptionClick = (option: string) => {
    const newAnswers = [...answers, { question: QUIZ_QUESTIONS[currentStep].question, answer: option }];
    setAnswers(newAnswers);
    
    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  const progress = ((currentStep + 1) / QUIZ_QUESTIONS.length) * 100;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 overflow-hidden bg-black">
      {/* Background Image with Enhanced Visibility */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.hero} 
          alt="Background" 
          className="w-full h-full object-cover object-top opacity-70 scale-105 transition-transform duration-1000"
        />
        {/* Lighter Gradient Overlay to keep background apparent but text readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90 backdrop-blur-[2px]"></div>
      </div>

      {/* Hero Floating Photo - Centered Top */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
        <div className="w-20 h-20 rounded-full border-2 border-gold-500 p-0.5 bg-black/50 backdrop-blur-md shadow-[0_0_30px_rgba(212,175,55,0.6)] animate-float overflow-hidden">
          <img src={IMAGES.hero} alt="Dra. Isadora" className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="mt-3 text-center">
          <p className="text-[10px] font-playfair font-black uppercase tracking-[0.3em] text-white drop-shadow-lg">Dra. Isadora Luísa</p>
          <div className="h-[1px] w-8 bg-gold-500 mx-auto mt-1"></div>
        </div>
      </div>

      <div className="w-full max-w-sm pt-24 relative z-10">
        {/* Progress Bar - Compacted */}
        <div className="mb-8">
           <div className="flex justify-between items-end mb-2">
            <span className="text-[10px] font-black text-gold-400 uppercase tracking-widest drop-shadow-md">Etapa {currentStep + 1}/{QUIZ_QUESTIONS.length}</span>
            <span className="text-[10px] text-white/80 font-bold drop-shadow-md">{Math.round(progress)}%</span>
           </div>
           <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
             <div 
               className="h-full gold-gradient transition-all duration-700 ease-out shadow-[0_0_10px_rgba(212,175,55,0.5)]" 
               style={{ width: `${progress}%` }}
             ></div>
           </div>
        </div>

        <div className="transition-all duration-300 transform scale-100">
          <h2 className="text-2xl font-playfair font-bold text-white mb-8 leading-tight min-h-[4rem] text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            {QUIZ_QUESTIONS[currentStep].question}
          </h2>

          <div className="grid gap-3.5">
            {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionClick(option)}
                className="w-full py-4.5 px-6 text-left bg-black/40 border border-white/20 hover:border-gold-500 hover:bg-gold-500/20 text-white rounded-2xl shadow-2xl backdrop-blur-md transition-all duration-200 active:scale-95 group flex items-center justify-between"
              >
                <span className="text-[14px] font-semibold leading-snug group-hover:text-gold-200 pr-3 drop-shadow-md">{option}</span>
                <div className="w-5 h-5 rounded-full border-2 border-white/30 group-hover:border-gold-500 group-hover:bg-gold-500 transition-all flex-shrink-0 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </button>
            ))}
          </div>
        </div>
        
        <button 
          onClick={onGoBack}
          className="mt-10 text-[10px] text-white/50 hover:text-white uppercase tracking-[0.3em] font-black w-full text-center transition-colors py-3 backdrop-blur-sm bg-black/10 rounded-full"
        >
          ← Voltar ao início
        </button>
      </div>

      {/* Decorative Signature at the bottom */}
      <div className="absolute bottom-8 left-0 right-0 text-center opacity-30 z-10">
        <p className="font-signature text-2xl text-gold-500">Isadora Luísa</p>
      </div>
    </div>
  );
};

export default Quiz;
