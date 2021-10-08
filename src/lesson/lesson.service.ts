import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LessonEntity } from './lesson.entitiy';
import { v4 as uuid } from 'uuid';
import { LessonCreateInput } from './lesson-create.input';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(LessonEntity)
    private lessonRepository: Repository<LessonEntity>,
  ) {}

  async getLesson(id: string): Promise<LessonEntity> {
    return this.lessonRepository.findOne({ id: id });
  }

  async getLessons(): Promise<LessonEntity[]> {
    return this.lessonRepository.find();
  }

  async createLesson(
    lessonCreateInput: LessonCreateInput,
  ): Promise<LessonEntity> {
    const { name, startDate, endDate } = lessonCreateInput;
    const lesson = this.lessonRepository.create({
      id: uuid(),
      name: name,
      startDate: startDate,
      endDate: endDate,
    });

    return this.lessonRepository.save(lesson);
  }
}
