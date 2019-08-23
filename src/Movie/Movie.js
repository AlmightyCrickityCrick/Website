import React from "react";
import { match } from "minimatch";
import { API_Key } from "../ConstantsJS";

class Movie extends React.Component {
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

  render() {
    return <div></div>;
  }
}
export default Movie;
