import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../customHooks/useForm";
const LoginScreen = () => {
  const [username, setUsername] = useState("");

  const navigate = useNavigate();
  //* useNavigate() funciona para redireccionar luego de una accion, en este caso luego de "loguearte"
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className="container">
      <h1>Login</h1>
      <hr />
      <form onSubmit={handleLogin}>
        <label>Nombre de usuario</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginScreen;
