import axios from "axios";
// ! This is for development purpose only.
// ! Extensions will be made to the typeDefs and resolvers
import {
    GraphQLBoolean,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
} from "graphql";

const Rocket = new GraphQLObjectType({
    name: "Rocket",
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        type: { type: GraphQLString },
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
        success: { type: GraphQLBoolean },
        rocket: { type: GraphQLNonNull(GraphQLID) },
        rocketData: {
            type: GraphQLNonNull(Rocket),
            resolve: async (root) => {
                return await (
                    await axios.get(
                        `https://api.spacexdata.com/v4/rockets/${root.rocket}`
                    )
                ).data;
            },
        },
    },
});

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        launches: {
            type: new GraphQLList(Launch),
            resolve: async () => {
                return await (
                    await axios.get("https://api.spacexdata.com/v4/launches")
                ).data;
            },
        },
        launch: {
            type: Launch,
            args: {
                id: { type: GraphQLID },
            },
            resolve: async (_root, { id }) => {
                return await (
                    await axios.get(
                        `https://api.spacexdata.com/v4/launches/${id}`
                    )
                ).data;
            },
        },
        rockets: {
            type: new GraphQLList(Rocket),
            resolve: async () => {
                return await (
                    await axios.get("https://api.spacexdata.com/v4/rockets")
                ).data;
            },
        },
        rocket: {
            type: Rocket,
            args: {
                id: { type: GraphQLID },
            },
            resolve: async (_root, { id }) => {
                return await (
                    await axios.get(
                        `https://api.spacexdata.com/v4/rockets/${id}`
                    )
                ).data;
            },
        },
    },
});

export const schema = new GraphQLSchema({
    query: RootQuery,
});
