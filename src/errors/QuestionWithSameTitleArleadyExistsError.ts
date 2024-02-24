export class QuestionWithSameTitleArleadyExistsError extends Error {
  constructor() {
    super('Question com o mesmo titulo ja existe.')
  }
}