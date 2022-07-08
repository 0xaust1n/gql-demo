import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  memberName: string;

  @Field(() => String)
  gender: string;

  @Field(() => Date, { nullable: true })
  birthday?: Date;

  @Field(() => Number, { nullable: true })
  weight?: number;
}
