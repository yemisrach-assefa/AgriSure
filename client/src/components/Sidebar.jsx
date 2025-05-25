// components/Sidebar.js
import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // optional custom styles

const Sidebar = () => {
  return (
    <div className="sidebar bg-light p-3" style={{ minHeight: '100vh' }}>
      <h4 className="mb-4">AgriSure</h4>
      <Nav defaultActiveKey="/" className="flex-column">
        <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
        <Nav.Link as={Link} to="/Register">Register</Nav.Link>
        <Nav.Link as={Link} to="/cropsuggestion">CropSuggestion</Nav.Link>
        <Nav.Link as={Link} to="/insights"> Weather Insights</Nav.Link>
        <Nav.Link as={Link} to="/package">Insurance Packages</Nav.Link>
        <Nav.Link as={Link} to="/Claim">Claims</Nav.Link>
        <Nav.Link as={Link} to="/Sitting">Sittings</Nav.Link>
       
    </Nav>

    </div>
  );
};

export default Sidebar;
