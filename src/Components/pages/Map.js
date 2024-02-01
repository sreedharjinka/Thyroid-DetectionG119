// MapComponent.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css';

const MapComponent = () => {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [mapData, setMapData] = useState(null);
  const [apiKey] = useState('BING API');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `http://dev.virtualearth.net/REST/v1/Locations/${city},${state}?o=json&key=${apiKey}`
      );

      const coordinates =
        response.data &&
        response.data.resourceSets[0] &&
        response.data.resourceSets[0].resources[0] &&
        response.data.resourceSets[0].resources[0].point.coordinates;

      if (coordinates) {
        const [latitude, longitude] = coordinates;
        setMapData({ latitude, longitude });
        searchThyroidSpecialists(latitude, longitude);
      } else {
        console.error('Could not retrieve coordinates from Bing Maps API.');
      }
    } catch (error) {
      console.error('Error fetching data from Bing Maps API:', error);
    }
  };

  const searchThyroidSpecialists = async (latitude, longitude) => {
    try {
      // Perform a new search for "thyroid specialists" nearby using the obtained coordinates
      const response = await axios.get(
        `http://dev.virtualearth.net/REST/v1/LocalSearch/?query=thyroid+specialists&userMapView=${latitude},${longitude}&key=${apiKey}`
      );

      console.log('Thyroid Specialists Nearby:', response.data);
      // You can further process the data to display markers on the map

      // Note: react-leaflet component expects an array of Marker components
      // For simplicity, we use the first result for demonstration purposes
      const markers = response.data.resourceSets[0].resources.map((resource) => (
        <Marker
          key={resource.id}
          position={[resource.point.coordinates[0], resource.point.coordinates[1]]}
        >
          <Popup>{resource.name}</Popup>
        </Marker>
      ));

      setMapData({ latitude, longitude, markers });
    } catch (error) {
      console.error('Error searching for thyroid specialists:', error);
    }
  };

  return (
    <div className="map-container">
      <h2>Enter City and State</h2>
      <form onSubmit={handleSubmit}>
        <label>
          City:
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </label>
        <label>
          State:
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      {mapData && (
        <div className="map-container">
          <h2>Thyroid Specialists Near You</h2>
          <Map center={[mapData.latitude, mapData.longitude]} zoom={12}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {mapData.markers}
          </Map>
        </div>
      )}
    </div>
  );
};

export default MapComponent;
