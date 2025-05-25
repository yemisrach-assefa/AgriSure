import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Userregister from '../Pages/Userregistration';
const NavigationBar = () => (
  <Navbar bg="light" expand="lg" sticky="top">
    <Container>
      <Navbar.Brand href="#">AgriSure</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="ms-auto">
          <Nav.Link href="#hero">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#how-it-works">How It Works</Nav.Link>
          <Nav.Link href="#contact">ContactUs</Nav.Link>
          <Nav.Link href="#login" onClick={<Userregister/>}>Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavigationBar;
