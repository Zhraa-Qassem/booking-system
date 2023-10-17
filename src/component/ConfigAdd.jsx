import React, { useEffect, useState } from "react";
import "./App.css";
import { Auth } from "./components/auth";
import { db, auth, storage } from "./config/firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";


function App() {
  const [routeList, setRouteList] = useState([]);
  const [reportedRoutes, setReportedRoutes] = useState([]);

  // New Route States
  const [newStartingPoint, setNewStartingPoint] = useState("");
  const [newDestination, setNewDestination] = useState("");
  const [newStops, setNewStops] = useState([]);
  const [newReported, setNewReported] = useState(false);

  // Report States
  const [reportRouteId, setReportRouteId] = useState("");
  const [reportMessage, setReportMessage] = useState("");


  const routesCollectionRef = collection(db, "routes");
  const reportedRoutesCollectionRef = collection(db, "reportedRoutes");

  const getRouteList = async () => {
    try {
      const data = await getDocs(routesCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setRouteList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  const getReportedRoutes = async () => {
    try {
      const data = await getDocs(reportedRoutesCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setReportedRoutes(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getRouteList();
    getReportedRoutes();
  }, []);

  const onSubmitRoute = async () => {
    try {
      const newRoute = {
        startingPoint: newStartingPoint,
        destination: newDestination,
        stops: newStops,
        reported: newReported,
      };

      await addDoc(routesCollectionRef, newRoute);
      getRouteList();
    } catch (err) {
      console.error(err);
    }
  };

  const reportRoute = async () => {
    try {
      await deleteDoc(doc(routesCollectionRef, reportRouteId));

      const reportedRoute = {
        routeId: reportRouteId,
        message: reportMessage,
      };

      await addDoc(reportedRoutesCollectionRef, reportedRoute);

      getRouteList();
      getReportedRoutes();
    } catch (err) {
      console.error(err);
    }
  };



  return (
    <div className="App">
      <Auth />

      <div>
        <input
          placeholder="Starting Point..."
          onChange={(e) => setNewStartingPoint(e.target.value)}
        />
        <input
          placeholder="Destination..."
          onChange={(e) => setNewDestination(e.target.value)}
        />
        <input
          placeholder="Stops (comma-separated)..."
          onChange={(e) => setNewStops(e.target.value.split(","))}
        />
        <input
          type="checkbox"
          checked={newReported}
          onChange={() => setNewReported(!newReported)}
        />
        <label> Reported</label>
        <button onClick={onSubmitRoute}> Submit Route</button>
      </div>

      <div>
        {routeList.map((route) => (
          <div key={route.id}>
            <h1 style={{ color: route.reported ? "red" : "black" }}>
              {route.startingPoint} to {route.destination}
            </h1>
            <p> Stops: {route.stops.join(", ")} </p>

            {route.reported ? (
              <p>This route has been reported.</p>
            ) : (
              <button
                onClick={() => setReportRouteId(route.id)}
                data-bs-toggle="modal"
                data-bs-target="#reportModal"
              >
                Report Route
              </button>
            )}
          </div>
        ))}
      </div>

   
    </div>
  );
}

export default App;
