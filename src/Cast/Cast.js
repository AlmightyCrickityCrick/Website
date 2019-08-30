import React from "react";

import "./Cast.css";

function Cast({ cast }) {
  return (
    <div className="actors">
      <ul className="movie-actors">
        {cast &&
          cast.map((actor, index) => {
            return (
              <li key={index} className="actors-details">
                <img className="actor-image" src={actor.image} alt="" />
                <div className="names">
                  <h3 className="actor-name">{actor.name}</h3>
                  <h5 className="actor-role">{actor.role}</h5>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Cast;
