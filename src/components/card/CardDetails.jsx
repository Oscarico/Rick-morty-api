import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCharacterById } from "../../stack/ApiStack";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useTranslation } from "react-i18next";


export const CardDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useCharacterById(id);

  const {t} = useTranslation();

  const navigate = useNavigate()

  if (isLoading) return <span className="text-xl font-semibold">Cargando...</span>;
  if (error) return <span>Error... {error.message}</span>;
  if (!data) return <span>No se encontró el personaje</span>;

  return (
    <div className="flex flex-col items-center justify-center px-4 py-10">
    <button onClick={() => navigate(-1)} className="cursor-pointer">
        <Icon className="bg-white dark:bg-black text-black dark:text-white rounded-full" icon="ic:twotone-arrow-back" width="24" height="24" />
    </button>
      <div className="flex flex-col gap-4 max-w-md text-center">
        <h1 className="text-2xl font-bold text-black dark:text-white">{data.name}</h1>
        <img src={data.image} alt={data.name} />
        <span
          className={`inline-block px-4 py-1 rounded-full font-semibold text-sm text-black dark:text-white ${
            data.status === "Dead"
              ? "bg-red-600"
              : data.status === "Alive"
              ? "bg-green-600"
              : "bg-gray-500"
          }`}
        >
          {
            data.status === "Alive"
            ? t("filter_status_alive")
            : data.status === "Dead"
            ? t("filter_status_dead")
            : t("filter_status_unknown")
          }
        </span>
      </div>
      <div className="space-y-2 text-left ml-6">
        <p className="text-black dark:text-white"><span className="font-bold">{t("gender_subtitle")}:</span> {
            data.gender
        }</p>
        <p className="text-black dark:text-white"><span className="font-bold">{t("location_subtitle")}:</span> {data.location?.name}</p>
        <p className="text-black dark:text-white"><span className="font-bold">{t("origin_subtitle")}:</span> {data.origin?.name}</p>
        <p className="text-black dark:text-white"><span className="font-bold">{t("specie_subtitle")}:</span> {data.species}</p>
      </div>
    </div>
  );
};
