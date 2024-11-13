import { v4 as uuidv4 } from 'uuid';

export interface DomainEventModel {
  id: string;
  occurredOn: number;
  aggregateId: string;
  eventName: string;
}

export abstract class DomainEvent {
  private id: string;
  private occurredOn: number;
  private aggregateId: string;
  private eventName: string;

  protected constructor(
    aggregateId: string,
    eventName: string,
    occurredOn?: number,
    id?: string,
  ) {
    this.id = id ?? uuidv4();
    this.occurredOn = occurredOn ?? Date.now();
    this.aggregateId = aggregateId;
    this.eventName = eventName;
  }
}
