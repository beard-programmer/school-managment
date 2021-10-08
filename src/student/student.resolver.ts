import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StudentCreateInput } from './student-create.input';
import { StudentType } from './student.type';
import { StudentsService } from './students.service';

@Resolver(() => StudentType)
export class StudentResolver {
  constructor(private studentsService: StudentsService) {}

  @Query(() => [StudentType])
  students() {
    return this.studentsService.getStudents();
  }

  @Query(() => StudentType)
  student(@Args('id') id: string) {
    return this.studentsService.getStudent(id);
  }

  @Mutation(() => StudentType)
  createStudent(
    @Args('studentCreateInput') studentCreateInput: StudentCreateInput,
  ) {
    return this.studentsService.createStudent(studentCreateInput);
  }
}
