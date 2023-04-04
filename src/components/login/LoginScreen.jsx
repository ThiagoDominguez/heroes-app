import React from "react";
import { useNavigate } from "react-router-dom";
const LoginScreen = () => {
  const navigate = useNavigate();
  //* useNavigate() funciona para redireccionar luego de una accion, en este caso luego de "loguearte"
  const handleLogin = () => {
    navigate("/ ");
  };
  return (
    <div className="container">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
