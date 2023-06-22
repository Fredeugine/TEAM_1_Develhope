import {MbNavbar, Navbar} from "./Navbar";
import './styles.css'
import './Aptos.css'
import React, {useEffect, useLayoutEffect, useState} from "react";
export function Aptos_Page(){
    // useEffect(function (){
    //     var prevScrollPos = window.pageYOffset;
    //     window.onscroll = function() {
    //         var currentScrollPos = window.pageYOffset;
    //
    //         if (prevScrollPos > currentScrollPos) {
    //             // Scrolling up
    //
    //             document.getElementsByClassName("bar2").style.top = "500px";
    //         } else {
    //             // Scrolling down
    //
    //             if (currentScrollPos > 1200) {
    //                 document.getElementsByClassName("bar2").style.top = "-100px";
    //             }
    //         }
    //
    //         prevScrollPos = currentScrollPos;
    //     };
    // })
    return(
        <>
            <body>
                <header>
                    <Navbar></Navbar>

                    <div className={'bar2'}>
                        <span className={'swap'}>Swap <span className={'lb'}></span></span>
                        <span className={'liqui'}>Liquidity</span>
                        <span className={'brr'}>Bridge  <img className={'lli'} src={'/images/link.svg'}/></span>
                    </div>
                </header>
                <div className={'main'}>
                    <div className={'swIn'}>
                        <div className={'crd1'}>
                            <span className={'tt'}>Swap</span>
                            <span className={'dds'}>Trade tokens in an instant</span>
                            <img className={'stt'} src={'/images/settings.svg'}/>
                        </div>
                        <div className={'padd'}>
                            <div className={'crd2'}>
                                <div className={'crr'}>
                                    <span className={'crd2Inn1'}><span><img className={'aptt'} src={'/images/apt.png'}/></span>APT<span><img className='darr' src='/images/down_arrow.svg'/></span></span>
                                    <span><img className={'cpy'} src={'/images/copy.svg'}/></span>
                                </div>
                                <div className={'rocar'}>
                                    <input defaultValue={'sdfsdf'} type={'text'}/>
                                </div>
                            </div>

                            <div className={'switchBtn'}><img src={'/images/btm.svg'}/></div>

                            <div className={'crd2'}>
                                <div id={'crr2'} className={'crr'}>
                                    <span className={'crd2Inn1'}><span><img className={'aptt'} src={'/images/7186.png'}/></span> <span>CAKE</span> <span><img className='darr' src='/images/down_arrow.svg'/></span></span>
                                    <span className={'crr'}><img className={'cpy'} src={'/images/copy.svg'}/> <img src={'/images/brr.svg'}/></span>
                                </div>
                                <div className={'rocar'}>
                                    <input defaultValue={'sdfsdf'} type={'text'}/>
                                </div>
                            </div>

                            <div className={'slip'}>
                                <span className={'slipwrd'}>Slippage Tolerance <img src={'/images/pen.svg'}/></span>
                                <span className={'per'}>0.1%</span>
                            </div>
                            <div id={'aptBtn_wal'} className="btn_cwallect">Connect Wallet</div>
                        </div>
                    </div>

                <footer>
                    <div className={'ftr'}>
                        <span className={'brs'}>
                            Bridge assets to Aptos Chain
                            <img id={'lligreen'} className={'lli'} src={'/images/rink.svg'}/>
                        </span>
                        <div className={'ndHlpDiv'}>
                            <div className={'fll'}>
                                <span className={'ndHlp'}>Need help ?</span>
                                <span><img className={'ndd'} src={'/images/wing.svg'}/></span>
                            </div>
                            <div className={'hpng'}><img className={'hpng'} src={'/images/help.png'}/></div>
                        </div>
                    </div>
                </footer>

            </div>
            </body>



        </>
    )

}