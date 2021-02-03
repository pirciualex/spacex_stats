import React from "react";

const MissionLegend = () => {
    return (
        <div className="mission-legend">
            <p>
                <span className="succeeded"></span> = Success
            </p>
            <p>
                <span className="failed"></span> = Fail
            </p>
        </div>
    );
};

export default MissionLegend;
