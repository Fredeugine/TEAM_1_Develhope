import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { IFOPage } from "./Pages/IFO Page";
import { Aptos_Page } from "./Pages/Aptos_Page";

const LightTheme = React.lazy(() => import("./Themes/lightTheme"));
const DarkTheme = React.lazy(() => import("./Themes/darkTheme"));

const ThemeSelector = ({ children }) => {
  const CHOSEN_THEME =
    JSON.parse(localStorage.getItem("TYPE_OF_THEME")) || "dark";
  if (CHOSEN_THEME === "light") {
    return (
      <>
        <React.Suspense fallback={<></>}>{<LightTheme />}</React.Suspense>

        {children}
      </>
    );
  } else if (CHOSEN_THEME === "dark") {
    return (
      <>
        <React.Suspense fallback={<></>}>{<DarkTheme />}</React.Suspense>
        {/* <React.Suspense fallback={<></>}>{<LightTheme />}</React.Suspense> */}

        {children}
      </>
    );
  }
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeSelector>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeSelector>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
