import React, { useState, useEffect } from 'react';
import { getFlights, createBooking } from '../api/api';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        flight_id: '',
        user_name: '',
        email: '',
    });

    const [flights, setFlights] = useState([]);

    // Fetch available flights
    useEffect(() => {
        const fetchFlights = async () => {
            try {
                const { data } = await getFlights();
                setFlights(data);
            } catch (error) {
                console.error('Error fetching flights:', error);
            }
        };

        fetchFlights();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createBooking(formData);
            alert('Booking successful!');
            setFormData({ flight_id: '', user_name: '', email: '' });
        } catch (error) {
            console.error('Error creating booking:', error);
            alert('Booking failed. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Book a Flight</h2>
            <select
                name="flight_id"
                value={formData.flight_id}
                onChange={handleChange}
                required
            >
                <option value="">Select a Flight</option>
                {flights.map((flight) => (
                    <option key={flight.id} value={flight.id}>
                        {flight.name} - {flight.departure} to {flight.arrival}
                    </option>
                ))}
            </select>
            <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                value={formData.user_name}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <button type="submit">Book</button>
        </form>
    );
};

export default BookingForm;