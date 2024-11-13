import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../../Application/Abstrations/UserRepository';
import { User } from '../../Domain/User';
import { Publisher } from 'src/Common/Abstrations/Messaging/Publisher';
import { UserRabbitMQPublisher_TOKEN } from '../Messaging/UserRabbitMQPublisher';

@Injectable()
export class UserSQLRepository implements UserRepository {
  constructor(
    @Inject(UserRabbitMQPublisher_TOKEN) private readonly publisher: Publisher,
  ) {}

  async insert(user: User): Promise<string> {
    await this.publisher.publish(user);
    return user.pid;
  }
}
