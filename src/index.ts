import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import express from "express";
import { __port__ } from "./constants";
import path from "path"
import schema from "./graphql/schema";

const main = () => {
    const app = express();

    app.use(cors());

    const apolloServer = new ApolloServer({
        schema,
    });

    apolloServer.applyMiddleware({ app });

    app.use(express.static("public"))

    app.get("*",(_req,res)=>{
        res.sendFile(path.resolve(__dirname,"public", "index.html"))
    })

    app.listen(__port__, () => {
        console.log(`server started on port ${__port__}`);
    });
};

main();
