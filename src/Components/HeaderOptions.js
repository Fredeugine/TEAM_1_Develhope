import React from "react";
import '../Styles/HeaderOptions.css'

const HeaderOptions = () => {
  return (
    <div className={'header'}>
      <span className={'swap'}>Swap <span className={'lb'}></span></span>
      <span className={'liquidity'}>Liquidity</span>
      <span className={'perpetual'}>Perpetual <img className={'lli'} src={'/images/link.svg'}/></span>
      <span className={'bridge'}>Bridge  <img className={'lli'} src={'/images/link.svg'}/></span>
      <span className={'limit'}>Limit (V2)</span>
    </div>  
  );
};

export default HeaderOptions;
