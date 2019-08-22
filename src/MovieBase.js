import React from "react";
import ReactDOM from "react-dom";

const API_Key = "5f19f36323a7a70ca1b96e5abefdc252";
class MovieBase extends React.Component {
  constructor() {
    super();
    this.state = {
      movieList: {},
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
