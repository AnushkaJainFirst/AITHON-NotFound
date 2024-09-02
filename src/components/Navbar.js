import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand href="#">Bitcoin Dashboard</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link>
            <Link to="price" smooth={true} duration={500}>
              Real-time Price
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="news" smooth={true} duration={500}>
              Recent News
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="trends" smooth={true} duration={500}>
              Historical Trends
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="quiz" smooth={true} duration={500}>
              Quiz
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="wallet" smooth={true} duration={500}>
              Crypto Wallet
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
