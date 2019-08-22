import React from "react";
import "./Card.css";
import { generateKeyPairSync } from "crypto";

function Card({ title, genres, description, src }) {
  return (
    <div className="container">
      <div className="card">
        <img className="card-image" src={src} />
        <div className="card-content">
          <ul className="genre-list">
            <span>
              {genres.map(genre => (
                <li className="genres" key={genre}>
                  {genre}
                </li>
              ))}
            </span>
          </ul>
          <h1 className="card-title">{title}</h1>
          <div className="card-text">{description}</div>
          <div className="button-container">
            <button className="read-more-button">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
