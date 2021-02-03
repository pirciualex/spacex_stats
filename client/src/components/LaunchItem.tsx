import React from "react";
import { Launch } from "../interfaces/Launch";

interface LaunchItemProps {
    launch: Launch;
}

const LaunchItem: React.FC<LaunchItemProps> = ({ launch }) => {
    return (
        <div>
            <h4>Mission: {launch.name}</h4>
            <p>Date: {launch.date_local}</p>
        </div>
    );
};

export default LaunchItem;
