import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SidebarAdmin } from "../components/sidebarAdmin";
import { DashboardAdmin } from "../components/dashboardAdmin";
import { CategoriasAdmin } from "../components/categoriasAdmin";
import { ArticulosAdmin } from "../components/articulosAdmin";
import { PromocionesAdmin } from "../components/promocionesAdmin";

export const DashboardadminPage = () => {
  const [currentSection, setCurrentSection] = useState("dashboard");

  const renderContent = () => {
    switch (currentSection) {
      case "dashboard":
        return <DashboardAdmin />;
      case "categorias":
        return <CategoriasAdmin />;
      case "articulos":
        return <ArticulosAdmin />;
      case "promociones":
        return <PromocionesAdmin />;
      default:
        return <DashboardAdmin />;
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12} md="auto" className="p-0">
          <SidebarAdmin onSelect={setCurrentSection} />
        </Col>
        <Col xs={12} md className="p-0">
          {renderContent()}
        </Col>
      </Row>
    </Container>
  );
};
