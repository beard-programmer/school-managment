import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentCreateInput } from './student-create.input';
import { StudentEntity } from './student.entity';
import { v4 as uuid } from 'uuid';
@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(StudentEntity)
    private studentsRepository: Repository<StudentEntity>,
  ) {}

  async getStudents(): Promise<StudentEntity[]> {
    return this.studentsRepository.find();
  }

  async createStudent(
    studentCreateInput: StudentCreateInput,
  ): Promise<StudentEntity> {
    return this.studentsRepository.save(
      this.studentsRepository.create({
        name: studentCreateInput.name,
        id: uuid(),
      }),
    );
  }
}
