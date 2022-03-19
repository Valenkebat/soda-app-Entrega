import React from "react";
import "./Header.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="container-header">
      <div className="box-text">
        <Container fluid>
          <Col>
            <h1 className="title">Hola :)</h1>
            <div>
              <h1 className="sub-title">ponete cómodx</h1>
              <h1 className="sub-title"> y elegite algo</h1>
            </div>
            <div className="contenedor-link-tienda">
              <Link to={"/tienda"} style={{ textDecoration: "none" }}>
                <div className="link-tienda">Vistitá la tienda</div>
              </Link>
            </div>
          </Col>
        </Container>
      </div>
      <div className="box-image"></div>
    </header>
  );
};

export default Header;
