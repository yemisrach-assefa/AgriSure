// components/Contact.js
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './Contact.css'; // Custom CSS for animation

const Contact = () => (
  <div id="contact" className="contact-section d-flex align-items-center justify-content-center">
    <Container className="text-center p-4 animated-card">
      <h2 className="mb-4">Get in Touch</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Your Name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="Your Email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control as="textarea" rows={3} placeholder="Your Message" />
        </Form.Group>
        <Button variant="success">Send Message</Button>
      </Form>
    </Container>
  </div>
);

export default Contact;
