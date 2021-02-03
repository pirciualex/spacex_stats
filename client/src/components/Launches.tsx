import { gql, useQuery } from "@apollo/client";
import React from "react";
import LaunchItem from "./LaunchItem";

const LAUNCHES = gql`
    query {
        launches {
            flight_number
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
            {data.launches.map((launch: any) => {
                return (
                    <LaunchItem key={launch.flight_number} launch={launch} />
                );
            })}
        </div>
    );
};

export default Launches;
