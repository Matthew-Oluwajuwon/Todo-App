import React from 'react'
import "antd/dist/antd.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './views/header';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />} />
      </Routes>
    </BrowserRouter>
  )
}
