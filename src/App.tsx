import './App.css';
import HomePage from './components/Pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import ThereIsNoPage from './components/Pages/ThereIsNoPage';
import Cart from './components/Cart/Cart';
import FullPizza from './components/pizzaList/basicPizzaCard/basicPizzaCard';
import React from 'react';


function App() {
  return (
    <div className="Container">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/pizza/:id' element={<FullPizza />} />
        <Route path='*' element={<ThereIsNoPage />} />
      </Routes>
    </div>
  );
}

export default App;
