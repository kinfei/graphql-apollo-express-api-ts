import "graphql-import-node";
import * as typeDefs from "../schema/schema.graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import resolvers from "./resolverMap";

import { GraphQLSchema } from "graphql";

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
