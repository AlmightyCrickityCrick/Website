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
          itemLink="/popular">
          {" "}
        </Collection>
        <Collection
          sortType="release_date.desc"
          cardCount={4}
          collectionName="New"
          itemLink="/new">
          {" "}
        </Collection>
        <Collection
          sortType="vote_average.desc"
          cardCount={4}
          collectionName="Most Liked"
          itemLink="/votedesc">
          {" "}
        </Collection>
        <Collection
          sortType="vote_average.asc"
          cardCount={4}
          collectionName="Most hated"
          itemLink="/voteasc">
          {" "}
        </Collection>
      </div>
    )
  );
}

export default Home;
