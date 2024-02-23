export class UserWithSameUsernameArleadyExistsError extends Error {
  constructor() {
    super("User com o mesmo username ja existe.")
  }
}