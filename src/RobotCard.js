import React from "react";

const RobotCard = ({robot}) => {

    const letter = robot.name.split("").slice(1, 4)
    const imageLink = "https://robohash.org/"+letter

    return(
        <div className="robot">
            <div>
                <img src={imageLink} alt="robot" />
                <span>{robot.name}</span>
                <h3>{robot.email}</h3>
            </div>
        </div>
    )
}

export default RobotCard;