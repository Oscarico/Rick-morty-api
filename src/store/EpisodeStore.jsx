// src/store/episodeStore.js
import { create } from 'zustand';

export const useEpisodeStore = create((set) => ({
  episodeId: 1,
  setEpisodeId: (id) => set({ episodeId: id }),
}));
