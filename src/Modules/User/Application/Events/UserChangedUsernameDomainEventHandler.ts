import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { UserChangedUsernameDomainEvent } from '../../Domain/UserChangedEmailDomainEvent';

@EventsHandler(UserChangedUsernameDomainEvent)
export class UserChangedUsernameDomainEventHandler
  implements IEventHandler<UserChangedUsernameDomainEvent>
{
  handle(event: UserChangedUsernameDomainEvent) {
    console.log(`Username changed: ${event.id}`);
  }
}
