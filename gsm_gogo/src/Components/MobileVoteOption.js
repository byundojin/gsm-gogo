import { useEffect, useState } from "react";

import "./MobileVoteOption.css";

import Flag_Img from "../img/Flag_Img.png";
import { Mobile, PC } from "./reactResponsive";

function MobileVoteOption({
  setSelect,
  KeyNumber,
  teamName,
  selectedState,
  setSelectedState,
  isVoted,
  vottedTeam,
}) {
  const [selected, setSelected] = useState(false);
  const [active, setActive] = useState("");
  const Key = KeyNumber;

  useEffect(() => {
    if (selected) {
      setSelect(Key);
      setActive("activeButton");
    } else {
      setActive(" ");
    }
  }, [selected]);

  useEffect(() => {
    if (selectedState === Key) {
      setSelected(true);
      setActive("activeButton");
    } else {
      setSelected(false);
      setActive("");
    }
  }, [selectedState]);

  return (
    <Mobile>
      <div>
        <div
          className={`Box VoteButton ${active} ${
            vottedTeam == true ? "activeButton" : ""
          }`}
          /* isVoted가 false 일 때만 클릭 가능 */
          onClick={() => {
            /* isVoted가 false 일 때만 클릭 가능 */
            if (isVoted === false) {
              if (!selected) {
                setSelectedState(Key);
              } else {
                setSelectedState(null);
                setSelect(null);
              }
            }
          }}
        >
          {selected == false ? null : (
            <img src={Flag_Img} className="MobileVotedFlag" />
          )}
          <div className="MobileVoteTeamNameTitle">{teamName}</div>
        </div>
      </div>
    </Mobile>
  );
}

export default MobileVoteOption;
