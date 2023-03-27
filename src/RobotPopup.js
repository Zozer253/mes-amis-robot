import React from 'react';

function RobotPopup(props) {

    // const letter = robot.name.split("").slice(1, 4)
    // const imageLink = "https://robohash.org/"+letter

    const imageLink = "https://robohash.org/" + props.robot.name + "?size=200x200";
  return (
    <div className="popup">
      <div className="popup_inner">
        <img src={imageLink} alt={props.robot.name} />
        <h2>{props.robot.name}</h2>
        <p>Email: {props.robot.email}</p>
        <p>Téléphone: {props.robot.phone}</p>
        <button onClick={props.closePopup}>Fermer</button>
      </div>
    </div>
  );
}

export default RobotPopup;
