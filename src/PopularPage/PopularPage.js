import React from "react";
import Collection from "../Collection/Collection";

function PopularPage() {
  return (
    <div>
      <Collection
        sortType="popularity.desc"
        collectionName="Popular"></Collection>
    </div>
  );
}

export default PopularPage;
