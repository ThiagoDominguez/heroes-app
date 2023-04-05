import React from "react";
import { useNavigate } from "react-router";

const LogoutScreen = () => {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    navigate("/logout");
  };

  return (
    <div className="container">
      <h1>Logout</h1>
      <hr />
      <form onSubmit={handleLogout}>
        <label>¿Quieres salir?</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <button className="btn btn-primary" type="submit">
          Logout
        </button>
      </form>
    </div>
  );
};

export default LogoutScreen;
