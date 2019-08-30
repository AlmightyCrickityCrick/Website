import React from "react";
import { Link } from "react-router-dom";

import Collection from "../Collection/Collection";

function Popular() {
  return (
    <div className="home">
      <Collection sorting="popularity.desc"></Collection>
    </div>
  );
}

export default Popular;
