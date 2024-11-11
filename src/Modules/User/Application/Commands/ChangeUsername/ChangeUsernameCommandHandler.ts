import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { User } from '../../../Domain/User';
import { UserSQLRepository } from 'src/Modules/User/Infrastructure/UserSQLRepository';
import { ChangeUsernameCommand } from './ChangeUsernameCommand';

@CommandHandler(ChangeUsernameCommand)
export class ChangeUsernameCommandHandler
  implements ICommandHandler<ChangeUsernameCommand>
{
  constructor(
    private readonly repository: UserSQLRepository,
    private readonly eventPublisher: EventPublisher,
  ) {}

  async execute(command: ChangeUsernameCommand): Promise<string> {
    const user = this.eventPublisher.mergeObjectContext(
      User.create({
        password: '123',
        username: 'username',
      }),
    );
    user.changeUsername(command.username);
    const userId = await this.repository.insert(user);
    return userId;
  }
}
