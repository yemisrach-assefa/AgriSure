import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './Hero.css'; // Make sure to create this CSS file

const Home = () => (
  <div id='hero' className="home-hero d-flex align-items-center justify-content-center  ">
    <Container className="text-center text-light">
      <h1 className="display-3 fw-bold">Welcome to <span className="brand-text">AgriSure</span></h1>
      <p className="lead mb-4">Your smart partner for climate-aware farming and crop insurance planning.</p>
      <Button variant="light" size="lg" href="/register" className="hero-button">
        🌾 Get Started
      </Button>
    </Container>
  </div>
);

export default Home;
