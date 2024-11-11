import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from './CreateUserCommand';
import { User } from '../../../Domain/User';
import { UserCreatedDomainEvent } from 'src/Modules/User/Domain/UserCreatedDomainEvent';
import { Inject } from '@nestjs/common';
import {
  USER_REPOSITORY_TOKEN,
  UserRepository,
} from '../../Abstrations/UserRepository';

@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler
  implements ICommandHandler<CreateUserCommand>
{
  constructor(
    @Inject(USER_REPOSITORY_TOKEN)
    private readonly repository: UserRepository,
    private readonly eventBus: EventBus,
  ) {}

  async execute(command: CreateUserCommand): Promise<string> {
    const user = User.create(command);
    const userId = await this.repository.insert(user);
    this.eventBus.publish(new UserCreatedDomainEvent(userId));
    return userId;
  }
}
