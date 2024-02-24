export class QuizWithSameTitleArleadyExistsError extends Error {
  constructor() {
    super('Quiz com o mesmo titulo ja existe.')
  }
}