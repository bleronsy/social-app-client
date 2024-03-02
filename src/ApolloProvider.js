import React from "react";
// import ApolloClient from "apollo-client";
// import { InMemoryCache } from "apollo-cache-inmemory";
// import { createHttpLink } from "apollo-link-http";
// import { ApolloProvider } from "@apollo/react-hooks";
import { setContext } from "apollo-link-context";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import App from "./App";

const link = createHttpLink({
  uri: "http://localhost:5000/graphql",
});

const authLink = setContext(() => {
    const token = localStorage.getItem("jwtToken");
    return{
        headers: {
            Authorization: token ? `Bearer ${token}` : ""
        }
    }
})

const client = new ApolloClient({
    link: authLink.concat(link),
    cache: new InMemoryCache()
})



export default (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
)