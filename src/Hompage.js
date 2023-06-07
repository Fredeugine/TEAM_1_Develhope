import React, {useEffect, useLayoutEffect, useState} from "react";

export function Hompage(){
    useLayoutEffect(() => {
            const buttons = document.querySelectorAll(".buttons");
            const options = document.querySelectorAll(".options");
            const images = document.querySelectorAll('.imgs');
            const bnbText = document.getElementById('bnb_word')
            const walletText = document.querySelector('.btn_cwallect')
            const globe = document.querySelector('#img_globe')
            const toggleButton = document.querySelector(".toggle")
            const options6 = document.getElementById('options6')
            const EarnBtn = document.querySelector('#earnBtn')
            const WinBtn = document.querySelector('#winBtn')
            const NftBtn = document.querySelector('#nftBtn')
            const DotsBtn = document.querySelector('#dotsBtn')
            const Earn = document.querySelector('#earn')
            const Win = document.querySelector('#win')
            const Nft = document.querySelector('#nft')
            const Dots = document.querySelector('#dots')
            const cWal = document.querySelector('.cWallet')



// Fred Homepage Section Starts
//Media query to remove a word
            function good() {
                if (window.matchMedia("(max-width: 1127px)").matches) {
                    walletText.textContent ='Connect'
                    bnbText.textContent = 'BNB';

                } else {
                    walletText.textContent ='Connect Wallet'
                    bnbText.textContent = 'BNB Smart Chain';
                }
                if (window.matchMedia("(max-width: 767px)").matches) {
                    bnbText.innerHTML = '';
                }
            }
            var prevScrollPos = window.pageYOffset;
            var isScrollingUp = false;

            window.onscroll = function() {
                var currentScrollPos = window.pageYOffset;

                if (prevScrollPos > currentScrollPos) {
                    // Scrolling up
                    isScrollingUp = true;
                    document.getElementById("navbar").style.top = "0";
                } else {
                    // Scrolling down
                    isScrollingUp = false;
                    if (currentScrollPos > 1200) {
                        document.getElementById("navbar").style.top = "-100px";
                    }
                }

                prevScrollPos = currentScrollPos;
            };

            window.onload = good;
            window.onresize = good;


            EarnBtn.addEventListener('mouseover',function (){
                Earn.style.display = 'flex'
                Win.style.display = 'none'
                Nft.style.display = 'none'
                Dots.style.display = 'none'
            })

            EarnBtn.addEventListener('mouseout',function (){
                Earn.style.display = 'none'
                Win.style.display = 'none'
                Nft.style.display = 'none'
                Dots.style.display = 'none'
            })
            WinBtn.addEventListener('mouseover',function (){
                Earn.style.display = 'none'
                Win.style.display = 'flex'
                Nft.style.display = 'none'
                Dots.style.display = 'none'
            })
            WinBtn.addEventListener('mouseout',function (){
                Earn.style.display = 'none'
                Win.style.display = 'none'
                Nft.style.display = 'none'
                Dots.style.display = 'none'
            })
            NftBtn.addEventListener('mouseover',function (){
                Earn.style.display = 'none'
                Win.style.display = 'none'
                Nft.style.display = 'flex'
                Dots.style.display = 'none'
            })
            NftBtn.addEventListener('mouseout',function (){
                Earn.style.display = 'none'
                Win.style.display = 'none'
                Nft.style.display = 'none'
                Dots.style.display = 'none'
            })
            DotsBtn.addEventListener('mouseover',function (){
                Earn.style.display = 'none'
                Win.style.display = 'none'
                Nft.style.display = 'none'
                Dots.style.display = 'flex'
            })
            DotsBtn.addEventListener('mouseout',function (){
                Earn.style.display = 'none'
                Win.style.display = 'none'
                Nft.style.display = 'none'
                Dots.style.display = 'none'
            })
            buttons.forEach((button, index) => {
                let timeoutId;
                const divs = options[index]
                button.addEventListener("mouseover", function showOptions() {
                    options[index].style.visibility = "visible";
                    divs.addEventListener("mouseover", function showOptions() {
                        options[index].style.visibility = "visible";
                    });
                });

//
                button.addEventListener('mouseout', () => {
                    timeoutId = setTimeout(() => {
                        hideBoth();
                    }, 40);
                    divs.addEventListener('mouseout', () => {
                        hideBoth();
                    });
                });


                // Function to hide the div
                function hideBoth() {
                    // Only hide the div if both the button and the div are not currently being hovered over
                    const buttonNotHovered = !button.matches(':hover');
                    const divNotHovered = !divs.matches(':hover');

                    if (buttonNotHovered && divNotHovered) {
                        divs.style.visibility = 'hidden';
                    }
                }

            })

            globe.addEventListener('mouseover', function todo() {
                options[5].style.visibility = "visible";
                options[5].style.display = "flex";
                options[5].addEventListener("mouseover", function showOptions() {
                    options6.style.visibility = "visible";
                });
            })
            globe.addEventListener('mouseout', function () {
                setTimeout(removes, 60);
                options[5].addEventListener('mouseout', () => {
                    removes();
                });
            });

            function removes() {
                if (!globe.matches(':hover') && !options[5].matches(':hover')) {
                    options[5].style.visibility = 'hidden';
                    options[5].style.display = "none";

                }
            }

            function remove() {
                if (!bnbDiv.matches(':hover') && !options6.matches(':hover')) {
                    options6.style.visibility = 'hidden';
                    options6.style.display = "none";
                }
            }


            const bnbDiv = document.querySelector('#div_bnb')
            bnbDiv.addEventListener('mouseover', function todo() {
                options6.style.visibility = "visible";
                options6.style.display = "flex";
                options6.addEventListener("mouseover", function showOptions() {
                    options[5].style.visibility = "visible";
                });
            })
            bnbDiv.addEventListener('mouseout', function () {
                setTimeout(remove, 60);
                options6.addEventListener('mouseout', () => {
                    remove();
                });
            });
        // toggleButton.addEventListener("click", () => {
        //     if (toggleButton.checked){
        //         toggleButton.style.transform = "translate(100%)"
        //         document.querySelector('body').style.background='white'
        //
        //     }
        //     else{
        //         toggleButton.style.transform = "translate(-100%)"
        //         document.querySelector('body').style.background='#08060b'
        //     }
        // })
    }, [])
    return(
        <>
            <a href="#" className="page-up">
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
            <div className="cWallet"></div>
            <div id="navbar" className="navbar">
                <div id="sep1" className="sep1">
                    <div id="sec1" className="sec_1">
                        <a href="index.html">
                            <img className="imgs" id="img_beer" src="images/beer.svg" />
                        </a>
                        <span className="ps_word" id="ps_word">
          PancakeSwap
        </span>
                    </div>
                    <div className="sec_2">
                        <div id="TradeDiv1" className="TradeDiv">
                            <button className="buttons" id="btn_trade">
                                Trade <span className="scale_borders" />
                            </button>
                            <div className="options" id="options1">
                                <a id="oo" href="swap.html">
                                    <span className="opt_kids">Swap</span>
                                </a>
                                <span className="opt_kids">Liquid</span>
                                <span className="opt_kids">Liquidity</span>
                                <span className="opt_kids" id="perpetual">
              Perpetual <img src="images/l-arrow.svg" />
            </span>
                                <span className="opt_kids" id="bridge">
              Bridge <img src="images/l-arrow.svg" />
            </span>
                            </div>
                        </div>
                        <div id="TradeDiv2" className="TradeDiv">
                            <button className="buttons" id="btn_earn">
                                Earn <span className="scale_borders" />
                            </button>
                            <div className="options" id="options2">
                                <span className="opt_kids">Farms</span>
                                <span className="opt_kids">Pools</span>
                            </div>
                        </div>
                        <div id="TradeDiv3" className="TradeDiv">
                            <button className="buttons" id="btn_win">
                                Win
                                <span className="green_dot" />
                                <span className="scale_borders" />
                            </button>
                            <div className="options" id="options3">
                                <span className="opt_kids">Trading Competition</span>
                                <span className="opt_kids">Prediction(BETA)</span>
                                <span className="opt_kids">Lottery</span>
                                <span className="opt_kids" id="potteryDiv">
              Pottery (BETA) <span className="pottery">POT OPEN</span>
            </span>
                            </div>
                        </div>
                        <div id="TradeDiv4" className="TradeDiv">
                            <button className="buttons" id="btn_nft">
                                NFT <span className="scale_borders" />
                            </button>
                            <div className="options" id="options4">
                                <span className="opt_kids">Overview</span>
                                <span className="opt_kids">Collections</span>
                                <span className="opt_kids">Activity</span>
                            </div>
                        </div>
                        <div id="TradeDiv5" className="TradeDiv">
                            <button className="buttons" id="btn_(... .)">
                                <span className="scale_borders" />
                                <span className="div_cir_dot" id="div_cir_dot">
              <span className="cir_dot" />
              <span className="cir_dot" />
              <span className="cir_dot" />
                                    &nbsp;
            </span>
                            </button>
                            <div className="options" id="options5">
                                <span className="opt_kids">Info</span>
                                <a id="ifo" href="IFO.html">
                                    <span className="opt_kids">IFO</span>
                                </a>
                                <span className="opt_kids">Voting</span>
                                <a id="o" href="affiliates-program.html">
                                    <span className="opt_kids">Affiliate Program</span>
                                </a>
                                <a id="ooo" href="leaderboard.html">
                                    <span className="opt_kids">Leaderboard</span>
                                </a>
                                <span className="opt_kids" id="blog">
              Blog <img src="images/l-arrow.svg" />
            </span>
                                <span className="opt_kids" id="docs">
              Docs <img src="images/l-arrow.svg" />{" "}
            </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sep2" className="sep2">
                    <div className="sec_3" id="sec_3">
                        <img className="imgs" id="img_deer2" src="images/7186.png" />
                        <span className="api-price">$1.234</span>
                    </div>
                    <div id="sec4" className="sec_4">
                        <div id="TradeDiv6" className="TradeDiv2">
                            <img className="imgs" id="img_globe" src="images/globe.svg" />
                            <div className="options" id="options7">
                                <ul className="list">
                                    <li>العربية</li>
                                    <li>বাংলা</li>
                                    <li>English</li>
                                    <li>Deutsch</li>
                                    <li>Ελληνικά</li>
                                    <li>Español</li>
                                    <li>Suomalainen</li>
                                    <li>Filipino</li>
                                    <li>Français</li>
                                    <li>हिंदी</li>
                                    <li>Magyar</li>
                                    <li>Bahasa Indonesia</li>
                                    <li>Italiano</li>
                                    <li>日本語</li>
                                    <li>한국어</li>
                                    <li>Nederlands</li>
                                    <li>Polski</li>
                                    <li>Português (Brazil)</li>
                                    <li>Português</li>
                                    <li>Română</li>
                                    <li>Русский</li>
                                    <li>Svenska</li>
                                    <li>தமிழ்</li>
                                    <li>Türkçe</li>
                                    <li>Українська</li>
                                    <li>Tiếng Việt</li>
                                    <li>简体中文</li>
                                    <li>繁體中文</li>
                                </ul>
                            </div>
                        </div>
                        <img className="imgs" id="img_settings" src="images/settings.svg" />
                        <div id="TradeDiv7" className="TradeDiv3">
          <span id="div_bnb" className="div_bnb">
            <img className="imgs" id="img_bnb" src="images/56.png" />
            <p id="bnb_word" className="bnb_word">
              BNB Smart Chain
            </p>
            <img
                className="imgs"
                id="down_arrow"
                src="images/down arrow.svg"
                alt=""
            />
          </span>
                            <div id="options6">
                                <span className="opt_kids">Select a network</span>
                                <span className="opt_kids">BNB Smart Chain</span>
                                <span className="opt_kids">Ethereum</span>
                                <span className="opt_kids">Aptos</span>
                            </div>
                        </div>
                    </div>
                    <div className="btn_cwallect">Connect Wallet</div>
                </div>
            </div>
            <main>
                <div className="div2_div3">
                    <div className="carousel-parent1">
                        <div className="carousel-parent2">
                            <div className="carousel-parent3">
                                <div className="carousel-parent4">
                                    <div className="carousel-parent5">
                                        <div className="carousel">
                                            <input
                                                type="radio"
                                                id="img1"
                                                name="carousel-radio"
                                                defaultChecked=""
                                            />
                                            <input type="radio" id="img2" name="carousel-radio" />
                                            <input type="radio" id="img3" name="carousel-radio" />
                                            <input type="radio" id="img4" name="carousel-radio" />
                                            <input type="radio" id="img5" name="carousel-radio" />
                                            <div className="carousel-slides">
                                                <div className="wrapper_slides">
                                                    <div className="box_slides">
                                                        <div className="slide" id="slide1">
                                                            <div className="first-slide">
                                                                <div className="box_slide1">
                                                                    <div className="carousel-animation">
                                                                        <div className="flag_slide1">
                                                                            <img
                                                                                src="images/v3LaunchFlag.webp"
                                                                                alt="flag-image"
                                                                            />
                                                                        </div>
                                                                        <div className="rock_slide1">
                                                                            <img
                                                                                className="bigRock"
                                                                                src="images/v3LaunchBg.webp"
                                                                                alt="moon-image"
                                                                            />
                                                                            <img
                                                                                className="smallRock"
                                                                                src="images/v3LaunchBgMobile.webp"
                                                                                alt="moon-image"
                                                                            />
                                                                        </div>
                                                                        <div className="bunny_slide1">
                                                                            <img
                                                                                className="bigBunny"
                                                                                src="images/v3LaunchBunny.webp"
                                                                                alt="bunny-image"
                                                                            />
                                                                            <img
                                                                                className="smallBunny"
                                                                                src="images/v3LaunchBunnyMobile.png"
                                                                                alt="bunny-image"
                                                                            />
                                                                        </div>
                                                                        <div className="bnb_slide1">
                                                                            <img
                                                                                src="images/v3LaunchBnb.webp"
                                                                                alt="bnb-image"
                                                                            />
                                                                        </div>
                                                                        <div className="eth_slide1">
                                                                            <img
                                                                                src="images/v3LaunchEth.webp"
                                                                                alt="eth-image"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="wording_slide1">
                                                                        <div className="written_slide1">
                                                                            <div className="title_slide1">
                                                                                Ev3ryone's Favorite D3X
                                                                            </div>
                                                                            <div className="text_slide1">
                                    <span className="icon_slide1">
                                      <img
                                          src="images/bunny-icon-slides.svg"
                                          alt="bunny-icon"
                                      />
                                    </span>
                                                                                PancakeSwap v3 is live!
                                                                            </div>
                                                                        </div>
                                                                        <div className="discover_slide1">
                                                                            <div className="discover-carousel">
                                                                                <button
                                                                                    className="discover_slide1_button"
                                                                                    href="https://perp.pancakeswap.finance/en/futures/BTCUSDT?theme=dark&chain=bnbchain"
                                                                                >
                                                                                    Discover V3
                                                                                    <div>
                                                                                        <img
                                                                                            className="discover-icon"
                                                                                            src="images/discover-icon.svg"
                                                                                            alt="learn image"
                                                                                        />
                                                                                    </div>
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="slide" id="slide2">
                                                            <img
                                                                className="images"
                                                                src="images/2-1200.png"
                                                                alt="Image 2"
                                                            />
                                                        </div>
                                                        <div className="slide" id="slide3">
                                                            <img
                                                                className="images"
                                                                src="images/3-1200.png"
                                                                alt="Image 3"
                                                            />
                                                        </div>
                                                        <div className="slide" id="slide4">
                                                            <img
                                                                className="images"
                                                                src="images/4-1200.png"
                                                                alt="Image 4"
                                                            />
                                                        </div>
                                                        <div className="slide" id="slide5">
                                                            <img
                                                                className="images"
                                                                src="images/5-1200.png"
                                                                alt="Image 5"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="carousel-options">
                                                <label htmlFor="img1" checked="" />
                                                <label htmlFor="img2" />
                                                <label htmlFor="img3" />
                                                <label htmlFor="img4" />
                                                <label htmlFor="img5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="astro_enclosure1" className="astro_enclosure1">
                        <div className="moon_is_made_of_pancakes" id="moon_is_made_of_pancakes">
                            <div className="astro_word_div" id="astro_word_div">
            <span className="astro_heading" id="astro_heading">
              The moon is made of pancakes.
              <p className="astro_pa">
                Trade, earn, and win crypto on the most popular decentralized
                platform in the galaxy.
              </p>
            </span>
                                <div className="btn_tc_div">
                                    <button className="btn_cwallect2">Connect Wallet</button>
                                    <span className="btn_trade_now">Trade Now</span>
                                </div>
                            </div>
                            <div className="animation_div" id="animation_div">
                                <img
                                    className="img_astronaut"
                                    id="img_astronaut"
                                    src="images/astronaut-bunny.png"
                                />
                                <img className="top_star" src="images/star-top-r@2x.webp" />
                                <img className="bottom_star" src="images/star-r@2x.webp" />
                                <img className="bottom_star" src="images/star-l@2x.webp" />
                            </div>
                        </div>
                    </div>
                    <svg
                        className="div3-div4-svg"
                        color="text"
                        id="wavy_line"
                        viewBox="0 0 1660 339"
                        width="100%"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <linearGradient id="gradient" x1={0} x2={1} y1={0} y2={0}>
                                <stop offset="85%" stopColor="#0a080e" />
                                <stop offset="100%" stopColor="#181227" />
                            </linearGradient>
                        </defs>
                        <path
                            d="M0 304.5C267.5 290.522 520.5 167.023 804 167.023C1104 167.023 1358.83 0.5 1660 0.5V339H0V304.5Z"
                            fill="url(#gradient)"
                        />
                    </svg>
                </div>
                <div className="div4_parent_container">
                    <div className="div4_container">
                        <div className="div4">
                            <img className="div4_svg1" src="images/div4_1.svg" />
                            <h2 id="div4_text1">Used by millions.</h2>
                            <h2 id="div4_text2">Trusted with billions.</h2>
                            <div id="div4_text3">
                                PancakeSwap has the most users of any decentralized platform, ever.
                            </div>
                            <div id="div4_text4">
                                And those users are now entrusting the platform with over $3.2
                                billion in funds.
                            </div>
                            <div id="div4_text5">Will you join them?</div>
                            <div className="div4_box1">
                                <div className="div4_box2">
                                    <div className="div4_box3">
                                        <div className="div4_box4">
                                            <div className="div4_box5">
                                                <div className="div4_svg4">
                                                    <img src="images/div4_2a.svg" />
                                                </div>
                                                <h2 className="div4_box_a_text1">1.6 million</h2>
                                                <h2 id="div4_box_a_text1a">users</h2>
                                                <div id="div4_box_a_text1b">in the last 30 days</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="div4_box2">
                                    <div className="div4_box3">
                                        <div className="div4_box4">
                                            <div className="div4_box5">
                                                <div className="div4_svg4">
                                                    <img src="images/div4_2b.svg" />
                                                </div>
                                                <h2 className="div4_box_a_text1">21 million</h2>
                                                <h2 id="div4_box_a_text2a">trades</h2>
                                                <div id="div4_box_a_text1b">made in the last 30 days</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="div4_box2">
                                    <div className="div4_box3">
                                        <div className="div4_box4">
                                            <div className="div4_box5">
                                                <div className="div4_svg4">
                                                    <img src="images/div4_2c.svg" />
                                                </div>
                                                <h2 className="div4_box_a_text1">$3.2 billion</h2>
                                                <h2 id="div4_box_a_text3a">staked</h2>
                                                <div id="div4_box_a_text1b">Total Value Locked</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="transition_div4_div5">
                    <img
                        alt="transition_div4_div5"
                        className="transition_div4_div5"
                        src="images/transition_div4_div5.png"
                    />
                </div>
                <div className="trade_anything">
                    <div className="bigger-box">
                        <div className="box">
                            <div className="writing_trade">
                                <h2 className="text_trade">
                                    <span className="trade">Trade</span> anything. No registration, no
                                    hassle.
                                </h2>
                                <div className="subtext_trade">
                                    Trade any token on BNB Smart Chain in seconds, just by connecting
                                    your wallet.
                                </div>
                                <div className="buttons_trade">
                                    <button className="Trade_Now_trade">Trade Now</button>
                                    <a
                                        className="Learn_trade"
                                        href="https://docs.pancakeswap.finance/products/yield-farming"
                                    >
                                        Learn
                                        <div className="Learn_trade_svg">
                                            <img
                                                alt="learn image"
                                                className="Learn_trade_svg"
                                                src="images/learn.svg"
                                            />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="trade-box1">
                                <div className="img_trade">
                                    <div className="animation_trade">
                                        <img
                                            alt="BNB token"
                                            id="trade_bnb_img"
                                            srcSet="images/BNB_trade_anything.jpg"
                                        />
                                        <img
                                            alt="BTC token"
                                            id="trade_btc_img"
                                            srcSet="images/BTC_trade_anything.jpg"
                                        />
                                        <img
                                            alt="CAKE token"
                                            id="trade_cake_img"
                                            srcSet="images/CAKE_trade_anything.jpg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="transition_div5_div6">
                    <img
                        alt="transition_div5_div6"
                        className="transition_div5_div6"
                        src="images/transition_div5_div6.png"
                    />
                </div>
                <div className="div6earnpassive">
                    <section id="div6upperpart" className="div6upperpart">
                        <div id="div6images" className="div6images">
                            <img
                                src="images/pie@2x.webp"
                                id="div6pieimg"
                                className="div6pieimg"
                            />
                            <img
                                src="images/stonks@2x.webp"
                                id="div6stonksimg"
                                className="div6stonksimg"
                            />
                            <img
                                src="images/folder@2x.webp"
                                id="div6folderimg"
                                className="div6folderimg"
                            />
                        </div>
                        <div className="div6content">
                            <h2 id="div6text1" className="div6text1">
                                <span className="div6purple">Earn</span> passive income with crypto.
                            </h2>
                            <p className="div6text2">
                                PancakeSwap makes it easy to make your crypto work for you.
                            </p>
                            <div className="div6_content_bottom">
                                <button className="div8_buycake" id="div6_explore">
                                    <a
                                        href="https://pancakeswap.finance/farms"
                                        className="div8_buycake_anchor"
                                    >
                                        Explore
                                    </a>
                                </button>
                                <a
                                    href="https://docs.pancakeswap.finance/tokenomics/cake"
                                    className="div8_learn"
                                    id="div6_learn"
                                >
                                    Learn
                                    <img src="images/div8_1.svg" />
                                </a>
                            </div>
                        </div>
                    </section>
                    <div className="btmm">
                        <h1 className="div6topsyruppoolstext">
                            Top&nbsp;
                            <span className="div6purple">
            <span className="d6farms">Farms</span>
          </span>
                            <button name="arrows" className="div6_switch">
                                <img src="images/arrows.svg" />
                            </button>
                        </h1>
                        <div className="div6topsyruppools">
                            <div id="div6_visible" className="div6_visible">
                                <div className="div6firstc">
                                    <p className="div6line1">LVL-BNB LP</p>
                                    <p className="aprnumber">167.353%</p>
                                    <p className="aprtext">APR</p>
                                </div>
                                <div className="div6secondc">
                                    <p className="div6line1">ARV-BNB LP</p>
                                    <p className="aprnumber">78.037%</p>
                                    <p className="aprtext">APR</p>
                                </div>
                                <div id="div6thirdc" className="div6thirdc">
                                    <p className="div6line1">KRS-BUSD LP</p>
                                    <p className="aprnumber">73.954%</p>
                                    <p className="aprtext">APR</p>
                                </div>
                                <div id="div6forthc" className="div6forthc">
                                    <p className="div6line1">SQUAD-CAKE LP</p>
                                    <p className="aprnumber">72.121%</p>
                                    <p className="aprtext">APR</p>
                                </div>
                                <div id="div6fifthc" className="div6fifthc">
                                    <p className="div6line1">CEEK-BNB</p>
                                    <p className="aprnumber">63.986%</p>
                                    <p id="aprtext">APR</p>
                                </div>
                            </div>
                            <div id="div6_hidden" className="div6_hidden">
                                <div className="div6firstc">
                                    <p className="div6line1">Stake CAKE</p>
                                    <p className="aprnumber">42.862%</p>
                                    <p className="aprtext">APR</p>
                                </div>
                                <div className="div6secondc">
                                    <p className="div6line1">Stake CAKE - Earn LVL</p>
                                    <p className="aprnumber">69.329%</p>
                                    <p className="aprtext">APR</p>
                                </div>
                                <div id="div6thirdc" className="div6thirdc">
                                    <p className="div6line1">Stake CAKE - Earn SD</p>
                                    <p className="aprnumber">20.739%</p>
                                    <p className="aprtext">APR</p>
                                </div>
                                <div id="div6forthc" className="div6forthc">
                                    <p className="div6line1">Stake CAKE - Earn PSTAKE</p>
                                    <p className="aprnumber">20.683%</p>
                                    <p className="aprtext">APR</p>
                                </div>
                                <div id="div6fifthc" className="div6fifthc">
                                    <p className="div6line1">Stake CAKE - Earn axlUSDC</p>
                                    <p className="aprnumber">18.081%</p>
                                    <p className="aprtext">APR</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="div7_parent">
                    <div id="div7winmillions" className="div7winmillions">
                        <div id="div7frame" className="div7frame">
                            <div id="div7caption1">
                                <h1 id="div7h1">
                                    <span className="div6purple">Win&nbsp;</span>millions in prizes
                                </h1>
                                <p id="div7p1">
                                    Provably fair, on-chain games.
                                    <br />
                                    Win big with PancakeSwap.
                                </p>
                            </div>
                            <div id="div72cards" className="div72cards">
                                <div className="div7yellowcard" id="div7yellowcard">
                                    <img src="images/magicball.svg" id="div7magicball" />
                                    <div id="div7yctext">
                                        <p id="div7yctext1">Prediction</p>
                                        <h1 id="div7yctext2">$1.2 billion</h1>
                                        <p id="div7yctext3">in BNB + CAKE won so far</p>
                                        <p id="div7yctext4">
                                            Predict the price trend of BNB or CAKE to win
                                        </p>
                                    </div>
                                    <button className="div8_buycake" id="div7_play">
                                        <a
                                            href="https://pancakeswap.finance/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&chainId=56"
                                            className="div8_buycake_anchor"
                                        >
                                            Play{" "}
                                            <svg
                                                viewBox="0 0 24 24"
                                                color="invertedContrast"
                                                width="20px"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="sc-231a1e38-0 bmGvXN"
                                            >
                                                <path d="M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z" />
                                            </svg>
                                        </a>
                                    </button>
                                </div>
                                <div className="div7purplecard" id="div7purplecard">
                                    <img src="images/div7ticket.svg" id="div7ticket" />
                                    <p id="div7pctext1">Lottery</p>
                                    <p id="div7pctext2">$58,915</p>
                                    <p id="div7pctext3">in CAKE prizes this round</p>
                                    <p id="div7pctext4">
                                        Buy tickets with CAKE, win CAKE if your numbers match
                                    </p>
                                    <button className="div8_buycake" id="div7_buytickets">
                                        <a
                                            href="https://pancakeswap.finance/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&chainId=56"
                                            className="div8_buycake_anchor"
                                        >
                                            Buy Tickets{" "}
                                            <svg
                                                viewBox="0 0 24 24"
                                                color="invertedContrast"
                                                width="20px"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="sc-231a1e38-0 bmGvXN"
                                            >
                                                <path d="M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z" />
                                            </svg>
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div id="div7images">
                            <img src="images/2@2x.webp" id="div7ball2" className="div7ball2" />
                            <img
                                src="images/bottom-left@2x.webp"
                                id="div7greenbottomcard"
                                className="div7greenbottomcard"
                            />
                            <img
                                src="images/card-top-right@2x.webp"
                                id="div7greencard"
                                className="div7greencard"
                            />
                            <img
                                src="images/green@2x.webp"
                                id="div7bluecard"
                                className="div7bluecard"
                            />
                            <img
                                src="images/red@2x.webp"
                                id="div7redcard"
                                className="div7redcard"
                            />
                            <img src="images/4@2x.webp" id="div7ball4" className="div7ball4" />
                            <img src="images/6@2x.webp" id="div7ball6" className="div7ball6" />
                            <img src="images/7@2x.webp" id="div7ball7" className="div7ball7" />
                            <img src="images/9@2x.webp" id="div7ball9" className="div7ball9" />
                        </div>
                    </div>
                </div>
                <div className="div8_parent_container">
                    <div className="div8_container">
                        <div className="div8_top">
                            <div className="div8_top_left">
                                <h2 id="div8_text1">
                                    <span>CAKE </span>makes the world go round.
                                </h2>
                                <div id="div8_text2">
                                    CAKE token is at the heart of the PancakeSwap ecosystem. Buy it,
                                    win it, farm it, spend it, stake it... heck, you can even vote
                                    with it!
                                </div>
                                <div className="div8_top_left_buttons">
                                    <button className="div8_buycake">
                                        <a
                                            href="https://pancakeswap.finance/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&chainId=56"
                                            className="div8_buycake_anchor"
                                        >
                                            Buy CAKE
                                        </a>
                                    </button>
                                    <a
                                        href="https://docs.pancakeswap.finance/tokenomics/cake"
                                        className="div8_learn"
                                    >
                                        Learn
                                        <img src="images/div8_1.svg" />
                                    </a>
                                </div>
                            </div>
                            <div className="div8_top_right">
                                <div className="div8_tr_top_right">
                                    <img src="images/div8_top-right@2x.webp" />
                                </div>
                                <div className="div8_tr_bottom_right">
                                    <img src="images/div8_bottom-right@2x.webp" />
                                </div>
                                <div className="div8_tr_middle">
                                    <img src="images/div8_coin@2x.webp" />
                                </div>
                                <div className="div8_tr_top_left">
                                    <img src="images/div8_top-left@2x.webp" />
                                </div>
                            </div>
                        </div>
                        <div className="div8_bottom">
                            <div className="div8_b_t1">
                                <div className="div8_grid_title">Circulating Supply</div>
                                <div className="div8_grid_text">187,327,376</div>
                            </div>
                            <div className="div8_b_t2">
                                <div className="div8_grid_title">Total Supply</div>
                                <div className="div8_grid_text">383,780,561</div>
                            </div>
                            <div className="div8_b_t3">
                                <div className="div8_grid_title">Max Supply</div>
                                <div className="div8_grid_text">750,000,000</div>
                            </div>
                            <div className="div8_b_b1">
                                <div className="div8_grid_title">Market Cap</div>
                                <div className="div8_grid_text">$680 million</div>
                            </div>
                            <div className="div8_b_b2">
                                <div className="div8_grid_title">Burned to Date</div>
                                <div className="div8_grid_text">780,090,834</div>
                            </div>
                            <div className="div8_b_b3">
                                <div className="div8_grid_title">Current Emissions</div>
                                <div className="div8_grid_text">9.9/block</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="div9">
                    <div className="ninthdiv">
                        <div className="b4content">
                            <div className="pageinfo">
                                <div className="pagebox">
                                    <img
                                        src="images/div9svgs/first.svg"
                                        alt="firstsvg"
                                        className="firstsvg"
                                    />
                                </div>
                            </div>
                            <div className="many1">
                                <div className="many2">
                                    <div className="many3">
                                        <img src="images/1-bottom@2x.webp" className="coin1" />
                                        <div className="many4">
                                            <img
                                                src="images/1-bottom@2x.webp"
                                                alt="Pancake flying on the bottom"
                                                className="coin2"
                                            />
                                        </div>
                                        <div className="many4">
                                            <img
                                                src="images/1-left@2x.webp"
                                                alt="Pancake flying on the left"
                                                className="coin2"
                                            />
                                        </div>
                                        <div className="many4">
                                            <img
                                                src="images/1-top@2x.webp"
                                                alt="Pancake flying on the top"
                                                className="coin2"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="many5">
                                    <div className="many3">
                                        <img src="images/2-bottom@2x.webp" className="coin1" />
                                        <div className="many4">
                                            <img
                                                src="images/2-bottom@2x.webp"
                                                alt="Pancake flying on the bottom"
                                                className="coin2"
                                            />
                                        </div>
                                        <div className="many4">
                                            <img
                                                src="images/2-top@2x.webp"
                                                alt="Pancake flying on the top"
                                                className="coin2"
                                            />
                                        </div>
                                        <div className="many4">
                                            <img
                                                src="images/2-right@2x.webp"
                                                alt="Pancake flying on the right"
                                                className="coin2"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="many6">
                                <h2 className="firstsent">Start in seconds.</h2>
                                <div className="secsent">
                                    Connect your crypto wallet to start using the app in seconds.
                                </div>
                                <div className="register">No registration needed.</div>
                                <a href="https://docs.pancakeswap.finance/" className="education">
                                    Learn how to start
                                    <img
                                        src="images/div9svgs/sec.svg"
                                        alt="secsvg"
                                        className="secsvg"
                                    />
                                </a>
                                <button className="buttonwallet">Connect Wallet</button>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="scale_border" />
            </main>
            <footer>
                <div id="div10" className="div10">
                    <div className="tenthdiv">
                        <div id="content" className="content">
                            <div className="contentlist">
                                <span className="about">About</span>
                                <span className="about-info">
              <a
                  href="https://docs.pancakeswap.finance/contact-us"
                  className="contacted"
              >
                Contact
              </a>
            </span>
                                <span className="about-info">
              <a
                  href="https://docs.pancakeswap.finance/brand"
                  className="frombrand"
              >
                Brand
              </a>
            </span>
                                <span className="about-info">
              <a href="https://docs.pancakeswap.finance/" className="frombrand">
                Blog
              </a>
            </span>
                                <span className="about-info">
              <a
                  href="https://docs.pancakeswap.finance/contact-us/telegram"
                  className="frombrand"
              >
                Community
              </a>
            </span>
                                <span className="about-info">
              <a
                  href="https://v2spantepaper.pancakeswap.finance/"
                  className="frombrand"
              >
                Litepaper
              </a>
            </span>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </div>
                            <span className="contentlist">
            <span className="about">Help</span>
            <span className="about-info">
              <a
                  href="https://docs.pancakeswap.finance/contact-us/customer-support"
                  className="frombrand"
              >
                Customer Support
              </a>
            </span>
            <span className="about-info">
              <a
                  href="https://docs.pancakeswap.finance/help/troubleshooting"
                  className="frombrand"
              >
                Troubleshooting
              </a>
            </span>
            <span className="about-info">
              <a
                  data-theme="dark"
                  href="https://docs.pancakeswap.finance/get-started"
                  className="frombrand"
              >
                Guides
              </a>
            </span>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
                            <section className="contentlist">
                                <span className="about">Developers</span>
                                <span className="about-info">
              <a href="https://github.com/pancakeswap" className="frombrand">
                Github
              </a>
            </span>
                                <span className="about-info">
              <a href="https://docs.pancakeswap.finance" className="frombrand">
                Documentation
              </a>
            </span>
                                <span className="about-info">
              <a
                  href="https://github.com/pancakeswap/code/bug-bounty"
                  className="frombrand"
              >
                Bug Bounty
              </a>
            </span>
                                <span className="about-info">
              <a
                  href="https://docs.pancakeswap.finance/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited"
                  className="frombrand"
              >
                Audits
              </a>
            </span>
                                <span className="about-info">
              <a
                  href="https://docs.pancakeswap.finance/hiring/become-a-chef"
                  className="frombrand"
              >
                Careers
              </a>
            </span>
                            </section>
                            <div>
                                <svg
                                    viewBox="0 0 1281 199"
                                    color="text"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="pancklogo"
                                >
                                    <path
                                        fill="var(--colors-contrast)"
                                        d="M247.013 153.096c-2.979 0-5.085-.617-6.318-1.849-1.13-1.233-1.695-3.185-1.695-5.856v-89.22c0-2.672.616-4.624 1.849-5.856 1.233-1.336 3.287-2.004 6.164-2.004h37.753c14.382 0 24.963 3.031 31.744 9.092 6.78 6.061 10.17 15.101 10.17 27.12 0 11.917-3.39 20.906-10.17 26.967-6.678 5.959-17.259 8.938-31.744 8.938h-14.639v24.963c0 2.671-.616 4.623-1.849 5.856-1.233 1.232-3.339 1.849-6.318 1.849h-14.947zm35.288-55.012c4.212 0 7.448-1.13 9.708-3.39 2.362-2.26 3.544-5.65 3.544-10.17 0-4.623-1.182-8.065-3.544-10.325-2.26-2.26-5.496-3.39-9.708-3.39h-12.174v27.275h12.174zM363.071 155.407c-9.656 0-17.412-3.082-23.268-9.245-5.753-6.267-8.629-15.05-8.629-26.351 0-8.629 1.952-16.18 5.855-22.652 4.007-6.472 9.606-11.454 16.797-14.947 7.294-3.595 15.666-5.393 25.117-5.393 7.808 0 14.691.873 20.649 2.62 6.061 1.643 11.608 4.057 16.642 7.242v61.638c0 1.952-.359 3.236-1.079 3.852-.719.617-2.157.925-4.314.925h-15.718c-1.13 0-2.003-.154-2.619-.463-.617-.41-1.13-1.027-1.541-1.849l-2.004-4.622c-2.979 3.184-6.574 5.496-10.786 6.934-4.109 1.541-9.143 2.311-15.102 2.311zm11.558-20.957c4.006 0 7.139-.976 9.399-2.927 2.26-1.952 3.39-4.726 3.39-8.322V99.163c-1.951-.925-4.417-1.387-7.396-1.387-5.445 0-9.811 1.9-13.098 5.701-3.185 3.801-4.777 9.143-4.777 16.026 0 9.965 4.16 14.947 12.482 14.947zM437.679 153.096c-2.98 0-5.086-.617-6.318-1.849-1.233-1.233-1.849-3.185-1.849-5.856V83.907c0-1.849.308-3.082.924-3.698.719-.72 2.157-1.079 4.315-1.079h15.872c1.232 0 2.157.206 2.773.617.719.308 1.13.924 1.233 1.849l.77 4.623c2.877-2.877 6.627-5.137 11.249-6.78 4.726-1.747 9.965-2.62 15.718-2.62 8.321 0 15.05 2.363 20.186 7.088 5.137 4.623 7.705 11.506 7.705 20.649v40.835c0 2.671-.616 4.623-1.849 5.856-1.13 1.232-3.185 1.849-6.164 1.849h-14.947c-2.979 0-5.136-.617-6.472-1.849-1.233-1.233-1.849-3.185-1.849-5.856v-38.832c0-3.082-.668-5.29-2.003-6.626-1.336-1.335-3.442-2.003-6.318-2.003-3.082 0-5.548.822-7.397 2.465-1.746 1.644-2.619 3.904-2.619 6.781v38.215c0 2.671-.617 4.623-1.849 5.856-1.13 1.232-3.185 1.849-6.164 1.849h-14.947zM564.725 155.407c-14.382 0-25.477-3.339-33.285-10.016-7.807-6.677-11.711-16.385-11.711-29.124 0-7.807 1.798-14.69 5.393-20.648 3.596-5.959 8.784-10.582 15.564-13.869 6.883-3.287 14.999-4.931 24.347-4.931 7.088 0 13.047.668 17.875 2.003 4.931 1.336 9.297 3.39 13.098 6.164 1.13.72 1.695 1.644 1.695 2.774 0 .822-.411 1.9-1.233 3.236l-6.318 10.94c-.719 1.439-1.592 2.158-2.619 2.158-.617 0-1.593-.411-2.928-1.233-2.774-1.746-5.393-3.03-7.859-3.852-2.363-.822-5.342-1.233-8.937-1.233-5.137 0-9.297 1.644-12.482 4.931-3.082 3.287-4.623 7.807-4.623 13.56 0 5.856 1.592 10.376 4.777 13.56 3.185 3.082 7.551 4.623 13.098 4.623 3.287 0 6.267-.462 8.938-1.387 2.671-.924 5.393-2.208 8.167-3.852 1.438-.822 2.465-1.233 3.082-1.233.924 0 1.746.719 2.465 2.158l6.934 11.865c.514 1.027.771 1.849.771 2.465 0 .925-.617 1.798-1.849 2.62-4.315 2.774-9.041 4.828-14.177 6.164-5.034 1.438-11.095 2.157-18.183 2.157zM638.004 155.407c-9.657 0-17.413-3.082-23.268-9.245-5.753-6.267-8.63-15.05-8.63-26.351 0-8.629 1.952-16.18 5.856-22.652 4.006-6.472 9.605-11.454 16.796-14.947 7.294-3.595 15.667-5.393 25.118-5.393 7.807 0 14.69.873 20.648 2.62 6.061 1.643 11.609 4.057 16.643 7.242v61.638c0 1.952-.36 3.236-1.079 3.852-.719.617-2.157.925-4.315.925h-15.717c-1.13 0-2.004-.154-2.62-.463-.616-.41-1.13-1.027-1.541-1.849l-2.003-4.622c-2.979 3.184-6.575 5.496-10.787 6.934-4.109 1.541-9.143 2.311-15.101 2.311zm11.557-20.957c4.007 0 7.14-.976 9.4-2.927 2.26-1.952 3.39-4.726 3.39-8.322V99.163c-1.952-.925-4.417-1.387-7.397-1.387-5.444 0-9.81 1.9-13.098 5.701-3.184 3.801-4.777 9.143-4.777 16.026 0 9.965 4.161 14.947 12.482 14.947zM787.963 147.24c.719.822 1.079 1.747 1.079 2.774 0 .924-.308 1.695-.925 2.311-.616.514-1.438.771-2.465.771h-23.885c-1.438 0-2.517-.103-3.236-.308-.616-.309-1.284-.874-2.003-1.695l-20.957-28.508v22.806c0 2.671-.616 4.623-1.849 5.856-1.233 1.232-3.339 1.849-6.318 1.849h-14.947c-2.979 0-5.085-.617-6.318-1.849-1.13-1.233-1.695-3.185-1.695-5.856v-89.22c0-2.672.616-4.624 1.849-5.856 1.233-1.336 3.288-2.004 6.164-2.004h14.947c2.979 0 5.085.668 6.318 2.004 1.233 1.232 1.849 3.184 1.849 5.855v51.622l20.341-26.504c.616-.822 1.284-1.387 2.003-1.695.719-.309 1.798-.463 3.236-.463h23.885c1.027 0 1.797.309 2.311.925.616.514.925 1.233.925 2.157 0 1.028-.36 1.952-1.079 2.774l-26.35 30.203 27.12 32.051zM837.998 155.407c-8.629 0-16.334-1.438-23.114-4.314-6.677-2.877-11.968-7.192-15.872-12.944-3.903-5.753-5.855-12.79-5.855-21.111 0-13.047 3.698-23.012 11.095-29.895 7.396-6.883 18.029-10.324 31.897-10.324 13.561 0 23.834 3.39 30.819 10.17 7.089 6.678 10.633 15.975 10.633 27.891 0 5.137-2.26 7.705-6.78 7.705h-48.386c0 4.417 1.643 7.808 4.931 10.17 3.39 2.363 8.475 3.544 15.255 3.544 4.212 0 7.705-.359 10.479-1.078 2.876-.822 5.753-2.003 8.629-3.544 1.233-.514 2.055-.771 2.465-.771.925 0 1.695.617 2.312 1.849l5.239 9.862c.514 1.028.771 1.798.771 2.312 0 .924-.617 1.798-1.85 2.619-4.211 2.774-8.988 4.777-14.33 6.01-5.342 1.233-11.455 1.849-18.338 1.849zm11.866-48.077c0-3.904-1.13-6.935-3.39-9.092-2.26-2.157-5.651-3.236-10.171-3.236s-7.961 1.13-10.324 3.39c-2.363 2.158-3.544 5.137-3.544 8.938h27.429zM930.417 155.407c-8.63 0-16.797-.873-24.501-2.619-7.705-1.85-13.92-4.418-18.646-7.705-1.746-1.13-2.619-2.312-2.619-3.544 0-.822.308-1.695.924-2.62l7.551-12.019c.822-1.233 1.643-1.849 2.465-1.849.514 0 1.387.359 2.62 1.078 3.801 2.158 8.115 3.904 12.944 5.239 4.828 1.336 9.605 2.004 14.331 2.004 4.828 0 8.372-.719 10.632-2.158 2.363-1.438 3.544-3.749 3.544-6.934 0-3.082-1.284-5.496-3.852-7.242-2.466-1.747-7.14-3.955-14.023-6.626-10.375-3.904-18.491-8.27-24.347-13.099-5.753-4.93-8.629-11.608-8.629-20.032 0-10.17 3.647-17.926 10.941-23.268C907.046 48.67 916.753 46 928.876 46c8.423 0 15.615.77 21.573 2.311 6.061 1.439 11.197 3.699 15.409 6.78 1.747 1.336 2.62 2.569 2.62 3.699 0 .719-.308 1.54-.925 2.465l-7.55 12.02c-.925 1.232-1.747 1.849-2.466 1.849-.513 0-1.387-.36-2.619-1.079-5.959-3.904-13.047-5.855-21.265-5.855-4.418 0-7.808.719-10.171 2.157-2.362 1.438-3.544 3.801-3.544 7.088 0 2.26.617 4.11 1.849 5.548 1.233 1.438 2.877 2.722 4.931 3.852 2.158 1.027 5.445 2.363 9.862 4.007l2.928 1.078c7.602 2.98 13.561 5.856 17.875 8.63 4.418 2.67 7.756 6.009 10.016 10.016 2.26 3.903 3.39 8.834 3.39 14.793 0 9.143-3.441 16.437-10.324 21.881-6.78 5.445-16.796 8.167-30.048 8.167zM1003.53 153.096c-1.54 0-2.72-.257-3.544-.771-.822-.513-1.439-1.541-1.85-3.082l-19.878-66.569c-.205-.616-.308-1.078-.308-1.386 0-1.438 1.027-2.158 3.082-2.158h20.338c1.34 0 2.31.257 2.93.77.62.412 1.03 1.13 1.23 2.158l8.32 34.98 10.48-28.2c.52-1.232 1.03-2.054 1.54-2.465.62-.514 1.65-.77 3.09-.77h9.7c1.44 0 2.42.256 2.93.77.62.41 1.18 1.233 1.7 2.465l10.32 28.2 8.48-34.98c.3-1.027.71-1.746 1.23-2.157.51-.514 1.44-.77 2.77-.77h20.5c2.05 0 3.08.719 3.08 2.157 0 .308-.1.77-.31 1.386l-20.03 66.569c-.41 1.541-1.03 2.569-1.85 3.082-.72.514-1.85.771-3.39.771h-15.1c-1.44 0-2.52-.257-3.24-.771-.72-.616-1.33-1.643-1.85-3.082l-10.17-27.891-10.17 27.891c-.41 1.439-1.03 2.466-1.85 3.082-.72.514-1.79.771-3.23.771h-14.95zM1128.73 155.407c-9.66 0-17.41-3.082-23.27-9.245-5.75-6.267-8.63-15.05-8.63-26.351 0-8.629 1.95-16.18 5.86-22.652 4-6.472 9.6-11.454 16.79-14.947 7.3-3.595 15.67-5.393 25.12-5.393 7.81 0 14.69.873 20.65 2.62 6.06 1.643 11.61 4.057 16.64 7.242v61.638c0 1.952-.36 3.236-1.08 3.852-.72.617-2.15.925-4.31.925h-15.72c-1.13 0-2-.154-2.62-.463-.62-.41-1.13-1.027-1.54-1.849l-2-4.622c-2.98 3.184-6.58 5.496-10.79 6.934-4.11 1.541-9.14 2.311-15.1 2.311zm11.56-20.957c4 0 7.14-.976 9.4-2.927 2.26-1.952 3.39-4.726 3.39-8.322V99.163c-1.96-.925-4.42-1.387-7.4-1.387-5.45 0-9.81 1.9-13.1 5.701-3.18 3.801-4.78 9.143-4.78 16.026 0 9.965 4.17 14.947 12.49 14.947zM1203.18 184.223c-2.98 0-5.08-.616-6.32-1.849-1.13-1.233-1.69-3.185-1.69-5.856V88.222c4.62-3.287 10.43-6.01 17.41-8.167 6.99-2.157 14.28-3.236 21.88-3.236 31.03 0 46.54 13.15 46.54 39.448 0 11.917-3.29 21.419-9.86 28.508-6.58 7.088-15.87 10.632-27.89 10.632-3.39 0-6.68-.411-9.87-1.233-3.08-.821-5.65-1.951-7.7-3.39v25.734c0 2.671-.62 4.623-1.85 5.856-1.23 1.233-3.34 1.849-6.32 1.849h-14.33zm33.44-49.619c4.42 0 7.71-1.643 9.86-4.931 2.26-3.39 3.39-7.91 3.39-13.56 0-6.677-1.33-11.352-4-14.023-2.57-2.773-6.58-4.16-12.02-4.16-3.5 0-6.27.462-8.32 1.387v24.501c0 3.493.97 6.164 2.92 8.013 1.96 1.849 4.68 2.773 8.17 2.773z"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M97.556 198.607c-29.192-.022-52.708-7.027-69.138-19.609-16.627-12.733-25.448-30.803-25.448-51.25 0-19.701 8.801-33.907 18.76-43.51 7.805-7.525 16.417-12.344 22.414-15.117-1.356-4.162-3.048-9.61-4.562-15.238-2.025-7.53-4.012-16.366-4.012-22.84 0-7.663 1.67-15.36 6.175-21.34C46.505 3.385 53.671 0 62.291 0c6.737 0 12.457 2.499 16.934 6.81 4.28 4.12 7.13 9.593 9.097 15.298 3.456 10.024 4.802 22.618 5.179 35.187h8.257c.378-12.569 1.723-25.163 5.18-35.187 1.967-5.705 4.815-11.177 9.096-15.298C120.512 2.5 126.231 0 132.968 0c8.621 0 15.786 3.385 20.546 9.703 4.505 5.98 6.176 13.677 6.176 21.34 0 6.474-1.988 15.31-4.013 22.84-1.514 5.628-3.206 11.076-4.562 15.238 5.997 2.773 14.61 7.592 22.414 15.118 9.959 9.602 18.76 23.808 18.76 43.509 0 20.447-8.82 38.517-25.448 51.25-16.43 12.582-39.946 19.587-69.138 19.609h-.147z"
                                        fill="#633001"
                                    />
                                    <path
                                        d="M62.29 7.288c-12.625 0-18.437 9.516-18.437 22.675 0 10.46 6.753 31.408 9.523 39.563.624 1.835-.356 3.844-2.142 4.555-10.119 4.031-39.981 18.789-39.981 52.588 0 35.603 30.347 62.448 86.31 62.491l.066-.001.067.001c55.962-.043 86.309-26.888 86.309-62.491 0-33.799-29.862-48.557-39.981-52.588-1.786-.71-2.765-2.72-2.142-4.555 2.771-8.154 9.524-29.103 9.524-39.563 0-13.16-5.812-22.675-18.438-22.675-18.174 0-22.705 26.007-23.028 53.92-.021 1.863-1.513 3.375-3.357 3.375H88.676c-1.845 0-3.336-1.512-3.358-3.375-.323-27.913-4.853-53.92-23.028-53.92z"
                                        fill="#D1884F"
                                    />
                                    <path
                                        d="M97.696 177.755c-41.118 0-86.372-22.235-86.443-51.018v.134c0 35.632 30.395 62.491 86.443 62.491s86.443-26.859 86.443-62.491v-.134c-.071 28.783-45.325 51.018-86.443 51.018z"
                                        fill="#FEDC90"
                                    />
                                    <path
                                        className="eye"
                                        d="M74.85 117.896c0 9.718-4.546 14.779-10.154 14.779s-10.154-5.061-10.154-14.779 4.546-14.779 10.154-14.779 10.154 5.061 10.154 14.779zM140.851 117.896c0 9.718-4.546 14.779-10.154 14.779s-10.154-5.061-10.154-14.779 4.546-14.779 10.154-14.779 10.154 5.061 10.154 14.779z"
                                        fill="#633001"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="iconpage">
                            <a
                                href="https://twitter.com/pancakeswap"
                                aria-label="Twitter"
                                color="primary"
                                fontSize="16px"
                                className="socials_icon"
                            >
                                <svg
                                    viewBox="0 0 18 15"
                                    width="20px"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="sc-4ba21b47-0 ebMyYP"
                                    style={{ cursor: "pointer" }}
                                >
                                    <path d="M5.659 15c6.79 0 10.507-5.766 10.507-10.763 0-.16 0-.32-.01-.49A7.578 7.578 0 0018 1.79c-.663.3-1.376.5-2.127.6a3.824 3.824 0 001.63-2.1c-.713.44-1.503.75-2.352.92A3.6 3.6 0 0012.46 0C10.419 0 8.76 1.699 8.76 3.787c0 .3.039.58.098.86-3.064-.15-5.786-1.669-7.61-3.957A3.858 3.858 0 00.75 2.598c0 1.31.654 2.469 1.64 3.148a3.638 3.638 0 01-1.669-.47v.05c0 1.83 1.278 3.368 2.956 3.708-.312.09-.634.13-.976.13-.234 0-.468-.02-.692-.07.468 1.509 1.834 2.598 3.453 2.628a7.284 7.284 0 01-4.585 1.62c-.293 0-.595-.01-.878-.05A10.206 10.206 0 005.659 15z" />
                                </svg>
                            </a>
                            <div id="announcements">
                                <img
                                    src="images/announcement.svg"
                                    alt="Languages"
                                    className="socials_icon"
                                />
                                <div className="langs">
                                    {/* <a href="https://t.me/pancakeswap" class="translation-lang">English</a> */}
                                </div>
                            </div>
                            <a
                                href="https://reddit.com/r/pancakeswap"
                                aria-label="Reddit"
                                className="socials_icon"
                            >
                                <img
                                    src="images/reddit.svg"
                                    alt="Reddit icon"
                                    className="reddit-icon"
                                />
                            </a>
                            <a
                                href="https://instagram.com/pancakeswap_official"
                                aria-label="Instagram"
                                className="socials_icon"
                            >
                                <img src="images/ig.svg" className="ig-svg" alt="Instagram" />
                            </a>
                            <a
                                href="https://github.com/pancakeswap/"
                                aria-label="Github"
                                className="socials_icon"
                            >
                                <img src="images/github.svg" className="github-svg" alt="github" />
                            </a>
                            <a
                                href="https://discord.gg/pancakeswap"
                                aria-label="Discord"
                                className="socials_icon"
                            >
                                <img
                                    src="images/discord.svg"
                                    alt="discord"
                                    className="discord-svg"
                                />
                            </a>
                            <a
                                href="https://www.youtube.com/@pancakeswap_official"
                                aria-label="Youtube"
                                className="socials_icon"
                            >
                                <img
                                    src="images/youtube.svg"
                                    alt="youtube"
                                    className="youtube-svg"
                                />
                            </a>
                        </div>
                        <div className="theme">
                            <div className="theme2">
                                <div className="dark-theme">
                                    <div className="langs">
                                        <div className="dark-appearance">
                                            <input
                                                type="checkbox"
                                                className="checked"
                                                defaultChecked=""
                                            />
                                            <div className="mooncake">
                                                <div className="sunshine">
                                                    <img
                                                        src="images/sunshine.svg"
                                                        alt="Sun svg"
                                                        className="langs-svg"
                                                    />
                                                </div>
                                            </div>
                                            <div className="lang-button">
                                                <img
                                                    src="images/sunny.svg"
                                                    alt="Sun"
                                                    className="svgtenth"
                                                />
                                                <img
                                                    src="images/moon.svg"
                                                    alt="Moon"
                                                    className="svgtenth"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="race">
                                    <button className="worldlang">
                                        <img
                                            src="images/world.svg"
                                            alt="world"
                                            className="langexchange"
                                        />
                                        <div className="rep">EN</div>
                                    </button>
                                    <div className="abovelang" />
                                </div>
                            </div>
                            <div className="endlogo">
                                <div className="startFooter">
                                    <a
                                        href="https://pancakeswap.finance/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&chainId=56"
                                        className="standardPrice"
                                    >
                                        <img src="images/logo.svg" alt="logo" className="logosvg" />
                                        <div className="price">$1.870</div>
                                    </a>
                                </div>
                                <a
                                    className="buycake"
                                    href="https://pancakeswap.finance/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&chainId=56"
                                >
                                    Buy CAKE
                                    <img
                                        src="images/buycake.svg"
                                        className="buycakesvg"
                                        alt="Buy Cake"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="new0ptions" id="earn">
                <span className="opt_kids">Farms</span>
                <span className="opt_kids">Pools</span>
                <span className="opt_kids">Liquid Staking</span>
            </div>
            <div className="new0ptions" id="win">
                <span className="opt_kids">Trading Competition</span>
                <span className="opt_kids">Prediction(BETA)</span>
                <span className="opt_kids">Lottery</span>
                <span className="opt_kids" id="potteryDiv2">
      Pottery (BETA) <span className="pottery">POT OPEN</span>
    </span>
            </div>
            <div className="new0ptions" id="nft">
                <span className="opt_kids">Overview</span>
                <span className="opt_kids">Collections</span>
                <span className="opt_kids">Activity</span>
            </div>
            <div className="new0ptions" id="dots">
                <span className="opt_kids">Info</span>
                <span id="ifoPAGEBtn2" className="opt_kids">
      IFO
    </span>
                <span className="opt_kids">Voting</span>
                <span className="opt_kids">Leaderboard</span>
                <span className="opt_kids" id="blog2">
      Blog <img src="images/l-arrow.svg" />
    </span>
                <span className="opt_kids" id="docs2">
      Docs <img src="images/l-arrow.svg" />{" "}
    </span>
            </div>
            <div id="mbNavbar" className="mbNavbar">
                <div className="cover">
      <span className="mbBtns">
        <img className="mbImgs" src="images/1s.svg" />
        <span>Trade</span>
      </span>
                </div>
                <div id="earnBtn" className="mbBtns">
                    {" "}
                    <img className="mbImgs" src="images/2s.svg" />
                    <span>Earn</span>
                </div>
                <div id="winBtn" className="mbBtns">
                    {" "}
                    <img id="trophy" className="mbImgs" src="images/3strophy.svg" />
                    <span>Win</span>
                </div>
                <div id="nftBtn" className="mbBtns">
                    {" "}
                    <img className="mbImgs" src="images/4snft.svg" />
                    <span>NFT</span>
                </div>
                <div id="dotsBtn" className="mbBtns">
      <span>
        <span className="cir_dot" />
        <span className="cir_dot" />
        <span className="cir_dot" />
          &nbsp;
      </span>
                </div>
                .
            </div>
        </>

    )

}
// Fred Homepage Section ends