import React, { useState } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import "../css/navigationbar.css";

const NavigationBar = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      <Navbar collapseOnSelect fixed="top" expand="sm" bg="light">
        <Container>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              setClick(!click);
              console.log(click);
            }}
          >
            {click ? (
              <span className="navbar-toggler-icon myicon"></span>
            ) : (
              <span className="navbar-toggler-icon"></span>
            )}
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="container-fluid">
              <Nav.Item>
                <Nav.Link href="/">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/">Category</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/">About Us</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/">Blog</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/">Contact</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/">Help</Nav.Link>
              </Nav.Item>
              <Nav.Item className="login-nav-item">
                <Nav.Link href="/login">Login</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
