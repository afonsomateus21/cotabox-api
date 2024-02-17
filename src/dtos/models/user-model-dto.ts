import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class UserModelDTO {
  @Field()
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  participation: number;
}