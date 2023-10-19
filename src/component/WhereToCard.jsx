import React, { useState } from 'react';
import '../App.css';
import imge from '../assets/imga.jpeg';
import Button from '../component/Button';
import { useNavigate } from 'react-router-dom';

function WhereToCard() {

  // const [userLocation, setUserLocation] = useState('');
  // const [destination, setDestination] = useState('');
  // const navigate = useNavigate();

  // const handleRouteSubmit = () => {
  //   if (userLocation && destination) {
  //     navigate(`/filtered-routes/${userLocation}/${destination}`);
  //   } else {
  //     alert('Invalid location or destination. Please try again.');
  //   }
  // }
  
  // const districts = [
  //   'Outer Karrada',
  //   'Inner Karrada',
  //   'Khulani Square',
  //   'Aden Square',
  //   'Damascus Square',
  //   'Nisour Square',
  // ];

  const districts = [
    'ساحة عدن',
    'شارع كرادة خارج',
    'شارع كرادة داخل',
    'ساحة الخلاني',
    'ساحة دمشق',
    'ساحة النسور',
    'Outer Karrada',
    'Outer Karrada',
    'Outer Karrada',
    'Outer Karrada',
    'Outer Karrada',
    'Outer Karrada',
    'Outer Karrada',

  ]

  const [userLocation, setUserLocation] = useState('');
  const [destination, setDestination] = useState('');
  const navigate = useNavigate();

  const handleLocationChange = (e) => {
    setUserLocation(e.target.value);
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleRouteSubmit = () => {
    if (userLocation && destination) {
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
            <label>Where are you?</label>
            <select
            className='select-input'
              value={userLocation}
              onChange={handleLocationChange}
            >
              <option value="">Select a district</option>
              {districts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
            <hr></hr>
          </div>
          <div className='where-input'>
          <label>Where are you going?</label>
          <select
          className='select-input'
            value={destination}
            onChange={handleDestinationChange}
          >
            <option value="">Select a district</option>
            {districts.map((district) => (
              <option key={district} value={district}>
                {district}
              </option>
            ))}
          </select>
        </div>
        <hr></hr>
        </form>
<br></br>
        <Button label='Submit' className='btn' onClick={handleRouteSubmit} />
      </div>
      <div className='image-container'>
        <img src={imge} alt='find way' className='centered-image' />
      </div>
    </div>
  );
}

export default WhereToCard;
