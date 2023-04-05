import React, { useMemo, useState } from "react";
import {
  useParams,
  Navigate,
  useNavigate,
  useResolvedPath,
  generatePath,
} from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";

const HeroesScreen = () => {
  const { heroeId } = useParams();
  const hero = useMemo(() => getHeroById(heroeId), [heroeId]);
  // const resolvedPath = useResolvedPath(
  //   `../../../public/assets/heroes/${heroeId}.jpg`
  // );

  const path = generatePath("/assets/heroes/*", {
    type: "img",
    "*": `${heroeId}.jpg`,
  });

  const navigate = useNavigate();

  if (!hero) {
    return <Navigate to="/" />;
  }

  const handleReturn = () => {
    //? Validacion para que vuelva al / si entramos directo a una ruta especifica desde incognito

    if (navigate.length <= 2) {
      navigate("/");
    } else {
      return navigate(-1);
    }

    //* Esto es equivalente a volver hacia atras
  };
  // console.log(superhero);
  return (
    <div className="container ">
      <div className="row my-2">
        <div className="col-4">
          <img
            src={path}
            alt={hero.superhero}
            className="img-thumbnail animate__animated animate__fadeInLeft"
          />
        </div>
        <div className="col-8">
          <h3>{hero.superhero}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Alter Ego: </b>
              {hero.alter_ego}
            </li>
            <li className="list-group-item">
              <b>Publisher: </b>
              {hero.publisher}
            </li>
            <li className="list-group-item">
              <b>First appearance: </b>
              {hero.first_appearance}
            </li>
          </ul>
          <h5 className="card-title">Characters</h5>
          <p className="card-text">{hero.characters}</p>
          <button className="btn btn-outline-info" onClick={handleReturn}>
            Return
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroesScreen;
