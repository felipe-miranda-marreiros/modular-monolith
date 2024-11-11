import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { UserCreatedDomainEvent } from '../../Domain/UserCreatedDomainEvent';

@EventsHandler(UserCreatedDomainEvent)
export class UserCreatedDomainEventHandler
  implements IEventHandler<UserCreatedDomainEvent>
{
  handle(event: UserCreatedDomainEvent) {
    console.log(`User created: ${event.userId}`);
  }
}
