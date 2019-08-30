import React from "react";

import Collection from "../Collection/Collection";

function Best() {
  return (
    <div className="home">
      <Collection sorting="vote_average.desc"></Collection>
    </div>
  );
}

export default Best;
