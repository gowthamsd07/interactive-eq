import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import MainNavigation from "./components/UIComponents/Navigation/MainNavigation";
import FooterNavigation from "./components/UIComponents/Footer/FooterNavigation";
import ScrollToTop from "./components/PageComponents/ScrollTop";
import SolutionsPage from "./pages/SolutionsPage";
// import ScrollToTop from "./components/ScrollTop";

const Home = lazy(() => import("./pages/HomePage"));
const Products = lazy(() => import("./pages/ProductPage"));

const App = () => (
  <div>
    <Router forceRefresh={true}>
      <Suspense fallback={<div>Loading...</div>}>
        <MainNavigation />
        <ScrollToTop />
        <main>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/product" element={<Products />}></Route>
            <Route path="/solutions" element={<SolutionsPage />}></Route>
          </Routes>
        </main>
        <FooterNavigation />
      </Suspense>
    </Router>
  </div>
);

export default App;
