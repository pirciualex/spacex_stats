import { gql, useQuery } from "@apollo/client";
import React from "react";
import Moment from "react-moment";
import { Link, RouteComponentProps } from "react-router-dom";

interface LaunchProps {
    id: string;
}

const LAUNCH = gql`
    query($id: ID!) {
        launch(id: $id) {
            flight_number
            name
            success
            date_local
            rocket
            rocketData {
                name
                type
            }
        }
    }
`;

const Launch: React.FC<RouteComponentProps<LaunchProps>> = ({
    match: {
        params: { id },
    },
}) => {
    // const id = match.params.id;
    const { loading, error, data } = useQuery(LAUNCH, { variables: { id } });

    if (loading) return <p>Loading...</p>;
    if (error)
        return <p>Oops, there seems to be an error... Please try again!</p>;

    const {
        flight_number,
        name,
        date_local,
        success,
        rocketData,
    } = data.launch;

    return (
        <div className="container launch-page">
            <h1>
                <span className="text-primary">Mission:</span> {name}
            </h1>

            <div className="launch-info">
                <h2>Details:</h2>
                <ul>
                    <li>Flight Number: {flight_number}</li>
                    <li>
                        Launch Date:{" "}
                        <Moment format="YYYY-MM-DD">{date_local}</Moment>
                    </li>
                    <li>
                        Launch Successful:{" "}
                        <span
                            className={success ? "text-success" : "text-danger"}
                        >
                            {success ? "yes" : "no"}
                        </span>
                    </li>
                </ul>
            </div>

            <div className="rocket-info">
                <h2>Rocket:</h2>
                <ul>
                    <li>Name: {rocketData.name}</li>
                    <li>Type: {rocketData.type}</li>
                </ul>
            </div>

            <Link to="/" className="btn btn-primary">
                Go Back
            </Link>
        </div>
    );
};

export default Launch;
