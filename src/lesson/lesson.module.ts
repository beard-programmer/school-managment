import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonEntity } from './lesson.entitiy';
import { LessonResolver } from './lesson.relolver';
import { LessonsService } from './lessons.service';

@Module({
  imports: [TypeOrmModule.forFeature([LessonEntity])],
  providers: [LessonResolver, LessonsService],
})
export class LessonModule {}
