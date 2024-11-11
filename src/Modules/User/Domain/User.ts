import { AggregateRoot } from '../../../Common/Abstrations/AggregateRoot';

interface UserModel {
  username: string;
  password: string;
}

export class User extends AggregateRoot<UserModel> {
  private constructor(props: UserModel, id?: string) {
    super(props, id);
    this.autoCommit = true;
  }

  static create(props: UserModel, id?: string): User {
    const user = new User(props, id);
    return user;
  }
}
