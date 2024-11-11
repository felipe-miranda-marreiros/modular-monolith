import { Module } from '@nestjs/common';
import { UserController } from './Presentation/UserController';
import { UserService } from './Presentation/UserService';
import { CreateUserCommandHandler } from './Application/Commands/CreateUser/CreateUserCommandHandler';
import { ChangeUsernameCommandHandler } from './Application/Commands/ChangeUsername/ChangeUsernameCommandHandler';
import { UserCreatedDomainEventHandler } from './Application/Events/UserCreatedDomainEventHandler';
import { UserChangedUsernameDomainEventHandler } from './Application/Events/UserChangedUsernameDomainEventHandler';
import { UserSQLRepository } from './Infrastructure/UserSQLRepository';

export const CommandHandlers = [
  CreateUserCommandHandler,
  ChangeUsernameCommandHandler,
];

export const EventHandlers = [
  UserCreatedDomainEventHandler,
  UserChangedUsernameDomainEventHandler,
];

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    ...CommandHandlers,
    ...EventHandlers,
    UserSQLRepository,
  ],
})
export class UsersModule {}
