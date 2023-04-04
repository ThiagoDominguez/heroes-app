import React from "react";
import HeroesList from "../heroes/HeroesList";
import "animate.css";

const MarvelScreen = () => {
  return (
    <div className="container  animate__animated animate__fadeInRightBig">
      <h1>Marvel Heroes</h1>
      <hr />
      <HeroesList publisher={"Marvel Comics"} />
    </div>
  );
};

export default MarvelScreen;
