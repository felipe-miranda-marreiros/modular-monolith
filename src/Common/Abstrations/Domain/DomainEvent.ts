import { v4 as uuidv4 } from 'uuid';

export interface DomainEventModel {
  id: string;
  occurredOn: number;
}

export abstract class DomainEvent {
  private _id: string;
  private _occurredOn: number;

  protected constructor(occurredOn?: number, id?: string) {
    this._id = id ?? uuidv4();
    this._occurredOn = occurredOn ?? Date.now();
  }

  get id() {
    return this._id;
  }

  get occurredOn() {
    return this._occurredOn;
  }
}
