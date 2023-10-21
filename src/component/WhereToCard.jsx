import React, { useState } from 'react';
import { useAuth } from '../config/AuthContext';
import imge from '../assets/imga.jpeg';
import Button from '../component/Button';
import { useNavigate } from 'react-router-dom';
import { db } from "../config/firebase-config";
import { collection, query, where, getDocs } from 'firebase/firestore';

function WhereToCard() {
  const [userLocation, setUserLocation] = useState('');
  const [destination, setDestination] = useState('');
  const navigate = useNavigate();
    const { user } = useAuth();

  const handleLocationChange = (e) => {
    setUserLocation(e.target.value);
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleRouteSubmit = async () => {
    if (userLocation && destination) {
      const routesCollectionRef = collection(db, 'initialRoutes');
      const routesQuery = query(routesCollectionRef, where('startingPoint', '==', userLocation), where('destination', '==', destination));
      
      try {
        const querySnapshot = await getDocs(routesQuery);
        const routesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const reversedRoutes = routesData.map((route) => {
          if (route.startingPoint === userLocation && route.destination === destination) {
            return route;
          } else if (route.startingPoint === destination && route.destination === userLocation) {
            return {
              ...route,
              startingPoint: userLocation,
              destination: destination,
              stops: route.stops.slice().reverse(),
            };
          } else {
            return route;
             console.log(route)
          }
          console.log(route)
        }
       
        );

        navigate('/filtered-routes', { state: { filteredRoutes: reversedRoutes } });
      } catch (error) {
        console.error('Error fetching routes: ', error);
      }
    } else {
      alert('Invalid location or destination. Please try again.');
    }
  };

  const districts = [
    'ساحة عدن',
    'شارع كرادة خارج',
    'شارع كرادة داخل',
    'ساحة الخلاني',
    'ساحة دمشق',
    'ساحة النسور',
    'نفق الشرطة',
    'مول بابلون',
    'Outer Karrada',
    'Outer Karrada',
    'Outer Karrada',
    'Outer Karrada',
    'Outer Karrada',
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
