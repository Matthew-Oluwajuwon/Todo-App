import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LandingPageComponent } from './views/landing-page'

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPageComponent />} />
      </Routes>
    </BrowserRouter>
  )
}
