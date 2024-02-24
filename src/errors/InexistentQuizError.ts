export class InexistentQuizError extends Error {
  constructor() {
    super("Nao existe este quiz.")
  }
}