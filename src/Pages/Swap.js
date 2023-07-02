import '../Styles/Swap'
import '../Styles/styles.css'
import {Navbar, MbNavbar} from "../Components/Navbar";

export default function Swap(){
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
            <div id="header-swap">
                <div className="header-swap">
                    <a href="affiliates-program.html">Swap</a>{" "}
                </div>
                <div className="header-swap">
                    <a href="affiliates-program.html">Liquidity</a>{" "}
                </div>
                <div className="header-swap">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfP43IciQ5cH0JhTf1fDgUpwapBx-yD3ybv24pBdiVW7Th5jQ/viewform">
                        Perpetual
                        <img src="swap-images/arrow.svg" alt="arrow" />
                    </a>
                </div>
                <div className="header-swap">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfP43IciQ5cH0JhTf1fDgUpwapBx-yD3ybv24pBdiVW7Th5jQ/viewform">
                        Bridge
                        <img src="swap-images/arrow.svg" alt="arrow" />
                    </a>
                </div>
                <div className="header-swap">
                    <a href="affiliates-program.html">Limit (V2)</a>{" "}
                </div>
            </div>
            <div className="swap-main">
                <div className="swap-parent">
                    <div className="chart" />
                    <div className="tocken-list" />
                    <div className="swap-card" />
                </div>
                <div className="swap-images" />
            </div>
            <footer>
            </footer>
            <MbNavbar></MbNavbar>
        </>

    )
}