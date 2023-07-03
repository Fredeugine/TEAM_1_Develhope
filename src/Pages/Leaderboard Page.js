import '../Styles/Leaderboard.css'
import '../Styles/styles.css'

import {useEffect} from "react";
import {Navbar, MbNavbar} from "../Components/Navbar";
export function LeaderboardPage(){
    useEffect(function (){

    })
    return(
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
                                Show of your stats and collectibles with your unique profile. Team
                                features will be revealed soon!
                            </div>
                        </div>
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
                                        <a href="/teams/1" className="team-links">
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
                                        <a href="/teams/2" className="team-links">
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
                                        <a href="/teams/3" className="team-links">
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
                </div>
               <MbNavbar></MbNavbar>
            </div>
        </div>
    )
}