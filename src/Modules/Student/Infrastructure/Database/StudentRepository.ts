import { StudentRepository } from '../../Application/Abstrations/StudentRepositoy';
import { Student } from '../../Domain/Student';

export class StudentSQLRepository implements StudentRepository {
  async insert(student: Student): Promise<string> {
    console.log(student.values);
    return student.pid;
  }
}
