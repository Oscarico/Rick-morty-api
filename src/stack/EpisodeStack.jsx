// src/stack/episodeStack.js
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useEpisodeDetails = (id) => {
  return useQuery({
    queryKey: ['episode', id],
    queryFn: async () => {
      const { data } = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`);
      const characters = await Promise.all(
        data.characters.map((url) => axios.get(url).then((res) => res.data))
      );
      return { ...data, characters };
    },
    enabled: !!id,
    keepPreviousData: true,
  });
};
