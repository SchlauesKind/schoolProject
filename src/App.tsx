/* Pages Import */
import HomePage from "./pages/home_page/home_page";
import PageNotFound from "./pages/not_found/not_found";
import Credits from "./pages/credits/credits";
import RussianPage from "./pages/public/russian_page";

/* Components import */
import HeaderComponent from "./components/header/header_component";
import FooterComponent from "./components/footer/footer_component";

/* System imports */
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="layout">
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/russian_kitchen" element={<RussianPage />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
