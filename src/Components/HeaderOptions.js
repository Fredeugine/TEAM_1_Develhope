import React from "react";
import '../Styles/HeaderOptions.css'

const HeaderOptions = () => {
  return (
    <div className="header-options">
      <div className="header-option">Swap</div>
      <div className="header-option">Liquidity</div>
      <div className="header-option">Perpetual</div>
      <div className="header-option">Bridge</div>
      <div className="header-option">Limit (V2)</div>
      <div className="header-option">Buy CryptoNew</div>
    </div>
  );
};

export default HeaderOptions;
