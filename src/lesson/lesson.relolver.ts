import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LessonCreateInput } from './lesson-create.input';
import { LessonsService } from './lessons.service';
import { LessonType } from './lesson.type';

@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(private lessonsService: LessonsService) {}

  @Query((returns) => LessonType)
  lesson(@Args('id') id: string) {
    return this.lessonsService.getLesson(id);
  }

  @Query((returns) => [LessonType])
  lessons() {
    return this.lessonsService.getLessons();
  }

  @Mutation((returns) => LessonType)
  createLesson(
    @Args('lessonCreateInput') lessonCreateInput: LessonCreateInput,
  ) {
    return this.lessonsService.createLesson(lessonCreateInput);
  }
}
