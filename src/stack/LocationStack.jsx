// src/stack/LocationStack.js
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useLocationStore } from '../store/LocationStore';

export const useLocationStack = () => {
  const { locationId } = useLocationStore();

  return useQuery({
    queryKey: ['location', locationId],
    queryFn: async () => {
      const { data } = await axios.get(`https://rickandmortyapi.com/api/location/${locationId}`);
      const characters = await Promise.all(
        data.residents.map(async (url) => {
          const res = await axios.get(url);
          return res.data;
        })
      );
      return { location: data, characters };
    },
    enabled: !!locationId,
    keepPreviousData: true,
  });
};
