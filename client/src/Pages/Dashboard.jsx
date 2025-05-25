import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaLeaf, FaThermometerHalf, FaTint, FaExclamationTriangle } from 'react-icons/fa';
// import MapPlaceholder from '../components/MapPlaceholder'; // You can replace this with an actual map

const Dashboard = () => {
  return (
    <Container fluid className="mt-3">
      <h3>Dashboard</h3>
      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Farm Overview</Card.Title>
              {/* <MapPlaceholder /> */}
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Crop Recommendation</Card.Title>
              <p className="text-muted">Based on climate conditions</p>
              <h2>🌽 Maize</h2>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <Card.Title><FaLeaf /> Crop Suggestion</Card.Title>
              <p>🌡️ 18°C &nbsp; 💧 12 mm &nbsp; ⚠️ Drought</p>
            </Card.Body>
          </Card>

          <Card>
            <Card.Body>
              <Card.Title>☀️ Weather Summary</Card.Title>
              <p><strong>Temperature:</strong> 18°C</p>
              <p><strong>Rainfall:</strong> 12 mm</p>
              <p><strong>Drought Risk:</strong> Moderate</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
