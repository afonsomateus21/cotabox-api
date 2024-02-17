import { Arg, Mutation, Query, Resolver } from "type-graphql";
import User from "../models/user";
import { CreateUserInput } from "../dtos/inputs/create-user-input";
import { UserModelDTO } from "../dtos/models/user-model-dto";
import { DeleteUserInput } from "../dtos/inputs/delete-user-input";
import { ApolloError } from "apollo-server";
import { GraphQLError } from "graphql";


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
    
    return await createdUser.save();
  }

  @Mutation(() => String)
  async deleteUser(@Arg('data') data: DeleteUserInput) {
    const id = data.id;

    const wasDeleted = await User.deleteOne({ _id: id });
    
    if (wasDeleted.deletedCount > 0) {
      return "Usuário deletado com sucesso";
    } else {
      throw new ApolloError(
        "Erro ao deletar usuário",
        "BAD_REQUEST"
      )
    }
  }
}