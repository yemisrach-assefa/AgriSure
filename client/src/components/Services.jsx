import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Services = () => (
  <div id="services" className="bg-light py-5">
    <Container>
      <h2>Our Services</h2>
      <Row>
        <Col md={4}><h5>Risk Analysis</h5><p>Weather and climate risk predictions</p></Col>
        <Col md={4}><h5>Crop Recommendation</h5><p>Smart suggestions based on location</p></Col>
        <Col md={4}><h5>Insurance Tools</h5><p>Affordable and reliable insurance packages</p></Col>
      </Row>
    </Container>
  </div>
);

export default Services;
