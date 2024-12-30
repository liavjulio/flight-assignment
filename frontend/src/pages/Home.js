import React from 'react';
import FlightList from '../components/FlightList';
import BookingForm from '../components/BookingForm';
import BookingList from '../components/BookingList';

const Home = () => (
    <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Flight Booking System</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <FlightList />
            <BookingForm />
        </div>
        <div style={{ marginTop: '40px' }}>
            <BookingList />
        </div>
    </div>
);

export default Home;