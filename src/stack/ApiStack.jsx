import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useApiStore } from "../store/ApiStore";

export const useApiStack = () => {
  const { pageNumber, search, status, gender, species } = useApiStore();
  return useQuery({
    queryKey: ["characters", pageNumber, search, status, gender, species],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://rickandmortyapi.com/api/character/`,
        {
          params: { page: pageNumber, name: search, status, gender, species },
        }
      );
      return data;
    },
    keepPreviousData: true,
  });
};

export const useCharacterById = (id) => {
  return useQuery({
    queryKey: ["character", id],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      return data;
    },
    enabled: !!id,
  });
};

export const useCharacterSearch = (name) => {
  return useQuery({
    queryKey: ["character-search", name],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://rickandmortyapi.com/api/character/`,
        {
          params: { name },
        }
      );
      return data.results;
    },
    enabled: !!name,
  });
};

export const useAllCharacters = () => {
  return useQuery({
    queryKey: ["all-characters"],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://rickandmortyapi.com/api/character`
      );
      return data.results;
    },
  });
};
