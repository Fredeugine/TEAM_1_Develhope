import React, { useState } from "react";
import "../Styles/InfoCard.css";

export default function InfoCard() {
  const [fromCurrency, setFromCurrency] = useState("BNB");
  const [toCurrency, setToCurrency] = useState("CAKE");
  const [fromAmount, setFromAmount] = useState(0.0);
  const [toAmount, setToAmount] = useState(0.0);
  const [isReverted, setIsReverted] = useState(false);
  const [isGraphVisible, setIsGraphVisible] = useState(false);
  const [isPriceChangeListVisible, setIsPriceChangeListVisible] = useState(
    false
  );

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  const handleFromAmountChange = (e) => {
    setFromAmount(e.target.value);
  };

  const handleToAmountChange = (e) => {
    setToAmount(e.target.value);
  };

  const handleRevert = () => {
    setIsReverted(!isReverted);
  };

  const handleConnectWallet = () => {
    // Implement connect wallet functionality
  };

  const handleGraphToggle = () => {
    setIsGraphVisible(!isGraphVisible);
  };

  const handlePriceChangeListToggle = () => {
    setIsPriceChangeListVisible(!isPriceChangeListVisible);
  };

  const handleSettingsOpen = () => {
    // Implement settings menu functionality
  };

  const handleTransactionsOpen = () => {
    // Implement recent transactions menu functionality
  };

  const handlePageRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="info-card">
      <h2>Swap</h2>
      <p>Trade tokens in an instant</p>
      <div className="clickable-svgs">
        <a href="/another-page">
          {/* First SVG icon */}
        </a>
        <div onClick={handleGraphToggle}>
          {/* Second SVG icon */}
        </div>
        <div onClick={handlePriceChangeListToggle}>
          {/* Third SVG icon */}
        </div>
        <div onClick={handleSettingsOpen}>
          {/* Fourth SVG icon */}
        </div>
        <div onClick={handleTransactionsOpen}>
          {/* Fifth SVG icon */}
        </div>
        <div onClick={handlePageRefresh}>
          {/* Sixth SVG icon */}
        </div>
      </div>
      <div className="currency-selection">
        <select value={fromCurrency} onChange={handleFromCurrencyChange}>
          {/* Render currency options here */}
        </select>
        <input type="number" value={fromAmount} onChange={handleFromAmountChange} />
      </div>
      <div className="revert-arrow" onClick={handleRevert}>
        {/* Render your revert arrow SVG here */}
      </div>
      <div className="currency-selection">
        <select value={toCurrency} onChange={handleToCurrencyChange}>
          {/* Render currency options here */}
        </select>
        <input type="number" value={toAmount} onChange={handleToAmountChange} />
      </div>
      <button className="connect-wallet-button" onClick={handleConnectWallet}>
        Connect Wallet
      </button>
    </div>
  );
}
