import "./MobileVotePoint.css";
import LogoImg from "./../img/logo_img.png";

function MobileVotePoint({ Point }) {
  return (
    <>
      <div className="MobileVotePointContainer">
        <img src={LogoImg} className="MobileVotePointLogoImg" />
        <p className="MobileVotePointTitle">{Point}P</p>
        <p className="MobileVoteTitle">보유 포인트</p>
      </div>
    </>
  );
}

export default MobileVotePoint;
