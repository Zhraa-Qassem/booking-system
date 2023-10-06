import React, { useState } from 'react';

const BookingForm = (props) => {
  const [Date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [Guests, setGuests] = useState("");
  const [Occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submitForm(e);
  }

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  }

  return (
    <div className="custom-booking-form">
      <h3>Reservation Form</h3>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div>
            <label htmlFor='book-date'>Choose Date</label>
            <input
              id='book-date'
              value={Date}
              onChange={(e) => handleChange(e.target.value)}
              type='date'
              required
            />
          </div>

          <div>
            <label htmlFor='book-time'>Choose Time:</label>
            <select
              id='book-time'
              value={times}
              onChange={(e) => setTimes(e.target.value)}
            >
              <option value="">Select a Time</option>
              {props.availableTimes.availableTimes.map((availableTime) => (
                <option key={availableTime}>{availableTime}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor='book-guests'>Number of Guests:</label>
            <input
              id='book-guests'
              min='1'
              value={Guests}
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor='book-occasion'>Occasion:</label>
            <select
              id='book-occasion'
              key={Occasion}
              value={Occasion}
              onChange={(e) => setOccasion(e.target.value)}
            >
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </div>

          <div className='btnReceive'>
            <input
              aria-label='On Click'
              type='submit'
              value={"Make Your Reservation"}
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default BookingForm;
