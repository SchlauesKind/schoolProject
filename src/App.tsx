/* Pages Import */
import RussianPage from './pages/russian_page'
import HomePage from './pages/home_page'


/* Components import */
import HeaderComponent from './conponents/header_component'


/* System imports */
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className='layout'>
      <HeaderComponent />
      <BrowserRouter>
        <Routes>
          <Route  path='/' element={<HomePage />}/>
          <Route  path='/russian_kitchen' element={<RussianPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
