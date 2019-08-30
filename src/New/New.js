import React from "react";

import Collection from "../Collection/Collection";

function New() {
  return (
    <div className="home">
      <Collection sorting="primary_release_date.desc"></Collection>
    </div>
  );
}

export default New;
