import React from 'react';
import '../App.css';
import MapCard from './MapCard';

function TrendyCards() {
  const places = ['karada', 'al-mansour', 'baghdad mall'];

  // You can create an array of JSX elements directly using map
  const trendyCards = places.map((place) => (
    <MapCard key={place} name={place} />
  ));

  return <div className='trendy-cards'>{trendyCards}</div>;
}

export default TrendyCards;

