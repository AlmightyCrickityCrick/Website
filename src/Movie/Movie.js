import React from "react";
import { API_KEY } from "../constant";

import Cast from "../Cast/Cast";
import Trailer from "../Trailer/Trailer";

import "./Movie.css";

class Movie extends React.Component {
  state = {
    movie: { title: "", description: "", src: "", genres: [] },
    trailer: {},
    cast: [],
  };

  componentDidMount() {
    if (this.props.match.params.id) {
      fetch(
        "https://api.themoviedb.org/3/movie/" +
          this.props.match.params.id +
          "?api_key=" +
          API_KEY
      )
        .then(response => response.json())
        .then(movie => {
          this.setState({
            movie: {
              title: movie.original_title,
              description: movie.overview,
              src:
                movie.poster_path &&
                "https://image.tmdb.org/t/p/w500" + movie.poster_path,
              genres: movie.genres,
              id: movie.id,
            },
          });
        });
      fetch(
        "https://api.themoviedb.org/3/movie/" +
          this.props.match.params.id +
          "/videos" +
          "?api_key=" +
          API_KEY
      )
        .then(response => response.json())
        .then(trailer => {
          this.setState({
            trailer: {
              trailer_id: trailer.results[0]
                ? trailer.results[0].key
                : "https://www.youtube.com/watch?v=snUnGfNdjR0&list=RDsnUnGfNdjR0&start_radio=1",
            },
          });
        });

      fetch(
        "https://api.themoviedb.org/3/movie/" +
          this.props.match.params.id +
          "/credits" +
          "?api_key=" +
          API_KEY
      )
        .then(response => response.json())
        .then(cast => {
          this.setState({
            cast: cast.cast.map(cast => {
              return {
                name: cast.name,
                role: cast.character,
                image:
                  cast.profile_path &&
                  "https://image.tmdb.org/t/p/w500" + cast.profile_path,
              };
            }),
          });
        });
    }
  }

  render() {
    return (
      <div className="movie-page">
        <img className="movie-image" src={this.state.movie.src} alt="" />
        <div className="movie-page-info">
          <div className="movie-page-details">
            <h4 className="movie-page-title">{this.state.movie.title}</h4>
            <ul className="movie-genre">
              {this.state.movie.genres.map(genre => (
                <li key={genre.id} className="movie-genre-name">
                  {genre.name}
                </li>
              ))}
            </ul>
            <p className="movie-description">{this.state.movie.description}</p>
          </div>
          <Trailer trailerID={this.state.trailer.trailer_id} />
          <Cast className="cast-movie" cast={this.state.cast} />
        </div>
      </div>
    );
  }
}

export default Movie;
