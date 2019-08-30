import React from "react";
import "./Cast.css";

function Cast(props) {
  return (
    <div className="individual-actor">
      <div className="actor-portrait">
        <img className="portrait" src={props.image} alt="no image" />
      </div>
      <div className="actor-info">
        <div className="character-name">{props.role}</div>
        <div className="actor-name">{props.name}</div>
      </div>
    </div>
  );
}

export default Cast;
