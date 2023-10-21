import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { useAuth } from '../config/AuthContext';
import { db } from "../config/firebase-config";
import Button from '../component/Button';
import green from '../assets/green.png';
import '../responsive.css'
import '../App.css'

function AddCard() {
  const [newStartingPoint, setNewStartingPoint] = useState("");
  const [newDestination, setNewDestination] = useState("");
  const [newStops, setNewStops] = useState([""]); // Initialize with one empty stop
  const { user } = useAuth();

  const routesCollectionRef = collection(db, "initialRoutes");

  const onSubmitRoute = async () => {
    try {
      // Filter out empty stops before saving
      const stopsArray = newStops.filter(stop => stop.trim() !== "");
      const newRoute = {
        startingPoint: newStartingPoint,
        destination: newDestination,
        stops: stopsArray,
        reported: false,
      };

      await addDoc(routesCollectionRef, newRoute);
      // Clear form fields
      setNewStartingPoint("");
      setNewDestination("");
      setNewStops([""]); // Reset to one empty stop
    } catch (err) {
      console.error("Error adding new route to Firestore:", err);
    }
  };

  const handleStopChange = (index, value) => {
    const updatedStops = [...newStops];
    updatedStops[index] = value;
    setNewStops(updatedStops);
  };

  const addStop = () => {
    setNewStops([...newStops, ""]);
  };
  const deleteStop = (index) => {
    const updatedStops = [...newStops];
    updatedStops.splice(index, 1);
    setNewStops(updatedStops);
  };

  return (
    <div className='add-card'>
      <div className='add-form'>
        <div className='add-header'>
          <h1> <span style={{ color: 'black' }}> thank you  </span>for cooperating!</h1>
          <div className='add-p'>
          {user ? (
            <p>Hello, {user.displayName}</p>
          ) : (
            <p>Hello there</p>
          )}
            <p>please Enter your location and destination below.</p>
          </div>
        </div>
        <form>
          <div className='add-input'>
            <label>Starting Point:</label>
            <input
              placeholder="ex: Damascus Square......."
              value={newStartingPoint}
              onChange={(e) => setNewStartingPoint(e.target.value)}
            />
            <hr></hr>
          </div>
          <div className='add-input'>
            <label>Destination:</label>
            <input
              placeholder="ex: Outer Karrada....... "
              value={newDestination}
              onChange={(e) => setNewDestination(e.target.value)}
            />
            <hr></hr>
          </div>
          <div className='add-input'>
            <label>Stops:</label>
            <div className="stop-x">
            {newStops.map((stop, index) => (
              <div key={index} className="stop-container">
                <input
                  type="text"
                  value={stop}
                  onChange={(e) => handleStopChange(index, e.target.value)}
                />
                <hr style={{ width: '274px' }}></hr>
                <button className='delete-stop-btn' type="button" onClick={() => deleteStop(index)}>
                X
              </button>
                
               
               
              </div>
            ))}
            <div className="btn-container">
              <button className='add-btn' type="button" onClick={addStop}>
                Add Stop
              </button>
            </div>
          </div>
          
          </div>
          
        </form>
        <Button label="Submit" className="btn" onClick={onSubmitRoute} />
      </div>
      <div className='image-container'>
        <img src={green} alt='add ' className='centered-image' />
      </div>
    </div>
  );
}

export default AddCard;
