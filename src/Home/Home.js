import React from "react";
import { Link } from "react-router-dom";
import Collection from "../Collection/Collection";

import "./Home.css";

function Home() {
  return (
    <div className="home-content">
      <div className="collection-content">
        <h1 className="type-title">Popular</h1>
        <Collection sorting="popularity.desc" cardCount={4}></Collection>
        <Link className="more-info" to="popular">
          View More
        </Link>
      </div>
      <div className="collection-content">
        <h1 className="type-title">New</h1>
        <Collection
          sorting="primary_release_date.desc"
          cardCount={4}></Collection>
        <Link className="more-info" to="new">
          View More
        </Link>
      </div>
      <div className="collection-content">
        <h1 className="type-title">Best Rated</h1>
        <Collection sorting="vote_average.desc" cardCount={4}></Collection>
        <Link className="more-info" to="best">
          View More
        </Link>
      </div>
    </div>
  );
}

export default Home;
