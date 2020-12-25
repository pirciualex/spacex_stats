import { IResolvers } from "apollo-server-express";
import axios from "axios";

export const resolvers: IResolvers = {
    Launch: {
        rocketData: async (root) => {
            return await (
                await axios.get(
                    `https://api.spacexdata.com/v4/rockets/${root.rocket}`
                )
            ).data;
        },
    },
    Query: {
        launches: async () => {
            return await (
                await axios.get("https://api.spacexdata.com/v4/launches")
            ).data;
        },
        launch: async (_root, { id }) => {
            return await (
                await axios.get(`https://api.spacexdata.com/v4/launches/${id}`)
            ).data;
        },
        rockets: async () => {
            return await (
                await axios.get("https://api.spacexdata.com/v4/rockets")
            ).data;
        },
        rocket: async (_root, { id }) => {
            return await (
                await axios.get(`https://api.spacexdata.com/v4/rockets/${id}`)
            ).data;
        },
    },
};
