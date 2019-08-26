import React from "react";
import { match } from "minimatch";
import { API_Key } from "../ConstantsJS";
import "./Movie.css";
import Cast from "../Cast/Cast";
import Trailer from "../Trailer/Trailer";

class Movie extends React.Component {
  state = {
    movie: {},
    trailer: {},
    cast: [],
  };
  componentDidMount() {
    if (this.props.match.params.id) {
      fetch(
        "https://api.themoviedb.org/3/movie/" +
          this.props.match.params.id +
          "?api_key=" +
          API_Key +
          "&language=en-US"
      )
        .then(movie => movie.json())
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
        })
        .then(console.log(this.state.movie.genres));
    }
    fetch(
      "https://api.themoviedb.org/3/movie/" +
        this.props.match.params.id +
        "/videos?api_key=" +
        API_Key +
        "&language=en-US"
    )
      .then(trailer => trailer.json())
      .then(trailer => {
        this.setState({
          trailer: {
            src: trailer.results[0] && trailer.results[0].key,
          },
        });
      });
    fetch(
      "https://api.themoviedb.org/3/movie/" +
        this.props.match.params.id +
        "/credits?api_key=" +
        API_Key
    )
      .then(cast => cast.json())
      .then(cast =>
        this.setState({
          cast: cast.cast.map(actor => {
            return {
              role: actor.character,
              name: actor.name,
              photo: actor.profile_path,
            };
          }),
        })
      );
  }

  render() {
    return (
      <div>
        <Trailer id={this.state.trailer.src}> </Trailer>
        <div className="individual-card">
          <div className="movie-text">
            <div className="genre">
              <ul className="genre-list">
                {/* <span>
                  {this.state.movie.genres.map(genre => (
                    <li className="genre-object" key={genre.id}>
                      {genre.name}
                    </li>
                  ))}
                </span> */}
              </ul>
            </div>
            <h1 className="title">{this.state.movie.title}</h1>
            <div className="movie-description">
              {this.state.movie.description}
            </div>
          </div>
          <div className="card-poster">
            <img
              className="poster"
              src={this.state.movie.src}
              alt="No poster yet"
            />
          </div>
        </div>
        <div className="actor-container">
          <div className="actor-title">Main Cast</div>
          <div className="actor-section">
            {this.state.cast.map(actor => {
              return (
                <Cast
                  role={actor.role}
                  name={actor.name}
                  image={actor.photo}></Cast>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Movie;
