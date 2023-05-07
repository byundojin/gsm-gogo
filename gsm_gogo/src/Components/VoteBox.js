import VoteOption from "./VoteOption";
import "./VoteBox.css";
import { useState } from "react";
import { Mobile, PC } from "./reactResponsive";
import MobileVoteOption from "./MobileVoteOption";

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
      <PC>
        <div className="VoteOnBoxWithInput">
          <div className="VoteBox">
            <div className="VoteButtonBox">
              {/* {teamName.map(function (a, k) {
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
                })} */}
              <VoteOption
                setSelect={setSelect}
                KeyNumber={0}
                teamName={teamName[0]}
                selectedState={selectedState}
                setSelectedState={setSelectedState}
                isVoted={isVoted}
                vottedTeam={select === 0 ? true : false}
              />
              <VoteOption
                setSelect={setSelect}
                KeyNumber={1}
                teamName={teamName[1]}
                selectedState={selectedState}
                setSelectedState={setSelectedState}
                isVoted={isVoted}
                vottedTeam={select === 1 ? true : false}
              />
            </div>
          </div>
          <div>
            {/* 
          <label for="gameInput">
          예측 성공시 <span>{Multiple}배</span>
          </label>
          <input
          type="number"
          min="0"
          max={Point}
          id="gameInput"
          disabled={isVoted == false ? false : true}
          onChange={(e) => {
            onChange(e.target.value);
            console.log(inputValue);
          }}
          />
        */}
          </div>
        </div>
      </PC>

      <Mobile>
        <div className="VoteOnBoxWithInput">
          <div className="MobileVoteBox">
            <div className="MobileVoteButtonBox">
              <MobileVoteOption
                setSelect={setSelect}
                KeyNumber={0}
                teamName={teamName[0]}
                selectedState={selectedState}
                setSelectedState={setSelectedState}
                isVoted={isVoted}
                vottedTeam={select === 0 ? true : false}
              />
              <MobileVoteOption
                setSelect={setSelect}
                KeyNumber={1}
                teamName={teamName[1]}
                selectedState={selectedState}
                setSelectedState={setSelectedState}
                isVoted={isVoted}
                vottedTeam={select === 1 ? true : false}
              />
            </div>
          </div>
        </div>
      </Mobile>
    </>
  );
}
export default VoteBox;
