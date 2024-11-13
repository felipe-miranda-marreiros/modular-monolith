import { DomainEvent } from '../../../Common/Abstrations/Domain/DomainEvent';

export class UserCreatedDomainEvent extends DomainEvent {
  constructor(
    private readonly userId: string,
    aggregateId: string,
  ) {
    super(aggregateId, 'user_created');
  }
}
