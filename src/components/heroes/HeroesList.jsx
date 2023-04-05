import React, { useMemo } from "react";
import { getHeroByPublisher } from "../../selectors/getHeroByPublisher.js";
import { HeroCard } from "./HeroCard.jsx";

const HeroesList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 g-0">
        {heroes.map((hero) => {
          return <HeroCard key={hero.id} {...hero} />;
        })}
      </div>
    </div>
  );
};

export default HeroesList;
