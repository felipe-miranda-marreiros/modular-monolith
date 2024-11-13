import { Consumer } from 'src/Common/Abstrations/Messaging/Consumer';
import { Student } from '../Domain/Student';
import { DomainEventModel } from 'src/Common/Abstrations/Domain/DomainEvent';
import { StudentSQLRepository } from '../Infrastructure/Database/StudentRepository';

interface UserCreatedDomainEvent extends DomainEventModel {
  _userId: string;
}

class UserCreatedDomainEventConsumer
  implements Consumer<UserCreatedDomainEvent>
{
  constructor(private readonly studentRepository: StudentSQLRepository) {}

  async consume(event: UserCreatedDomainEvent): Promise<void> {
    const student = Student.create({
      birthdate: 'any',
      name: 'any',
      userId: event._userId,
    });
    await this.studentRepository.insert(student);
  }
}

export const userCreatedDomainEventConsumer =
  new UserCreatedDomainEventConsumer(new StudentSQLRepository());
