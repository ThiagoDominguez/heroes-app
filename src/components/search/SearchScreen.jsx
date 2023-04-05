import React, { useMemo, useState } from "react";

import queryString from "query-string";

import { heroes } from "../../data/heroes";
import { HeroCard } from "../heroes/HeroCard";
import { useForm } from "../../customHooks/useForm";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getHeroByName } from "../../selectors/getHeroByName";
const SearchScreen = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const [values, handleInputChange, reset] = useForm({
    find: q,
  });

  const { find } = values;

  const heroesFiltered = useMemo(() => getHeroByName(q), [q]);
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${find}`);
    reset();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <h4>Find your hero</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              autoComplete="off"
              name="find"
              value={find}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="btn my-1 block btn-outline-primary w-100"
            >
              Search
            </button>
          </form>
        </div>
        <div className=" col-7 my-1">
          {q === "" && <div className="alert alert-info">Search a hero</div>}

          {q !== "" && heroesFiltered.length === 0 && (
            <div className="alert alert-danger ">
              There's no a hero with {q}!!
            </div>
          )}

          {heroesFiltered.map((hero) => {
            return <HeroCard key={hero.id} {...hero} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
