// src/components/FarmMapping.js
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl:   'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const LocationMarker = ({ setCoordinates }) => {
  useMapEvents({
    click(e) {
      setCoordinates([e.latlng.lat, e.latlng.lng]);
    },
  });
  return null;
};

const FarmMapping = () => {
  const [coordinates, setCoordinates] = useState([9.03, 38.74]); // Default: Addis Ababa

  return (
    <div>
      <h3>Farm Mapping</h3>
      <p>Click on the map to set your farm's location</p>
      <MapContainer
        center={coordinates}
        zoom={12}
        style={{ height: '400px', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://osm.org/copyright">AgriSure</a>'
        />
        <Marker position={coordinates} />
        <LocationMarker setCoordinates={setCoordinates} />
      </MapContainer>
      <div className="mt-3">
        <strong>Selected Coordinates:</strong>
        <p>Latitude: {coordinates[0]}</p>
        <p>Longitude: {coordinates[1]}</p>
      </div>
    </div>
  );
};

export default FarmMapping;
