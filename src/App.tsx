/* Pages Import */
import RussianPage from './pages/russian_page'
import HomePage from './pages/home_page'
import PageNotFound from './pages/not_found'


/* Components import */
import HeaderComponent from './conponents/header_component'


/* System imports */
import { Routes, Route } from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className='layout'>
      <HeaderComponent />
        <Routes>
          <Route  path='/' element={<HomePage />}/>
          <Route  path='/russian_kitchen' element={<RussianPage />}/>
          <Route  path='*' element={<PageNotFound />}/>
        </Routes>
    </div>
  );
}

export default App;
