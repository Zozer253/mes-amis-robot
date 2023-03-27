import React from "react";

const RobotCard = ({robot, openPopup}) => {

    // const letter = robot.name.split("").slice(1, 4)
    // const imageLink = "https://robohash.org/"+letter
  
    const imageLink = "https://robohash.org/" + robot.name + "?size=200x200";

    return(
      <div className="robot" onClick={() => openPopup(robot)}>
        <div>
          <img src={imageLink} alt="robot" />
          <span>{robot.name}</span>
          <h2>{robot.email}</h2>
        </div>
      </div>
    )
  }
  

export default RobotCard;