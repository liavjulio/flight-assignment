import React, { useState, useEffect } from 'react';
import { getFlights } from '../api/api';
import './FlightList.css';
const FlightList = () => {
    const [flights, setFlights] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchFlights = async () => {
            try {
                const { data } = await getFlights();
                setFlights(data);
            } catch (error) {
                setError('Error fetching flights');
                if (process.env.NODE_ENV !== 'test') {
                    console.error('Error fetching flights:', error); // Log only in non-test environments
                }
            }
        };

        fetchFlights();
    }, []);

    return (
        <div>
            <h2>Available Flights</h2>
            {error && <p>{error}</p>}
            <ul>
                {flights.map((flight) => (
                    <li key={flight.id}>
                        {flight.name}: {flight.departure} to {flight.arrival} - ${flight.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FlightList;