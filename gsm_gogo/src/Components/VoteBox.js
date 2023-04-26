import VoteOption from "./VoteOption";
import "./VoteBox.css";
import { useState } from "react";

function VoteBox({
  round,
  teamName,
  inputValue,
  onChange,
  Multiple,
  Point,
  select,
  setSelect,
  selectedState,
  setSelectedState,
  isVoted,
}) {
  return (
    <>
      <div className="VoteBox">
        <p>{round}</p>
        <div className="VoteButtonBox">
          {teamName.map(function (a, k) {
            if (select === k) {
              return (
                <VoteOption
                  select={select}
                  setSelect={setSelect}
                  KeyNumber={k}
                  teamName={a}
                  selectedState={selectedState}
                  setSelectedState={setSelectedState}
                  isVoted={isVoted}
                  vottedTeam={true}
                />
              );
            } else {
              return (
                <VoteOption
                  select={select}
                  setSelect={setSelect}
                  KeyNumber={k}
                  teamName={a}
                  selectedState={selectedState}
                  setSelectedState={setSelectedState}
                  isVoted={isVoted}
                  vottedTeam={false}
                />
              );
            }
          })}
        </div>
      </div>
      <div>
        <label for="gameInput">
          예측 성공시 <span>{Multiple}배</span>
        </label>
        <input
          type="number"
          min="0"
          max={Point}
          id="gameInput"
          /* isVoted가 false 일 땐 disabled (입력불가) */
          disabled={isVoted == false ? false : true}
          onChange={(e) => {
            onChange(e.target.value);
            console.log(inputValue);
          }}
        />
      </div>
    </>
  );
}
export default VoteBox;
