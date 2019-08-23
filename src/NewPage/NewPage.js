import React from "react";
import Collection from "../Collection/Collection";

function NewPage() {
  return (
    <div>
      <Collection
        sortType="release_date.desc"
        collectionName="New"></Collection>
    </div>
  );
}

export default NewPage;
