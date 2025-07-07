import { create } from "zustand";

export const useApiStore = create((set) => ({
  pageNumber: 1,
  search: "",
  status: "",
  gender: "",
  species: "",

  setPageNumber: (num) => set({ pageNumber: num }),
  setSearch: (value) => set({ search: value }),
  setStatus: (value) => set({ status: value }),
  setGender: (value) => set({ gender: value }),
  setSpecies: (value) => set({ species: value }),

  clearFilters: () =>
    set({
      pageNumber: 1,
      search: "",
      status: "",
      gender: "",
      species: "",
    }),
}));
