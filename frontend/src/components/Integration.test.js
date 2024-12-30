import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';
import FlightList from './FlightList';
import { getFlights } from '../api/api';

// Mock API
jest.mock('../api/api', () => ({
    getFlights: jest.fn(),
}));

beforeEach(() => {
    getFlights.mockResolvedValue({
        data: [
            { id: 1, name: 'Flight 101', departure: 'New York', arrival: 'London', price: 500 },
            { id: 2, name: 'Flight 102', departure: 'San Francisco', arrival: 'Tokyo', price: 700 },
        ],
    });
});

test('BookingForm updates after flight selection from FlightList', async () => {
    render(
        <>
            <FlightList />
            <BookingForm />
        </>
    );

    // Wait for the flight list to load
    const flightItems = await screen.findAllByRole('listitem');
    expect(flightItems).toHaveLength(2); // Ensure two flights are rendered

    // Simulate selecting a flight from the dropdown
    const flightDropdown = screen.getByRole('combobox'); // Locate the dropdown by role
    fireEvent.change(flightDropdown, { target: { value: '1' } }); // Select Flight 101 (id: 1)

    // Verify that the dropdown reflects the selected value
    expect(flightDropdown.value).toBe('1'); // Ensure the value matches Flight 101's ID
});

afterEach(() => {
    jest.clearAllMocks();
});