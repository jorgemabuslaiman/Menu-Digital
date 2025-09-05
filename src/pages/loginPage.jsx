//esta es la página de inicio de sesión para el administrador únicamente

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUtensils } from "react-icons/fa"; // icono temático de restaurante
import "bootstrap/dist/css/bootstrap.min.css";

export const LoginPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const user = {
    username: "admin",
    password: "12345",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.username === username && user.password === password) {
      console.log("Inicio de sesión correcto");
      localStorage.setItem("user", JSON.stringify(username));
      navigate("/dashboardadmin", { replace: true });
    } else {
      alert("Usuario o contraseña incorrecto");
    }
  };

  useEffect(() => {
    localStorage.removeItem("user");
  }, []);

  return (
    <div className="login-container d-flex justify-content-center align-items-center vh-100">
      <div className="card login-card shadow-lg p-4 text-center">
        <FaUtensils size={50} className="mb-3 text-warning" />
        <h2 className="mb-3 text-dark">Restaurante</h2>
        <p className="text-muted mb-4">Accede con tu cuenta</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="off"
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control form-control-lg"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-warning w-100 mb-2">
            Ingresar
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary w-100"
            onClick={() => navigate("/")}
          >
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
};
