import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useThemeStore = create(
  persist(
    set => ({
      isDarkMode: false,
      toggleTheme: () => set(state => ({ isDarkMode: !state.isDarkMode })),
      setTheme: isDark => set({ isDarkMode: isDark }),
    }),
    {
      name: 'theme-storage',
    }
  )
);

export const useFlightStore = create((set, get) => ({
  flights: [],
  loading: false,
  error: null,
  selectedFlight: null,

  setFlights: flights => set({ flights }),
  setLoading: loading => set({ loading }),
  setError: error => set({ error }),
  setSelectedFlight: flight => set({ selectedFlight: flight }),

  clearError: () => set({ error: null }),
}));

export const useBookingStore = create((set, get) => ({
  bookings: [],
  loading: false,
  error: null,

  setBookings: bookings => set({ bookings }),
  setLoading: loading => set({ loading }),
  setError: error => set({ error }),

  addBooking: booking =>
    set(state => ({
      bookings: [...state.bookings, booking],
    })),

  clearError: () => set({ error: null }),
}));
