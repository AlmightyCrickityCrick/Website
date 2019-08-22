import React from "react";
import Card from "../Card/Card";
import "./Collection.css";

function Collection() {
  return (
    <div className="collection">
      <h1 className="collection-title">New</h1>
      <div className="collection-new-card">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <h1 className="collection-title">Popular</h1>
      <div className="collection-popular-card">
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
}

export default Collection;
