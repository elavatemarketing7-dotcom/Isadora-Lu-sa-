
import React, { useState, useEffect } from 'react';
import { ViewState, QuizAnswer } from './types';
import InitialOverlay from './components/InitialOverlay';
import Quiz from './components/Quiz';
import Analyzing from './components/Analyzing';
import ResultPage from './components/ResultPage';
import MainSite from './components/MainSite';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>(ViewState.INITIAL);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);

  // Smooth scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  const handleStartQuiz = () => setView(ViewState.QUIZ);
  const handleGoToSite = () => setView(ViewState.MAIN_SITE);
  
  const handleQuizComplete = (quizAnswers: QuizAnswer[]) => {
    setAnswers(quizAnswers);
    setView(ViewState.ANALYZING);
    setTimeout(() => {
      setView(ViewState.RESULT);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-gold-500/30 overflow-x-hidden">
      {view === ViewState.INITIAL && (
        <InitialOverlay onStartQuiz={handleStartQuiz} onGoToSite={handleGoToSite} />
      )}
      
      {view === ViewState.QUIZ && (
        <div className="relative z-50">
           <Quiz onComplete={handleQuizComplete} onGoBack={() => setView(ViewState.INITIAL)} />
        </div>
      )}

      {view === ViewState.ANALYZING && <Analyzing />}

      {view === ViewState.RESULT && (
        <ResultPage 
          answers={answers} 
          onContinue={handleGoToSite} 
        />
      )}

      {view === ViewState.MAIN_SITE && <MainSite />}
    </div>
  );
};

export default App;
