export type ExcludeKeys<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
}