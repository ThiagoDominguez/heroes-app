import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LoginScreen from "../components/login/LoginScreen";
import DashboardRoutes from "./DashboardRoutes";
const AppRouter = () => {
  return (
    <Router>
      <div className="container-sm-1 ">
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route path="*" element={<DashboardRoutes />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
