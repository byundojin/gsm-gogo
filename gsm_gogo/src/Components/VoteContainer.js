import "./VoteContainer.css";
import { Mobile, PC } from "./reactResponsive";

function VoteContainer({ children, event }) {
  return (
    <>
      <PC>
        <div className="VoteContainer">
          <p id="VoteEventTitle">{event}</p>
          <div className="VoteBoxsContainer">{children}</div>
        </div>
      </PC>

      <Mobile>
        <div className="MobileVoteContainer">
          <p id="MobileVoteEventTitle">{event}</p>
          <div className="VoteBoxsContainer">{children}</div>
        </div>
      </Mobile>
    </>
  );
}

export default VoteContainer;
