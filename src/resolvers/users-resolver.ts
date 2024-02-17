import { Arg, Mutation, Query, Resolver } from "type-graphql";
import User from "../models/user";
import { CreateUserInput } from "../dtos/inputs/create-user-input";
import { UserModelDTO } from "../dtos/models/user-model-dto";


@Resolver()
export class UserResolver {
  @Query(() => [UserModelDTO])
  async users() {
    return await User.find().sort({ createdAt: -1 });
  }

  @Mutation(() => UserModelDTO)
  async createUser(@Arg('data') data: CreateUserInput) {
    const createdUser = new User({
      firstName: data.firstName,
      lastName: data.lastName,
      participation: data.participation,
      createdAt: new Date()
    });

    const response = await createdUser.save();
    
    return response;
  }
}