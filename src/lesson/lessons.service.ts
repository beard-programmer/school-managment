import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LessonEntity } from './lesson.entitiy';
import { v4 as uuid } from 'uuid';
import { LessonCreateInput } from './lesson-create.input';

@Injectable()
export class LessonsService {
  constructor(
    @InjectRepository(LessonEntity)
    private lessonsRepository: Repository<LessonEntity>,
  ) {}

  async getLesson(id: string): Promise<LessonEntity> {
    return this.lessonsRepository.findOne({ id: id });
  }

  async getLessons(): Promise<LessonEntity[]> {
    return this.lessonsRepository.find();
  }

  async createLesson(
    lessonCreateInput: LessonCreateInput,
  ): Promise<LessonEntity> {
    const { name, startDate, endDate, students } = lessonCreateInput;
    const lesson = this.lessonsRepository.create({
      id: uuid(),
      name: name,
      startDate: startDate,
      endDate: endDate,
      students: students,
    });

    return this.lessonsRepository.save(lesson);
  }

  async assignStudentsToLesson(
    lessonId: string,
    studentIds: string[],
  ): Promise<LessonEntity> {
    const lesson = await this.lessonsRepository.findOne({ id: lessonId });
    lesson.students = [...lesson.students, ...studentIds];
    return this.lessonsRepository.save(lesson);
  }
}
