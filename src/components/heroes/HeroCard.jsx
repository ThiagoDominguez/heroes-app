import React from "react";
import { Link, useResolvedPath, generatePath } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const path = generatePath(":type/heroes/*", {
    type: "assets",
    "*": `${id}.jpg`,
  });

  return (
    <div className=" card mb-1" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4 col-sm-2">
          <img src={path} className="img-card-top  w-100" alt={superhero} />
        </div>
        <div className="col-md-8 col-sm-4">
          <div className="card-body">
            <h5 className="card-title">{superhero}</h5>
            <p className="card-text">{alter_ego}</p>
            {alter_ego !== characters && (
              <p className="card-text">{characters}</p>
            )}
            <p className="card-text">
              <small className="text-muted">{first_appearance}</small>
            </p>
            <Link to={`/hero/${id}`}>Más...</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
