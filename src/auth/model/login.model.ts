import { Field, ObjectType } from '@nestjs/graphql';
import { LogcinReturnBody } from './loigin-return-body';

@ObjectType()
export class LoginModel {
  @Field(() => String)
  status: string;

  @Field(() => String, { nullable: true })
  message?: string;

  @Field(() => LogcinReturnBody, { nullable: true })
  body?: LogcinReturnBody;
}
