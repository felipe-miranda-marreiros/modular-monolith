import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from './CreateUserCommand';
import { User } from '../../../Domain/User';
import { UserSQLRepository } from 'src/Modules/User/Infrastructure/UserSQLRepository';
import { UserCreatedDomainEvent } from 'src/Modules/User/Domain/UserCreatedDomainEvent';

@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler
  implements ICommandHandler<CreateUserCommand>
{
  constructor(
    private readonly repository: UserSQLRepository,
    private readonly eventBus: EventBus,
  ) {}

  async execute(command: CreateUserCommand): Promise<string> {
    const user = User.create(command);
    const userId = await this.repository.insert(user);
    this.eventBus.publish(new UserCreatedDomainEvent(userId));
    return userId;
  }
}
