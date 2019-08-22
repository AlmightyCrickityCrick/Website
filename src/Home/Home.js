import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
// import MovieBase from "../MovieBase";

function Home() {
  return <Link to="about">Go To About Page</Link>, <Card></Card>;
}

export default Home;
