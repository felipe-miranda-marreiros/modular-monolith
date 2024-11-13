import { DomainEvent } from './DomainEvent';
import { Entity } from './Entity';

export abstract class AggregateRoot<T> extends Entity<T> {
  private domainEvents: DomainEvent[] = [];

  protected constructor(props: T, pid?: string) {
    super(props, pid);
  }

  addEvent(event: DomainEvent) {
    this.domainEvents.push(event);
  }

  clearEvents() {
    this.domainEvents = [];
  }

  getEvents(): DomainEvent[] {
    return this.domainEvents;
  }
}
