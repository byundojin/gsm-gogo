import NavBar from "../../Components/NavBar";
import VoteContainer from "../../Components/VoteContainer";
import VotePoint from "../../Components/VotePoint";
import VoteBox from "../../Components/VoteBox";
import { useEffect, useState } from "react";

import "./VotePage.css";
import { Mobile, PC } from "../../Components/reactResponsive";
import SideBar from "../../Components/SideBar";
import MobileVotePoint from "../../Components/MobileVotePoint";

import SUCCESS from "../../img/SUCCESS.png";
import FAIL from "../../img/FAIL.png";

function VotePage({
  POINT,
  setPOINT,
  USERNAME,
  resultA,
  resultB,
  resultC,
  isResult,
}) {
  const soccerTeam = ["1-1", "1-2"];
  const baseballTeam = ["2-1", "3-4"];
  const volleyballTeam = ["1-4", "3-1"];

  /* A팀 입력 포인트값, 투표 번호*/
  const [inputA, setInputA] = useState(0);

  const [selectA, setSelectA] = useState(undefined);
  /**/
  const [selectedStateA, setSelectedStateA] = useState(null);

  /* B팀 입력 포인트값, 투표 번호*/
  const [inputB, setInputB] = useState(0);

  const [selectB, setSelectB] = useState(undefined);
  /**/
  const [selectedStateB, setSelectedStateB] = useState(null);

  /* C팀 입력 포인트값, 투표 번호*/
  const [inputC, setInputC] = useState(0);

  const [selectC, setSelectC] = useState(undefined);
  /**/
  const [selectedStateC, setSelectedStateC] = useState(null);

  const [isVoted, setIsVoted] =
    useState(false); /* 투표 완료 여부 : false(투표하지않음) true : (투표함) */

  /*const [previewPoint, setPreviewPoint] = useState(votePoint);*/

  // let sumInputValue = 0;

  const sumOfRound = [Number(inputA), Number(inputB), Number(inputC)];

  const sumOfBet = sumOfRound.reduce((acc, cur) => acc + cur, 0);

  function handleSubmit(e) {
    let minPoint = Number(inputA) + Number(inputB) + Number(inputC);

    if (POINT < minPoint) {
      /* 배팅한 포인트가 보유 포인트 보다 많을 때 */
      alert("포인트 배팅이 잘못 되었습니다!");
    } else if (
      selectA == undefined ||
      selectB == undefined ||
      selectC == undefined
    ) {
      /* 투표하지 않은 경기가 있을 때 */
      alert("모든 경기에 투표해주세요!");
    } else if (isVoted) {
      /* 이미 투표를 완료 했을 때 */
      alert("이미 투표했습니다!");
    } else {
      setPOINT((prevPoint) => prevPoint - minPoint);
      setIsVoted(true);

      alert(
        `
        A0 : ${selectA} 
        B0 : ${selectB}
        C0 : ${selectC}
        A0Point :  ${inputA}
        B0Point :  ${inputB}
        C0Point :  ${inputC}
        Remaining Points : ${POINT - minPoint}
        `
      );
    }
  }

  return (
    <>
      <PC>
        <div>
          <SideBar currentPage={2} Point={POINT} userName={USERNAME} />
          {/*투표창 위에 보유 포인트*/}
          <div className="VotePage">
            <form className="VoteForm" onSubmit={handleSubmit}>
              {/*
              <VotePoint Point={votePoint} />
            */}

              <div className="VoteBoxwithButtonContainer">
                <div>
                  <div className="VotewithInputContainer">
                    <VoteContainer event="SOCCER">
                      {/*투표 박스*/}

                      <VoteBox
                        round="결승"
                        teamName={soccerTeam}
                        inputValue={inputA}
                        onChange={setInputA}
                        currentPointSet={setPOINT}
                        Point={POINT}
                        Multiple={6}
                        select={selectA}
                        setSelect={setSelectA}
                        selectedState={selectedStateA}
                        setSelectedState={setSelectedStateA}
                        isVoted={isVoted}
                      />

                      {isResult &&
                        isVoted &&
                        (resultA === selectA ? (
                          <div className="VoteResultImgContainer">
                            <img className="VoteResultImg" src={SUCCESS} />
                          </div>
                        ) : (
                          <div className="VoteResultImgContainer">
                            <img className="VoteResultImg" src={FAIL} />
                          </div>
                        ))}
                    </VoteContainer>
                    <div className="VoteInfoContainer">
                      <div
                        className={`VoteLimitPointTitle ${
                          sumOfBet <= POINT ? "" : "Limited"
                        }`}
                      >
                        {sumOfBet <= POINT
                          ? "현재 배팅한 포인트 "
                          : "수치 초과! "}

                        <span
                          className={`limitPointTitle ${
                            sumOfBet <= POINT ? "" : "Limited"
                          }`}
                        >
                          {sumOfBet}P
                        </span>
                      </div>
                      <input
                        className="VotePointInput"
                        type="number"
                        min="0"
                        max={POINT}
                        id="gameInput"
                        /* isVoted가 false 일 땐 disabled (입력불가) */
                        disabled={isVoted == false ? false : true}
                        placeholder="배팅할 포인트를 입력하세요!"
                        onChange={(e) => {
                          setInputA(e.target.value);
                          console.log(inputA);
                        }}
                      />
                    </div>
                  </div>

                  <div className="VotewithInputContainer">
                    <VoteContainer event="BASEBALL">
                      <VoteBox
                        round="결승"
                        teamName={baseballTeam}
                        inputValue={inputB}
                        onChange={setInputB}
                        currentPointSet={setPOINT}
                        Point={POINT}
                        Multiple={6}
                        select={selectB}
                        setSelect={setSelectB}
                        selectedState={selectedStateB}
                        setSelectedState={setSelectedStateB}
                        isVoted={isVoted}
                      />
                      {isResult &&
                        isVoted &&
                        (resultB === selectB ? (
                          <div className="VoteResultImgContainer">
                            <img className="VoteResultImg" src={SUCCESS} />
                          </div>
                        ) : (
                          <div className="VoteResultImgContainer">
                            <img className="VoteResultImg" src={FAIL} />
                          </div>
                        ))}
                    </VoteContainer>
                    <div className="VoteInfoContainer">
                      <div
                        className={`VoteLimitPointTitle ${
                          sumOfBet <= POINT ? "" : "Limited"
                        }`}
                      >
                        {sumOfBet <= POINT
                          ? "현재 배팅한 포인트 "
                          : "수치 초과! "}

                        <span
                          className={`limitPointTitle ${
                            sumOfBet <= POINT ? "" : "Limited"
                          }`}
                        >
                          {sumOfBet}P
                        </span>
                      </div>
                      <input
                        className="VotePointInput"
                        type="number"
                        min="0"
                        max={POINT}
                        id="gameInput"
                        /* isVoted가 false 일 땐 disabled (입력불가) */
                        disabled={isVoted == false ? false : true}
                        placeholder="배팅할 포인트를 입력하세요!"
                        onChange={(e) => {
                          setInputB(e.target.value);
                          console.log(inputB);
                        }}
                      />
                    </div>
                  </div>

                  <div className="VotewithInputContainer">
                    <VoteContainer event="VOLLEYBALL">
                      <VoteBox
                        round="결승"
                        teamName={volleyballTeam}
                        inputValue={inputC}
                        onChange={setInputC}
                        currentPointSet={setPOINT}
                        Point={POINT}
                        Multiple={6}
                        select={selectC}
                        setSelect={setSelectC}
                        selectedState={selectedStateC}
                        setSelectedState={setSelectedStateC}
                        isVoted={isVoted}
                      />
                      {isResult &&
                        isVoted &&
                        (resultC === selectC ? (
                          <div className="VoteResultImgContainer">
                            <img className="VoteResultImg" src={SUCCESS} />
                          </div>
                        ) : (
                          <div className="VoteResultImgContainer">
                            <img className="VoteResultImg" src={FAIL} />
                          </div>
                        ))}
                    </VoteContainer>
                    <div className="VoteInfoContainer">
                      <div
                        className={`VoteLimitPointTitle ${
                          sumOfBet <= POINT ? "" : "Limited"
                        }`}
                      >
                        {sumOfBet <= POINT
                          ? "현재 배팅한 포인트 "
                          : "수치 초과! "}

                        <span
                          className={`limitPointTitle ${
                            sumOfBet <= POINT ? "" : "Limited"
                          }`}
                        >
                          {sumOfBet}P
                        </span>
                      </div>
                      <input
                        className="VotePointInput"
                        type="number"
                        min="0"
                        max={POINT}
                        id="gameInput"
                        /* isVoted가 false 일 땐 disabled (입력불가) */
                        disabled={isVoted == false ? false : true}
                        placeholder="배팅할 포인트를 입력하세요!"
                        onChange={(e) => {
                          setInputC(e.target.value);
                          console.log(inputC);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="VoteBettingButtonContainer">
                  <div
                    className="VoteBettingButton"
                    onClick={() => {
                      handleSubmit();
                    }}
                  >
                    배팅하기
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </PC>

      <Mobile>
        <div className="MobileVotePage">
          <MobileVotePoint Point={POINT} />
          <form className="MobileVoteForm" onSubmit={handleSubmit}>
            {/*
              <VotePoint Point={votePoint} />
            */}

            <div className="MobileVoteBoxwithButtonContainer">
              <div>
                <div className="MobileVotewithInputContainer">
                  <VoteContainer event="SOCCER">
                    {/*투표 박스*/}
                    <VoteBox
                      round="결승"
                      teamName={soccerTeam}
                      inputValue={inputA}
                      onChange={setInputA}
                      currentPointSet={setPOINT}
                      Point={POINT}
                      Multiple={6}
                      select={selectA}
                      setSelect={setSelectA}
                      selectedState={selectedStateA}
                      setSelectedState={setSelectedStateA}
                      isVoted={isVoted}
                    />

                    {isResult &&
                      isVoted &&
                      (resultA === selectA ? (
                        <div className="MobileVoteResultImgContainer">
                          <img className="MobileVoteResultImg" src={SUCCESS} />
                        </div>
                      ) : (
                        <div className="MobileVoteResultImgContainer">
                          <img className="MobileVoteResultImg" src={FAIL} />
                        </div>
                      ))}
                  </VoteContainer>
                  <div className="VoteInfoContainer">
                    <div
                      className={`VoteLimitPointTitle ${
                        sumOfBet <= POINT ? "" : "Limited"
                      }`}
                    >
                      {sumOfBet <= POINT
                        ? "현재 배팅한 포인트 "
                        : "수치 초과! "}

                      <span
                        className={`limitPointTitle ${
                          sumOfBet <= POINT ? "" : "Limited"
                        }`}
                      >
                        {sumOfBet}P
                      </span>
                    </div>
                    <input
                      className="VotePointInput"
                      type="number"
                      min="0"
                      max={POINT}
                      id="gameInput"
                      /* isVoted가 false 일 땐 disabled (입력불가) */
                      disabled={isVoted == false ? false : true}
                      placeholder="배팅할 포인트를 입력하세요!"
                      onChange={(e) => {
                        setInputA(e.target.value);
                        console.log(inputA);
                      }}
                    />
                  </div>
                </div>

                <div className="MobileVotewithInputContainer">
                  <VoteContainer event="BASEBALL">
                    <VoteBox
                      round="결승"
                      teamName={baseballTeam}
                      inputValue={inputB}
                      onChange={setInputB}
                      currentPointSet={setPOINT}
                      Point={POINT}
                      Multiple={6}
                      select={selectB}
                      setSelect={setSelectB}
                      selectedState={selectedStateB}
                      setSelectedState={setSelectedStateB}
                      isVoted={isVoted}
                    />

                    {isResult &&
                      isVoted &&
                      (resultB === selectB ? (
                        <div className="MobileVoteResultImgContainer">
                          <img className="MobileVoteResultImg" src={SUCCESS} />
                        </div>
                      ) : (
                        <div className="MobileVoteResultImgContainer">
                          <img className="MobileVoteResultImg" src={FAIL} />
                        </div>
                      ))}
                  </VoteContainer>
                  <div className="VoteInfoContainer">
                    <div
                      className={`VoteLimitPointTitle ${
                        sumOfBet <= POINT ? "" : "Limited"
                      }`}
                    >
                      {sumOfBet <= POINT
                        ? "현재 배팅한 포인트 "
                        : "수치 초과! "}

                      <span
                        className={`limitPointTitle ${
                          sumOfBet <= POINT ? "" : "Limited"
                        }`}
                      >
                        {sumOfBet}P
                      </span>
                    </div>
                    <input
                      className="VotePointInput"
                      type="number"
                      min="0"
                      max={POINT}
                      id="gameInput"
                      /* isVoted가 false 일 땐 disabled (입력불가) */
                      disabled={isVoted == false ? false : true}
                      placeholder="배팅할 포인트를 입력하세요!"
                      onChange={(e) => {
                        setInputB(e.target.value);
                        console.log(inputB);
                      }}
                    />
                  </div>
                </div>

                <div className="MobileVotewithInputContainer">
                  <VoteContainer event="VOLLEYBALL">
                    <VoteBox
                      round="결승"
                      teamName={volleyballTeam}
                      inputValue={inputC}
                      onChange={setInputC}
                      currentPointSet={setPOINT}
                      Point={POINT}
                      Multiple={6}
                      select={selectC}
                      setSelect={setSelectC}
                      selectedState={selectedStateC}
                      setSelectedState={setSelectedStateC}
                      isVoted={isVoted}
                    />

                    {isResult &&
                      isVoted &&
                      (resultC === selectC ? (
                        <div className="MobileVoteResultImgContainer">
                          <img className="MobileVoteResultImg" src={SUCCESS} />
                        </div>
                      ) : (
                        <div className="MobileVoteResultImgContainer">
                          <img className="MobileVoteResultImg" src={FAIL} />
                        </div>
                      ))}
                  </VoteContainer>
                  <div className="VoteInfoContainer">
                    <div
                      className={`VoteLimitPointTitle ${
                        sumOfBet <= POINT ? "" : "Limited"
                      }`}
                    >
                      {sumOfBet <= POINT
                        ? "현재 배팅한 포인트 "
                        : "수치 초과! "}

                      <span
                        className={`limitPointTitle ${
                          sumOfBet <= POINT ? "" : "Limited"
                        }`}
                      >
                        {sumOfBet}P
                      </span>
                    </div>
                    <input
                      className="VotePointInput"
                      type="number"
                      min="0"
                      max={POINT}
                      id="gameInput"
                      /* isVoted가 false 일 땐 disabled (입력불가) */
                      disabled={isVoted == false ? false : true}
                      placeholder="배팅할 포인트를 입력하세요!"
                      onChange={(e) => {
                        setInputC(e.target.value);
                        console.log(inputC);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="VoteBettingButtonContainer">
                <div
                  className="VoteBettingButton"
                  onClick={() => {
                    handleSubmit();
                  }}
                >
                  배팅하기
                </div>
              </div>
            </div>
          </form>
        </div>
        <NavBar />
      </Mobile>
    </>
  );
}

export default VotePage;
