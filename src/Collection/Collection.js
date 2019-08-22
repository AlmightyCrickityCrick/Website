import React from "react";
import Card from "../Card/Card";
import "./Collection.css";
import { API_Key } from "../ConstantsJS.js";

class Collection extends React.Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=" +
        API_Key +
        "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
    )
      .then(response => response.json())
      .then(response =>
        this.setState({
          movies: response.results.map(movies => {
            return {
              title: movies.original_title,
              description: movies.overview,
              src: "https://image.tmdb.org/t/p/w500" + movies.poster_path,
              genres: movies.genre_ids,
            };
          }),
        })
      );
  }
  render() {
    console.log(this.state.movies);
    return (
      <div className="collection">
        <h1 className="collection-title">New</h1>
        <div className="collection-new-card">
          {this.state.movies.map(movie => {
            return (
              <Card
                title={movie.title}
                description={movie.description}
                genres={movie.genres}
                src={movie.src}></Card>
            );
          })}
        </div>
        <h1 className="collection-title">Popular</h1>
        <div className="collection-popular-card"></div>
      </div>
    );
  }
}

export default Collection;
