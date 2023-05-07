import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import LoginPage from "./Pages/LoginPage.js";
import SignupPage from "./Pages/SignupPage";
import MainPage from "./Pages/main/MainPage";
import VotePage from "./Pages/main/VotePage";
import RatingPage from "./Pages/main/RatingPage";
import SchedulePage from "./Pages/info/SchedulePage";
import EventPage from "./Pages/info/EventPage";
import FoodPage from "./Pages/info/FoodPage";
import PCMiniGame from "./Pages/minigame/PCMiniGame";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [POINT, setPOINT] = useState(30000);
  const [USERNAME, setUSERNAME] = useState("1112 신희성");

  // isResult 값이 true 라면 경기가 모두 끝나고 결과가 나왔다는 뜻!!
  // 0 / 1
  const [isResult, setIsResult] = useState(true);
  const [resultA] = useState(1);
  const [resultB] = useState(1);
  const [resultC] = useState(1);

  const [breakfast, setBreakfast] = useState(null);
  const [lunch, setLunch] = useState(null);

  useEffect(() => {
    let now = new Date();
    let todayDate = now.getDate();

    axios
      .get(`https://school-api.xyz/api/high/F100000120?date=${todayDate}`)
      .then((result) => {
        let copyB = [...result.data.menu[0].breakfast];
        setBreakfast(copyB);
        let copyL = [...result.data.menu[0].lunch];
        setLunch(copyL);
      })
      .catch(() => {
        console.log("데이터 불러오기를 실패했습니다.");
      });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<LoginPage />} /> {/*로그인 페이지*/}
            <Route path="signup" element={<SignupPage />} />{" "}
            {/*회원가입 페이지*/}
          </Route>
          <Route path="/main">
            <Route
              index
              element={
                <MainPage
                  POINT={POINT}
                  setPOINT={setPOINT}
                  USERNAME={USERNAME}
                  breakfast={breakfast}
                  lunch={lunch}
                />
              }
            />{" "}
            {/*메인화면 페이지*/}
            <Route
              path="vote"
              element={
                <VotePage
                  POINT={POINT}
                  setPOINT={setPOINT}
                  USERNAME={USERNAME}
                  isResult={isResult}
                  resultA={resultA}
                  resultB={resultB}
                  resultC={resultC}
                />
              }
            />{" "}
            {/*투표 페이지*/}
            <Route
              path="rating"
              element={
                <RatingPage
                  POINT={POINT}
                  setPOINT={setPOINT}
                  USERNAME={USERNAME}
                />
              }
            />{" "}
            {/*순위 페이지*/}
            <Route
              path="minigame"
              element={
                <PCMiniGame
                  POINT={POINT}
                  setPOINT={setPOINT}
                  USERNAME={USERNAME}
                />
              }
            />
          </Route>
          <Route path="/info">
            <Route path="food" element={<FoodPage />} /> {/*급식 페이지*/}
            <Route path="schedule" element={<SchedulePage />} />{" "}
            {/*일정 페이지*/}
            <Route path="event" element={<EventPage />} /> {/*이벤트 페이지*/}
          </Route>
          <Route path="*" element={<h4>404 존재하지 않는 경로 입니다.</h4>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
