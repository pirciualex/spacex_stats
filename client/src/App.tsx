import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Route } from "react-router-dom";

import logo from "./logo.svg";
import Home from "./pages/Home";
import Launch from "./pages/Launch";

function App() {
    const client = new ApolloClient({
        uri: "http://localhost:4000/graphql",
        cache: new InMemoryCache(),
    });
    return (
        <ApolloProvider client={client}>
            <img src={logo} alt="SpaceX logo" />
            <BrowserRouter>
                <Route exact path="/" component={Home} />
                <Route path="/launch/:id" component={Launch} />
            </BrowserRouter>
        </ApolloProvider>
    );
}

export default App;
