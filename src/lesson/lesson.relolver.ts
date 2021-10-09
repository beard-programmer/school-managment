import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { LessonCreateInput } from './lesson-create.input';
import { LessonsService } from './lessons.service';
import { LessonType } from './lesson.type';
import { AssignStudentsToLessonInput } from './assign-students-to-lesson.input';
import { LessonEntity } from './lesson.entitiy';
import { StudentsService } from 'src/student/students.service';

@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(
    private lessonsService: LessonsService,
    private studentsService: StudentsService,
  ) {}

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

  @Mutation((returnrs) => LessonType)
  assignStudentsToLesson(
    @Args('assignStudentsToLessonInput')
    assignStudentsToLessonInput: AssignStudentsToLessonInput,
  ) {
    return this.lessonsService.assignStudentsToLesson(
      assignStudentsToLessonInput.lessonId,
      assignStudentsToLessonInput.studentIds,
    );
  }

  @ResolveField()
  async students(@Parent() lesson: LessonEntity) {
    return this.studentsService.findAll(lesson.students);
  }
}
