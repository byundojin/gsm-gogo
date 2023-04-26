import "./VoteContainer.css";

function VoteContainer({ children, event }) {
  return (
    <>
      <div className="VoteContainer">
        <p>{event}</p>
        {children}
      </div>
    </>
  );
}

export default VoteContainer;
