import "../Styles/affiliates.css";
import { useEffect } from "react";
import { Navbar } from "../Components/Navbar";
import { MbNavbar } from "../Components/Navbar";
import { Link } from "react-router-dom";

export function AffiliatesPage() {
  useEffect(function () {
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
    toggleHidden1.addEventListener("click", function () {
      if (hiddenRow1.style.display === "none") {
        hiddenRow1.style.display = "flex";
        detailsButton1.innerHTML =
          "Hide<img src='images/affi-images/affi_down_arrow.svg' style='margin-left:8px;top:4px;position:relative;transform:rotate(180deg);'>";
      } else {
        hiddenRow1.style.display = "none";
        detailsButton1.innerHTML =
          "Details<img src='images/affi-images/affi_down_arrow.svg' style='margin-left:8px;top:4px;position:relative;'>";
      }
    });

    hiddenRow2.style.display = "none";
    toggleHidden2.addEventListener("click", function () {
      if (hiddenRow2.style.display === "none") {
        hiddenRow2.style.display = "flex";
        detailsButton2.innerHTML =
          "Hide<img src='images/affi-images/affi_down_arrow.svg' style='margin-left:8px;top:4px;position:relative;transform:rotate(180deg);'>";
      } else {
        hiddenRow2.style.display = "none";
        detailsButton2.innerHTML =
          "Details<img src='images/affi-images/affi_down_arrow.svg' style='margin-left:8px;top:4px;position:relative;'>";
      }
    });

    hiddenRow3.style.display = "none";
    toggleHidden3.addEventListener("click", function () {
      if (hiddenRow3.style.display === "none") {
        hiddenRow3.style.display = "flex";
        detailsButton3.innerHTML =
          "Hide<img src='images/affi-images/affi_down_arrow.svg' style='margin-left:8px;top:4px;position:relative;transform:rotate(180deg);'>";
      } else {
        hiddenRow3.style.display = "none";
        detailsButton3.innerHTML =
          "Details<img src='images/affi-images/affi_down_arrow.svg' style='margin-left:8px;top:4px;position:relative;'>";
      }
    });

    hiddenRow4.style.display = "none";
    toggleHidden4.addEventListener("click", function () {
      if (hiddenRow4.style.display === "none") {
        hiddenRow4.style.display = "flex";
        detailsButton4.innerHTML =
          "Hide<img src='images/affi-images/affi_down_arrow.svg' style='margin-left:8px;top:4px;position:relative;transform:rotate(180deg);'>";
      } else {
        hiddenRow4.style.display = "none";
        detailsButton4.innerHTML =
          "Details<img src='images/affi-images/affi_down_arrow.svg' style='margin-left:8px;top:4px;position:relative;'>";
      }
    });

    hiddenRow5.style.display = "none";
    toggleHidden5.addEventListener("click", function () {
      if (hiddenRow5.style.display === "none") {
        hiddenRow5.style.display = "flex";
        detailsButton5.innerHTML =
          "Hide<img src='images/affi-images/affi_down_arrow.svg' style='margin-left:8px;top:4px;position:relative;transform:rotate(180deg);'>";
      } else {
        hiddenRow5.style.display = "none";
        detailsButton5.innerHTML =
          "Details<img src='images/affi-images/affi_down_arrow.svg' style='margin-left:8px;top:4px;position:relative;'>";
      }
    });
  }, []);
  return (
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
        <Link to={`/affiliates-program`}>
          <div className="header2_overview">
            <a>Overview</a>
          </div>
        </Link>
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
        <Link to={`/affiliates-dashboard`}>
          <div className="header2_dashboard">
            <a href="#dashboard">Dashboard</a>
          </div>
        </Link>
      </div>
      <div className="container_section1">
        <div className="parent_section1">
          <div className="section1">
            <div className="section1_floating">
              <img id="floimg1" src="images/affi-images/affi-bobbing-1.png" />
              <img id="floimg2" src="images/affi-images/affi-bobbing-2.png" />
              <img id="floimg3" src="images/affi-images/affi-bobbing-3.png" />
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
              <img src="images/affi-images/affi_banner.webp" />
            </div>
            <div className="section1_right">
              <div className="section1_right_a">
                Affiliate with us, Empower DeFi
              </div>
              <div className="section1_right_b">
                Join a community-driven movement to make DeFi accessible and
                better for everyone
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
              src="images/div4_1.svg"
              style={{ width: 36, height: 36 }}
            />
            <h2 id="div4_text1">Good things</h2>
            <h2 id="div4_text2">are meant to be shared</h2>
            <div id="div4_text3">
              Together we can make the PancakeSwap community even stronger
            </div>
            <div id="div4_text5">
              How do you Become a PancakeSwap Affiliate?
            </div>
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
                      <h2
                        className="div4_box_a_text1"
                        style={{ marginBottom: 0 }}
                      >
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
      <div className="affi_transition">
        <img
          alt="affi_transition1"
          className="affi_transition"
          src="images/affi_trans1.png"
        />
      </div>
      <div className="container_section3">
        <div className="trans_section2_3" />
        <div className="parent_section3">
          <div className="section3">
            <div className="section3_float">
              <img id="floimg3-1" src="images/affi-images/affi_floimg3-1.png" />
              <img id="floimg3-2" src="images/affi-images/affi_floimg3-2.png" />
              <img id="floimg3-3" src="images/affi-images/affi_floimg3-3.png" />
              <img id="floimg3-4" src="images/affi-images/affi_floimg3-4.png" />
              <img id="floimg3-5" src="images/affi-images/affi_floimg3-5.png" />
            </div>
            <div className="section3_top_container">
              <div className="section3_top">
                <div className="section3_top_1">
                  Join PancakeSwap's Community and Make a Difference
                </div>
                <div className="section3_top_2">
                  As an affiliate, you'll be part of a network of like-minded
                  individuals who are committed to build a stronger DeFi
                  community. Be part of something bigger with PancakeSwap's
                  Affiliate program
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
                    <img src="images/affi-images/affi_sec3_1.png" />
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
                    <img src="images/affi-images/affi_sec3_2.png" />
                  </div>
                  <div className="section3_bottom_2b_y">
                    <div className="section3_bottom_2b_y1">PERPETUAL</div>
                    <div className="section3_bottom_2b_y2">20%</div>
                  </div>
                </div>
                <div className="section3_bottom_2c">
                  <div className="section3_bottom_2c_x">
                    <img src="images/affi-images/affi_sec3_3.png" />
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
      <div className="affi_transition">
        <img
          alt="affi_transition2"
          className="affi_transition"
          src="images/affi_trans2.png"
        />
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
              src="images/div4_1.svg"
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
                <img src="images/affi-images/affi_sec4_1.webp" />
              </div>
              <div className="section4_box_text">
                <div className="section4_box_right_top">
                  Partner with the Leading Brand in the Industry
                </div>
                <div className="section4_box_right_bot">
                  Forge a partnership with the most reputable global brand in
                  the industry to make DeFi accessible and better for everyone
                </div>
              </div>
            </div>
            <div className="section4_box_textimg">
              <div className="section4_box_text">
                <div className="section4_box_right_top">
                  User Friendly Platform
                </div>
                <div className="section4_box_right_bot">
                  Provide a seamless experience for your referrals with our user
                  friendly platform
                </div>
              </div>
              <div className="section4_box_img">
                <img src="images/affi-images/affi_sec4_2.webp" />
              </div>
            </div>
            <div className="section4_box_imgtext">
              <div className="section4_box_img">
                <img src="images/affi-images/affi_sec4_3.webp" />
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
                <div className="section4_box_right_top">
                  Real-Time Reporting
                </div>
                <div className="section4_box_right_bot">
                  Easily keep tabs on commission and earnings with our
                  user-friendly dashboard
                </div>
              </div>
              <div className="section4_box_img">
                <img src="images/affi-images/affi_sec4_4.webp" />
              </div>
            </div>
            <div className="section4_box_imgtext">
              <div className="section4_box_img">
                <img src="images/affi-images/affi_sec4_5.webp" />
              </div>
              <div className="section4_box_text">
                <div className="section4_box_right_top">
                  Personalized Support
                </div>
                <div className="section4_box_right_bot">
                  Personalized assistance from our community managers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="affi_transition">
        <img
          alt="affi_transition3"
          className="affi_transition"
          src="images/affi_trans3.png"
        />
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
                            src="images/affi-images/affi_down_arrow.svg"
                            style={{
                              marginLeft: 8,
                              top: 5,
                              position: "relative",
                            }}
                          />
                        </button>
                      </div>
                    </div>
                    <div className="faq_hiddenrow" id="hiddenrow1">
                      <div className="hiddenrow_text">
                        <div className="dash">-</div>
                        At least 10,000 followers across social media platforms
                        such as Twitter, Youtube, Discord, Instagram and
                        Telegram
                      </div>
                      <div className="hiddenrow_text">
                        <div className="dash">-</div>
                        Proven track record of creating quality content related
                        to crypto and especially DeFi
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
                            src="images/affi-images/affi_down_arrow.svg"
                            style={{
                              marginLeft: 8,
                              top: 5,
                              position: "relative",
                            }}
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
                        Trading pairs must meet the following eligibility
                        criteria:
                      </div>
                      <div
                        className="hiddenrow_text"
                        style={{ marginLeft: 16 }}
                      >
                        <div className="dash">-</div>
                        Pairs must be in “PancakeSwap Extended” Official
                        <a href="https://tokenlists.org/token-list?url=https://tokens.pancakeswap.finance/pancakeswap-extended.json">
                          token list
                        </a>
                      </div>
                      <div
                        className="hiddenrow_text"
                        style={{ marginLeft: 16 }}
                      >
                        <div className="dash">-</div>
                        Pairs must include 1 major token (BNB, BTC, BUSD, ETH,
                        USDT and USDC)
                      </div>
                    </div>
                  </div>
                  <div className="section5_faq_q_box">
                    <div className="faq_toprow" id="faqtoggle3">
                      <div className="faq_toprow_q">
                        How will I receive my commissions and how often will I
                        be paid?
                      </div>
                      <div className="faq_button_area">
                        <button id="faqbutton3">
                          Details
                          <img
                            src="images/affi-images/affi_down_arrow.svg"
                            style={{
                              marginLeft: 8,
                              top: 5,
                              position: "relative",
                            }}
                          />
                        </button>
                      </div>
                    </div>
                    <div className="faq_hiddenrow" id="hiddenrow3">
                      <div className="hiddenrow_text">
                        <div className="dash">-</div>
                        You will receive your commissions on a monthly basis.
                        This means that you will receive payments for your
                        commissions earned in the previous month at the
                        beginning of each month.
                      </div>
                      <div className="hiddenrow_text">
                        <div className="dash">-</div>
                        You will be able to redeem your CAKE rewards from the
                        affiliate dashboard page. Once redeemed, PancakeSwap
                        will transfer the commission amount earned to your
                        designated wallet. You will be able to see the details
                        of each payment in your affiliate dashboard, including
                        the amount, date, and status of each payment.
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
                            src="images/affi-images/affi_down_arrow.svg"
                            style={{
                              marginLeft: 8,
                              top: 5,
                              position: "relative",
                            }}
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
                        Your referrals will be listed in your affiliate
                        dashboard, along with the date they were made, their
                        status, and the commission amount earned
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
                            src="images/affi-images/affi_down_arrow.svg"
                            style={{
                              marginLeft: 8,
                              top: 5,
                              position: "relative",
                            }}
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
          Blog <img src="images/l-arrow.svg" />
        </span>
        <span className="opt_kids" id="docs2">
          Docs <img src="images/l-arrow.svg" />{" "}
        </span>
      </div>

      <MbNavbar></MbNavbar>
    </>
  );
}
