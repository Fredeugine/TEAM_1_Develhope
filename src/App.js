// styles
import './Styles/styles.css';
import './Styles/Ifo.css';
import React, { useState, useEffect } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { useMediaQuery } from 'react-responsive'

// Layouts
import {MbNavbar, Navbar} from "./Components/Navbar";

// Pages
import {Homepage} from "./Pages/Homepage";
import {LeaderboardPage} from "./Pages/Leaderboard Page";
import {IFOPage} from "./Pages/IFO Page";
import Swap from "./Pages/Swap";
import {AffiliatesPage} from "./Pages/AffiliatesPage";
import {Aptos_Page} from "./Pages/Aptos_Page";




function App() {

  return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/Affiliates" element={<AffiliatesPage />}></Route>
          <Route path="/Aptos" element={<Aptos_Page />}></Route>
          <Route path="/IFO" element={<IFOPage></IFOPage>}></Route>          
          <Route path="/Leaderboard" element={<LeaderboardPage />}></Route>
          <Route path="/Swap" element={<Swap />}></Route>
        </Routes>
        <MbNavbar />      
      </div>

  )
}

export default App;
