// components/FarmerRegister.js
import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Register = () => {
  const [plots, setPlots] = useState([]);
  const [currentPlot, setCurrentPlot] = useState({
    name: "",
    size: "",
    lat: null,
    lng: null,
  });

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentPlot({
          ...currentPlot,
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      // (error) => alert("Location access denied or unavailable")
    );
  };

  const handleInputChange = (e) => {
    setCurrentPlot({ ...currentPlot, [e.target.name]: e.target.value });
  };

  const handleAddPlot = () => {
    if (currentPlot.lat && currentPlot.lng && currentPlot.name && currentPlot.size) {
      setPlots([...plots, currentPlot]);
      setCurrentPlot({ name: "", size: "", lat: null, lng: null });
    } else {
      alert("Please fill all fields and get location");
    }
  };

  const handleSubmit = () => {
    alert("Submitted Plots: " + JSON.stringify(plots, null, 2));
    // Save to backend here
  };

  return (
    <Card className="p-4">
      <h3 className="mb-4">Register Your Plots</h3>

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Plot Name</Form.Label>
          <Form.Control
            name="name"
            value={currentPlot.name}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Plot Size (in hectares)</Form.Label>
          <Form.Control
            name="size"
            value={currentPlot.size}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant="outline-primary" onClick={getCurrentLocation} className="mb-3">
          Get Current Location
        </Button>

        {currentPlot.lat && currentPlot.lng && (
          <div className="mb-3">
            <MapContainer center={[currentPlot.lat, currentPlot.lng]} zoom={13} style={{ height: "300px", width: "100%" }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
              />
              <Marker position={[currentPlot.lat, currentPlot.lng]} />
            </MapContainer>
            <small>
              Lat: {currentPlot.lat.toFixed(4)}, Lng: {currentPlot.lng.toFixed(4)}
            </small>
          </div>
        )}

        <Button variant="success" onClick={handleAddPlot} className="me-2">
          Add Plot
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Submit All Plots
        </Button>
      </Form>

      {plots.length > 0 && (
        <div className="mt-4">
          <h5>Registered Plots</h5>
          <ul>
            {plots.map((plot, index) => (
              <li key={index}>
                {plot.name} — {plot.size} ha — [{plot.lat.toFixed(4)}, {plot.lng.toFixed(4)}]
              </li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
};

export default Register;
