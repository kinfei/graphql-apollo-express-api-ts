import express from "express";
import { ApolloServer } from "apollo-server-express";
import depthLimit from "graphql-depth-limit";
import compression from "compression";
// import cors from "cors";
import schema from "./schema";

const app = express();

app.use(compression());

const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)],
});

async function startServer() {
  await server.start();

  server.applyMiddleware({
    app,
    path: "/graphql",
  });

  app.listen(process.env.PORT || 3000, () => {
    console.log(
      `\n🚀      GraphQL is now running on http://localhost:3000/graphql`
    );
  });
}

startServer();
