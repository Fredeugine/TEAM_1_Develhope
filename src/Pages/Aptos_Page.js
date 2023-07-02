import {MbNavbar, Navbar} from "../Components/Navbar";
import '../Styles/styles.css'
import '../Styles/Aptos.css'
import React, {useEffect} from "react";
import HeaderOptions from "../Components/HeaderOptions";


function Crd2Inn1(){
    return (
        <>
            <div className={'crr'}>
                <span className={'crd2Inn1'}>
                    <span><img className={'aptt1'} src={'/images/apt.png'}/></span><span className={'hmrd'}>APT</span><span><img id={'drr2'} className='darr' src='/images/down_arrow.svg'/></span>
                </span>
                <span className={'crr'}><img className={'cpy'} src={'/images/copy.svg'}/><img src={'/images/brr.svg'}/></span>
            </div>
        </>
    )
}
function Crd2Inn12(){
    return (
        <>
            <div id={'crr2'} className={'crr'}>
                <span className={'crd2Inn2'}><span><img className={'aptt2'} src={'/images/7186.png'}/></span> <span className={'hmrd2'}>CAKE</span> <span><img id={'drr'} className='darr' src='/images/down_arrow.svg'/></span></span>
                <span className={'crr'}><img className={'cpy'} src={'/images/copy.svg'}/> <img src={'/images/brr.svg'}/></span>
            </div>
        </>
    )
}

