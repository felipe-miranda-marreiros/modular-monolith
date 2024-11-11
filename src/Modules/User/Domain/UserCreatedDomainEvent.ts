import { DomainEvent } from '../../../Common/Abstrations/DomainEvent';

export class UserCreatedDomainEvent extends DomainEvent {
  constructor(private readonly _userId: string) {
    super();
  }

  get userId(): string {
    return this._userId;
  }
}