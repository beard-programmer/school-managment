import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonEntity } from './lesson.entitiy';
import { LessonResolver } from './lesson.relolver';
import { LessonService } from './lesson.service';

@Module({
  imports: [TypeOrmModule.forFeature([LessonEntity])],
  providers: [LessonResolver, LessonService],
})
export class LessonModule {}
