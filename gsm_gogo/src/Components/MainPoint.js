import "./MainPoint.css";

function MainPoint({ Point }) {
  return (
    <>
      <div className="MainPointContiner">
        <p>닉네임님의 총 포인트</p>
        <div>{Point}P</div>
      </div>
    </>
  );
}

export default MainPoint;
