import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavBarItem, NavBarIcon, NavbarTitle } from "../utils";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Header() {
  const location = useLocation();
  return (
    <div>
      <Container className="background-green header-radius p-3 d-none d-lg-block">
        <Row>
          <Col>
            <div className="d-flex">
              {NavbarTitle.map((item) => {
                return (
                  <React.Fragment key={item.id}>
                    <span className="pe-2">{item.icon}</span>
                    <p className="pe-2"> {item.text}</p>
                  </React.Fragment>
                );
              })}
            </div>
          </Col>
          <Col>
            <div className="d-flex justify-content-end header-hover-text">
              <p>
                Privacy Policy <span className="pe-1"> / </span>
              </p>
              <p>
                Terms of Use <span className="pe-1"> / </span>
              </p>
              <p className="pe-1">Sales and Refunds</p>
            </div>
          </Col>
        </Row>
      </Container>

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="/">
            <h1 className="color-green">Fruitables</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="justify-content-end nav-link">
            {NavBarItem.map((item) => {
              return (
                <Nav.Link
                  key={item.id}
                  to={item.pathName}
                  as={Link}
                  className={`me-2 ${
                    location.pathname === item.pathName ? "color-green" : ""
                  }`}
                >
                  {item.name}
                </Nav.Link>
              );
            })}
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            {NavBarIcon.map((item) => (
              <p className={`me-3 color-green icons-size`} key={item.id}>
                {item.icon}
              </p>
            ))}
            <p></p>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
