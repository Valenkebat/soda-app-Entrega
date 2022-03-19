import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Col, NavDropdown, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import categorias from "../../utils/categorias";

const NavbarC = () => {
  return (
    <>
      <Navbar
        sticky="top"
        className="n"
        expand="lg"
        style={{
          backgroundColor: "#EFE7E1",
          boxShadow: "0px 4px 22px rgba(0, 0, 0, 0.15)",
        }}
      >
        <Col fluid="True" className="justify-content-start">
          <Navbar.Brand style={{ padding: "0% 0% 0% 5%" }}>
            <NavLink to="/">
              <img
                src="./Logo.svg"
                className="d-inline-block align-top"
                alt="Soda logo"
              />
            </NavLink>
          </Navbar.Brand>
        </Col>
        <Col fluid="True" className="justify-content-end" xs={5}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-center"
          >
            <Nav id="l">
              <div className="contLink">
                <NavLink to="/tienda">Tienda</NavLink>
              </div>
              <NavDropdown title="Categorías" id="basic-nav-dropdown">
                {categorias.map((cat, index) => (
                  <NavDropdown.Item href={cat} key={index}>
                    {cat}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              <div className="contLink">
                <NavLink to="/nosotras">Nosotras</NavLink>
              </div>
              <div className="contLink">
                <NavLink to="/creadorxs">Creadorxs</NavLink>
              </div>
              <div className="contLink">
                <NavLink to="dudas">Dudas</NavLink>
              </div>
              <div className="contLink">
                <NavLink to="/sumate">Sumate</NavLink>
              </div>
              <div className="contLink">
                <NavLink to="/contacto">Contacto</NavLink>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Col>
        <Col fluid="True" className="justify-content-center" xs={2}>
          <Navbar.Brand>
            <CartWidget />
          </Navbar.Brand>
        </Col>
      </Navbar>
    </>
  );
};

export default NavbarC;
