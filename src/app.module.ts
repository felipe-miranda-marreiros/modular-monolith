import { Module } from '@nestjs/common';
import { UserController } from './Modules/User/Presentation/UserController';
import { UserService } from './Modules/User/Presentation/UserService';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateUserCommandHandler } from './Modules/User/Application/Commands/CreateUser/CreateUserCommandHandler';
import { UserSQLRepository } from './Modules/User/Infrastructure/UserSQLRepository';
import { UserCreatedDomainEventHandler } from './Modules/User/Application/Events/UserCreatedDomainEventHandler';

export const CommandHandlers = [CreateUserCommandHandler];
export const EventHandlers = [UserCreatedDomainEventHandler];

@Module({
  imports: [CqrsModule],
  controllers: [UserController],
  providers: [
    UserService,
    ...CommandHandlers,
    ...EventHandlers,
    UserSQLRepository,
  ],
})
export class AppModule {}
