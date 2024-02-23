import { UUID } from "crypto";

export class Quiz {
  private _id: UUID
  private _sessionId: UUID
  private _username: string
  private _password: string
  private _createdAt?: Date
  private _updatedAt?: Date
  
  constructor(
    id: UUID, 
    sessionId: UUID, 
    username: string, 
    password: string, 
    createdAt: Date, 
    updatedAt: Date) {
      this._id = id
      this._sessionId = sessionId
      this._username = username
      this._password = password
      this._createdAt = createdAt
      this._updatedAt = updatedAt
  }
  
  public get id(): UUID {
    return this._id 
  }
  
  public get sessionId(): UUID {
    return this._sessionId
  }

  public get username(): string {
    return this._username
  }

  public get password(): string {
    return this._password
  }

  public get createdAt(): Date {
    return this._createdAt!
  }

  public get updatedAt(): Date {
    return this._updatedAt!
  }
  
  public set username(username: string) {
    this.username = username
  }

  public set password(password: string) {
    this.password = password
  }
  
}