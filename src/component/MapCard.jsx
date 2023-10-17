import React from 'react';
import '../App.css'
import map from '../assets/map.jpeg';

function MapCard({ name }) {
  return (
    <div className='card'>
      <h3>{name}</h3>
      <img src={map} alt='map' />
    </div>
  );
}

export default MapCard;

