import "../Styles/Leaderboard.css";
import "../Styles/styles.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Outlet,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { Navbar, MbNavbar } from "../Components/Navbar";
import Teams from "../Components/Teams";
import Team from "../Components/Team";
import { render } from "react-dom";

export function LeaderboardPage() {
  const [teamIDX, setTeamIDX] = useState(0);

  const teams = {
    0: (
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
                    The storm's a-comin! Watch out! These bulls are stampeding
                    in a syrupy surge!
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
                  <button className="see-more" onClick={() => setTeamIDX(1)}>
                    See More
                  </button>
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
                    The flippening is coming. Don't get in these bunnies' way,
                    or you'll get flipped, too!
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
                  <button className="see-more" onClick={() => setTeamIDX(2)}>
                    See More
                  </button>
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
                  <button className="see-more" onClick={() => setTeamIDX(3)}>
                    See More
                  </button>
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
    ),
    1: (
      <Team
        teamLogo={"/images/syrup-storm-md.png"}
        teamName={"Syrup Storm"}
        teamPromo={
          "The storm's a-comin! Watch out! These bulls are stampeding in a syrupy surge!"
        }
        member={190345}
        bannerColor={"#58cbd3"}
      />
    ),
    2: (
      <Team
        teamLogo={"/images/fearsome-flippers-md.png"}
        teamName={"Fearsome Flippers"}
        teamPromo={
          "The flippening is coming. Don't get in these bunnies' way, or you'll get flipped, too!"
        }
        member={170840}
        bannerColor={"#7d5bd9"}
      />
    ),
    3: (
      <Team
        teamLogo={"/images/chaotic-cakers-md.png"}
        teamName={"Chaotic Cakers"}
        teamPromo={
          "Can you stand the heat? Stay out of the kitchen or you might get burned to a crisp!"
        }
        member={343840}
        bannerColor={"#d4963f"}
      />
    ),
  };

  return (
    <div>
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
      <div id="leaderboard_div1">
        <div className="leaderboard_div2">
          <div className="inner_board">
            <div className="board_content">
              <h1 className="main_topic">Teams &amp; Profiles</h1>
              <div className="contenth1">
                Show of your stats and collectibles with your unique profile.
                Team features will be revealed soon!
              </div>
            </div>

            {teamIDX === 0 ? (
              <p style={{ color: "black" }}></p>
            ) : (
              <Link to={"/leaderboard"}>
                <button
                  className="overviewButton"
                  onClick={() => {
                    setTeamIDX(0);
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    color="primary"
                    width="20px"
                    fill="#1fc7d4"
                    xmlns="http://www.w3.org/2000/svg"
                    class="sc-231a1e38-0 dTViYw"
                  >
                    <path d="M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z"></path>
                  </svg>
                  <div className="overviewText">Teams Overview</div>
                </button>
              </Link>
            )}
            {teams[teamIDX]}
          </div>
        </div>
        <MbNavbar></MbNavbar>
      </div>
    </div>
  );
}
