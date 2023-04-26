import { useEffect, useState } from "react";

import "./VoteOption.css";

function VoteOption({
  KeyNumber,
  teamName,
  select,
  setSelect,
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
        {teamName}
      </div>
    </div>
  );
}

export default VoteOption;
