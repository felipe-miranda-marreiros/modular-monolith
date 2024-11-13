import { Student } from '../../Domain/Student';

export interface StudentRepository {
  insert(student: Student): Promise<string>;
}

export const STUDENT_REPOSITORY_TOKEN = 'StudentRepository';
