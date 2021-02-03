import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { MemoryRouter, Route } from "react-router-dom";
import logo from "./logo.svg";
import Home from "./pages/Home";

function App() {
    const client = new ApolloClient({
        uri: "http://localhost:4000/graphql",
        cache: new InMemoryCache(),
    });
    return (
        <ApolloProvider client={client}>
            <img src={logo} alt="SpaceX logo" />
            <MemoryRouter>
                <Route path="/" component={Home} />
            </MemoryRouter>
        </ApolloProvider>
    );
}

export default App;
