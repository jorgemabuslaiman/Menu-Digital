import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { FaWifi, FaConciergeBell, FaHandPaper, FaUser } from "react-icons/fa";

export const FooterComponent = () => {
  const [mostrarwifi, setMostrarwifi] = useState(false);
  const [mostrarcamarero, setMostrarcamarero] = useState(false);

  const manejoAbrirWifi = () => setMostrarwifi(true);
  const manejoCerrarWifi = () => setMostrarwifi(false);

  const manejoAbrirCamarero = () => setMostrarcamarero(true);
  const manejoCerrarCamarero = () => setMostrarcamarero(false);

  return (
    <>
      <div className="bg-light shadow fixed-bottom">
        <Container fluid className="p-0">
          <Row className="g-0 text-center">
            <Col>
              <Button
                variant="outline-info"
                className="w-100 d-flex flex-column align-items-center justify-content-center py-2"
                onClick={manejoAbrirWifi}
              >
                <FaWifi />
                <span style={{ fontSize: "0.8rem" }}>WIFI</span>
              </Button>
            </Col>

            <Col>
              <Button
                variant="outline-info"
                className="w-100 d-flex flex-column align-items-center justify-content-center py-2"
                onClick={manejoAbrirCamarero}
              >
                <FaConciergeBell />
                <span style={{ fontSize: "0.8rem" }}>Camarero</span>
              </Button>
            </Col>

            <Col>
              <Button
                variant="outline-info"
                className="w-100 d-flex flex-column align-items-center justify-content-center py-2"
              >
                <FaHandPaper />
                <span style={{ fontSize: "0.8rem" }}>Pedido</span>
              </Button>
            </Col>

            <Col>
              <Button
                variant="outline-info"
                className="w-100 d-flex flex-column align-items-center justify-content-center py-2"
              >
                <FaUser />
                <span style={{ fontSize: "0.8rem" }}>Login</span>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Modal WIFI */}
      <Modal show={mostrarwifi} onHide={manejoCerrarWifi} centered>
        <Modal.Header closeButton>
          <Modal.Title>Conexión WiFi</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p><strong>Red:</strong> wifi_local_aqui</p>
          <p><strong>Contraseña:</strong> 12345</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={manejoCerrarWifi}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={mostrarcamarero} onHide={manejoCerrarCamarero} centered>
        <Modal.Header closeButton>
          <Modal.Title>Conexión WiFi</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <p><strong>Su camarero llegara en breve!</strong></p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={manejoCerrarCamarero}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
