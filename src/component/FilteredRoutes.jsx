import React from 'react';
import RouteCard from './RouteCard';
import { useLocation } from 'react-router-dom';
import '../App.css';

function FilteredRoutes() {
  const location = useLocation();
  const { filteredRoutes } = location.state;

  return (
    <div className='FilteredRoutes'>
      <h1>Filtered Routes</h1>
      {filteredRoutes.map((route, index) => (
        <RouteCard key={route.id} route={route} index={index} />
      ))}
    </div>
  );
}

export default FilteredRoutes;
