import { User } from '../../Domain/User';

export interface UserRepository {
  insert(user: User): Promise<string>;
}

export const USER_REPOSITORY_TOKEN = 'UserRepository';
