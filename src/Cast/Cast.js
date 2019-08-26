import React from "react";
import { API_Key } from "../ConstantsJS";
import "./Cast.css";

function Cast(props) {
  return (
    <div className="individual-actor">
      <div className="actor-portrait">
        <img
          className="portrait"
          src={"https://image.tmdb.org/t/p/w500/" + props.image}
          alt="No image"
        />
      </div>
      <div className="actor-info">
        <div className="character-name">{props.role}</div>
        <div className="actor-name">{props.name}</div>
      </div>
    </div>
  );
}

export default Cast;
