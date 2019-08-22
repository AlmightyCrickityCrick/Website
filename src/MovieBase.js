import React from "react";
import ReactDOM from "react-dom";
import { API_Key } from "./ConstantsJS";

class MovieBase extends React.Component {
  constructor() {
    super();
    this.state = {
      movieList: [],
    };
  }
  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=" +
        { API_Key } +
        "&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1"
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          movieList: data,
        });
      });
  }
  render() {
    return <p>{this.state.movieList.name}</p>;
  }
}

export default MovieBase;
