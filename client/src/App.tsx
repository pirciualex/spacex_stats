import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { BrowserRouter, Link, Route } from "react-router-dom";

import Home from "./pages/Home";
import Launch from "./pages/Launch";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
    const client = new ApolloClient({
        uri: "http://localhost:4000/graphql",
        cache: new InMemoryCache(),
    });

    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Navbar />
                <Route exact path="/" component={Home} />
                <Route path="/launch/:id" component={Launch} />
                <Footer />
            </BrowserRouter>
        </ApolloProvider>
    );
}

export default App;
