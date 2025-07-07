// src/pages/EpisodesPage.jsx
import React, { useEffect } from "react";
import { InputGroup } from "../components/filter/category/InputGroup";
import { Card } from "../components/card/Card";
import { useEpisodeStore } from "../store/EpisodeStore";
import { useEpisodeDetails } from "../stack/EpisodeStack";
import { useTranslation } from "react-i18next";


export const EpisodesPage = () => {
  const { episodeId, setEpisodeId } = useEpisodeStore();
  const { data, isLoading, error } = useEpisodeDetails(episodeId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = `Rick & Morty | Episode ${episodeId}`;
  }, [episodeId]);

  const {t} = useTranslation();

  if (isLoading) return (
    <div className="text-center py-10">
      <p className="text-xl font-semibold animate-pulse">Cargando episodio...</p>
    </div>
  );

  if (error) return <p className="text-center text-red-500">Error al cargar datos</p>;

  const { name, air_date, characters } = data;

  return (
    <div className="px-4 py-6">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold mb-2 text-black dark:text-white">
          {t("episodes_name")}: <span className="text-green-600 dark:text-blue-600">{name || "Unknown"}</span>
        </h1>
        <h2 className="text-lg dark:text-white">{t("episodes_air")}: {air_date || "Unknown"}</h2>
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/4">
          <h4 className="text-center font-semibold mb-4 dark:text-white">{t("episodes_pick")}</h4>
          <InputGroup name="Episode" changeID={setEpisodeId} total={51} />
        </div>

        <div className="w-full lg:w-3/4">
          <Card page="/episodes/" results={characters} />
        </div>
      </div>
    </div>
  );
};
