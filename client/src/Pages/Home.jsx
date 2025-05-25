import React from 'react';
import { Button } from 'react-bootstrap';

const Home = () => (
  <div className="text-center">
    <h1>Welcome to AgriSure</h1>
    <p>Your smart partner for climate-aware farming and crop insurance planning.</p>
    <Button variant="success" href="/register">Get Started</Button>
  </div>
);

export default Home;
