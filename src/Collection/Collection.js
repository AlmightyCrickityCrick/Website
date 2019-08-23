import React from "react";
import { Link } from "react-router-dom";

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
        "&language=en-US&sort_by=" +
        this.props.sortType +
        "&include_adult=false&include_video=false&page=1"
    )
      .then(response => response.json())
      .then(response =>
        this.setState({
          movies: response.results.map(movies => {
            return {
              title: movies.original_title,
              description: movies.overview,
              src:
                movies.poster_path &&
                "https://image.tmdb.org/t/p/w500" + movies.poster_path,
              genres: movies.genre_ids,
              id: movies.id,
            };
          }),
        })
      );
  }
  render(props) {
    return (
      <div className="collection">
        <div className="collection-direction">
          <h1 className="collection-title">{this.props.collectionName}</h1>
          <Link to={this.props.itemLink} className="collection-button">
            See More
          </Link>
        </div>
        <div className="collection-new-card">
          {this.state.movies.slice(0, this.props.cardCount).map(movie => {
            return (
              <Card
                title={movie.title}
                description={movie.description}
                genres={movie.genres}
                src={movie.src}
                link={"/movie/" + movie.id}></Card>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Collection;
