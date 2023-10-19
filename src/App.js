import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import WhereTo from './pages/WhereTo';
import Add from './pages/Add';
import Report from './pages/Report';
import RouteComponent from './pages/RouteCard';
import SignUp from './pages/SignUp';
import RoutesComponent from './pages/RoutesComponent';
import SignIn from './pages/SignIn';
import RouteDetail from './pages/RouteDetail';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// Initialize Firebase Authentication
const auth = getAuth();

function App() {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the user is logged in
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is logged in
        setUserIsLoggedIn(true);
      } else {
        // User is not logged in
        setUserIsLoggedIn(false);
      }
    });

    // Unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []); // Empty dependency array to run this effect only once

  return (
    <div className="app">
      <div>
        <Routes>
          <Route
            path="/"
            element={
              userIsLoggedIn ? (
                <Navigate to="/home" replace />
              ) : (
                <Navigate to="/signin" replace />
              )
            }
          />
          <Route path="/home" element={<Home />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/WhereTo" element={<WhereTo />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Add" element={<Add />} />
          <Route path="/Report" element={<Report />} />
          <Route path="/route" element={<RouteComponent />} />
          <Route path="/Report/:routeId" element={<Report />} />
          <Route path="/RoutesComponent" element={<RoutesComponent />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/route/:id" element={<RouteDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
