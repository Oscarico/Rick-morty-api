import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainLayout } from '../layout/MainLayout'
import { HomePage } from '../pages/HomePage'
import { CardDetails } from '../components/card/CardDetails'
import { EpisodesPage } from '../pages/EpisodesPage'
import { LocationsPage } from '../pages/LocationsPage'

export const MyRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="characters/:id" element={<CardDetails />} />
                
                <Route path="episodes" element={<EpisodesPage />} />
                <Route path="episodes/:id" element={<CardDetails />} />
                
                <Route path="locations" element={<LocationsPage />} />
                <Route path="locations/:id" element={<CardDetails />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}