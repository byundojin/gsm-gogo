import axios from "axios";
import "./PCMainFood.css";
import { useEffect, useState } from "react";

function PCMainFood({ breakfast, lunch }) {
  if (!breakfast && !lunch) {
    return (
      <>
        <div className="PCMainFoodContainer">
          <p className="PCFoodTitle">급식</p>
          <div className="PCMainFoodBox">
            <div className="FoodListMorning">
              <ol style={{ listStyle: "none" }} className="FoodListTextBox">
                {breakfast && <p className="PCFoodTitle">조식</p>}
                {breakfast &&
                  breakfast.map(function (a, i) {
                    return <li key={i}>{a}</li>;
                  })}
              </ol>
              <hr />
              <ol style={{ listStyle: "none" }} className="FoodListTextBox">
                {lunch && <p className="PCFoodTitle">점심</p>}
                {lunch &&
                  lunch.map(function (a, i) {
                    return <li key={i}>{a}</li>;
                  })}
              </ol>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="PCMainFoodContainer">
          <p className="PCFoodTitle">급식</p>
          <div className="PCMainNotFoodBox">
            <p className="PCNotFoodTitle">오늘은 급식이 없습니다!</p>
          </div>
        </div>
      </>
    );
  }
}

export default PCMainFood;
