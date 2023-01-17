import './App.css';
import HomePage from './components/Pages/HomePage';

import { Routes, Route } from 'react-router-dom';
import BasketPage from './components/Pages/BasketPage';

function App() {
  return (
    <div className="Container">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/basket' element={<BasketPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