export function Aptos_Page(){
    useEffect(function () {
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
        const closeBtn = document.querySelectorAll('.closex')
        const setBtn = document.querySelector('.stt')
        const tDiv = document.querySelector('.tkSelectDiv')
        const setPage = document.querySelector('.settings')
        const ChooseSAT = document.querySelector('.crd2Inn1')
        const ChooseSAT2 = document.querySelector('.crd2Inn2')
        const SATPage = document.querySelector('.ovrl')
        const Bases = document.querySelectorAll('.crv')
        const BaseImg1 = document.querySelector('.aptt1')
        const BaseImg2 = document.querySelector('.aptt2')
        const BaseImgs = document.querySelectorAll('.aptt')
        const SImgs = document.querySelectorAll('.apptm')
        const FLR = document.querySelectorAll('.flr')
        const BaseWrd = document.querySelectorAll('.rd')
        const HomeWrd1 = document.querySelector('.hmrd')
        const HomeWrd2 = document.querySelector('.hmrd2')
        const BaseWrdB = document.querySelectorAll('.bl')
        const SwitchBtn = document.querySelector('.switchBtn')
        const SwitchSvg = document.querySelector('.switchsvg')
        const searchType = document.querySelectorAll('.rin')
        const DarkModeBtn = document.querySelectorAll('.DWswitch')
        const Moon = document.querySelectorAll('.circo')
        const DLsvg = document.querySelector('.drch')
        const Slit = document.querySelectorAll('.slit')



        let clicked2;
        setBtn.addEventListener('click',function (){
            SATPage.style.display = 'flex'
            setPage.style.display = 'flex'
            tDiv.style.display = 'none'
        })
        Slit[0].addEventListener('click',function () {
            Slit[0].style.backgroundColor = '#1fc7d4'
            Slit[0].style.color = '#191326'
            Slit[1].style.backgroundColor = '#353547'
            Slit[1].style.color =  '#1fc7d4'
            Slit[2].style.backgroundColor = '#353547'
            Slit[2].style.color =  '#1fc7d4'
        })
        Slit[1].addEventListener('click',function () {
            Slit[1].style.backgroundColor = '#1fc7d4'
            Slit[1].style.color = '#191326'
            Slit[2].style.backgroundColor = '#353547'
            Slit[2].style.color =  '#1fc7d4'
            Slit[0].style.backgroundColor = '#353547'
            Slit[0].style.color =  '#1fc7d4'
        })
        Slit[2].addEventListener('click',function () {
            Slit[2].style.backgroundColor = '#1fc7d4'
            Slit[2].style.color = '#191326'
            Slit[1].style.backgroundColor = '#353547'
            Slit[1].style.color =  '#1fc7d4'
            Slit[0].style.backgroundColor = '#353547'
            Slit[0].style.color =  '#1fc7d4'
        })

        let dark = 0
        let dark2 = 0

        function toggleDarkMode(index) {
            const button = DarkModeBtn[index];
            const moon = Moon[index];
            const backgroundColor = dark2 === 0 ? '#31d0aa' : '#372f47';

            if (dark2 === 0) {
                moon.style.transform = 'translateX(110%)';
                dark2++;
            } else {
                moon.style.transform = 'translateX(0%)';
                dark2--;
            }

            button.style.backgroundColor = backgroundColor;
        }

        DarkModeBtn[1].addEventListener('click', function () {
            toggleDarkMode(1);
        });

        DarkModeBtn[2].addEventListener('click', function () {
            toggleDarkMode(2);
        });

        DarkModeBtn[3].addEventListener('click', function () {
            toggleDarkMode(3);
        });

        DarkModeBtn[0].addEventListener('click', function () {
            if (dark === 0) {
                DLsvg.src = '/images/sun2.svg'
                Moon[0].style.transform = 'translateX(-110%)'
                dark++
            } else {
                DLsvg.src = '/images/Moon2.svg'
                Moon[0].style.transform = 'translateX(0%)'
                dark--
            }
        })
        // My original code, the code above is a summarized version of it by chatgpt
        // DarkModeBtn[1].addEventListener('click', function () {
        //     if (dark2 === 0) {
        //         Moon[1].style.transform = 'translateX(110%)'
        //         dark2++
        //         DarkModeBtn[1].style.backgroundColor = '#31d0aa'
        //
        //     } else {
        //         Moon[1].style.transform = 'translateX(0%)'
        //         dark2--
        //         DarkModeBtn[1].style.backgroundColor = '#372f47'
        //     }
        // })
        // DarkModeBtn[2].addEventListener('click', function () {
        //     if (dark2 === 0) {
        //         Moon[2].style.transform = 'translateX(110%)'
        //         dark2++
        //         DarkModeBtn[2].style.backgroundColor = '#31d0aa'
        //
        //     } else {
        //         Moon[2].style.transform = 'translateX(0%)'
        //         dark2--
        //         DarkModeBtn[2].style.backgroundColor = '#372f47'
        //     }
        // })
        // DarkModeBtn[3].addEventListener('click', function () {
        //     if (dark2 === 0) {
        //         Moon[3].style.transform = 'translateX(110%)'
        //         dark2++
        //         DarkModeBtn[2].style.backgroundColor = '#31d0aa'
        //
        //     } else {
        //         Moon[3].style.transform = 'translateX(0%)'
        //         dark2--
        //         DarkModeBtn[3].style.backgroundColor = '#372f47'
        //     }
        // })


        searchType[2].addEventListener('keydown',function (event){
            for (let i = 0; i < FLR.length; i++) {
                FLR[i].style.display = 'none'
            }

            for (let i = 0; i < FLR.length; i++) {

                if (BaseWrdB[i].innerText.toLowerCase().includes(searchType[2].value.toLowerCase())){
                    FLR[i].style.display = 'flex'
                }
                let splitVal = searchType[2].value.toLowerCase().split('')
                if (BaseWrdB[i].innerText.toLowerCase().includes(splitVal[i])){
                    console.log('hehe')
                    FLR[i].style.display = 'flex'
                }
            }
        })
        // let k = 'bluex'
        // let v = k.split('')
        // console.log(v)
        // if ('cake'.includes('ca')){
        //     console.log('yes')
        // }
        // else{
        //     console.log('no')
        // }

        SwitchBtn.addEventListener('mouseover',function (){
            SwitchSvg.src = '/images/Aptos/k.svg'
        })
        SwitchBtn.addEventListener('mouseout',function (){
            SwitchSvg.src = '/images/btm.svg'
        })
        closeBtn[0].addEventListener('click',function (){
            SATPage.style.display = 'none'
        })
        closeBtn[1].addEventListener('click',function (){
            SATPage.style.display = 'none'
        })
        let clicked;

        ChooseSAT.addEventListener('click',function (){
            clicked = 'a'
            SATPage.style.display = 'flex'
            tDiv.style.display = 'unset'
            setPage.style.display = 'none'
            Bases.forEach(function (bases,index){

                for (let i = 0; i < Bases.length; i++) {
                    Bases[i].addEventListener('click', function () {
                        if (clicked === 'a') {
                            BaseImg1.src = BaseImgs[i].src
                            HomeWrd1.innerText = BaseWrd[i].innerText
                            SATPage.style.display = 'none'
                        }
                    })
                }

            })
            FLR.forEach(function (apptm,index){

                    apptm.addEventListener('click', function () {
                        if (clicked === 'a') {
                            BaseImg1.src = SImgs[index].src
                            SATPage.style.display = 'none'
                            HomeWrd1.innerText = BaseWrdB[index].innerText
                        }
                    })

            })

        })

        ChooseSAT2.addEventListener('click',function (){
            clicked = 'b'
            SATPage.style.display = 'flex'
            tDiv.style.display = 'flex'
            setPage.style.display = 'none'
            Bases.forEach(function (bases,index){

                for (let i = 0; i < Bases.length; i++) {
                    Bases[i].addEventListener('click', function () {
                        if (clicked === 'b') {
                            BaseImg2.src = BaseImgs[i].src
                            HomeWrd2.innerText = BaseWrd[i].innerText
                            SATPage.style.display = 'none'
                        }
                    })
                }
                })
            FLR.forEach(function (apptm,index){

                    apptm.addEventListener('click', function () {
                        if (clicked === 'b') {
                            BaseImg2.src = SImgs[index].src
                            HomeWrd2.innerText = BaseWrdB[index].innerText
                            SATPage.style.display = 'none'
                        }
                    })

            })
        })

        SwitchBtn.addEventListener('click',function (){
            let bas2img = BaseImg2.src
            let bas1img = BaseImg1.src
            let BaseName1 =  HomeWrd1.innerText
            let BaseName2 = HomeWrd2.innerText
            BaseImg1.src = bas2img
            BaseImg2.src = bas1img
            HomeWrd1.innerText = BaseName2
            HomeWrd2.innerText = BaseName1
        })

    },[])

    return(
        <>
            <body>
                <header>
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
                                <Crd2Inn1></Crd2Inn1>
                                <input className={'rin'} placeholder={'0.0'} type={'text'}/>
                            </div>

                            <div className={'switchBtn'}><img className={'switchsvg'} src={'/images/btm.svg'}/></div>

                            <div className={'crd2'}>
                                <Crd2Inn12></Crd2Inn12>
                                    <input className={'rin'} placeholder={'0.0'} type={'text'}/>
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
                <div className={'ovrl'}>
                    <div className={'tkSelectDiv'}>
                        <div className={'sat'}>
                            <span>Select a Token</span>
                            <img className={'closex'} src={'/images/x.svg'} />
                        </div>
                        <div className={'SDInn'}>
                            <input className={'rin'} placeholder={'Search name or paste address'} type={'search'}/>
                            <span>Common bases</span>

                            <div className={'flr1'}>
                                <div className={'crv'}>
                                    <img className={'aptt'} src={'/images/apt.png'}/>
                                    <span className={'rd'}>APT</span>
                                </div>
                                <div className={'crv'}>
                                    <img className={'aptt'} src={'/images/Aptos/0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa__asset__USDC (1).png'}/>
                                    <span className={'rd'}>lUSDC</span>
                                </div> <div className={'crv'}>
                                    <img className={'aptt'} src={'/images/7186.png'}/>
                                    <span className={'rd'}>CAKE</span>
                                </div> <div className={'crv'}>
                                    <img className={'aptt'} src={'/images/Aptos/bnb.png'}/>
                                    <span className={'rd'}>ceBNB</span>
                                </div>
                            </div>
                        </div>

                        <div className={'oga2'}>
                            <div className={'oga'}>
                                <div className={'flr'}>
                                    <div className={'tr'}>
                                        <img className={'apptm'} src={'/images/apt.png'}/>
                                        <div className={'rww'}>
                                            <span className={'bl'}>APT</span>
                                            <span className={'bl2'}>Aptos Coin</span>
                                        </div>
                                    </div>
                                    <span className={'zero'}>0</span>
                                </div>
                                <div className={'flr'}>
                                    <div className={'tr'}>
                                        <img className={'apptm'} src={'/images/Aptos/cone.png'}/>
                                        <div className={'rww'}>
                                            <span className={'bl'}>BLT</span>
                                            <span className={'bl2'}>Blocto Token</span>
                                        </div>
                                    </div>
                                    <span className={'zero'}>0</span>
                                </div><div className={'flr'}>
                                    <div className={'tr'}>
                                        <img className={'apptm'} src={'/images/7186.png'}/>
                                        <div className={'rww'}>
                                            <span className={'bl'}>CAKE</span>
                                            <span className={'bl2'}>PancakeSwap Token</span>
                                        </div>
                                    </div>
                                    <span className={'zero'}>0</span>
                                </div><div className={'flr'}>
                                    <div className={'tr'}>
                                        <img className={'apptm'} src={'/images/Aptos/bnb.png'}/>
                                        <div className={'rww'}>
                                            <span className={'bl'}>ceBNB</span>
                                            <span className={'bl2'}>Celer - Binance Coin</span>
                                        </div>
                                    </div>
                                    <span className={'zero'}>0</span>
                                </div><div className={'flr'}>
                                    <div className={'tr'}>
                                        <img className={'apptm'} src={'/images/Aptos/busd.png'}/>
                                        <div className={'rww'}>
                                            <span className={'bl'}>ceBUSD</span>
                                            <span className={'bl2'}>Celer - Binance USD</span>
                                        </div>
                                    </div>
                                    <span className={'zero'}>0</span>
                                </div><div className={'flr'}>
                                    <div className={'tr'}>
                                        <img className={'apptm'} src={'/images/Aptos/dai.png'}/>
                                        <div className={'rww'}>
                                            <span className={'bl'}>ceDAI</span>
                                            <span className={'bl2'}>Celer - Dai Stablecoin</span>
                                        </div>
                                    </div>
                                    <span className={'zero'}>0</span>
                                </div><div className={'flr'}>
                                    <div className={'tr'}>
                                        <img className={'apptm'} src={'/images/Aptos/0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa__asset__USDC (1).png'}/>
                                        <div className={'rww'}>
                                            <span className={'bl'}>ceUSDC</span>
                                            <span className={'bl2'}>Celer - USD Coin</span>
                                        </div>
                                    </div>
                                    <span className={'zero'}>0</span>
                                </div><div className={'flr'}>
                                    <div className={'tr'}>
                                        <img className={'apptm'} src={'/images/Aptos/usdT.png'}/>
                                        <div className={'rww'}>
                                            <span className={'bl'}>ceUSDT</span>
                                            <span className={'bl2'}>Celer - Tether USD</span>
                                        </div>
                                    </div>
                                    <span className={'zero'}>0</span>
                                </div><div className={'flr'}>
                                    <div className={'tr'}>
                                        <img className={'apptm'} src={'/images/Aptos/drink.png'}/>
                                        <div className={'rww'}>
                                            <span className={'bl'}>MOJO</span>
                                            <span className={'bl2'}>Mojito</span>
                                        </div>
                                    </div>
                                    <span className={'zero'}>0</span>
                                </div><div className={'flr'}>
                                    <div className={'tr'}>
                                        <img className={'apptm'} src={'/images/Aptos/blzgzg.png'}/>
                                        <div className={'rww'}>
                                            <span className={'bl'}>MOVE</span>
                                            <span className={'bl2'}>BlueMove</span>
                                        </div>
                                    </div>
                                    <span className={'zero'}>0</span>
                                </div><div className={'flr'}>
                                    <div className={'tr'}>
                                        <img className={'apptm'} src={'/images/Aptos/bat.png'}/>
                                        <div className={'rww'}>
                                            <span className={'bl'}>stAPT</span>
                                            <span className={'bl2'}>Ditto Staked Aptos</span>
                                        </div>
                                    </div>
                                    <span className={'zero'}>0</span>
                                </div><div className={'flr'}>
                                    <div className={'tr'}>
                                        <img className={'apptm'} src={'/images/Aptos/xo.png'}/>
                                        <div className={'rww'}>
                                            <span className={'bl'}>tAPT</span>
                                            <span className={'bl2'}>Tortuga Staked APT</span>
                                        </div>
                                    </div>
                                    <span className={'zero'}>0</span>
                                </div><div className={'flr'}>
                                    <div className={'tr'}>
                                        <img className={'apptm'} src={'/images/Aptos/violet.png'}/>
                                        <div className={'rww'}>
                                            <span className={'bl'}>THL</span>
                                            <span className={'bl2'}>Thala Token</span>
                                        </div>
                                    </div>
                                    <span className={'zero'}>0</span>
                                </div><div className={'flr'}>
                                    <div className={'tr'}>
                                        <img className={'apptm'} src={'/images/Aptos/busd.png'}/>
                                        <div className={'rww'}>
                                            <span className={'bl'}>whBUSD</span>
                                            <span className={'bl2'}>Wormhole - Binance USD</span>
                                        </div>
                                    </div>
                                    <span className={'zero'}>0</span>
                                </div><div className={'flr'}>
                                    <div className={'tr'}>
                                        <img className={'apptm'} src={'/images/Aptos/0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa__asset__USDC (1).png'}/>
                                        <div className={'rww'}>
                                            <span className={'bl'}>whUSDC</span>
                                            <span className={'bl2'}>Wormhole - USD Coin</span>
                                        </div>
                                    </div>
                                    <span className={'zero'}>0</span>
                                </div><div className={'flr'}>
                                    <div className={'tr'}>
                                        <img className={'apptm'} src={'/images/Aptos/usdT.png'}/>
                                        <div className={'rww'}>
                                            <span className={'bl'}>whUSDT</span>
                                            <span className={'bl2'}>Tether USD</span>
                                        </div>
                                    </div>
                                    <span className={'zero'}>0</span>
                                </div><div className={'flr'}>
                                    <div className={'tr'}>
                                        <img className={'apptm'} src={'/images/Aptos/weth.png'}/>
                                        <div className={'rww'}>
                                            <span className={'bl'}>whWETH</span>
                                            <span className={'bl2'}>Wrapped Ether</span>
                                        </div>
                                    </div>
                                    <span className={'zero'}>0</span>
                                </div><div className={'flr'}>
                                    <div className={'tr'}>
                                        <img className={'apptm'} src={'/images/Aptos/btc.png'}/>
                                        <div className={'rww'}>
                                            <span className={'bl'}>ceWBTC</span>
                                            <span className={'bl2'}>Celer - Wrapped BTC</span>
                                        </div>
                                    </div>
                                    <span className={'zero'}>0</span>
                                </div><div className={'flr'}>
                                    <div className={'tr'}>
                                        <img className={'apptm'} src={'/images/Aptos/eye.png'}/>
                                        <div className={'rww'}>
                                            <span className={'bl'}>MEE</span>
                                            <span className={'bl2'}>Meeiro</span>
                                        </div>
                                    </div>
                                    <span className={'zero'}>0</span>
                                </div><div className={'flr'}>
                                    <div className={'tr'}>
                                        <img className={'apptm'} src={'/images/Aptos/weth.png'}/>
                                        <div className={'rww'}>
                                            <span className={'bl'}>ceWETH</span>
                                            <span className={'bl2'}>Celer - Wrapped Ether</span>
                                        </div>
                                    </div>
                                    <span className={'zero'}>0</span>
                                </div><div className={'flr'}>
                                    <div className={'tr'}>
                                        <img className={'apptm'} src={'/images/Aptos/0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa__asset__USDC (1).png'}/>
                                        <div className={'rww'}>
                                            <span className={'bl'}>lzUSDC</span>
                                            <span className={'bl2'}>LayerZero - USD coin</span>
                                        </div>
                                    </div>
                                    <span className={'zero'}>0</span>
                                </div>
                                <div className={'flr'}>
                                    <div className={'tr'}>
                                        <img className={'apptm'} src={'/images/Aptos/usdT.png'}/>
                                        <div className={'rww'}>
                                            <span className={'bl'}>lzUSDT</span>
                                            <span className={'bl2'}>LayerZero - Tether USD</span>
                                        </div>
                                    </div>
                                    <span className={'zero'}>0</span>
                                </div>
                                <div className={'flr'}>
                                    <div className={'tr'}>
                                        <img className={'apptm'} src={'/images/Aptos/weth.png'}/>
                                        <div className={'rww'}>
                                            <span className={'bl'}>lzWETH</span>
                                            <span className={'bl2'}>LayerZero - Wrapped Ether</span>
                                        </div>
                                    </div>
                                    <span className={'zero'}>0</span>
                                </div>
                            </div>
                        </div>
                        <span className={'mnt'}>Manage Tokens</span>
                    </div>
                    <div className={'settings'}>
                        <div className={'setIn'}>
                            <span>Settings</span>
                            <img className={'closex'} src={'/images/x.svg'} />
                        </div>
                        <div className={'oset'}>
                            <div className={'osetIn'}>
                                <span>Dark mode</span>
                                <div className={'DWswitch'}>
                                    <img src={'/images/sun.svg'}/>
                                    <img src={'/images/moon.svg'}/>
                                    <span className={'circo'}>
                                    <img className={'drch'} src={'/images/moon2.svg'}/>
                                </span>
                                </div>
                            </div>
                            <div className={'osetIn2'}>
                                <span>Expert mode <img className={'question'} src={ '/images/markq.svg'}/></span>
                                <div className={'DWswitch'}>
                                    <span className={'circo'}></span>
                                </div>
                            </div>

                            <div className={'osetIn3'}>
                                <span>Slippage tolerance <img className={'question'} src={ '/images/markq.svg'}/></span>
                                <div className={'flr1'}>
                                    <button className={'slit'}>0.1%</button>
                                    <button className={'slit'}>0.1%</button>
                                    <button className={'slit'}>0.1%</button>
                                    <input className={'typ'} type={'text'} placeholder={'1.00'}/>
                                </div>
                            </div>

                            <div className={'osetIn2'}>
                                <span>Allow Multihops <img className={'question'} src={ '/images/markq.svg'}/></span>
                                <div className={'DWswitch'}>
                                    <span className={'circo'}></span>
                                </div>
                            </div>
                            <div className={'osetIn2'}>
                                <span>Flippy sounds <img className={'question'} src={ '/images/markq.svg'}/></span>
                                <div className={'DWswitch'}>
                                    <span className={'circo'}></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    )

}