import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Integrantes from './pages/Integrantes';
import IntegranteDetail from './pages/IntegranteDetail';
import Sobre from './pages/Sobre';
import FAQ from './pages/FAQ';

export default function App(){
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <NavBar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/integrantes" element={<Integrantes />} />
            <Route path="/integrantes/:rm" element={<IntegranteDetail />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
