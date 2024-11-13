import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { User } from '../../../Domain/User';
import { ChangeUsernameCommand } from './ChangeUsernameCommand';
import { Inject } from '@nestjs/common';
import {
  USER_REPOSITORY_TOKEN,
  UserRepository,
} from '../../Abstrations/UserRepository';

@CommandHandler(ChangeUsernameCommand)
export class ChangeUsernameCommandHandler
  implements ICommandHandler<ChangeUsernameCommand>
{
  constructor(
    @Inject(USER_REPOSITORY_TOKEN)
    private readonly repository: UserRepository,
  ) {}

  async execute(command: ChangeUsernameCommand): Promise<string> {
    const user = User.create({
      password: '123',
      username: 'username',
    });
    user.changeUsername(command.username);
    const userId = await this.repository.insert(user);
    return userId;
  }
}
