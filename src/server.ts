import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import { typeDefs } from "./graphql/type-defs"

configDotenv();

const server = new ApolloServer({
  typeDefs
});

mongoose.connect(`${process.env.MONGODB_URL_CONNECTION}`)
  .then(() => {
    console.log("MongoDB connection successful");
    return server.listen();
  })
  .then((response) => {
    console.log(`Server running at ${response.url}`)
  })