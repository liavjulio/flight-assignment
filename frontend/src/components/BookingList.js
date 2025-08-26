import React, { useState, useEffect } from 'react';
import { bookingsApi } from '../services/api.js';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const { data } = await bookingsApi.getAll();
        setBookings(data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div>
      <h2>Bookings</h2>
      <ul>
        {bookings.map(booking => (
          <li key={booking.id}>
            Flight ID: {booking.flight_id}, Name: {booking.user_name}, Email: {booking.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingList;
