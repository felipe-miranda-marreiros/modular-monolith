import { AggregateRoot } from '../../../Common/Abstrations/Domain/AggregateRoot';
import { UserChangedUsernameDomainEvent } from './UserChangedEmailDomainEvent';

interface UserModel {
  username: string;
  password: string;
}

export class User extends AggregateRoot<UserModel> {
  private constructor(props: UserModel, id?: string) {
    super(props, id);
  }

  static create(props: UserModel, id?: string): User {
    const user = new User(props, id);
    return user;
  }

  changeUsername(email: string) {
    this.props.username = email;
    this.addEvent(new UserChangedUsernameDomainEvent(this.pid, this.pid));
  }
}
