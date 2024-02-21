import "reflect-metadata";

import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/users-resolver";
import { checkCurrentEnvironment } from "./utils/config";

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

  const { url } = await server.listen({ port: process.env.API_PORT || 4000 });

  console.log(`HTTP server running on ${url}`);
}

console.log(checkCurrentEnvironment());

mongoose.connect(checkCurrentEnvironment())
  .then(() => {
    console.log("MongoDB connection successful");
  })
  .then(() => {
    bootstrap();
  })