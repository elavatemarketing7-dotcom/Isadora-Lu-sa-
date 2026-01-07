
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
      {/* Background Image - EXTREMELY APPARENT as requested */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.hero} 
          alt="Background" 
          className="w-full h-full object-cover object-top opacity-85 scale-100 transition-transform duration-1000"
        />
        {/* Very subtle vignette to maintain text readability without hiding the background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80 backdrop-blur-[1px]"></div>
      </div>

      {/* Hero Floating Photo - Centered Top */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
        <div className="w-20 h-20 rounded-full border-2 border-gold-500 p-0.5 bg-black/50 backdrop-blur-md shadow-[0_0_30px_rgba(212,175,55,0.8)] animate-float overflow-hidden">
          <img src={IMAGES.hero} alt="Dra. Isadora" className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="mt-3 text-center">
          <p className="text-[10px] font-playfair font-black uppercase tracking-[0.3em] text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">Dra. Isadora Luísa</p>
          <div className="h-[1px] w-8 bg-gold-500 mx-auto mt-1 shadow-lg"></div>
        </div>
      </div>

      <div className="w-full max-w-sm pt-24 relative z-10">
        {/* Progress Bar - Compacted */}
        <div className="mb-8">
           <div className="flex justify-between items-end mb-2">
            <span className="text-[10px] font-black text-white uppercase tracking-widest drop-shadow-[0_2px_4px_rgba(0,0,0,1)] bg-gold-600/50 px-2 py-0.5 rounded">Etapa {currentStep + 1}/{QUIZ_QUESTIONS.length}</span>
            <span className="text-[10px] text-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">{Math.round(progress)}%</span>
           </div>
           <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
             <div 
               className="h-full gold-gradient transition-all duration-700 ease-out shadow-[0_0_15px_rgba(212,175,55,1)]" 
               style={{ width: `${progress}%` }}
             ></div>
           </div>
        </div>

        <div className="transition-all duration-300 transform scale-100">
          <h2 className="text-2xl font-playfair font-bold text-white mb-8 leading-tight min-h-[4rem] text-center drop-shadow-[0_3px_6px_rgba(0,0,0,1)]">
            {QUIZ_QUESTIONS[currentStep].question}
          </h2>

          <div className="grid gap-3.5">
            {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionClick(option)}
                className="w-full py-4.5 px-6 text-left bg-black/60 border-2 border-white/30 hover:border-gold-500 hover:bg-gold-500/30 text-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-200 active:scale-95 group flex items-center justify-between"
              >
                <span className="text-[14px] font-bold leading-snug group-hover:text-gold-200 pr-3 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">{option}</span>
                <div className="w-5 h-5 rounded-full border-2 border-white/50 group-hover:border-gold-500 group-hover:bg-gold-500 transition-all flex-shrink-0 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </button>
            ))}
          </div>
        </div>
        
        <button 
          onClick={onGoBack}
          className="mt-10 text-[10px] text-white font-black uppercase tracking-[0.3em] w-full text-center transition-colors py-3 backdrop-blur-md bg-black/60 border border-white/10 rounded-full shadow-lg"
        >
          ← Voltar ao início
        </button>
      </div>

      {/* Decorative Signature at the bottom */}
      <div className="absolute bottom-8 left-0 right-0 text-center opacity-50 z-10">
        <p className="font-signature text-3xl text-gold-500 drop-shadow-lg">Isadora Luísa</p>
      </div>
    </div>
  );
};

export default Quiz;
