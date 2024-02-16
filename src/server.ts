import "reflect-metadata";

import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/users-resolver";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";

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
    // bootstrap();
  })