import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateUserCommand } from '../Application/Commands/CreateUser/CreateUserCommand';

@Injectable()
export class UserService {
  constructor(private readonly commandBus: CommandBus) {}

  async create(username: string, password: string) {
    return this.commandBus.execute(new CreateUserCommand(username, password));
  }
}
