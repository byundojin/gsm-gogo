import logo_img from "./../img/logo_img.png";
import coin_img from "./../img/coin_img.png";
import "./MainHeader.css";

import "./../fonts/Font.css";

function MainHeader({ userName }) {
  return (
    <>
      <div className="MainHeaderContainer">
        <div>
          <img id="MainCoinImg" src={coin_img} />
        </div>
        <div>
          <div>
            <img src={logo_img} />
          </div>

          <div>
            <p className="MainTitle">
              {userName}님,
              <br />
              투표에 참여해
              <br />
              포인트를 얻어보세요.
            </p>
            <p className="MainSubTitle">포인트를 모을수록 행운이 찾아옵니다!</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainHeader;
