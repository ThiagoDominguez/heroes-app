import React from "react";
import { Route, Navigate } from "react-router-dom";
import { Routes } from "react-router-dom";
import DcScreen from "../components/dc/DcScreen";
import HeroesScreen from "../components/heroes/HeroesScreen";
import MarvelScreen from "../components/marvel/MarvelScreen";
import Navbar from "../components/ui/NavBar";
import SearchScreen from "../components/search/SearchScreen";
import LogoutScreen from "../components/logout/LogoutScreen";

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container-sm-1">
        <Routes>
          <Route path="/marvel" element={<MarvelScreen />} />
          <Route path="/hero/:heroeId" element={<HeroesScreen />} />
          <Route path="/dc" element={<DcScreen />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/logout" element={<LogoutScreen />} />

          <Route path="*" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};

export default DashboardRoutes;
