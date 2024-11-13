import { Module } from '@nestjs/common';
import { UserController } from './Presentation/UserController';
import { UserService } from './Presentation/UserService';
import { CreateUserCommandHandler } from './Application/Commands/CreateUser/CreateUserCommandHandler';
import { ChangeUsernameCommandHandler } from './Application/Commands/ChangeUsername/ChangeUsernameCommandHandler';
import { UserSQLRepository } from './Infrastructure/Database/UserSQLRepository';
import { USER_REPOSITORY_TOKEN } from './Application/Abstrations/UserRepository';
import {
  UserRabbitMQPublisher,
  UserRabbitMQPublisher_TOKEN,
} from './Infrastructure/Messaging/UserRabbitMQPublisher';

export const CommandHandlers = [
  CreateUserCommandHandler,
  ChangeUsernameCommandHandler,
];

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: USER_REPOSITORY_TOKEN,
      useClass: UserSQLRepository,
    },
    {
      provide: UserRabbitMQPublisher_TOKEN,
      useClass: UserRabbitMQPublisher,
    },
    UserService,
    ...CommandHandlers,
  ],
})
export class UsersModule {}
