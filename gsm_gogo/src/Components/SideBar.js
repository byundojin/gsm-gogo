import "./SideBar.css";

import PCMain_on_Img from "./../img/PCMain_on_Img.png";
import PCRank_on_Img from "./../img/PCRank_on_Img.png";
import PCVote_on_Img from "./../img/PCVote_on_Img.png";

import PCMain_off_Img from "./../img/PCMain_off_Img.png";
import PCRank_off_Img from "./../img/PCRank_off_Img.png";
import PCVote_off_Img from "./../img/PCVote_off_Img.png";

import profile_Img from "./../img/profile_Img.png";

import { Link } from "react-router-dom";

import logo_img from "../img/logo.png";

// Main : 0
// Vote : 1
// Rate : 2

function SideBar({ currentPage, Point, userName }) {
  return (
    <>
      <div className="SideBarBackground">
        <div id="SideBarLogoImgContatiner">
          <img
            id="SideBarLogoImg"
            className="SideBarNavButton"
            src={logo_img}
          />
        </div>
        <div className="SideBarProfileContainer">
          <img id="SideBarProfileImg" src={profile_Img} />
          <p className="SideBarTitle">{userName}</p>
          <p className={`SideBarSubTitle ${Point == 0 ? "Pointzero" : null}`}>
            P {Point}
          </p>
        </div>
        <div className="SideBarNavBar">
          <Link to="/main">
            <img
              className={`${currentPage === 0 ? "" : "SideBarNavButton"}`}
              src={currentPage === 0 ? PCMain_on_Img : PCMain_off_Img}
            />
          </Link>
          <Link to="/main/vote">
            <img
              className={`${currentPage === 2 ? "" : "SideBarNavButton"}`}
              src={currentPage === 2 ? PCVote_on_Img : PCVote_off_Img}
            />
          </Link>
          <Link to="/main/rating">
            <img
              className={`${currentPage === 1 ? "" : "SideBarNavButton"}`}
              src={currentPage === 1 ? PCRank_on_Img : PCRank_off_Img}
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default SideBar;
