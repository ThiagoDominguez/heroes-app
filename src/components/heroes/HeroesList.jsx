import React, { useMemo } from "react";
import { getHeroByPublisher } from "../../selectors/getHeroByPublisher.js";
import { HeroCard } from "./HeroCard.jsx";

const HeroesList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {heroes.map((hero) => {
        return <HeroCard key={hero.id} {...hero} />;
      })}
    </div>
  );
};

export default HeroesList;
