import SideBar from "../../Components/SideBar";
import { Mobile, PC } from "../../Components/reactResponsive";
import { useEffect, useState } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import "./PCMiniGame.css";

import Coin_Front from "../../img/coin_front.png";
import Coin_Back from "../../img/coin_back.png";

import CoinBackGround from "../../img/coinBackground_Img.png";
import MobileCoinBackGround from "../../img/mobileCoinBackground_Img.png";
import userEvent from "@testing-library/user-event";
import NavBar from "../../Components/NavBar";

function PCMiniGame({ POINT, setPOINT, USERNAME }) {
  const [CoinAnimation, setCoinAnimation] = useState("");
  const [isCoinModal, setIsCoinModal] = useState(false);

  const [tossChance, setTossChance] = useState(3);
  const [coinState, setCoinState] = useState("");

  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState(null);

  const [isVoted, setIsVoted] = useState(false);
  // const [votePoint, setVotePoint] = useState(1000); // 임시
  const [input, setInput] = useState(0);

  //const [result, setResult] = useState();

  const [isTossed, setIsTossed] = useState(false);
  const radios = [
    { name: "앞면", value: "1" },
    { name: "뒷면", value: "2" },
  ];

  const [checkPoint, setCheckPoint] = useState(0);
  const [allLost, setAllLost] = useState(false);

  const [isTitle, setIsTitle] = useState(false);

  function CorrectCoin() {
    setPOINT(POINT + input * 2);
  }

  function FailedCoin() {
    if (radioValue != coinState) {
      setPOINT(POINT - input * 2);
    } else {
      CorrectCoin();
    }
  }

  function handleClick() {
    const result = Math.random() < 0.5 ? "1" : "2";
    console.log("result=" + result);
    return result;
  }

  function CoinShot() {
    let timer = setTimeout(() => {
      setCoinAnimation("end");
    }, 100);
    setCoinAnimation("");
  }

  useEffect(() => {
    let timer = setTimeout(() => {
      setIsTitle(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [isTitle]);

  return (
    <>
      <div>
        <PC>
          <SideBar Point={POINT} userName={USERNAME} />

          <div className="MiniGameContainer">
            <div className={`MinigameCoinContainer`}>
              <img className="MinigameCoinBackGround" src={CoinBackGround} />
              {tossChance < 3 && isCoinModal ? (
                <div className={`MinigameCoinBox start ${CoinAnimation}`}>
                  {coinState == "1" ? (
                    <img className="MinigameCoinImg " src={Coin_Front} />
                  ) : (
                    <img className="MinigameCoinImg" src={Coin_Back} />
                  )}
                  {isTitle ? (
                    <div className="MinigameResultTitle">
                      {isVoted ? (
                        coinState == radioValue ? (
                          <p>성공!!</p>
                        ) : (
                          <p>실패</p>
                        )
                      ) : null}
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>
            <div className="MinigameInputContainer">
              <div className="MinigameOportunityTitle">
                남은 횟수 : {tossChance}
              </div>
              <ButtonGroup className="MinigameButtonContainer">
                {radios.map((radio, idx) => (
                  <ToggleButton
                    className="MinigameButton"
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant={idx % 2 ? "outline-success" : "outline-danger"}
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => {
                      setRadioValue(e.currentTarget.value);
                      console.log(e.currentTarget.value);
                      setChecked(true);
                    }}
                  >
                    {radio.name}
                  </ToggleButton>
                ))}
              </ButtonGroup>
              <form>
                <input
                  type="number"
                  min="0"
                  max={POINT / 2}
                  disabled={isVoted == false ? false : true}
                  placeholder="배팅할 포인트를 입력하세요!"
                  onChange={(e) => {
                    setInput(e.target.value);
                    console.log(input);
                    if (e.target.value == POINT / 2) {
                      setAllLost(true);
                    } else {
                      setAllLost(false);
                    }

                    console.log("asasdasdadas:" + radioValue);
                    console.log("dsadasd:" + coinState);
                  }}
                  className="MinigamePointInput"
                />
              </form>
              {checked ? (
                <div>
                  {tossChance ? (
                    <p
                      onClick={() => {
                        if (input <= POINT / 2 && input > 0 && input != null) {
                          setIsCoinModal(true);
                          CoinShot();
                          setIsTitle(true);
                          const tmpCoin = handleClick();
                          setTossChance(tossChance - 1);
                          setIsTossed(true);
                          setIsVoted(true);
                          setCoinState(tmpCoin);
                          // 비교 후 승패 히히...

                          if (radioValue == tmpCoin) {
                            CorrectCoin();
                            console.log("맞음");
                          } else {
                            FailedCoin();
                            console.log("틀림");
                          }

                          console.log(POINT);
                          setCheckPoint(input);

                          setInput(0);
                          console.log(Number(checkPoint) * 2);

                          console.log("radioValue : " + radioValue);
                          console.log("coinState : " + tmpCoin);
                          console.log(" ");
                        } else if (input > POINT / 2) {
                          alert(
                            "최대 배팅 가능 포인트는 보유 포인트의 절반입니다!"
                          );
                        } else if (
                          input <= 0 ||
                          input == null ||
                          input == undefined
                        ) {
                          alert("포인트를 다시 배팅해 주십시오.");
                        }
                      }}
                      className="MinigameBettingButton"
                    >
                      코인 던지기
                    </p>
                  ) : (
                    <p>기회를 모두 소진했습니다!</p>
                  )}
                </div>
              ) : null}

              <div>
                {/*allLost ? (
                  <p>예측 실패 시 모든 포인트를 잃게 됩니다!!</p>
                ) : null*/}
              </div>
              {isVoted ? (
                <div
                  onClick={() => {
                    setCoinState("");
                    setInput(0);
                    setIsTossed(false);
                    setRadioValue(null);
                    setIsVoted(false);
                    setChecked(false);
                    setIsCoinModal(false);
                  }}
                  className="MinigameOkButton"
                >
                  확인
                </div>
              ) : null}
            </div>
          </div>
        </PC>
        <Mobile>
          <div className="MobileMiniGameContainer">
            <div className={`MinigameCoinContainer`}>
              <img
                className="MobileMinigameCoinBackGround"
                src={MobileCoinBackGround}
              />
              {tossChance < 3 && isCoinModal ? (
                <div className={`MinigameCoinBox start ${CoinAnimation}`}>
                  {coinState == "1" ? (
                    <img className="MobileMinigameCoinImg " src={Coin_Front} />
                  ) : (
                    <img className="MobileMinigameCoinImg" src={Coin_Back} />
                  )}
                  {isTitle ? (
                    <div className="MobileMinigameResultTitle">
                      {isVoted ? (
                        coinState == radioValue ? (
                          <p>성공!!</p>
                        ) : (
                          <p>실패</p>
                        )
                      ) : null}
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>
            <div className="MobileMinigameInputContainer">
              <div className="MinigameOportunityTitle">
                남은 횟수 : {tossChance}
              </div>
              <ButtonGroup className="MinigameButtonContainer">
                {radios.map((radio, idx) => (
                  <ToggleButton
                    className="MinigameButton"
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    variant={idx % 2 ? "outline-success" : "outline-danger"}
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => {
                      setRadioValue(e.currentTarget.value);
                      console.log(e.currentTarget.value);
                      setChecked(true);
                    }}
                  >
                    {radio.name}
                  </ToggleButton>
                ))}
              </ButtonGroup>
              <form>
                <input
                  type="number"
                  min="0"
                  max={POINT / 2}
                  disabled={isVoted == false ? false : true}
                  placeholder="배팅할 포인트를 입력하세요!"
                  onChange={(e) => {
                    setInput(e.target.value);
                    console.log(input);
                    if (e.target.value == POINT / 2) {
                      setAllLost(true);
                    } else {
                      setAllLost(false);
                    }

                    console.log("asasdasdadas:" + radioValue);
                    console.log("dsadasd:" + coinState);
                  }}
                  className="MinigamePointInput"
                />
              </form>
              {checked ? (
                <div>
                  {tossChance ? (
                    <p
                      onClick={() => {
                        if (input <= POINT / 2 && input > 0 && input != null) {
                          setIsCoinModal(true);
                          CoinShot();
                          setIsTitle(true);
                          const tmpCoin = handleClick();
                          setTossChance(tossChance - 1);
                          setIsTossed(true);
                          setIsVoted(true);
                          setCoinState(tmpCoin);
                          // 비교 후 승패 히히...

                          if (radioValue == tmpCoin) {
                            CorrectCoin();
                            console.log("맞음");
                          } else {
                            FailedCoin();
                            console.log("틀림");
                          }

                          console.log(POINT);
                          setCheckPoint(input);

                          setInput(0);
                          console.log(Number(checkPoint) * 2);

                          console.log("radioValue : " + radioValue);
                          console.log("coinState : " + tmpCoin);
                          console.log(" ");
                        } else if (input > POINT / 2) {
                          alert(
                            "최대 배팅 가능 포인트는 보유 포인트의 절반입니다!"
                          );
                        } else if (
                          input <= 0 ||
                          input == null ||
                          input == undefined
                        ) {
                          alert("포인트를 다시 배팅해 주십시오.");
                        }
                      }}
                      className="MinigameBettingButton"
                    >
                      코인 던지기
                    </p>
                  ) : (
                    <p>기회를 모두 소진했습니다!</p>
                  )}
                </div>
              ) : null}

              <div>
                {/*allLost ? (
        <p>예측 실패 시 모든 포인트를 잃게 됩니다!!</p>
      ) : null*/}
              </div>
              {isVoted ? (
                <div
                  onClick={() => {
                    setCoinState("");
                    setInput(0);
                    setIsTossed(false);
                    setRadioValue(null);
                    setIsVoted(false);
                    setChecked(false);
                    setIsCoinModal(false);
                  }}
                  className="MinigameOkButton"
                >
                  확인
                </div>
              ) : null}
            </div>
          </div>
          <NavBar Point={POINT} userName={USERNAME} />
        </Mobile>
      </div>
    </>
  );
}

export default PCMiniGame;
