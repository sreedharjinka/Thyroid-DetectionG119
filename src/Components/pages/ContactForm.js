// src/ThyroidSpecialistsMap.js
import React, { useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const ThyroidSpecialistsMap = () => {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [coordinates, setCoordinates] = useState([]);
  const [specialists, setSpecialists] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://dev.virtualearth.net/REST/v1/Locations/${city}, ${state}?key=Ap5c7_2zu4g6jRpJkhBMj-cgAUEGYESVXgwCOQqfGYEUiEX91kk2KH8thPymLrA3`
      );

      const { resourceSets } = response.data;
      if (resourceSets && resourceSets.length > 0) {
        const { coordinates } = resourceSets[0].resources[0].point;
        console.log('Coordinates:', coordinates);
        setCoordinates([coordinates.latitude, coordinates.longitude]);
        const specialistsResponse = await axios.get(
          `https://dev.virtualearth.net/REST/v1/LocalSearch/?query=thyroid%20specialist&userLocation=${coordinates.latitude},${coordinates.longitude}&key=Ap5c7_2zu4g6jRpJkhBMj-cgAUEGYESVXgwCOQqfGYEUiEX91kk2KH8thPymLrA3=5`
        );
        setSpecialists(specialistsResponse.data.resourceSets[0].resources);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <div>
        <label>
          City:
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
        </label>
        <label>
          State:
          <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
        </label>
        <button onClick={handleSearch}>Search</button>
      </div>
      {coordinates.length > 0 && (
        <MapContainer center={coordinates} zoom={13} style={{ height: '400px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={coordinates}>
            <Popup>Your Location</Popup>
          </Marker>
          {specialists.map((specialist, index) => (
            <Marker
              key={index}
              position={[
                specialist.point.coordinates[0],
                specialist.point.coordinates[1],
              ]}
            >
              <Popup>
                <div>
                  <h3>{specialist.name}</h3>
                  <p>{specialist.address.formattedAddress}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </div>
  );
};

export default ThyroidSpecialistsMap;
