import React from "react";
import { Route, Navigate } from "react-router-dom";
import { Routes } from "react-router-dom";
import DcScreen from "../components/dc/DcScreen";
import HeroesScreen from "../components/heroes/HeroesScreen";
import MarvelScreen from "../components/marvel/MarvelScreen";
import Navbar from "../components/ui/NavBar";
import SearchScreen from "../components/search/SearchScreen";

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/marvel" element={<MarvelScreen />} />
          <Route path="/hero/:heroeId" element={<HeroesScreen />} />
          <Route path="/dc" element={<DcScreen />} />
          <Route path="/search" element={<SearchScreen />} />

          {/* <Route path="*" element={<Navigate to="/marvel" />} /> */}
        </Routes>
      </div>
    </>
  );
};

export default DashboardRoutes;
