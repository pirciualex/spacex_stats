import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type Launch {
        id: ID!
        flight_number: Int!
        name: String!
        date_utc: String!
        date_local: String!
        success: Boolean
        rocket: ID!
        rocketData: Rocket!
    }

    type Rocket {
        id: ID!
        name: String!
        type: String!
    }

    type Query {
        launches: [Launch!]!
        launch(id: ID!): Launch!
        rockets: [Rocket!]!
        rocket(id: ID!): Rocket!
    }
`;
