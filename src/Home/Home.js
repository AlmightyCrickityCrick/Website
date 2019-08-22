import React from "react";
import { Link } from "react-router-dom";
import Collection from "../Collection/Collection";
import MovieBase from "../MovieBase";

function Home() {
  return (
    <Link to="about">Go To About Page</Link>,
    (
      <div>
        <MovieBase></MovieBase>
        <Collection> </Collection>
      </div>
    )
  );
}

export default Home;
