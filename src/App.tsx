/*import { useState } from 'react';*/
import RussianPage from './pages/russian_page'
import HomePage from './pages/home_page'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<HomePage />}/>
        <Route  path='/russian' element={<RussianPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
