import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

function Card({ title, genres, description, src, to }) {
  return (
    <div className="card-item">
      {src ? (
        <img src={src} className="image" alt="" />
      ) : (
        <div className="placeholder-wrapper">
          <img src="./placeholder1.jpg" alt="" />
        </div>
      )}

      <div className="movie-details">
        <h4 className="movie-title">{title}</h4>
        <ul className="genre">
          {genres.map((genre, id) => (
            <li key={id} className="genre-name">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie-description">{description}</p>
        <Link className="button" to={to}>
          READ MORE
        </Link>
      </div>
    </div>
  );
}

export default Card;
