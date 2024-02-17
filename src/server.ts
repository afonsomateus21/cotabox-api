import "reflect-metadata";

import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/users-resolver";

configDotenv();

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [
      UserResolver
    ],
    emitSchemaFile: true
  })

  const server = new ApolloServer({
    schema
  });

  const { url } = await server.listen();

  console.log(`HTTP server running on ${url}`);
}

mongoose.connect(`${process.env.MONGODB_URL_CONNECTION}`)
  .then(() => {
    console.log("MongoDB connection successful");
  })
  .then(() => {
    bootstrap();
  })