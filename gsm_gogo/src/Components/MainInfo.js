import "./MainInfo.css";

import Food from "./../img/food_img.png";
import Event from "./../img/event_img.png";
import Calendar from "./../img/calendar_img.png";
import { Link } from "react-router-dom";

function MainInfo() {
  return (
    <>
      <div className="MainInfoContainer">
        <p className="InfoTitleText">이런 정보는 어때요?</p>
        <p>더욱 즐겁게 즐길 수 있도록 GSM GOGO가 도울게요!</p>
        <div className="InfoButtonContainer">
          <Link to="/info/food" style={{ textDecoration: "none" }}>
            <div className="InfoButton">급식</div>
          </Link>
          <Link to="/info/schedule" style={{ textDecoration: "none" }}>
            <div className="InfoButton">일정</div>
          </Link>
          <Link to="/info/event" style={{ textDecoration: "none" }}>
            <div className="InfoButton">이벤트</div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default MainInfo;
