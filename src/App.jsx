import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import AboutPage from './pages/AboutPage';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
