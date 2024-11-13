import { DomainEvent } from '../../../Common/Abstrations/Domain/DomainEvent';

export class UserChangedUsernameDomainEvent extends DomainEvent {
  constructor(
    private readonly userId: string,
    aggregateId: string,
  ) {
    super(aggregateId, 'user_changed_username');
  }
}
