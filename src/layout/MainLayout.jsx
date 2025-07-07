// src/layout/MainLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/navbar/Navbar';

export const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      {/* Navbar superior */}
      <header className="w-full shadow-md z-10">
        <Navbar />
      </header>

      {/* Contenido dinámico de cada página */}
      <main className="w-full max-w-[1300px] mx-auto px-4 py-6 flex-1">
        <Outlet />
      </main>
    </div>
  );
};
