import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLeaf, FaSeedling, FaShieldAlt } from 'react-icons/fa';


const About = () => (
  <section id="about" className="about-section py-5 ">
    <Container>
      <Row className="mb-4 ">
        <h2 className="about-title text-center fw-bold mb-4">🌿 About AgriSure</h2>

        <Col md={6} >
          
          <img src="" alt=""/>
        </Col>
        <Col md={6}>
          
          <p className="about-subtitle">
            Empowering Farmers Through Smart Agriculture, Resilience, and Risk Protection.
          </p>
        </Col>
      </Row>
    </Container>
  </section>
);

export default About;
