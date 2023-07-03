// styles
import "./Styles/Ifo.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

// Layouts
import { MbNavbar, Navbar } from "./Components/Navbar";

// Pages
import { Homepage } from "./Pages/Homepage";
import { LeaderboardPage } from "./Pages/Leaderboard Page";
import { IFOPage } from "./Pages/IFO Page";
import Swap from "./Pages/Swap";
import Swap_Page from './Pages/Swap_Page';
import { AffiliatesPage } from "./Pages/AffiliatesPage";
import { Aptos_Page } from "./Pages/Aptos_Page";
import Footer from "./Components/Footer";
import PageNotFound from "./Components/PageNotFound";

let darkPref = localStorage.getItem("darkMode");

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/affiliates-program" element={<AffiliatesPage />} />
        <Route path="/Aptos" element={<Aptos_Page />} />
        <Route path="/IFO" element={<IFOPage></IFOPage>} />
        <Route path="/Leaderboard" element={<LeaderboardPage />} />
        <Route path="/Swap" element={<Swap_Page />} />
      </Routes>
      <Footer></Footer>
      <MbNavbar />
    </div>
  );
}

export default App;
