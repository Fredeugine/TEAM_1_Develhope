import "../Styles/affiliates.css";
import { useEffect } from "react";
import { Navbar } from "../Components/Navbar";
import { MbNavbar } from "../Components/Navbar";
import { Link } from "react-router-dom";

export function AffiliatesDashboard() {
  return (
    <div>
      <a href="#" className="page-up" id="pageup">
        <svg
          viewBox="0 0 24 24"
          color="invertedContrast"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
          className="sc-231a1e38-0 duevIU"
          style={{ marginLeft: 0 }}
        >
          <path d="M13 19V7.83001L17.88 12.71C18.27 13.1 18.91 13.1 19.3 12.71C19.69 12.32 19.69 11.69 19.3 11.3L12.71 4.71001C12.32 4.32001 11.69 4.32001 11.3 4.71001L4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7C5.08997 13.09 5.71997 13.09 6.10997 12.7L11 7.83001V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19Z" />
        </svg>
      </a>
      <div className="header2">
        <Link to={`/affiliates-program`}>
          <div className="header2_overview" id="header2_overview2">
            <a>Overview</a>
          </div>
        </Link>
        <div className="header2_application">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfP43IciQ5cH0JhTf1fDgUpwapBx-yD3ybv24pBdiVW7Th5jQ/viewform"
            target="_blank"
          >
            Application
            <svg
              viewBox="0 0 24 24"
              color="textSubtle"
              width="20px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" />
            </svg>
          </a>
        </div>
        <div className="header2_dashboard_dashboard">
          <a href="#dashboard">Dashboard</a>
        </div>
      </div>
      <div className="dashboard-container">
        <div className="dashboard">
          <div className="dashboard-text">
            <h1 className="dashboard-h1">Dashboard</h1>
            <p className="dashboard-h2">
              Manage your affiliate link, see how much you've earned
            </p>
          </div>
          <div className="dashboard-imgs">
            <img
              id="floimg1-dash"
              src="images/affi-images/affi-bobbing-1.png"
            />
            <img
              id="floimg2-dash"
              src="images/affi-images/affi-bobbing-2.png"
            />
            <img
              id="floimg3-dash"
              src="images/affi-images/affi-bobbing-3.png"
            />
          </div>
        </div>
        <div className="dashboard-transition">
          <img src="images/dashboard-transition.png" />
        </div>
        <div className="buttonDiv-dash">
          <button className="bluebutton" id="centered_bb-dash">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
}
