
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
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl overflow-hidden">
      {/* Hero Floating Photo - Compacted */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
        <div className="w-16 h-16 rounded-full border-2 border-gold-500 p-0.5 bg-black shadow-[0_0_15px_rgba(212,175,55,0.2)] animate-float">
          <img src={IMAGES.hero} alt="Dra. Isadora" className="w-full h-full object-cover rounded-full" />
        </div>
        <p className="mt-2 text-[8px] font-playfair font-bold uppercase tracking-[0.2em] text-gold-400">Dra. Isadora Luísa</p>
      </div>

      <div className="w-full max-w-sm pt-20">
        {/* Progress Bar - Compacted */}
        <div className="mb-6">
           <div className="flex justify-between items-end mb-2">
            <span className="text-[9px] font-bold text-gold-500 uppercase tracking-widest">Etapa {currentStep + 1}/{QUIZ_QUESTIONS.length}</span>
            <span className="text-[9px] text-gray-500 font-bold">{Math.round(progress)}%</span>
           </div>
           <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
             <div 
               className="h-full gold-gradient transition-all duration-700 ease-out" 
               style={{ width: `${progress}%` }}
             ></div>
           </div>
        </div>

        <div className="transition-all duration-300 transform scale-100">
          <h2 className="text-xl font-playfair font-bold text-white mb-6 leading-tight min-h-[3rem]">
            {QUIZ_QUESTIONS[currentStep].question}
          </h2>

          <div className="grid gap-3">
            {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionClick(option)}
                className="w-full py-4 px-5 text-left bg-white/5 border border-white/10 hover:border-gold-500/50 hover:bg-gold-500/5 text-gray-200 rounded-xl shadow-sm transition-all duration-200 active:scale-95 group flex items-center justify-between"
              >
                <span className="text-[13px] font-medium leading-snug group-hover:text-gold-200 pr-2">{option}</span>
                <div className="w-4 h-4 rounded-full border border-white/20 group-hover:border-gold-500 group-hover:bg-gold-500 transition-all flex-shrink-0"></div>
              </button>
            ))}
          </div>
        </div>
        
        <button 
          onClick={onGoBack}
          className="mt-8 text-[9px] text-gray-500 hover:text-white uppercase tracking-widest font-bold w-full text-center transition-colors py-2"
        >
          Voltar ao início
        </button>
      </div>
    </div>
  );
};

export default Quiz;
