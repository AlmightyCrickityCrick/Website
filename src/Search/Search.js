import React from "react";
import Card from "../Card/Card";

class Search extends React.Component {
  state = {
    query: "",
    results: [],
  };
  handleChange(event) {
    this.setState({ query: event.target.value });
  }
  handleClick() {
    fetch(
      "https://api.themoviedb.org/3/search/movie?language=en-US&query=" +
        this.state.query +
        "&page=1&include_adult=false"
    )
      .then(response => response.json())
      .then(response => console.log(response));
  }
  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.state.query}
            onChange={this.handleChange.bind(this)}
          />
        </div>
        <div>
          <button onClick={this.handleClick.bind(this)}></button>
        </div>
        }
      </div>
    );
  }
}
export default Search;
