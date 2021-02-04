import { gql, useQuery } from "@apollo/client";
import React from "react";

import LaunchItem from "./LaunchItem";
import MissionLegend from "./MissionLegend";

const LAUNCHES = gql`
    query {
        launches {
            id
            name
            date_local
            success
        }
    }
`;

const Launches = () => {
    const { loading, error, data } = useQuery(LAUNCHES);

    if (loading) return <p>Loading...</p>;
    if (error)
        return <p>Oops, there seems to be an error... Please try again!</p>;

    return (
        <div className="container">
            <h2>Lunches</h2>
            <MissionLegend />
            {data.launches.map((launch: any) => {
                return <LaunchItem key={launch.id} launch={launch} />;
            })}
        </div>
    );
};

export default Launches;
