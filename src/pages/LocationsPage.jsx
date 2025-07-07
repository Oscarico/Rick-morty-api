import React from 'react';
import { Card } from '../components/card/Card';
import { InputGroup } from '../components/filter/category/InputGroup';
import { useLocationStore } from '../store/LocationStore';
import { useLocationStack } from '../stack/LocationStack';
import { useTranslation } from 'react-i18next';


export const LocationsPage = () => {
  const { setLocationId } = useLocationStore();
  const { data, isLoading, error } = useLocationStack();

  const {t} = useTranslation();

  if (isLoading) return <p className="text-center text-black dark:text-white">Cargando ubicación...</p>;
  if (error) return <p className="text-center text-red-500">Error al cargar ubicación</p>;

  const { location, characters } = data;
  const { name, type, dimension } = location;

  return (
    <div className="px-4 py-6">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold mb-2 text-black dark:text-white">
          {t("location_subtitle")}: <span className="text-green-600 dark:text-blue-600">{name || "Unknown"}</span>
        </h1>
        <h2 className="text-lg font-semibold text-black dark:text-white"><span className='font-bold'>{t("dimention_subtitle")}:</span> {dimension || "Unknown"}</h2>
        <h3 className="text-base font-medium text-black dark:text-white"><span className='font-bold'>{t("type_subtitle")}:</span> {type || "Unknown"}</h3>
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/4">
          <h4 className="text-center text-2xl font-semibold mb-4 text-black dark:text-white">{t("menu_locations")}</h4>
          <InputGroup name="Location" total={126} changeID={setLocationId} />
        </div>
        <div className="w-full lg:w-3/4">
          <Card results={characters} />
        </div>
      </div>
    </div>
  );
};
