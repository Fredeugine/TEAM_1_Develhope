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

let darkPref = localStorage.getItem("darkMode");

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route
          path="*"
          element={
            <div
              style={{
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              {/* <img src="/images/beer.svg"></img> */}
              <h1
                style={{
                  marginTop: "450px",
                  fontSize: "72px",
                }}
              >
                404
              </h1>
              <p style={{ fontWeight: "600" }}>Oops, page not found.</p>
              <Link to={"/"} style={{ marginBottom: "450px" }}>
                Back Home
              </Link>
            </div>
          }
        ></Route>
        <Route path="/affiliates-program" element={<AffiliatesPage />}></Route>
        <Route path="/Aptos" element={<Aptos_Page />}></Route>
        <Route path="/IFO" element={<IFOPage></IFOPage>}></Route>
        <Route path="/Leaderboard" element={<LeaderboardPage />}></Route>
        <Route path="/Swap" element={<Swap_Page />}></Route>
      </Routes>
      <Footer></Footer>
      <MbNavbar />
    </div>
  );
}

export default App;
