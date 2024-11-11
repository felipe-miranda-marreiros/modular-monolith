import { User } from '../../Domain/User';

export abstract class UserRepository {
  abstract insert(user: User): Promise<string>;
}
