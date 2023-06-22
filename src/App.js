import './styles.css';
import './Ifo.css'
import {Hompage, Navbar} from "./Hompage";
import {LeaderboardPage} from "./Leaderboard Page";
import {IFOPage} from "./IFO Page";
import {SwapPage} from "./Swap Page";
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive'
import {AffiliatesPage} from "./Affiliates Page";
import {Aptos_Page} from "./Aptos_Page";
import {BrowserRouter} from "react-router-dom";



function App() {

  return (
      <div>

     <Hompage></Hompage>
      </div>

  )
}

export default App;
