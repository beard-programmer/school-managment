import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from './student.entity';
import { StudentResolver } from './student.resolver';
import { StudentsService } from './students.service';

@Module({
  imports: [TypeOrmModule.forFeature([StudentEntity])],
  providers: [StudentsService, StudentResolver],
  exports: [StudentsService],
})
export class StudentModule {}
