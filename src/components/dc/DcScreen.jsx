import React from "react";
import HeroesList from "../heroes/HeroesList";

const DcScreen = () => {
  return (
    <div className="container animate__animated animate__fadeInLeftBig">
      <h1>DC Heroes</h1>
      <hr />
      <HeroesList publisher="DC Comics" />
    </div>
  );
};

export default DcScreen;
