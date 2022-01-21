import React, { Component } from 'react'
import "./Footer.css"
import { Navbar, Container } from "react-bootstrap";
export default class Footer extends Component {
    render() {
        return (
            <Navbar fixed="bottom" bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="#home">
                  <span>Phạm Quang Minh 20183800 Demo Project3</span>
                </Navbar.Brand>
              </Container>
            </Navbar>
        );
    }
}
