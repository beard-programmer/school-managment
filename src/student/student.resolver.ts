import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StudentCreateInput } from './student-create.input';
import { StudentType } from './student.type';
import { StudentsService } from './students.service';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private studentsService: StudentsService) {}

  @Query(() => [StudentType])
  students() {
    return this.studentsService.getStudents();
  }

  @Mutation(() => StudentType)
  createStudent(
    @Args('studentCreateInput') studentCreateInput: StudentCreateInput,
  ) {
    return this.studentsService.createStudent(studentCreateInput);
  }
}
