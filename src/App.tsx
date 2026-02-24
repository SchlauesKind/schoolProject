/*import { useState } from 'react';*/
import RussianPage from "./pages/russian_page";
import HomePage from "./pages/home_page";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="layout">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/russian" element={<RussianPage />} />
        <Route path="*" element={<RussianPage />} />
      </Routes>
    </div>
  );
}

export default App;
