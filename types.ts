
export enum ViewState {
  INITIAL = 'INITIAL',
  QUIZ = 'QUIZ',
  ANALYZING = 'ANALYZING',
  RESULT = 'RESULT',
  MAIN_SITE = 'MAIN_SITE'
}

export interface QuizAnswer {
  question: string;
  answer: string;
}
