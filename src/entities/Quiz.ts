import { UUID } from "crypto";

export class Quiz {
  private _id: UUID
  private _userId: UUID
  private _title: string
  private _description: string
  private _type: string
  private _createdAt?: Date
  private _updatedAt?: Date
  
  constructor(
    id: UUID, 
    userId: UUID, 
    title: string, 
    description: string, 
    type: string,
    createdAt: Date, 
    updatedAt: Date) {
      this._id = id
      this._userId = userId
      this._title = title
      this._description = description
      this._type = type
      this._createdAt = createdAt
      this._updatedAt = updatedAt
  }
  
  public get id(): UUID {
    return this._id 
  }
  
  public get userId(): UUID {
    return this._userId
  }

  public get title(): string {
    return this._title
  }

  public get description(): string {
    return this._description
  }

  public get type(): string {
    return this._type
  }

  public get createdAt(): Date {
    return this._createdAt!
  }

  public get updatedAt(): Date {
    return this._updatedAt!
  }
  
  public set title(title: string) {
    this._title = title
  }

  public set description(description: string) {
    this._description = description
  }

  public set type(type: string) {
    this._type = type
  }
  
}