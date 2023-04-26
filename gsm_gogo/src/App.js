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

function App() {
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
            <Route index element={<MainPage />} /> {/*메인화면 페이지*/}
            <Route path="vote" element={<VotePage />} /> {/*투표 페이지*/}
            <Route path="rating" element={<RatingPage />} /> {/*순위 페이지*/}
          </Route>

          <Route path="/info">
            <Route paht="food" element={<FoodPage />} /> {/*급식 페이지*/}
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
