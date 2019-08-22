import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="container">
      <div className="card">
        <img
          className="card-image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfTdTHiIYc-Gti-IKQEwmC_bqa654NOpwdl4EP9oBHal594tdF"
        />
        <div className="card-content">
          <ul className="genre-list">
            <li className="genre">Drama</li>
            <li className="genre">Comedy</li>
            <li className="genre">Romance</li>
          </ul>
          <h1 className="card-title">Lost in the void</h1>
          <div className="card-text">
            QAAbL UOaydb69qvUPVXO NAhzP24kXu IbaAp I5e9 qn8brIAuZusd Iz9I0GmfK
            HcZlG47Co xudynEW 3G8ikNuBC0V
          </div>
          <div className="button-container">
            <button className="read-more-button">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
