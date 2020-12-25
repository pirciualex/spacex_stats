// ! This is for development purpose only.
// ! Extensions will be made to the typeDefs and resolvers
import {
    GraphQLBoolean,
    GraphQLID,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLString,
} from "graphql";

const Rocket = new GraphQLObjectType({
    name: "Rocket",
    fields: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLNonNull(GraphQLString) },
        type: { type: GraphQLNonNull(GraphQLString) },
    },
});

const Launch = new GraphQLObjectType({
    name: "Launch",
    fields: {
        id: { type: GraphQLNonNull(GraphQLID) },
        flight_number: { type: GraphQLNonNull(GraphQLInt) },
        name: { type: GraphQLNonNull(GraphQLString) },
        date_utc: { type: GraphQLNonNull(GraphQLString) },
        date_local: { type: GraphQLNonNull(GraphQLString) },
        success: { type: GraphQLNonNull(GraphQLBoolean) },
        rocket: { type: GraphQLNonNull(Rocket) },
    },
});
