import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Booking from './Booking';
import ConfirmedBooking from './ConfirmedBooking';

const Main = () => {
  // State to store available times
  const [availableTimes, setAvailableTimes] = useState([]);

  // Function to fetch available times
  const fetchAvailableTimes = (date) => {
    // Implement your logic here to fetch available times based on the date
    // Example logic:
    const randomTimes = ['17:00', '17:30', '18:00', '18:30', '19:00'];
    return randomTimes;
  };

  // Function to handle form submission
  const handleFormSubmit = (formData) => {
    // Implement your logic here to submit the form data
    // Example logic:
    console.log('Form data submitted:', formData);
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route
          path="/booking"
          element={
            <Booking
              availableTimes={availableTimes}
              fetchAvailableTimes={fetchAvailableTimes}
              setAvailableTimes={setAvailableTimes}
              handleFormSubmit={handleFormSubmit}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
};

export default Main;
