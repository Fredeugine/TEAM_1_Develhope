import './affiliates.scss'
import {useEffect} from "react";
export function AffiliatesPage(){
    useEffect(function (){
        var toggleHidden1 = document.getElementById("faqtoggle1");
        var detailsButton1 = document.getElementById("faqbutton1");
        var hiddenRow1 = document.getElementById("hiddenrow1");

        var toggleHidden2 = document.getElementById("faqtoggle2");
        var detailsButton2 = document.getElementById("faqbutton2");
        var hiddenRow2 = document.getElementById("hiddenrow2");

        var toggleHidden3 = document.getElementById("faqtoggle3");
        var detailsButton3 = document.getElementById("faqbutton3");
        var hiddenRow3 = document.getElementById("hiddenrow3");

        var toggleHidden4 = document.getElementById("faqtoggle4");
        var detailsButton4 = document.getElementById("faqbutton4");
        var hiddenRow4 = document.getElementById("hiddenrow4");

        var toggleHidden5 = document.getElementById("faqtoggle5");
        var detailsButton5 = document.getElementById("faqbutton5");
        var hiddenRow5 = document.getElementById("hiddenrow5");

        hiddenRow1.style.display = "none";
        toggleHidden1.addEventListener("click", function() {
            if (hiddenRow1.style.display === "none") {
                hiddenRow1.style.display = "flex";
                detailsButton1.innerHTML = "Hide<img src='images/affi-images/affi_down_arrow.svg' style='margin-left:8px;top:5px;position:relative;transform:rotate(180deg);'>";
            } else {
                hiddenRow1.style.display = "none";
                detailsButton1.innerHTML = "Details<img src='images/affi-images/affi_down_arrow.svg' style='margin-left:8px;top:5px;position:relative;'>";
            }
        });

        hiddenRow2.style.display = "none";
        toggleHidden2.addEventListener("click", function() {
            if (hiddenRow2.style.display === "none") {
                hiddenRow2.style.display = "flex";
                detailsButton2.innerHTML = "Hide<img src='images/affi-images/affi_down_arrow.svg' style='margin-left:8px;top:5px;position:relative;transform:rotate(180deg);'>";
            } else {
                hiddenRow2.style.display = "none";
                detailsButton2.innerHTML = "Details<img src='images/affi-images/affi_down_arrow.svg' style='margin-left:8px;top:5px;position:relative;'>";
            }
        });

        hiddenRow3.style.display = "none";
        toggleHidden3.addEventListener("click", function() {
            if (hiddenRow3.style.display === "none") {
                hiddenRow3.style.display = "flex";
                detailsButton3.innerHTML = "Hide<img src='images/affi-images/affi_down_arrow.svg' style='margin-left:8px;top:5px;position:relative;transform:rotate(180deg);'>";
            } else {
                hiddenRow3.style.display = "none";
                detailsButton3.innerHTML = "Details<img src='images/affi-images/affi_down_arrow.svg' style='margin-left:8px;top:5px;position:relative;'>";
            }
        });

        hiddenRow4.style.display = "none";
        toggleHidden4.addEventListener("click", function() {
            if (hiddenRow4.style.display === "none") {
                hiddenRow4.style.display = "flex";
                detailsButton4.innerHTML = "Hide<img src='images/affi-images/affi_down_arrow.svg' style='margin-left:8px;top:5px;position:relative;transform:rotate(180deg);'>";
            } else {
                hiddenRow4.style.display = "none";
                detailsButton4.innerHTML = "Details<img src='images/affi-images/affi_down_arrow.svg' style='margin-left:8px;top:5px;position:relative;'>";
            }
        });

        hiddenRow5.style.display = "none";
        toggleHidden5.addEventListener("click", function() {
            if (hiddenRow5.style.display === "none") {
                hiddenRow5.style.display = "flex";
                detailsButton5.innerHTML = "Hide<img src='images/affi-images/affi_down_arrow.svg' style='margin-left:8px;top:5px;position:relative;transform:rotate(180deg);'>";
            } else {
                hiddenRow5.style.display = "none";
                detailsButton5.innerHTML = "Details<img src='images/affi-images/affi_down_arrow.svg' style='margin-left:8px;top:5px;position:relative;'>";
            }
        });
    })
    return(
        <>
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
                <div className="header2_overview">
                    <a href="affiliates-program.html">Overview</a>
                </div>
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
                <div className="header2_dashboard">
                    <a href="#dashboard">Dashboard</a>
                </div>
            </div>
            <div className="container_section1">
                <div className="parent_section1">
                    <div className="section1">
                        <div className="section1_floating">
                            <img
                                id="floimg1"
                                src="TEAM_1_Develhope_React/src/images/affi-images/affi-bobbing-1.png"
                            />
                            <img
                                id="floimg2"
                                src="TEAM_1_Develhope_React/src/images/affi-images/affi-bobbing-2.png"
                            />
                            <img
                                id="floimg3"
                                src="TEAM_1_Develhope_React/src/images/affi-images/affi-bobbing-3.png"
                            />
                        </div>
                        <div className="section1_transition">
                            <div className="section1_svg">
                                <svg
                                    viewBox="0 0 1660 339"
                                    className="sc-231a1e38-0 dPwWVs slide-svg-dark"
                                    width="100%"
                                    color="text"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M804 166.523C520.5 166.523 267.5 290.022 0 304V338.5H1660V0C1358.83 0 1104 166.523 804 166.523Z"
                                        fill="url(#paint0_linear_dark)"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="paint0_linear_dark"
                                            x1={830}
                                            y1="83.5"
                                            x2={830}
                                            y2="338.5"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#08060B" stopOpacity="0.2" />
                                            <stop
                                                offset="0.545554"
                                                stopColor="#08060B"
                                                stopOpacity="0.5"
                                            />
                                            <stop offset={1} stopColor="#08060B" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className="section1_left">
                            <img src="TEAM_1_Develhope_React/src/images/affi-images/affi_banner.webp" />
                        </div>
                        <div className="section1_right">
                            <div className="section1_right_a">
                                Affiliate with us, Empower DeFi
                            </div>
                            <div className="section1_right_b">
                                Join a community-driven movement to make DeFi accessible and better
                                for everyone
                            </div>
                            <div className="section1_right_c">
                                <button className="bluebutton">
                                    <a
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSfP43IciQ5cH0JhTf1fDgUpwapBx-yD3ybv24pBdiVW7Th5jQ/viewform"
                                        className="button_anchor"
                                        target="_blank"
                                    >
                                        Join our Affiliate Program
                                    </a>
                                </button>
                                <button className="transbutton">
                                    <a
                                        href="/affiliates-program.html/#affiliate-benefits"
                                        className="trans_anchor"
                                    >
                                        Discover your Potential
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="div4_parent_container" style={{ background: "black" }}>
                <div className="div4_container">
                    <div className="div4">
                        <img
                            className="div4_svg1"
                            src="TEAM_1_Develhope_React/src/images/div4_1.svg"
                            style={{ width: 36, height: 36 }}
                        />
                        <h2 id="div4_text1">Good things</h2>
                        <h2 id="div4_text2">are meant to be shared</h2>
                        <div id="div4_text3">
                            Together we can make the PancakeSwap community even stronger
                        </div>
                        <div id="div4_text5">How do you Become a PancakeSwap Affiliate?</div>
                        <div className="div4_box1" style={{ maxWidth: 888 }}>
                            <div className="div4_box2" style={{ flex: "0.33" }}>
                                <div className="div4_box3">
                                    <div className="div4_box4" style={{ marginBottom: 42 }}>
                                        <div className="div4_box5" style={{ marginTop: 0 }}>
                                            <h2
                                                id="div4_box_a_text1a"
                                                style={{ marginBottom: 0, lineHeight: "1.5" }}
                                            >
                                                1
                                            </h2>
                                            <h2 className="div4_box_a_text1">Submit</h2>
                                            <h2 id="div4_box_a_text1a" style={{ marginBottom: 0 }}>
                                                Your
                                            </h2>
                                            <h2 id="div4_box_a_text1a">Application</h2>
                                            <div
                                                className="div4_box_a_text1b"
                                                style={{ fontSize: 14, lineHeight: "1.5" }}
                                            >
                                                It's fast, easy, and completely free
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="div4_box2" style={{ flex: "0.33" }}>
                                <div className="div4_box3">
                                    <div className="div4_box4">
                                        <div className="div4_box5" style={{ marginTop: 0 }}>
                                            <h2
                                                id="div4_box_a_text2a"
                                                style={{ marginBottom: 0, lineHeight: "1.5" }}
                                            >
                                                2
                                            </h2>
                                            <h2 className="div4_box_a_text1">Share</h2>
                                            <h2 id="div4_box_a_text2a" style={{ marginBottom: 0 }}>
                                                Your
                                            </h2>
                                            <h2 id="div4_box_a_text2a">Love</h2>
                                            <div
                                                className="div4_box_a_text1b"
                                                style={{ fontSize: 14, lineHeight: "1.5" }}
                                            >
                                                Share your unique affiliate link with your friends,
                                                followers, and anyone who loves a good adventure
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="div4_box2" style={{ flex: "0.33" }}>
                                <div className="div4_box3">
                                    <div className="div4_box4" style={{ marginBottom: 22 }}>
                                        <div
                                            className="div4_box5"
                                            style={{ marginRight: 30, marginTop: 0, width: 285 }}
                                        >
                                            <h2
                                                id="div4_box_a_text3a"
                                                style={{ marginBottom: 0, lineHeight: "1.5" }}
                                            >
                                                3
                                            </h2>
                                            <h2 className="div4_box_a_text1">Start</h2>
                                            <h2 className="div4_box_a_text1" style={{ marginBottom: 0 }}>
                                                Earning
                                            </h2>
                                            <h2 id="div4_box_a_text3a">CAKE</h2>
                                            <div
                                                className="div4_box_a_text1b"
                                                style={{ fontSize: 14, lineHeight: "1.5" }}
                                            >
                                                Earn up to 20% referral commissions
                                            </div>
                                            <div
                                                className="div4_box_a_text1b"
                                                style={{ fontSize: 14, lineHeight: "1.5" }}
                                            >
                                                in CAKE
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container_section3">
                <div className="trans_section2_3" />
                <div className="parent_section3">
                    <div className="section3">
                        <div className="section3_float">
                            <img
                                id="floimg3-1"
                                src="TEAM_1_Develhope_React/src/images/affi-images/affi_floimg3-1.png"
                            />
                            <img
                                id="floimg3-2"
                                src="TEAM_1_Develhope_React/src/images/affi-images/affi_floimg3-2.png"
                            />
                            <img
                                id="floimg3-3"
                                src="TEAM_1_Develhope_React/src/images/affi-images/affi_floimg3-3.png"
                            />
                            <img
                                id="floimg3-4"
                                src="TEAM_1_Develhope_React/src/images/affi-images/affi_floimg3-4.png"
                            />
                            <img
                                id="floimg3-5"
                                src="TEAM_1_Develhope_React/src/images/affi-images/affi_floimg3-5.png"
                            />
                        </div>
                        <div className="section3_top_container">
                            <div className="section3_top">
                                <div className="section3_top_1">
                                    Join PancakeSwap's Community and Make a Difference
                                </div>
                                <div className="section3_top_2">
                                    As an affiliate, you'll be part of a network of like-minded
                                    individuals who are committed to build a stronger DeFi community.
                                    Be part of something bigger with PancakeSwap's Affiliate program
                                </div>
                                <button className="bluebutton" id="centered_bb">
                                    <a
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSfP43IciQ5cH0JhTf1fDgUpwapBx-yD3ybv24pBdiVW7Th5jQ/viewform"
                                        className="button_anchor"
                                        target="_blank"
                                    >
                                        Join Now!
                                    </a>
                                </button>
                            </div>
                        </div>
                        <div className="section3_bottom">
                            <div className="section3_bottom_1">
                                <div className="section3_bottom_1a">Commission Structure</div>
                                <div className="section3_bottom_1b">
                                    Invite and earn commission for every successful referral
                                </div>
                            </div>
                            <div className="section3_bottom_2">
                                <div className="section3_bottom_2a">
                                    <div className="section3_bottom_2a_x">
                                        <img src="TEAM_1_Develhope_React/src/images/affi-images/affi_sec3_1.png" />
                                    </div>
                                    <div className="section3_bottom_2a_y">
                                        <div className="section3_bottom_2a_y1">
                                            SWAP &amp; STABLESWAP
                                        </div>
                                        <div className="section3_bottom_2a_y2">3%</div>
                                    </div>
                                </div>
                                <div className="section3_bottom_2b">
                                    <div className="section3_bottom_2b_x">
                                        <img src="TEAM_1_Develhope_React/src/images/affi-images/affi_sec3_2.png" />
                                    </div>
                                    <div className="section3_bottom_2b_y">
                                        <div className="section3_bottom_2b_y1">PERPETUAL</div>
                                        <div className="section3_bottom_2b_y2">20%</div>
                                    </div>
                                </div>
                                <div className="section3_bottom_2c">
                                    <div className="section3_bottom_2c_x">
                                        <img src="TEAM_1_Develhope_React/src/images/affi-images/affi_sec3_3.png" />
                                    </div>
                                    <div className="section3_bottom_2c_y">
                                        <div className="section3_bottom_2c_y1">COMING SOON!</div>
                                        <div className="section3_bottom_2c_y2">?</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="div4_parent_container"
                style={{ background: "black", paddingTop: 0 }}
            >
                <div className="trans_section3_4" />
                <div className="div4_container" style={{ paddingTop: 14 }}>
                    <div className="div4">
                        <img
                            className="div4_svg1"
                            src="TEAM_1_Develhope_React/src/images/div4_1.svg"
                            style={{ width: 36, height: 36 }}
                        />
                        <h2 id="div4_text1">Unlock the Power of PancakeSwap</h2>
                        <h2 id="div4_text2" style={{ margin: 0 }}>
                            Affiliate Benefits
                        </h2>
                    </div>
                    <div className="section4">
                        <div className="section4_box_imgtext">
                            <div className="section4_box_img">
                                <img src="TEAM_1_Develhope_React/src/images/affi-images/affi_sec4_1.webp" />
                            </div>
                            <div className="section4_box_text">
                                <div className="section4_box_right_top">
                                    Partner with the Leading Brand in the Industry
                                </div>
                                <div className="section4_box_right_bot">
                                    Forge a partnership with the most reputable global brand in the
                                    industry to make DeFi accessible and better for everyone
                                </div>
                            </div>
                        </div>
                        <div className="section4_box_textimg">
                            <div className="section4_box_text">
                                <div className="section4_box_right_top">User Friendly Platform</div>
                                <div className="section4_box_right_bot">
                                    Provide a seamless experience for your referrals with our user
                                    friendly platform
                                </div>
                            </div>
                            <div className="section4_box_img">
                                <img src="TEAM_1_Develhope_React/src/images/affi-images/affi_sec4_2.webp" />
                            </div>
                        </div>
                        <div className="section4_box_imgtext">
                            <div className="section4_box_img">
                                <img src="TEAM_1_Develhope_React/src/images/affi-images/affi_sec4_3.webp" />
                            </div>
                            <div className="section4_box_text">
                                <div className="section4_box_right_top">
                                    Customize Profit-Sharing
                                </div>
                                <div className="section4_box_right_bot">
                                    Share the rewards with your community
                                </div>
                            </div>
                        </div>
                        <div className="section4_box_textimg">
                            <div className="section4_box_text">
                                <div className="section4_box_right_top">Real-Time Reporting</div>
                                <div className="section4_box_right_bot">
                                    Easily keep tabs on commission and earnings with our user-friendly
                                    dashboard
                                </div>
                            </div>
                            <div className="section4_box_img">
                                <img src="TEAM_1_Develhope_React/src/images/affi-images/affi_sec4_4.webp" />
                            </div>
                        </div>
                        <div className="section4_box_imgtext">
                            <div className="section4_box_img">
                                <img src="TEAM_1_Develhope_React/src/images/affi-images/affi_sec4_5.webp" />
                            </div>
                            <div className="section4_box_text">
                                <div className="section4_box_right_top">Personalized Support</div>
                                <div className="section4_box_right_bot">
                                    Personalized assistance from our community managers
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container_section5">
                <div className="trans_section4_5" />
                <div className="parent_section5">
                    <div className="section5_box">
                        <div className="section5">
                            <div className="section5_header">Still Got Questions?</div>
                            <div className="section5_faq">
                                <div className="section5_faq_header">
                                    <h2>FAQ</h2>
                                </div>
                                <div className="section5_faq_bottom">
                                    <div className="section5_faq_q_box">
                                        <div className="faq_toprow" id="faqtoggle1">
                                            <div className="faq_toprow_q">
                                                What is the criteria to become a PancakeSwap affiliate?
                                            </div>
                                            <div className="faq_button_area">
                                                <button id="faqbutton1">
                                                    Details
                                                    <img
                                                        src="TEAM_1_Develhope_React/src/images/affi-images/affi_down_arrow.svg"
                                                        style={{ marginLeft: 8, top: 5, position: "relative" }}
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="faq_hiddenrow" id="hiddenrow1">
                                            <div className="hiddenrow_text">
                                                <div className="dash">-</div>
                                                At least 10,000 followers across social media platforms such
                                                as Twitter, Youtube, Discord, Instagram and Telegram
                                            </div>
                                            <div className="hiddenrow_text">
                                                <div className="dash">-</div>
                                                Proven track record of creating quality content related to
                                                crypto and especially DeFi
                                            </div>
                                            <div className="hiddenrow_text">
                                                <div className="dash">-</div>
                                                Strong understanding of PancakeSwap and our ecosystem
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section5_faq_q_box">
                                        <div className="faq_toprow" id="faqtoggle2">
                                            <div className="faq_toprow_q">
                                                How do I earn commissions as an affiliate?
                                            </div>
                                            <div className="faq_button_area">
                                                <button id="faqbutton2">
                                                    Details
                                                    <img
                                                        src="TEAM_1_Develhope_React/src/images/affi-images/affi_down_arrow.svg"
                                                        style={{ marginLeft: 8, top: 5, position: "relative" }}
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="faq_hiddenrow" id="hiddenrow2">
                                            <div className="hiddenrow_text">
                                                <div className="dash">-</div>
                                                You earn commissions from most trading fees paid by your
                                                invitees for a limited period of time
                                            </div>
                                            <div className="hiddenrow_text">
                                                <div className="dash">-</div>
                                                Trading pairs must meet the following eligibility criteria:
                                            </div>
                                            <div className="hiddenrow_text" style={{ marginLeft: 16 }}>
                                                <div className="dash">-</div>
                                                Pairs must be in “PancakeSwap Extended” Official
                                                <a href="https://tokenlists.org/token-list?url=https://tokens.pancakeswap.finance/pancakeswap-extended.json">
                                                    token list
                                                </a>
                                            </div>
                                            <div className="hiddenrow_text" style={{ marginLeft: 16 }}>
                                                <div className="dash">-</div>
                                                Pairs must include 1 major token (BNB, BTC, BUSD, ETH, USDT
                                                and USDC)
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section5_faq_q_box">
                                        <div className="faq_toprow" id="faqtoggle3">
                                            <div className="faq_toprow_q">
                                                How will I receive my commissions and how often will I be
                                                paid?
                                            </div>
                                            <div className="faq_button_area">
                                                <button id="faqbutton3">
                                                    Details
                                                    <img
                                                        src="TEAM_1_Develhope_React/src/images/affi-images/affi_down_arrow.svg"
                                                        style={{ marginLeft: 8, top: 5, position: "relative" }}
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="faq_hiddenrow" id="hiddenrow3">
                                            <div className="hiddenrow_text">
                                                <div className="dash">-</div>
                                                You will receive your commissions on a monthly basis. This
                                                means that you will receive payments for your commissions
                                                earned in the previous month at the beginning of each month.
                                            </div>
                                            <div className="hiddenrow_text">
                                                <div className="dash">-</div>
                                                You will be able to redeem your CAKE rewards from the
                                                affiliate dashboard page. Once redeemed, PancakeSwap will
                                                transfer the commission amount earned to your designated
                                                wallet. You will be able to see the details of each payment
                                                in your affiliate dashboard, including the amount, date, and
                                                status of each payment.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section5_faq_q_box">
                                        <div className="faq_toprow" id="faqtoggle4">
                                            <div className="faq_toprow_q">
                                                How do I track my referrals and commissions?
                                            </div>
                                            <div className="faq_button_area">
                                                <button id="faqbutton4">
                                                    Details
                                                    <img
                                                        src="TEAM_1_Develhope_React/src/images/affi-images/affi_down_arrow.svg"
                                                        style={{ marginLeft: 8, top: 5, position: "relative" }}
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="faq_hiddenrow" id="hiddenrow4">
                                            <div className="hiddenrow_text">
                                                <div className="dash">-</div>
                                                Affiliates can login to the affiliate dashboard and view
                                                your referral and commission information
                                            </div>
                                            <div className="hiddenrow_text">
                                                <div className="dash">-</div>
                                                Your referrals will be listed in your affiliate dashboard,
                                                along with the date they were made, their status, and the
                                                commission amount earned
                                            </div>
                                        </div>
                                    </div>
                                    <div className="section5_faq_q_box">
                                        <div className="faq_toprow" id="faqtoggle5">
                                            <div className="faq_toprow_q">
                                                Is there a limited number of referrals i can refer?
                                            </div>
                                            <div className="faq_button_area">
                                                <button id="faqbutton5">
                                                    Details
                                                    <img
                                                        src="TEAM_1_Develhope_React/src/images/affi-images/affi_down_arrow.svg"
                                                        style={{ marginLeft: 8, top: 5, position: "relative" }}
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="faq_hiddenrow" id="hiddenrow5">
                                            <div className="hiddenrow_text">
                                                <div className="dash">-</div>
                                                No, users can refer as many friends as they wish
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
      Blog <img src="TEAM_1_Develhope_React/src/images/l-arrow.svg" />
    </span>
                <span className="opt_kids" id="docs2">
      Docs <img src="TEAM_1_Develhope_React/src/images/l-arrow.svg" />{" "}
    </span>
            </div>
            <div id="mbNavbar" className="mbNavbar">
                <div className="cover">
      <span className="mbBtns">
        <img
            className="mbImgs"
            src="TEAM_1_Develhope_React/src/images/1s.svg"
        />
        <span>Trade</span>
      </span>
                </div>
                <div id="earnBtn" className="mbBtns">
                    {" "}
                    <img className="mbImgs" src="TEAM_1_Develhope_React/src/images/2s.svg" />
                    <span>Earn</span>
                </div>
                <div id="winBtn" className="mbBtns">
                    {" "}
                    <img
                        id="trophy"
                        className="mbImgs"
                        src="TEAM_1_Develhope_React/src/images/3strophy.svg"
                    />
                    <span>Win</span>
                </div>
                <div id="nftBtn" className="mbBtns">
                    {" "}
                    <img
                        className="mbImgs"
                        src="TEAM_1_Develhope_React/src/images/4snft.svg"
                    />
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
                                    src="TEAM_1_Develhope_React/src/images/announcement.svg"
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
                                    src="TEAM_1_Develhope_React/src/images/reddit.svg"
                                    alt="Reddit icon"
                                    className="reddit-icon"
                                />
                            </a>
                            <a
                                href="https://instagram.com/pancakeswap_official"
                                aria-label="Instagram"
                                className="socials_icon"
                            >
                                <img
                                    src="TEAM_1_Develhope_React/src/images/ig.svg"
                                    className="ig-svg"
                                    alt="Instagram"
                                />
                            </a>
                            <a
                                href="https://github.com/pancakeswap/"
                                aria-label="Github"
                                className="socials_icon"
                            >
                                <img
                                    src="TEAM_1_Develhope_React/src/images/github.svg"
                                    className="github-svg"
                                    alt="github"
                                />
                            </a>
                            <a
                                href="https://discord.gg/pancakeswap"
                                aria-label="Discord"
                                className="socials_icon"
                            >
                                <img
                                    src="TEAM_1_Develhope_React/src/images/discord.svg"
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
                                    src="TEAM_1_Develhope_React/src/images/youtube.svg"
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
                                                        src="TEAM_1_Develhope_React/src/images/sunshine.svg"
                                                        alt="Sun svg"
                                                        className="langs-svg"
                                                    />
                                                </div>
                                            </div>
                                            <div className="lang-button">
                                                <img
                                                    src="TEAM_1_Develhope_React/src/images/sunny.svg"
                                                    alt="Sun"
                                                    className="svgtenth"
                                                />
                                                <img
                                                    src="TEAM_1_Develhope_React/src/images/moon.svg"
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
                                            src="TEAM_1_Develhope_React/src/images/world.svg"
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
                                        <img
                                            src="TEAM_1_Develhope_React/src/images/logo.svg"
                                            alt="logo"
                                            className="logosvg"
                                        />
                                        <div className="price">$1.870</div>
                                    </a>
                                </div>
                                <a
                                    className="buycake"
                                    href="https://pancakeswap.finance/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82&chainId=56"
                                >
                                    Buy CAKE
                                    <img
                                        src="TEAM_1_Develhope_React/src/images/buycake.svg"
                                        className="buycakesvg"
                                        alt="Buy Cake"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    )
}