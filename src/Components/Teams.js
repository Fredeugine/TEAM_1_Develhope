import "../Styles/Leaderboard.css";
import "../Styles/styles.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navbar, MbNavbar } from "../Components/Navbar";
export default function Teams() {
  return (
    <div>
      <div className="second_part">
        <h2 className="sub_topic">Teams</h2>
      </div>
      <div id="team_1">
        <div className="team_content">
          <div className="boxcard">
            <div className="sidebar">
              <div className="side-content">1</div>
            </div>
            <div className="card-content">
              <div className="box-content">
                <div className="card-box">
                  <div className="main-topic">
                    <img
                      src="/images/syrup-storm-md.png"
                      alt="Syrup Storm"
                      className="side-images"
                    />
                  </div>
                  <h3 className="contenth3">Syrup Storm</h3>
                </div>
                <p className="teams-text">
                  The storm's a-comin! Watch out! These bulls are stampeding in
                  a syrupy surge!
                </p>
                <div className="csoon">
                  <div className="comingsn">
                    <img
                      src="/images/leadersvgs/trophy.svg"
                      alt="Trophy img"
                      className="cupsvg"
                    />
                    <div className="cupsoon">Coming Soon</div>
                  </div>
                  <div className="totalnumbers">
                    <img
                      src="/images/leadersvgs/people.svg"
                      alt="People img"
                      className="many-people"
                    />
                    <div className="numbers1">190,345</div>
                  </div>
                </div>
              </div>
              <a className="team-links">
                <button className="see-more">See More</button>
              </a>
              <div className="sideimg">
                <img
                  src="/images/syrup-storm-md.png"
                  alt="team avatar"
                  className="team-avatar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="team-2">
        <div className="team_content">
          <div className="boxcard">
            <div className="sidebar">
              <div className="side-content">2</div>
            </div>
            <div className="card-content">
              <div className="box-content">
                <div className="card-box">
                  <div className="main-topic">
                    <img
                      src="/images/fearsome-flippers-md.png"
                      alt="Fearsome Flippers"
                      className="side-images"
                    />
                  </div>
                  <h3 className="contenth3">Fearsome Flippers</h3>
                </div>
                <p className="teams-text">
                  The flippening is coming. Don't get in these bunnies' way, or
                  you'll get flipped, too!
                </p>
                <div className="csoon">
                  <div className="comingsn">
                    <img
                      src="/images/leadersvgs/trophy.svg"
                      alt="Trophy img"
                      className="cupsvg"
                    />
                    <div className="cupsoon">Coming Soon</div>
                  </div>
                  <div className="totalnumbers">
                    <img
                      src="/images/leadersvgs/people.svg"
                      className="many-people"
                      alt="People img"
                    />
                    <div className="numbers1">170,840</div>
                  </div>
                </div>
              </div>
              <a className="team-links">
                <button className="see-more">See More</button>
              </a>
              <div className="sideimg">
                <img
                  src="/images/fearsome-flippers-md.png"
                  className="team-avatar"
                  alt="Fearsome Flippers"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="team-3">
        <div className="team_content">
          <div className="boxcard">
            <div className="sidebar">
              <div className="side-content">3</div>
            </div>
            <div className="card-content">
              <div className="box-content">
                <div className="card-box">
                  <div className="main-topic">
                    <img
                      src="/images/chaotic-cakers-md.png"
                      className="side-images"
                      alt="Chaotic Cakers"
                    />
                  </div>
                  <h3 className="contenth3">Chaotic Cakers</h3>
                </div>
                <p className="teams-text">
                  Can you stand the heat? Stay out of the kitchen or you might
                  get burned to a crisp!
                </p>
                <div className="csoon">
                  <div className="comingsn">
                    <img
                      src="/images/leadersvgs/trophy.svg"
                      className="cupsvg"
                      alt="Trophy img"
                    />
                    <div className="cupsoon">Coming Soon</div>
                  </div>
                  <div className="totalnumbers">
                    <img
                      src="/images/leadersvgs/people.svg"
                      alt="People img"
                      className="many-people"
                    />
                    <div className="numbers1">343,840</div>
                  </div>
                </div>
              </div>
              <a className="team-links">
                <button className="see-more">See More</button>
              </a>
              <div className="sideimg">
                <img
                  src="/images/chaotic-cakers-md.png"
                  alt="Chaotic Cakers"
                  className="team-avatar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
