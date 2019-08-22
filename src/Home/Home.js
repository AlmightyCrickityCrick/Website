import React from "react";
import { Link } from "react-router-dom";
import Collection from "../Collection/Collection";

function Home() {
  return (
    <Link to="about">Go To About Page</Link>,
    (
      <div>
        <Collection> </Collection>
      </div>
    )
  );
}

export default Home;
