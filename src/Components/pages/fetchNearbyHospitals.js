// src/utils/fetchNearbyHospitals.js
import axios from 'axios';

const GOOGLE_PLACES_API_KEY = 'YOUR_GOOGLE_PLACES_API_KEY';

const fetchNearbyHospitals = async (city, state) => {
  try {
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?query=hospitals+in+${city}+${state}&key=${GOOGLE_PLACES_API_KEY}`
    );

    if (response.data && response.data.results) {
      return response.data.results.slice(0, 5); // Limit to the first 5 results
    } else {
      throw new Error('Unable to fetch nearby hospitals.');
    }
  } catch (error) {
    console.error('Error fetching nearby hospitals:', error.message);
    return [];
  }
};

export default fetchNearbyHospitals;
