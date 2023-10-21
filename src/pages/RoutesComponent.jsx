import React, { useEffect, useState } from "react";
import { db } from "../config/firebase-config";
import { collection, getDocs, doc, updateDoc, deleteDoc, addDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import RouteCard from "../component/RouteCard";
import Navbar from "../component/NavBar";
import Footer from "../component/Footer";
import { useLocation } from 'react-router-dom'; // Import useLocation

function RoutesComponent() {
  const [routes, setRoutes] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  // Access query parameters from useLocation
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userLocation = queryParams.get('userLocation');
  const destination = queryParams.get('destination');

useEffect(() => {
  const fetchRoutes = async () => {
    try {
      const routesCollectionRef = collection(db, "initialRoutes");
      const querySnapshot = await getDocs(routesCollectionRef);
      const routesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      let filteredRoutes = routesData;

      if (userLocation && destination) {
        filteredRoutes = routesData.filter((route) => {
          return route.startingPoint === userLocation && route.destination === destination;
        });
      }

      setRoutes(filteredRoutes);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching routes: ", error);
      setLoading(false);
    }
  };

  fetchRoutes();
}, [userLocation, destination]);


  const reportRoute = async (route) => {
    try {
      const routeRef = doc(db, "initialRoutes", route.id);
      const updatedRoute = {
        ...route,
        reported: true,
      };

      await updateDoc(routeRef, updatedRoute);

      if (route.reported) {
        await deleteDoc(routeRef);
      } else {
        const reportedRouteRef = collection(db, "reportedRoutes");
        await addDoc(reportedRouteRef, updatedRoute);
      }

      navigate(`/Report/${route.id}`, { state: { route: updatedRoute } });
    } catch (error) {
      console.error("Error reporting route: ", error);
    }
  }

  const deleteRoute = async (route) => {
    try {
      const routeRef = doc(db, "initialRoutes", route.id);
      await deleteDoc(routeRef);
      setRoutes((prevRoutes) => prevRoutes.filter((r) => r.id !== route.id));
    } catch (error) {
      console.error("Error deleting route: ", error);
    }
  };

  return (
    <div className="routes">
      <Navbar />
      <h1>
        <span style={{ color: 'black' }}>  Your</span> Routes
      </h1>

      {loading ? (
        <div className="loading">
          <p>Loading...</p>
        </div>
      ) : routes.length === 0 ? (
        <p>No matching routes found</p>
      ) : (
        routes.map((route, index) => (
          <RouteCard key={route.id} route={route} index={index} reportRoute={reportRoute} deleteRoute={deleteRoute} />
        ))
      )}
      
      <Footer />
    </div>
  );
}

export default RoutesComponent;
