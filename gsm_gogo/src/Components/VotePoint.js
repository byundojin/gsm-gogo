import "./VotePoint.css";

function VotePoint({ Point }) {
  return (
    <>
      <div className="VotePointContainer">
        <div>{Point}P</div>
        <div>보유 포인트</div>
      </div>
    </>
  );
}

export default VotePoint;
