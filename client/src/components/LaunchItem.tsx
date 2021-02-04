import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

import { Launch } from "../interfaces/Launch";

interface LaunchItemProps {
    launch: Launch;
}

const LaunchItem: React.FC<LaunchItemProps> = ({ launch }) => {
    return (
        <div className="launch">
            <div className="info">
                <h4>
                    Mission:{" "}
                    <span
                        className={
                            launch.success ? "text-success" : "text-danger"
                        }
                    >
                        {launch.name}
                    </span>
                </h4>
                <p>
                    Date:{" "}
                    <Moment format="YYYY-MM-DD HH:mm">
                        {launch.date_local}
                    </Moment>
                </p>
            </div>
            <Link to={`/launch/${launch.id}`} className="btn btn-primary">
                View details
            </Link>
        </div>
    );
};

export default LaunchItem;
