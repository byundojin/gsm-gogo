import { useNavigate } from "react-router-dom";
import "./PCMainEvent.css";

function PCMainEvent() {
  const navigate = useNavigate();
  return (
    <>
      <div className="PCMainEventContainer">
        <p className="PCEventTitle">이벤트</p>
        <div className="PCMainEventBox">
          <div className="EventTextBox">
            <p>6인 6각</p>
            <p>줄파도타기</p>
            <p>이어달리기</p>
            <p>미션달리기</p>
            <p>농구 자유투 릴레이</p>
            <p>줄다리기</p>
            <p>축구 농구 배구 </p>
            <div
              className="EventMinigameButton"
              onClick={() => {
                navigate("minigame");
              }}
            >
              행운의 동전 굴리러 가기
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PCMainEvent;
