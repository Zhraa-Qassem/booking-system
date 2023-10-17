import React, { useEffect, useState } from "react";
import { db } from "../config/firebase-config";
import { collection, getDocs, doc, updateDoc, deleteDoc, addDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import '../App.css'
import RouteCard from "./RouteCard";
import Navbar from "../component/NavBar";
import Footer from "../component/Footer";
import '../responsive.css'

function RoutesComponent() {
  const [routes, setRoutes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        
        const routesCollectionRef = collection(db, "initialRoutes");
        const querySnapshot = await getDocs(routesCollectionRef);
        const routesData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(routesData);
        setRoutes(routesData);
      } catch (error) {
        console.error("Error fetching routes: ", error);
      }
      
    };

    fetchRoutes();
  }, []);

  const reportRoute = async (route) => {
    try {
      const routeRef = doc(db, "initialRoutes", route.id);
      const updatedRoute = {
        ...route,
        reported: true,
      };

      await updateDoc(routeRef, updatedRoute);

      if (route.reported) {
        // If the route is already reported, delete it from initialRoutes
        await deleteDoc(routeRef);
      } else {
        // If the route is not yet reported, move it to reportedRoutes
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
      // Optionally, you can remove the route from the state to update the UI.
      setRoutes((prevRoutes) => prevRoutes.filter((r) => r.id !== route.id));
    } catch (error) {
      console.error("Error deleting route: ", error);
    }
  };
  


  return (
   
    <div className="routes">
    <Navbar/>
    <h1 >
         <span style={{ color: 'black' }}>  Your</span> Routes
      </h1>
    {routes.map((route, index) => (
      <RouteCard key={route.id} route={route} index={index} reportRoute={reportRoute} deleteRoute={deleteRoute} />
    ))}
    <Footer/>
  </div>
  );
}

export default RoutesComponent;
