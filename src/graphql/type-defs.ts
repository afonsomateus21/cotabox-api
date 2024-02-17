import { gql } from "apollo-server";

export const typeDefs = gql`
  type User {
    firstName: String
    lastName: String
    participation: Float
    createdAt: String
  }

  input UserInput {
    firstName: String
    lastName: String
    participation: Float
  }

  type Query {
    getUsers(): [User]
  }

  type Mutation {
    createUser(userInput: UserInput): User!
    deleteUser(ID: ID!): String
    editUser(ID: ID!, userInput: UserInput): User!
  }
`