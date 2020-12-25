import express from "express";
import { __port__ } from "./constants";

const main = () => {
    const app = express();

    app.get("/", (_req, res) => {
        res.send("hello");
    });

    app.listen(__port__, () => {
        console.log(`server started on port ${__port__}`);
    });
};

main();
