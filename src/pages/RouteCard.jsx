import React from 'react';
import '../App.css';
import Button from '../component/Button';

function RouteCard({ route, index, reportRoute, deleteRoute }) {
  const buttonClass = 'dis-btn';

  return (
    <div className="route-card">
      <div className="route-header">
        <p><span style={{ fontWeight: 'bolder' }}>Route</span> {index + 1}</p>
        <p><span style={{ fontWeight: 'bolder' }}>ID:</span> {route.id}</p>
        <p><span style={{ fontWeight: 'bolder' }}>ETA:</span> 123</p>
      </div>
      <div className='route-dis'>
        <div className='points'>
          <p>Starting Point:</p>
          <Button className={buttonClass}>{route.startingPoint}</Button>
          <Button className={buttonClass}>hi</Button>
        </div>
        <div className='points'>
          <p>Destination: </p>
          <Button className={buttonClass}>{route.destination}</Button>
        </div>
        <div className='points'>
          <p>Stops:</p>
          <ul>
            {Array.isArray(route.stops) ? (
              route.stops.length > 0 ? (
                route.stops.map((stop, stopIndex) => (
                  <li key={stopIndex}>
                    Stop {stopIndex + 1}: <Button className={buttonClass}>{stop}</Button>
                  </li>
                ))
              ) : (
                <li>No stops available</li>
              )
            ) : (
              <li>Stops data unavailable</li>
            )}
          </ul>
        </div>
        <div className='btn-style'>
          <button className="report-button" onClick={() => reportRoute(route)}>
            ! Report
          </button>
          <button className='btn'>View</button>
          <button className="delete-button" onClick={() => deleteRoute(route)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default RouteCard;
