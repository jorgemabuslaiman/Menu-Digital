// src/components/dashboardAdmin.jsx
import React from "react";
import { Row, Col, Card } from "react-bootstrap";

export const DashboardAdmin = ({ categories = [] }) => {
  // Solo estadísticas básicas, puedes personalizar
  const totalProductos = categories.length;
  const totalPromociones = categories.filter(cat => cat.label.toLowerCase().includes("promo")).length;
  const ventasHoy = 350; // ejemplo estático
  const cantidadVentasHoy = 5; // ejemplo estático

  return (
    <div className="p-4 w-100">
      <h2 className="mb-4">Panel de control</h2>

      {/* Estadísticas */}
      <Row className="mb-4">
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Total de productos</Card.Title>
              <h3>{totalProductos}</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Promociones activas</Card.Title>
              <h3>{totalPromociones}</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Ventas (Hoy)</Card.Title>
              <h3>${ventasHoy}</h3>
              <p>{cantidadVentasHoy} ventas</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
