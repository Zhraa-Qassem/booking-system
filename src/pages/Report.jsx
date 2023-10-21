import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Navbar from '../component/NavBar';
import Footer from '../component/Footer';
import Button from '../component/Button';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase-config';
import '../App.css';
import '../responsive.css'

function Report() {
  const { routeId: initialRouteId } = useParams();
  const [routeId, setRouteId] = useState(initialRouteId);
  const location = useLocation();
  const [issue, setIssue] = useState('');
  

  const route = location.state.route;
  const handleRouteIdChange = (event) => {
    setRouteId(event.target.value);
  };
  const reportRoute = async () => {
    try {
      const reportedRoute = {
        destination: route.destination,
        issue,
        reported: true,
        startingPoint: route.startingPoint,
        stops: route.stops,
      };

      // Add the reported route to the reportedRoutes collection
      await addDoc(collection(db, 'reportedRoutes'), reportedRoute);

      // Redirect to another page or perform further actions if needed

      // Optionally, you can clear the issue input field after reporting
      setIssue('');

    } catch (error) {
      console.error('Error reporting route: ', error);
    }
  }

  return (
    <div className="report">
      <Navbar />
      <div className='report-header'>
      <h1>
        Report <span style={{ color: 'white' }}> the issue</span>
      </h1>
      </div>
      <div>
        <input
          className="report-input"
          placeholder="Route ID"
          value={routeId}
          onChange={handleRouteIdChange}
          
        />
      </div>
      <input
        className="message"
        placeholder="Your issue..."
        value={issue}
        onChange={(e) => setIssue(e.target.value)}
        style={{ height: '449px' }}
      />
      <Button label={'Report'} className={'wt-btn'} onClick={reportRoute} />
      <Footer />
    </div>
  );
}

export default Report;
