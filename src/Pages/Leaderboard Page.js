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

export function LeaderboardPage() {
  const [teamIDX, setTeamIDX] = useState(0);

  const team0 = <Teams></Teams>;
  const team1 = (
    <Team
      teamLogo={"/images/syrup-storm-md.png"}
      teamName={"Syrup Storm"}
      teamPromo={
        "The storm's a-comin! Watch out! These bulls are stampeding in a syrupy surge!"
      }
      member={190345}
      bannerColor={"#58cbd3"}
    ></Team>
  );
  const team2 = (
    <Team
      teamLogo={"/images/fearsome-flippers-md.png"}
      teamName={"Fearsome Flippers"}
      teamPromo={
        "The flippening is coming. Don't get in these bunnies' way, or you'll get flipped, too!"
      }
      member={170840}
      bannerColor={"#7d5bd9"}
    ></Team>
  );
  const team3 = (
    <Team
      teamLogo={"/images/chaotic-cakers-md.png"}
      teamName={"Chaotic Cakers"}
      teamPromo={
        "Can you stand the heat? Stay out of the kitchen or you might get burned to a crisp!"
      }
      member={343840}
      bannerColor={"#d4963f"}
    ></Team>
  );

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

            {team0}
          </div>
        </div>
        <MbNavbar></MbNavbar>
      </div>
    </div>
  );
}
