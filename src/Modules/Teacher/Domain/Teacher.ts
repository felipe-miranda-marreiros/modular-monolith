import { AggregateRoot } from 'src/Common/Abstrations/Domain/AggregateRoot';

export interface TeacherModel {
  userId: string;
  name: string;
  birthdate: string;
}

export class Teacher extends AggregateRoot<TeacherModel> {
  private constructor(props: TeacherModel, id?: string) {
    super(props, id);
  }

  static create(props: TeacherModel, id?: string): Teacher {
    return new Teacher(props, id);
  }
}
