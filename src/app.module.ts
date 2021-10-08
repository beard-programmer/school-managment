import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonEntity } from './lesson/lesson.entitiy';
import { LessonModule } from './lesson/lesson.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/school-managment',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [LessonEntity],
    }),
    GraphQLModule.forRoot({ autoSchemaFile: true }),
    LessonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
