import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LessonCreateInput } from './lesson-create.input';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';

@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}

  @Query((returns) => LessonType)
  lesson(@Args('id') id: string) {
    return this.lessonService.getLesson(id);
  }

  @Query((returns) => [LessonType])
  lessons() {
    return this.lessonService.getLessons();
  }

  @Mutation((returns) => LessonType)
  createLesson(
    @Args('lessonCreateInput') lessonCreateInput: LessonCreateInput,
  ) {
    return this.lessonService.createLesson(lessonCreateInput);
  }
}
