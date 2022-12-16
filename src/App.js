import React, { lazy, Suspense } from "react";
import Navbar from "./components/navigation/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MobileMenu from "./components/navigation/mobileMenu/MobileMenu";
import "./components/navigation/mobileMenu/mobileMenu.scss"

const MainPage = lazy(() => import("./components/pages/mainPage/MainPage"));
const ContactPage = lazy(() => import("./components/pages/contactPage/ContactPage"));

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <MobileMenu />
          <Suspense fallback={<h2>Loading ...</h2>}>
            <Routes>
              <Route exact path="/" element={<MainPage />}/>
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </div>
  );
}

export default App;
