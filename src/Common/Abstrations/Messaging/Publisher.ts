import { AggregateRoot } from '../Domain/AggregateRoot';

export interface Publisher {
  publish(event: AggregateRoot<unknown>): Promise<void>;
}
