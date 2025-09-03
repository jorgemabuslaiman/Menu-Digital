import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export const SidebarAdmin = ({ onSelect }) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (section) => {
    onSelect(section); // le indica al parent qué mostrar
  };

  return (
    <>
      <button
        className="btn btn-outline-secondary d-md-none m-2"
        onClick={() => setOpen(!open)}
      >
        {open ? "✖" : "☰"}
      </button>

      <div
        className={`bg-light border-end p-3 d-md-block ${
          open ? "d-block" : "d-none"
        }`}
        style={{ minHeight: "100vh", width: "220px" }}
      >
        <h5 className="fw-bold">Dashboard</h5>
        <Nav className="flex-column mb-3">
          <Nav.Item>
            <Nav.Link onClick={() => handleSelect("dashboard")}>🏠 Panel</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => handleSelect("categorias")}>📂 Categorías</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => handleSelect("articulos")}>📦 Artículos</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => handleSelect("promociones")}>% Promociones</Nav.Link>
          </Nav.Item>
        </Nav>

        <button className="btn btn-danger w-100 mt-3" onClick={() => {
          localStorage.removeItem("user");
          window.location.href = "/";
        }}>
          🚪 Cerrar sesión
        </button>
      </div>
    </>
  );
};
