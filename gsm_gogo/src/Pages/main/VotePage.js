import NavBar from "../../Components/NavBar";
import VoteContainer from "../../Components/VoteContainer";
import VotePoint from "../../Components/VotePoint";
import VoteBox from "../../Components/VoteBox";
import { useEffect, useState } from "react";

import "./VotePage.css";

function VotePage() {
  const soccerTeam = ["1-1", "1-2", "1-3", "1-4", "2-1", "2-2", "2-3", "2-4"];
  const baseballTeam = [
    "진헌이팀",
    "희성이팀",
    "지성이팀",
    "혜성이팀",
    "상혁이팀",
    "주은이팀",
    "현이팀",
    "지완이팀",
  ];

  /* A팀 입력 포인트값, 투표 번호*/
  const [inputQuarterA, setInputQuarterA] = useState(0);
  const [inputSemiA, setInputSemiA] = useState(0);
  const [inputFinalA, setInputFinalA] = useState(0);

  const [selectQuarterA, setSelectQuarterA] = useState(undefined);
  const [selectSemiA, setSelectSemiA] = useState(undefined);
  const [selectFinalA, setSelectFinalA] = useState(undefined);
  /**/
  const [selectedQuarterStateA, setSelectedQuarterStateA] = useState(null);
  const [selectedSemiStateA, setSelectedSemiStateA] = useState(null);
  const [selectedFinalStateA, setSelectedFinalStateA] = useState(null);

  /* B팀 입력 포인트값, 투표 번호*/
  const [inputQuarterB, setInputQuarterB] = useState(0);
  const [inputSemiB, setInputSemiB] = useState(0);
  const [inputFinalB, setInputFinalB] = useState(0);

  const [selectQuarterB, setSelectQuarterB] = useState(undefined);
  const [selectSemiB, setSelectSemiB] = useState(undefined);
  const [selectFinalB, setSelectFinalB] = useState(undefined);
  /**/
  const [selectedQuarterStateB, setSelectedQuarterStateB] = useState(null);
  const [selectedSemiStateB, setSelectedSemiStateB] = useState(null);
  const [selectedFinalStateB, setSelectedFinalStateB] = useState(null);

  const [votePoint, setVotePoint] = useState(1000); /* 포인트 */
  const [isVoted] =
    useState(false); /* 투표 완료 여부 : false(투표하지않음) true : (투표함) */

  /*const [previewPoint, setPreviewPoint] = useState(votePoint);*/

  // let sumInputValue = 0;

  const sumOfRound = [
    Number(inputQuarterA) + Number(inputSemiA) + Number(inputFinalA),
    Number(inputQuarterB) + Number(inputSemiB) + Number(inputFinalB),
  ];

  const sumOfBet = sumOfRound.reduce((acc, cur) => acc + cur, 0);

  function handleSubmit(e) {
    let minPoint =
      Number(inputQuarterA) +
      Number(inputSemiA) +
      Number(inputFinalA) +
      Number(inputQuarterB) +
      Number(inputSemiB) +
      Number(inputFinalB);

    if (votePoint < minPoint) {
      /* 배팅한 포인트가 보유 포인트 보다 많을 때 */
      alert("포인트 배팅이 잘못 되었습니다!");
    } else if (
      selectQuarterA == undefined ||
      selectSemiA == undefined ||
      selectFinalA == undefined ||
      selectQuarterB == undefined ||
      selectSemiB == undefined ||
      selectFinalB == undefined
    ) {
      /* 투표하지 않은 경기가 있을 때 */
      alert("모든 경기에 투표해주세요!");
    } else if (isVoted) {
      /* 이미 투표를 완료 했을 때 */
      alert("이미 투표했노");
    } else {
      setVotePoint((prevPoint) => prevPoint - minPoint);
      alert(
        `
        A0 : ${selectQuarterA} A1 : ${selectSemiA} A2 : ${selectFinalA} B0 : ${selectQuarterB} B1 : ${selectSemiB} B2 : ${selectFinalB}
        Point : ${votePoint - minPoint}
        `
      );
    }
  }

  return (
    <>
      {/*투표창 위에 보유 포인트*/}
      <div className="VotePage">
        <form className="VoteForm" onSubmit={handleSubmit}>
          <VotePoint Point={votePoint} />

          <VoteContainer event="SOCCER">
            {/*투표 박스*/}
            <VoteBox
              round="8강"
              teamName={soccerTeam}
              inputValue={inputQuarterA}
              onChange={setInputQuarterA}
              currentPointSet={setVotePoint}
              Point={votePoint}
              Multiple={2}
              select={selectQuarterA}
              setSelect={setSelectQuarterA}
              selectedState={selectedQuarterStateA}
              setSelectedState={setSelectedQuarterStateA}
              isVoted={isVoted}
            />
            <VoteBox
              round="4강"
              teamName={soccerTeam}
              inputValue={inputSemiA}
              onChange={setInputSemiA}
              currentPointSet={setVotePoint}
              Point={votePoint}
              Multiple={4}
              select={selectSemiA}
              setSelect={setSelectSemiA}
              selectedState={selectedSemiStateA}
              setSelectedState={setSelectedSemiStateA}
              isVoted={isVoted}
            />
            <VoteBox
              round="결승"
              teamName={soccerTeam}
              inputValue={inputFinalA}
              onChange={setInputFinalA}
              currentPointSet={setVotePoint}
              Point={votePoint}
              Multiple={6}
              select={selectFinalA}
              setSelect={setSelectFinalA}
              selectedState={selectedFinalStateA}
              setSelectedState={setSelectedFinalStateA}
              isVoted={isVoted}
            />
            {sumOfBet < votePoint ? (
              <div>{sumOfBet}</div>
            ) : (
              <div>한도 초과노무현 이기야</div>
            )}
          </VoteContainer>

          <VoteContainer event="BASEBALL">
            <VoteBox
              round="8강"
              teamName={baseballTeam}
              inputValue={inputQuarterB}
              onChange={setInputQuarterB}
              currentPointSet={setVotePoint}
              Point={votePoint}
              Multiple={2}
              select={selectQuarterB}
              setSelect={setSelectQuarterB}
              selectedState={selectedQuarterStateB}
              setSelectedState={setSelectedQuarterStateB}
              isVoted={isVoted}
            />
            <VoteBox
              round="4강"
              teamName={baseballTeam}
              inputValue={inputSemiB}
              onChange={setInputSemiB}
              currentPointSet={setVotePoint}
              Point={votePoint}
              Multiple={4}
              select={selectSemiB}
              setSelect={setSelectSemiB}
              selectedState={selectedSemiStateB}
              setSelectedState={setSelectedSemiStateB}
              isVoted={isVoted}
            />
            <VoteBox
              round="결승"
              teamName={baseballTeam}
              inputValue={inputFinalB}
              onChange={setInputFinalB}
              currentPointSet={setVotePoint}
              Point={votePoint}
              Multiple={6}
              select={selectFinalB}
              setSelect={setSelectFinalB}
              selectedState={selectedFinalStateB}
              setSelectedState={setSelectedFinalStateB}
              isVoted={isVoted}
            />
            {sumOfBet < votePoint ? (
              <div>{sumOfBet}</div>
            ) : (
              <div>한도 초과노무현 이기야</div>
            )}
          </VoteContainer>
          <button>aaaaaaaaaaaaaaaa</button>
          <button>aaaaaaaaaaaaaaaa</button>
          <button>aaaaaaaaaaaaaaaa</button>
          <button>aaaaaaaaaaaaaaaa</button>
        </form>
      </div>

      <NavBar />
    </>
  );
}

export default VotePage;
