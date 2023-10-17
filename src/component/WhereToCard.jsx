import React, { useState } from 'react';
import '../App.css';
import find from '../assets/find-way.jpeg';
import Button from '../component/Button';
import { useNavigate } from 'react-router-dom';

function WhereToCard() {
  {/*my states */ }
  const [userLocation, setUserLocation] = useState('');
  const [destination, setDestination] = useState('');
  const navigate = useNavigate();

  const handleLocationInput = (e) => {
    setUserLocation(e.target.value);
  };

  const handleDestinationInput = (e) => {
    setDestination(e.target.value);
  };
  {/*function to put location into the api and convert it to coords  */ }
  const geocodeLocation = async (location) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${location}&format=json`
      );
      const data = await response.json();

      if (data.length > 0) {
        {/*data 0 is the best match   */ }
        const { lat, lon } = data[0];
        return { lat, lon };
      } else {
        return null;
      }
      {/*handel error  */ }
    } catch (error) {
      console.error('Error geocoding location:', error);
      return null;
    }
  };

  {/*putting the data from the user into the fetch function to convert string to coords */ }
  const handleRouteSubmit = async () => {
    const userCoords = await geocodeLocation(userLocation);
    const destinationCoords = await geocodeLocation(destination);

    if (userCoords && destinationCoords) {
      {/*after conversion navigate to another component called route */ }
      navigate('/route');
    } else {
      alert('Invalid location or destination. Please try again.');
    }
  };

  return (
    <div className='where-card'>
      <div className='where-form'>
        <div className='where-header'>
          <h1>
            <span style={{ color: 'black' }}> Find your</span> route
          </h1>
          <div className='where-p'>
            <p>hello user!</p>
            <p>please Enter your location and destination below.</p>
          </div>
        </div>
        <form>
          <div className='where-input'>
            <label>where are you ?</label>
            <input
              type='text'
              value={userLocation}
              onChange={handleLocationInput}

            />
            <hr />
          </div>
          <div className='where-input'>
            <label>where are you going ?</label>
            <input
              type='text'
              value={destination}
              onChange={handleDestinationInput}

            />
            <hr />
          </div>
        </form>

        <Button label='Submit' className='btn' onClick={handleRouteSubmit} />
      </div>
      <div className='image-container'>
        <img src={find} alt='find way ' className='centered-image' />
      </div>
    </div>
  );
}

export default WhereToCard;
