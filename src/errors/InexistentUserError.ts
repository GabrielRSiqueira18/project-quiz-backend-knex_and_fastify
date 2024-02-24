export class InexistentUserError extends Error {
  constructor() {
    super("Nao existe este usuario.")
  }
}