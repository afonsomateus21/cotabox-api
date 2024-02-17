import { IsNumber, IsString } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class DeleteUserInput {
  @Field()
  @IsString()
  id: string;
}