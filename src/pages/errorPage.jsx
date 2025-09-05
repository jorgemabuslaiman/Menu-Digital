// esta es la página que se muestra cuando el usuario navega a una ruta no existente

import React from "react";
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="error-container">
      <div className="error-emoji" role="img" aria-label="comida">
        🍕
      </div>
      <h1 className="error-title">404</h1>
      <p className="error-subtitle">¡Oops! Este plato o página no está en el menú 🍽️</p>

      <button className="error-button" onClick={() => navigate("/")}>
        Volver al inicio
      </button>
    </div>
  );
};