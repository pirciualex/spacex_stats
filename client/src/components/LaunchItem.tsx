import React from "react";
import Moment from "react-moment";
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
            <button className="btn btn-primary">View details</button>
        </div>
    );
};

export default LaunchItem;
