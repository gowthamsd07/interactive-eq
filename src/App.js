import React, { lazy, Suspense } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import MainNavigation from "./components/UIComponents/Navigation/MainNavigation";
import FooterNavigation from "./components/UIComponents/Footer/FooterNavigation";
// import ScrollToTop from "./components/ScrollTop";

const Home = lazy(() => import("./pages/HomePage"));

const App = () => (
  <div>
    <Router forceRefresh={true}>
      <MainNavigation />
      <Suspense>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
          </Routes>
        </main>
      </Suspense>
      <FooterNavigation />
    </Router>
  </div>
);

export default App;
