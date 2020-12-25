import { ApolloServer } from "apollo-server-express";
import express from "express";
import { __port__ } from "./constants";
import schema from "./graphql/schema";

const main = () => {
    const app = express();

    const apolloServer = new ApolloServer({
        schema,
    });

    apolloServer.applyMiddleware({ app });

    app.listen(__port__, () => {
        console.log(`server started on port ${__port__}`);
    });
};

main();
