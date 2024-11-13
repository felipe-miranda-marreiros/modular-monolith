import { AggregateRoot } from 'src/Common/Abstrations/Domain/AggregateRoot';

export interface StudentModel {
  userId: string;
  name: string;
  birthdate: string;
}

export class Student extends AggregateRoot<StudentModel> {
  private constructor(props: StudentModel, id?: string) {
    super(props, id);
  }

  static create(props: StudentModel, id?: string): Student {
    return new Student(props, id);
  }
}
