import { Field, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class StudentCreateInput {
  @Field()
  @MinLength(4)
  name: string;
}
