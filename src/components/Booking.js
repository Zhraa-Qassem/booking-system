import React from 'react';
import BookingForm from './BookingForm';

const Booking = ({ availableTimes, dispatch, submitForm }) => {
  return (
    <div className="custom-booking">
      <h2>Make a Reservation</h2>
      <p>Experience a delightful dining journey with us. Reserve your table now!</p>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
    </div>
  );
};

export default Booking;

