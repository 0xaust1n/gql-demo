import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput {
  @Field(() => String)
  id: string;

  @Field(() => String, { nullable: true })
  memberName?: string;

  @Field(() => String, { nullable: true })
  gender: string;

  @Field(() => Date, { nullable: true })
  birthday?: Date;

  @Field(() => Number, { nullable: true })
  weight?: number;
}
