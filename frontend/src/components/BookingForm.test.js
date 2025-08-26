import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react';
import BookingForm from './BookingForm';
import { createBooking, getFlights } from '../api/api';

// Mock the API calls
jest.mock('../api/api', () => ({
  getFlights: jest.fn(),
  createBooking: jest.fn(),
}));

beforeAll(() => {
  // Mock the alert function
  window.alert = jest.fn();
});

describe('BookingForm', () => {
  beforeEach(() => {
    getFlights.mockResolvedValue({
      data: [
        { id: 1, name: 'Flight 101', departure: 'New York', arrival: 'London' },
        { id: 2, name: 'Flight 102', departure: 'San Francisco', arrival: 'Tokyo' },
      ],
    });
    createBooking.mockResolvedValue({});
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders the form with inputs and button', async () => {
    await act(async () => render(<BookingForm />));

    expect(screen.getByText(/Book a Flight/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Your Name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Your Email/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Book/i })).toBeInTheDocument();

    // Wait for flights to load
    expect(await screen.findByText(/Flight 101/i)).toBeInTheDocument();
    expect(screen.getByText(/Flight 102/i)).toBeInTheDocument();
  });

  test('handles user input and form submission', async () => {
    const handleSubmit = jest.fn();

    await act(async () => render(<BookingForm onSubmit={handleSubmit} />));

    // Simulate user input
    await act(async () => {
      fireEvent.change(screen.getByRole('combobox'), { target: { value: '1' } });
      fireEvent.change(screen.getByPlaceholderText(/Your Name/i), {
        target: { value: 'John Doe' },
      });
      fireEvent.change(screen.getByPlaceholderText(/Your Email/i), {
        target: { value: 'john.doe@example.com' },
      });
      fireEvent.click(screen.getByRole('button', { name: /Book/i }));
    });

    // Check API call
    expect(createBooking).toHaveBeenCalledWith({
      flight_id: '1',
      user_name: 'John Doe',
      email: 'john.doe@example.com',
    });
    expect(window.alert).toHaveBeenCalledWith('Booking successful!');
  });
});
