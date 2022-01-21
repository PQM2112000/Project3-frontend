import "./Header.css";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import React from 'react';

export const Header = () => {
  const login = localStorage.getItem("login");
  return (
    <Navbar sticky="top" bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/home">Demo WebAPI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link eventKey="/home" href="/home">
              Home
            </Nav.Link>
            <Nav.Link eventKey="/history" href="/home">
              History
            </Nav.Link>
            <Nav.Link eventKey="/product" href="/product">
              Product
            </Nav.Link>
            <Nav.Link eventKey="/category" href="/category">
              Category
            </Nav.Link>
            {login ? (
              <Nav.Link href="/logout">Logout</Nav.Link>
            ) : (
              <Nav.Link eventKey="/login" href="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
