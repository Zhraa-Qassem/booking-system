import React from 'react';
import '../App.css';
import '../responsive.css'
import { Link } from 'react-router-dom';

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
          <button className={buttonClass}>{route.startingPoint}</button>
        </div>
        <div className='points'>
          <p>Destination: </p>
          <button className={buttonClass}>{route.destination}</button>
        </div>
        <div className='points'>
          <p>Stops:</p>
          <ul>
            {Array.isArray(route.stops) ? (
              route.stops.length > 0 ? (
                route.stops.map((stop, stopIndex) => (
                  <li key={stopIndex}>
                    Stop {stopIndex + 1}: <button className={buttonClass}>{stop}</button>
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
         {/* <Link to={`/route/${route.id}`}>*/}
          <button className='v-btn'>View</button>
          {/*</Link>*/}
          <button className="delete-button" onClick={() => deleteRoute(route)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default RouteCard;
