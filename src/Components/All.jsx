import React from "react";
import FullstackDevelopemnet from "./FullstackDevelopemnet";
import DataScience from "./DataScience";

function All() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <FullstackDevelopemnet />
        </div>
        <div className="col">
          <DataScience />
        </div>
      </div>
    </div>
  );
}

export default All;
