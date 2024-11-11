import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateUserCommand } from '../Application/Commands/CreateUser/CreateUserCommand';
import { ChangeUsernameCommand } from '../Application/Commands/ChangeUsername/ChangeUsernameCommand';

@Injectable()
export class UserService {
  constructor(private readonly commandBus: CommandBus) {}

  async create(username: string, password: string) {
    return this.commandBus.execute(new CreateUserCommand(username, password));
  }

  async changeEmail(username: string) {
    return this.commandBus.execute(new ChangeUsernameCommand(username));
  }
}
