// src/store/LocationStore.js
import { create } from 'zustand';

export const useLocationStore = create((set) => ({
  locationId: 1,
  setLocationId: (id) => set({ locationId: id }),
}));
