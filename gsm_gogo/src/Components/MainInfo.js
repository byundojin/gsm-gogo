import "./MainInfo.css";

import Calendar from "./../img/calendar_img.png";
import Event from "./../img/event_img.png";
import Food from "./../img/food_img.png";

function MainInfo({ setFoodModal, setScheduleModal, setEventModal }) {
  return (
    <>
      <div className="MainInfoContainer">
        <p className="InfoTitleText">이런 정보는 어때요?</p>
        <p>더욱 즐겁게 즐길 수 있도록 GSM GOGO가 도울게요!</p>
        <div className="InfoButtonContainer">
          <div
            className="InfoButton"
            onClick={() => {
              setFoodModal(true);
            }}
          >
            <img src={Food} />
          </div>
          <div
            className="InfoButton"
            onClick={() => {
              setScheduleModal(true);
            }}
          >
            <img src={Calendar} />
          </div>
          <div
            className="InfoButton"
            onClick={() => {
              setEventModal(true);
            }}
          >
            <img src={Event} />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainInfo;
