import React, { useState } from 'react';
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';

const Userregister = () => {
  const [formData, setFormData] = useState({ phone: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert(`Phone: ${formData.phone} | Password: ${formData.password}`);
    // Connect to backend here
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="p-4 shadow">
            <h3 className="text-center mb-4">Login / Register</h3>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control name="phone" onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" onChange={handleChange} />
              </Form.Group>
              <div className="d-grid">
                <Button variant="success" type="submit">Continue</Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Userregister;
