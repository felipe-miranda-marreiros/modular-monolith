import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from './CreateUserCommand';
import { User } from '../../../Domain/User';
import { Inject } from '@nestjs/common';
import {
  USER_REPOSITORY_TOKEN,
  UserRepository,
} from '../../Abstrations/UserRepository';
import { UserCreatedDomainEvent } from 'src/Modules/User/Domain/UserCreatedDomainEvent';

@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler
  implements ICommandHandler<CreateUserCommand>
{
  constructor(
    @Inject(USER_REPOSITORY_TOKEN)
    private readonly repository: UserRepository,
  ) {}

  async execute(command: CreateUserCommand): Promise<string> {
    const user = User.create(command);
    user.addEvent(new UserCreatedDomainEvent(user.pid));
    const userId = await this.repository.insert(user);
    return userId;
  }
}
