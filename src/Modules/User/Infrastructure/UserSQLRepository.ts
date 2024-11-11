import { Injectable } from '@nestjs/common';
import { UserRepository } from '../Application/Abstrations/UserRepository';
import { User } from '../Domain/User';

@Injectable()
export class UserSQLRepository implements UserRepository {
  async insert(user: User): Promise<string> {
    console.log(user.values.username);
    return user.pid;
  }
}
