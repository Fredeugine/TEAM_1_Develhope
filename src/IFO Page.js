import './Ifo.css'
import './styles.css';
import {useEffect} from "react";
export function IFOPage(){
    useEffect(() => {
        {
            const buttons = document.querySelectorAll(".buttons");
            const options = document.querySelectorAll(".options");
            const images = document.querySelectorAll('.imgs');
            const bnbText = document.getElementById('bnb_word')
            const walletText = document.querySelector('.btn_cwallect')
            const globe = document.querySelector('#img_globe')
            const toggleButton = document.querySelector(".toggle")
            const options6 = document.getElementById('options6')
            const ifoPAGE = document.querySelector('.ifoMain')
            const bodyDisappear = document.querySelector('.bodyDisappear')
            const btnDetails = document.querySelectorAll('.btnDetails')
            const arrow = document.querySelectorAll('.darrow')
            const heheDetails = document.querySelectorAll('.hehe')
            const smallerAds = document.querySelectorAll('.adSmall')
            const ifoPageButton = document.querySelector('#ifoPAGEBtn')
            const EarnBtn = document.querySelector('#earnBtn')
            const WinBtn = document.querySelector('#winBtn')
            const NftBtn = document.querySelector('#nftBtn')
            const DotsBtn = document.querySelector('#dotsBtn')
            const Earn = document.querySelector('#earn')
            const Win = document.querySelector('#win')
            const Nft = document.querySelector('#nft')
            const Dots = document.querySelector('#dots')

            function animateValue(obj, start, end, duration) {
                let startTimestamp = null;
                const step = (timestamp) => {
                    if (!startTimestamp) startTimestamp = timestamp;
                    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                    obj.innerHTML = Math.floor(progress * (end - start) + start);
                    if (progress < 1) {
                        window.requestAnimationFrame(step);
                    }
                };
                window.requestAnimationFrame(step);
            }

            const obj = document.getElementById("json");
            const obj2 = document.getElementById("json2");
            animateValue(obj, 855, 85, 1500);
            animateValue(obj2, 718, 18 , 1500);
// Index JS Starts
            const pageUp = document.querySelector(".page-up");

            window.addEventListener("scroll", () => {
                if (window.pageYOffset > 450) {
                    pageUp.style.display = "flex";
                    pageUp.style.visibility =  "visible";
                } else {
                    pageUp.style.display = 'none';
                }
            });

//div 6 table switch

            const visibleTable = document.querySelector(".div6_visible")
            const hiddenTable = document.querySelector(".div6_hidden")
            const switchButton = document.querySelector(".div6_switch");
            const title = document.querySelector(".d6farms");

            function switchTable() {
                if (visibleTable.style.display === "none") {
                    visibleTable.style.display = "grid";
                    hiddenTable.style.display = "none";
                    title.textContent = "Farms";

                } else {
                    visibleTable.style.display = "none";
                    hiddenTable.style.display = "grid";
                    title.textContent = "Syrup Pools";
                }
            }

            switchButton.addEventListener("click", switchTable);

            setInterval(switchTable, 5000);
//Index Js Ends
// IFO SECTION
            btnDetails.forEach(function (button,index){
                var clicked = true
                //changes Details to hide when clicked and arrow rotates 180deg
                button.addEventListener('click',function (){
                    if (clicked) {
                        if (index === 0) {
                            heheDetails[0].innerText = 'hide'
                            arrow[0].style.transform = 'rotate(180deg)'
                            clicked = false
                        }
                        if (index === 1) {
                            heheDetails[1].innerText = 'hide'
                            arrow[1].style.transform = 'rotate(180deg)'
                            smallerAds[0].style.setProperty('display','block')
                            clicked = false
                        }
                        if (index === 2) {
                            heheDetails[2].innerText = 'hide'
                            arrow[2].style.transform = 'rotate(180deg)'
                            smallerAds[1].style.setProperty('display','block')
                            clicked = false
                        }
                        if (index === 3) {
                            heheDetails[3].innerText = 'hide'
                            arrow[3].style.transform = 'rotate(180deg)'
                            smallerAds[2].style.setProperty('display','block')
                            clicked = false
                        }
                        if (index === 4) {
                            heheDetails[4].innerText = 'hide'
                            arrow[4].style.transform = 'rotate(180deg)'
                            smallerAds[3].style.setProperty('display','block')
                            clicked = false
                        }
                        if (index === 5) {
                            heheDetails[5].innerText = 'hide'
                            arrow[5].style.transform = 'rotate(180deg)'
                            smallerAds[4].style.setProperty('display','block')
                            clicked = false
                        }
                        if (index === 6) {
                            heheDetails[6].innerText = 'hide'
                            arrow[6].style.transform = 'rotate(180deg)'
                            smallerAds[5].style.setProperty('display','block')
                            clicked = false
                        }
                    }
                    else if (!clicked){
                        if (index === 0){
                            arrow[0].style.transform = 'rotate(0)'
                            heheDetails[0].innerText = 'Details'
                            clicked = true
                        }
                        if (index === 1){
                            arrow[1].style.transform = 'rotate(0)'
                            smallerAds[0].style.removeProperty('display')
                            heheDetails[1].innerText = 'Details'
                            clicked = true
                        }
                        if (index === 2){
                            arrow[2].style.transform = 'rotate(0)'
                            smallerAds[1].style.removeProperty('display')
                            heheDetails[2].innerText = 'Details'
                            clicked = true
                        }
                        if (index === 3){
                            arrow[3].style.transform = 'rotate(0)'
                            smallerAds[2].style.removeProperty('display')
                            heheDetails[3].innerText = 'Details'
                            clicked = true
                        }
                        if (index === 4){
                            arrow[4].style.transform = 'rotate(0)'
                            smallerAds[3].style.removeProperty('display')
                            heheDetails[4].innerText = 'Details'
                            clicked = true
                        }
                        if (index === 5){
                            arrow[5].style.transform = 'rotate(0)'
                            smallerAds[4].style.removeProperty('display')
                            heheDetails[5].innerText = 'Details'
                            clicked = true
                        }
                        if (index === 6){
                            arrow[6].style.transform = 'rotate(0)'
                            smallerAds[5].style.removeProperty('display')
                            heheDetails[6].innerText = 'Details'
                            clicked = true
                        }
                        if (index === 7){
                            arrow[7].style.transform = 'rotate(0)'
                            smallerAds[6].style.removeProperty('display')
                            heheDetails[7].innerText = 'Details'
                            clicked = true
                        }
                    }

                })
            })
        };
    }, []);

//IFO SECTION ENDS
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
            <div id="navbar" className="navbar">
                <div id="sep1" className="sep1">
                    <div id="sec1" className="sec_1">
                        <a href="index.html">
                            <img
                                className="imgs"
                                id="img_beer"
                                src="images/beer.svg"
                            />
                        </a>
                        <span className="ps_word" id="ps_word">
          PancakeSwap
        </span>
                    </div>
                    <button className="buttons" id="btn_trade">
                        Trade <span className="scale_borders" />
                    </button>
                    <div className="sec_2">
                        <div className="options" id="options1">
                            <a id="oo" href="swap.html">
                                <span className="opt_kids">Swap</span>
                            </a>
                            <span className="opt_kids">Liquid</span>
                            <span className="opt_kids">Liquidity</span>
                            <span className="opt_kids" id="perpetual">
            Perpetual{" "}
                                <img src="images/l-arrow.svg" />
          </span>
                            <span className="opt_kids" id="bridge">
            Bridge <img src="images/l-arrow.svg" />
          </span>
                        </div>
                        <button className="buttons" id="btn_earn">
                            Earn <span className="scale_borders" />
                        </button>
                        <div className="options" id="options2">
                            <span className="opt_kids">Farms</span>
                            <span className="opt_kids">Pools</span>
                        </div>
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
                        <button className="buttons" id="btn_nft">
                            NFT <span className="scale_borders" />
                        </button>
                        <button className="buttons" id="btn_(... .)">
                            <span className="scale_borders" />
                            <span className="div_cir_dot" id="div_cir_dot">
            <span className="cir_dot" />
            <span className="cir_dot" />
            <span className="cir_dot" />
                                &nbsp;
          </span>
                        </button>
                        <div className="options" id="options4">
                            <span className="opt_kids">Overview</span>
                            <span className="opt_kids">Collections</span>
                            <span className="opt_kids">Activity</span>
                        </div>
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
                <div id="sep2" className="sep2">
                    <div className="sec_3" id="sec_3">
                        <img
                            className="imgs"
                            id="img_deer2"
                            src="images/7186.png"
                        />
                        <span className="api-price">$1.234</span>
                    </div>
                    <div id="sec4" className="sec_4">
                        <img
                            className="imgs"
                            id="img_globe"
                            src="images/globe.svg"
                        />
                        <img
                            className="imgs"
                            id="img_settings"
                            src="images/settings.svg"
                        />
                        <span id="div_bnb" className="div_bnb">
          <img
              className="imgs"
              id="img_bnb"
              src="images/56.png"
          />
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
                    </div>
                    <div className="btn_cwallect">Connect Wallet</div>
                    <div id="options6">
                        <span className="opt_kids">Select a network</span>
                        <span className="opt_kids">BNB Smart Chain</span>
                        <span className="opt_kids">Ethereum</span>
                        <span className="opt_kids">Aptos</span>
                    </div>
                </div>
            </div>
            <div className="options" id="options7">
                <ul className="list">
                    <li>Country 1</li>
                    <li>Country 2</li>
                    <li>Country 3</li>
                    <li>Country 4</li>
                    <li>Country 5</li>
                    <li>Country 6</li>
                    <li>Country 7</li>
                    <li>Country 8</li>
                    <li>Country 9</li>
                    <li>Country 10</li>
                    <li>Country 11</li>
                    <li>Country 12</li>
                    <li>Country 13</li>
                    <li>Country 14</li>
                    <li>Country 15</li>
                    <li>Country 16</li>
                    <li>Country 17</li>
                    <li>Country 18</li>
                    <li>Country 19</li>
                    <li>Country 20</li>
                    <li>Country 1</li>
                    <li>Country 2</li>
                    <li>Country 3</li>
                    <li>Country 4</li>
                    <li>Country 5</li>
                    <li>Country 6</li>
                    <li>Country 7</li>
                    <li>Country 8</li>
                    <li>Country 9</li>
                    <li>Country 10</li>
                    <li>Country 11</li>
                    <li>Country 12</li>
                    <li>Country 13</li>
                    <li>Country 14</li>
                    <li>Country 15</li>
                    <li>Country 16</li>
                    <li>Country 17</li>
                    <li>Country 18</li>
                    <li>Country 19</li>
                    <li>Country 20</li>
                </ul>
            </div>
            <div className="ifoMain">
                <div className="ifoSec1">
                    <div className="initialSec">
                        <h1 className="h1" id="h1">
                            IFO: Initial Farm Offerings
                            <div id="btnSection" className="btnSection">
                                <p id="heading2" className="heading2">
                                    {" "}
                                    Buy new tokens launching on BNB Smart Chain
                                </p>
                                <a href="#main2">
                                    <button id="hDiw" className="hDiw">
                                        How does it work?
                                    </button>
                                </a>
                            </div>
                        </h1>
                    </div>
                </div>
                <div className="ifoSec2">
                    <div className="stakeCakeSec">
                        <div className="sCk1">
                            <div id="k1div" className="k1div">
                                <div className="k1">
              <span className="h2">
                STAKE CAKE
                <span className="stam">Stake, Earn - And More!</span>
              </span>
                                </div>
                                <div className="ifoImage1">
                                    <img
                                        className="beer"
                                        src="images/Ifo-images/beer1.svg"
                                    />
                                    <img
                                        className="arrReverse"
                                        src="images/Ifo-images/autorenew.svg"
                                    />
                                </div>
                            </div>
                            <div className="k2">
                                <div className="k21">
                                    <div className="fApy">
                                        <span className="fle">Flexible APY:</span>
                                        <div className="json">
                                            0.<span id="json">85</span>%
                                        </div>
                                    </div>
                                    <div className="fApr">
                                        <span className="fle">Locked APR: </span>
                                        <div className="json">
                                            <span id="json2">18.24</span>.24%
                                        </div>
                                    </div>
                                </div>
                                <div className="ewallet2">
                                    <span className="fle">START EARNING</span>
                                    <button className="btn_cwallect2">Connect Wallet</button>
                                </div>
                            </div>
                            <div className="k3">
            <span id="auto/locked" className="pottery">
              Auto/Locked
            </span>
                                <button id="topDetailsBtn" className="btnDetails">
                                    <span className="hehe">Details</span>{" "}
                                    <img
                                        className="darrow"
                                        src="images/Ifo-images/darrow.svg"
                                    />
                                </button>
                            </div>
                        </div>
                        <div className="sCk2">
                            <div className="k1div">
                                <div className="k1">
              <span className="tkVesting">
                Token Vesting
                <span id="stam" className="stam">
                  You have no tokens available for claiming
                </span>
              </span>
                                </div>
                                <div className="ifoImage1">
                                    <img
                                        id="beer"
                                        className="beer"
                                        src="images/Ifo-images/not-tokens.svg"
                                    />
                                </div>
                            </div>
                            <span className="k1sec2">
            <img
                className="ques?"
                src="images/Ifo-images/sdf.svg"
            />
            <p id="hash" className="ad">
              You have no tokens available for claiming
            </p>
            <p className="stam">
              Participate in our next IFO. and remember to lock your CAKE to
              increase your allocation! How does it work? »
            </p>
          </span>
                            <div></div>
                        </div>
                    </div>
                    <div id="sCk3" className="sCk3">
                        <div className="cmsDiv">
                            <img
                                className="comingSoon"
                                src="images/Ifo-images/ifo-coming-soon-desktop.png"
                            />
                        </div>
                        <div className="sect1">
                            <div className="rect1">
            <span className="fle1">
              Public Sale{" "}
                <img src="images/Ifo-images/quest.svg" />
            </span>
                                <div className="k1sec22">
                                    <img
                                        className="ques?"
                                        src="images/Ifo-images/sew.svg"
                                    />
                                    <span className="ad">
                Follow our social channels to learn more about the next IFO.
              </span>
                                </div>
                            </div>
                            <div className="rect1">
            <span id="fle2" className="fle1">
              Private Sale
            </span>
                                <div className="k1sec22">
                                    <img
                                        className="ques?"
                                        src="images/Ifo-images/sdf.svg"
                                    />
                                    <span className="ad">
                Follow our social channels to learn more about the next IFO.
              </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="main2" className="main2">
                    <h2 id="psHead" className="h2">
                        How to Take Part in the Public Sale
                    </h2>
                    <div id="divLin1" className="divLine1">
                        <div id="hidden1" className="hiddenLin">
                            <span className="hd1"> Activate your Profile</span>
                            <span className="stam">
            You’ll need an active PancakeSwap Profile to take part in an IFO!
          </span>
                            <span className="btn_cwallect2">Connect Wallet</span>
                        </div>
                        <span id="circleNumbers1" className="circleNumbers">
          1{" "}
        </span>
                        <div className="lin1">
                            <span className="hd1"> Activate your Profile</span>
                            <span className="stam">
            You’ll need an active PancakeSwap Profile to take part in an IFO!
          </span>
                            <span id="greenBtn" className="btn_cwallect2">
            Connect Wallet
          </span>
                        </div>
                    </div>
                    <hr id="verticalLine1" className="verticalLine1" />
                    <div className="divLine1">
                        <hr id="verticalLine2" className="verticalLine2" />
                        <div className="lin2">
                            <span className="hd1"> Lock CAKE in the CAKE pool</span>
                            <span id="justify" className="stam">
            The maximum amount of CAKE you can commit to the Public Sale equals
            the number of your iCAKE. Lock more CAKE for longer durations to
            increase the maximum CAKE you can commit to the sale.
            <br />
            <span className="dottedUnderLine">
              How does the number of iCAKE calculated?
            </span>
            <br />
            Missed this IFO? You will enjoy the same amount of iCAKE for future
            IFOs if your locked-staking position is not unlocked.
          </span>
                        </div>
                        <span id="circleNumbers2" className="circleNumbers">
          2
        </span>
                        <div id="hidden2" className="hiddenLin">
                            <span className="hd1"> Lock CAKE in the CAKE pool</span>
                            <span id="justify2" className="stam">
            The maximum amount of CAKE you can commit to the Public Sale equals
            the number of your iCAKE. Lock more CAKE for longer durations to
            increase the maximum CAKE you can commit to the sale.
            <br />
            <span className="dottedUnderLine">
              How does the number of iCAKE calculated?
            </span>
            <br />
            Missed this IFO? You will enjoy the same amount of iCAKE for future
            IFOs if your locked-staking position is not unlocked.
          </span>
                        </div>
                    </div>
                    <div id="divLin3" className="divLine1">
                        <div id="hidden3" className="hiddenLin">
                            <span className="hd1">Commit CAKE</span>
                            <span className="stam">
            Please note that CAKE in the fixed-term staking positions will
            remain locked and can not be used for committing to IFO sales. You
            will need a separate amount of CAKE in your wallet balance to commit
            to the IFO sales.
          </span>
                        </div>
                        <span id="circleNumbers3" className="circleNumbers">
          3
        </span>
                        <div className="lin3">
                            <span className="hd1">Commit CAKE</span>
                            <span className="stam">
            Please note that CAKE in the fixed-term staking positions will
            remain locked and can not be used for committing to IFO sales. You
            will need a separate amount of CAKE in your wallet balance to commit
            to the IFO sales.
          </span>
                        </div>
                    </div>
                    <div className="divLine1">
                        <div className="lin4">
                            <span className="hd1">Claim your tokens and achievement</span>
                            <span className="stam">
            After the IFO sales finish, you can claim any IFO tokens that you
            bought, and any unspent CAKE tokens will be returned to your wallet.
          </span>
                        </div>
                        <span id="circleNumbers4" className="circleNumbers">
          4
        </span>
                        <div id="hidden4" className="hiddenLin">
                            <span className="hd1">Claim your tokens and achievement</span>
                            <span className="stam">
            After the IFO sales finish, you can claim any IFO tokens that you
            bought, and any unspent CAKE tokens will be returned to your wallet.
          </span>
                        </div>
                    </div>
                </div>
                <div id="LastSec" className="LastSec">
                    <div className="jnLastSec">
                        <img
                            className="bunny"
                            src="images/Ifo-images/ifo-bunny.png"
                        />
                        <div className="frequentQueSec">
                            <span className="details">Details</span>
                            <div className="helpSecDiv">
                                <div className="helpSection">
                                    <div className="quesdiv">
                <span className="ads">
                  What’s the difference between a Public Sale and Private Sale?
                </span>
                                        <button id="btnDetails1" className="btnDetails">
                                            <span className="hehe">Details</span>{" "}
                                            <img
                                                className="darrow"
                                                src="images/Ifo-images/darrow.svg"
                                            />
                                        </button>
                                    </div>
                                    <span className="adSmall">
                In the current IFO format. There is a brand new Private Sale. To
                participate, participants will have to meet certain requirements
                presented on the IFO card. Each eligible participant will be
                able to commit any amount of CAKE up to the maximum commit
                limit, which is published along with the IFO voting proposal.
                The Private Sale has no participation fee. <br />
                In the Public Sale, everyone with an active PancakeSwap profile
                can commit. However the maximum amount of CAKE users can commit,
                is equal to the number of iCAKE they have.
                <br />
                Learn more about iCAKE <span className="hereLinks">
                  here
                </span>{" "}
                                        <br />
                And there’s a fee for participation: see below.
              </span>
                                </div>
                                <div className="helpSection">
                                    <div className="quesdiv">
                <span className="ads">
                  Which sale should I commit to? Can I do both?
                </span>
                                        <button className="btnDetails">
                                            <span className="hehe">Details</span>{" "}
                                            <img
                                                className="darrow"
                                                src="images/Ifo-images/darrow.svg"
                                            />
                                        </button>
                                    </div>
                                    <span className="adSmall">
                You can choose one or both at the same time! We recommend you to
                check if you are eligible to participate in the Private Sale
                first. In the Public Sale, if the amount you commit is too
                small, you may not receive a meaningful amount of IFO tokens.
                <br />
                Just remember you need an active PancakeSwap Profile in order to
                participate.
              </span>
                                </div>
                                <div>
                                    <div className="quesdiv">
                                        <span className="ads">How much is the participation fee?</span>
                                        <button className="btnDetails">
                                            <span className="hehe">Details</span>{" "}
                                            <img
                                                className="darrow"
                                                src="images/Ifo-images/darrow.svg"
                                            />
                                        </button>
                                    </div>
                                    <span className="adSmall">
                There’s only a participation fee for the Public Sale: there’s no
                fee for the Private Sale.The participation fee decreases in
                cliffs, based on the percentage of overflow from the “Public
                Sale” portion of the IFO.
                <br />
                Note:Fees may vary between different IFOs. To learn more about
                the participation fees, please refer to the details in the IFO
                proposal (vote) for the specifics of the IFO you want to take
                part in.
              </span>
                                </div>
                                <div>
                                    <div className="quesdiv">
                <span className="ads">
                  Where does the participation fee go?
                </span>
                                        <button className="btnDetails">
                                            <span className="hehe">Details</span>{" "}
                                            <img
                                                className="darrow"
                                                src="images/Ifo-images/darrow.svg"
                                            />
                                        </button>
                                    </div>
                                    <span className="adSmall">
                The CAKE from the participation fee will be burnt as part of the
                weekly token burn.
              </span>
                                </div>
                                <div>
                                    <div className="quesdiv">
                <span className="ad">
                  How can I get an achievement for participating in the IFO?
                </span>
                                        <button className="btnDetails">
                                            <span className="hehe">Details</span>{" "}
                                            <img
                                                className="darrow"
                                                src="images/Ifo-images/darrow.svg"
                                            />
                                        </button>
                                    </div>
                                    <span className="adSmall">
                You need to contribute a minimum of about 10 USD worth of CAKE
                to either sale.You can contribute to one or both, it doesn’t
                matter: only your overall contribution is counted for the
                achievement.
              </span>
                                </div>
                                <div>
                                    <div className="quesdiv">
                <span className="ads">
                  What is the difference between an IFO and a cIFO?
                </span>
                                        <button className="btnDetails">
                                            <span className="hehe">Details</span>{" "}
                                            <img
                                                className="darrow"
                                                src="images/Ifo-images/darrow.svg"
                                            />
                                        </button>
                                    </div>
                                    <span className="adSmall">
                cIFOs are a new subtype of IFOs, designed to reward our loyal
                community, and also <br />
                introduce our community to projects with slightly smaller
                raises.
                <br />
                Learn more about cIFO <span className="hereLinks">here</span>
              </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span id="refLink" className="hereLinks">
        Apply to run an IFO
        <img src="images/Ifo-images/REF.svg" />
      </span>
                </div>
            </div>
        </>

    )
}