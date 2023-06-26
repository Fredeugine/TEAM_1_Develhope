// styles
import './styles.css';
import './Ifo.css';
import React, { useState, useEffect } from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { useMediaQuery } from 'react-responsive'

// Layouts
import {MbNavbar, Navbar} from "./Navbar";

// Pages
import {Homepage} from "./Homepage";
import {LeaderboardPage} from "./Leaderboard Page";
import {IFOPage} from "./IFO Page";
import Swap from "./Swap";
import {AffiliatesPage} from "./AffiliatesPage";
import {Aptos_Page} from "./Aptos_Page";




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
