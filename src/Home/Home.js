import React from "react";
import { Link } from "react-router-dom";
import Collection from "../Collection/Collection";
import MovieBase from "../MovieBase";

function Home() {
  return (
    <Link to="about">Go To About Page</Link>,
    (
      <div>
        <Collection
          sortType="popularity.desc"
          cardCount={4}
          collectionName="Popular"
          itemLink="/popular/1">
          {" "}
        </Collection>
        <Collection
          sortType="release_date.desc"
          cardCount={9}
          collectionName="New"
          itemLink="/new/1">
          {" "}
        </Collection>
        <Collection
          sortType="vote_average.desc"
          cardCount={5}
          collectionName="Most Liked"
          itemLink="/best_rated/1">
          {" "}
        </Collection>
        <Collection
          sortType="vote_average.asc"
          cardCount={4}
          collectionName="Most hated"
          itemLink="/worst_rated/1">
          {" "}
        </Collection>
      </div>
    )
  );
}

export default Home;
