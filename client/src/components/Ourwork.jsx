// components/OurWork.js
import React from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';
import './OurWork.css';

const works = [
  { title: "Crop Recommendations", desc: "Get smart suggestions based on location and weather ." },
  { title: "Insurance Integration", desc: "Easy access to crop protection and financial risk support." },
  { title: "Climate Insights", desc: "Real-time analysis of climate threats to your region." },
  { title:"Data-Driven Insights",desc: " Our platform leverages real-time environmental data, satellite imaging, and AI to support smart farming decisions." },
  { title: "Sustainable Farming", desc: "We promote climate-resilient agriculture by providing accurate crop and soil insights to boost sustainability and productivity."}
];

const OurWork = () => (
  <div id="services" className="our-work-section d-flex align-items-center justify-content-center">
    <Container>
      <h2 className="text-center mb-5">Our Work</h2>
      <Row>
        {works.map((work, idx) => (
          <Col md={4} className="mb-4 " key={idx}>
            <Card className="work-card animated-fade-in">
              <Card.Body>
                <Card.Title>{work.title}</Card.Title>
                <Card.Text>{work.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </div>
);

export default OurWork;
