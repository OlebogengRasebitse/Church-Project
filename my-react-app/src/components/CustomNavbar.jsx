import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomNavbar() {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar className='navbar fixed-top' bg="light" expand="lg" expanded={expanded}>
      <Container>
        <Navbar.Brand as={Link} to="/">Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={toggleNavbar}>Home</Nav.Link>
            <Nav.Link as={Link} to="/media" onClick={toggleNavbar}>Media</Nav.Link>
            <Nav.Link as={Link} to="/blog" onClick={toggleNavbar}>Blog</Nav.Link>
            <Nav.Link as={Link} to="/donations" onClick={toggleNavbar}>Donations</Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={toggleNavbar}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
