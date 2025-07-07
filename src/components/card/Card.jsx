import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

export const Card = ({ results }) => {
  const location = useLocation();

  const { t } = useTranslation();

  if (!results || results.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-8">
        No se encontraron personajes.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-10">
      {results.map((item) => {
        // Detectar ruta base actual
        let basePath = "/characters"; // default
        if (location.pathname.includes("/episodes")) basePath = "/episodes";
        else if (location.pathname.includes("/locations"))
          basePath = "/locations";

        return (
          <div
            key={item.id}
            className="relative w-full max-w-xs bg-white dark:bg-gray-800 border border-gray-500 dark:border-gray-400 rounded-md shadow hover:shadow-lg transition-shadow flex flex-col items-center p-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-auto rounded-md mb-4"
            />

            <div className="text-center w-full">
              <h2 className="text-lg font-semibold mb-2 text-black dark:text-white">
                {item.name}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                {t("card_last_location")}:
              </p>
              <p className="text-base text-black dark:text-white">
                {item.location?.name}
              </p>
            </div>

            <span
              className={`absolute top-2 right-2 text-xs px-2 py-1 rounded-full font-bold ${
                item.status === "Dead"
                  ? "bg-red-600 text-white"
                  : item.status === "Alive"
                  ? "bg-green-600 text-white"
                  : "bg-gray-500 text-white"
              }`}
            >
              {item.status === "Alive"
                ? t("filter_status_alive")
                : item.status === "Dead"
                ? t("filter_status_dead")
                : t("filter_status_unknown")}
            </span>

            <Link
              to={`${basePath}/${item.id}`}
              className="mt-4 px-4 py-2 rounded-lg bg-green-500 text-white font-semibold shadow hover:bg-green-900 dark:bg-blue-900 transition"
            >
              {t("card_btn")}
            </Link>
          </div>
        );
      })}
    </div>
  );
};
