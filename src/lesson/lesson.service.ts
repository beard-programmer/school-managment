import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LessonEntity } from './lesson.entitiy';
import { v4 as uuid } from 'uuid';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(LessonEntity)
    private lessonRepository: Repository<LessonEntity>,
  ) {}

  async createLesson(name, startDate, endDate): Promise<LessonEntity> {
    const lesson = this.lessonRepository.create({
      id: uuid(),
      name: name,
      startDate: startDate,
      endDate: endDate,
    });

    return this.lessonRepository.save(lesson);
  }
}
