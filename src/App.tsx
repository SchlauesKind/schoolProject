/* Pages Import */
import HomePage from "./pages/home_page/home_page";
import PageNotFound from "./pages/not_found/not_found";
import Credits from "./pages/credits/credits";
import KitchenPage from "./pages/kitchen/KitchenPage";

/* Components import */
import HeaderComponent from "./components/header/header_component";
import FooterComponent from "./components/footer/footer_component";

/* System imports */
import { Outlet, Routes, Route } from "react-router-dom";
import "./App.css";

function MainLayout() {
  return (
    <div className="layout">
      <HeaderComponent />
      <main>
        <Outlet />
      </main>
      <FooterComponent />
    </div>
  );
}

function KitchenLayout() {
  return (
    <div className="kitchen-layout">
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="kitchen" element={<KitchenLayout />}>
          <Route path=":kitchenType" element={<KitchenPage />} />
        </Route>
        <Route path="credits" element={<Credits />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
