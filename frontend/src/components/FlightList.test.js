import { render, screen } from '@testing-library/react';
import FlightList from './FlightList';
import { getFlights } from '../api/api';

// Mock the API calls
jest.mock('../api/api', () => ({
  getFlights: jest.fn(),
}));

describe('FlightList', () => {
  beforeEach(() => {
    getFlights.mockResolvedValue({
      data: [
        { id: 1, name: 'Flight 101', departure: 'New York', arrival: 'London', price: 500 },
        { id: 2, name: 'Flight 102', departure: 'San Francisco', arrival: 'Tokyo', price: 700 },
      ],
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders the list of flights', async () => {
    render(<FlightList />);

    expect(screen.getByText(/Available Flights/i)).toBeInTheDocument();

    // Wait for flights to load
    expect(await screen.findByText(/Flight 101/i)).toBeInTheDocument();
    expect(screen.getByText(/New York to London/i)).toBeInTheDocument();
    expect(screen.getByText(/\$500/i)).toBeInTheDocument();

    expect(screen.getByText(/Flight 102/i)).toBeInTheDocument();
    expect(screen.getByText(/San Francisco to Tokyo/i)).toBeInTheDocument();
    expect(screen.getByText(/\$700/i)).toBeInTheDocument();
  });

  test('handles API errors gracefully', async () => {
    getFlights.mockRejectedValue(new Error('Failed to fetch flights'));

    render(<FlightList />);

    // Wait for the error message to appear
    expect(await screen.findByText(/Error fetching flights/i)).toBeInTheDocument();
  });
});
