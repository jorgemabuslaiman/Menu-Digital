import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Usuario de prueba
  const user = {
    username: "jorge",
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
    <div>
      <form onSubmit={handleSubmit}>
        <label>Usuario: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Contraseña: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
        <button type="button" onClick={() => navigate("/")}>
          Cancelar
        </button>
      </form>
    </div>
  );
};
