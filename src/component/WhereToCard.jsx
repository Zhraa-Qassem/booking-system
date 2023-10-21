import React, { useState, useEffect } from 'react';
import { useAuth } from '../config/AuthContext';
import imge from '../assets/imga.jpeg';
import Button from '../component/Button';
import { useNavigate } from 'react-router-dom';
import { db } from '../config/firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import RouteCard from '../component/RouteCard';

function WhereToCard() {
  const [userLocation, setUserLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [routes, setRoutes] = useState([]); // Define state variable for routes
  const [loading, setLoading] = useState(false); // Define state variable for loading
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLocationChange = (e) => {
    setUserLocation(e.target.value);
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleRouteSubmit = async () => {
    if (userLocation && destination) {
      setLoading(true);

      // Fetch routes from the database and filter them
      const routesCollectionRef = collection(db, 'initialRoutes');
      const querySnapshot = await getDocs(routesCollectionRef);
      const routesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // filtering logic based on user input
      const filteredRoutes = routesData.filter((route) => {
        //
        // routes where the userLocation is a stop
        return route.stops.includes(userLocation) && route.stops.includes(destination);
      });

      setRoutes(filteredRoutes);
      setLoading(false);

      // You can navigate to the routes component with the filtered routes
      navigate('/RoutesComponent', { state: { filteredRoutes } });
    } else {
      alert('Invalid location or destination. Please try again.');
    }
  }
  

  const districts = [
    'ساحة عدن',
    'شارع كرادة داخل',
    'ساحة الخلاني',
    'ساحة دمشق',
    'ساحة النسور',
    'نفق الشرطة',
    'مول بابلون',
    'ساحة الطيران',
    'البياع',
    'الجادرية',
    'مول المنصور',
    'معرض بغداد',
        'شارع كرادة داخل',
  ];

  return (
    <div className='where-card'>
      <div className='where-form'>
        <div className='where-header'>
          <h1>
            <span style={{ color: 'black' }}> Find your</span> route
          </h1>
          <div className='where-p'>
            {user ? (
              <p>Hello, {user.displayName}</p>
            ) : (
              <p>Hello there</p>
            )}
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
              <option value="">Select the location</option>
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
              <option value="">Select the location</option>
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
