import MobileRank from "../../Components/MobileRank.js";
import NavBar from "../../Components/NavBar.js";
import Rank from "../../Components/Rank.js";
import SideBar from "../../Components/SideBar.js";
import TopRank from "../../Components/TopRank.js";
import { Mobile, PC } from "../../Components/reactResponsive.js";
import Data from "../../MOCK_DATA.json";
import "./RatingPage.css";

import RatingLogoImg from "../../img/logo_img.png";

function RatingPage({ POINT, setPOINT, USERNAME }) {
  let pointSort = Data.sort(function (a, b) {
    return b.point - a.point;
  });
  return (
    <>
      <div>
        <PC>
          <SideBar currentPage={1} Point={POINT} userName={USERNAME} />
          <div className="TopLevel_RatingContainer">
            <div className="RatingContainer">
              <div className="RatingTopRankBox">
                <h2 className="RatingTitle">TOP3</h2>
                <div className="RatingTopRankUser">
                  {pointSort[0] && (
                    <TopRank
                      rank={1}
                      name={pointSort[0].name}
                      point={pointSort[0].point}
                    />
                  )}
                  {pointSort[1] && (
                    <TopRank
                      rank={2}
                      name={pointSort[1].name}
                      point={pointSort[1].point}
                    />
                  )}
                  {pointSort[2] && (
                    <TopRank
                      rank={3}
                      name={pointSort[2].name}
                      point={pointSort[2].point}
                    />
                  )}
                  <hr />
                </div>
              </div>
              <div className="RatingRankBox">
                <Rank pointSort={pointSort} />
              </div>
            </div>
          </div>
        </PC>
        <Mobile>
          <div>
            <div className="MobileRatingTitleContainer">
              <img src={RatingLogoImg} />
              <p className="MobileRatingTitle">포인트 랭킹</p>
              <p className="MobileRatingPoint">TOP 3</p>
            </div>
            <div className="MobileRatingTopRankUser">
              <div className="TopRankUserContainer">
                {pointSort[0] && (
                  <TopRank
                    rank={1}
                    name={pointSort[0].name}
                    point={pointSort[0].point}
                  />
                )}
              </div>
              <div className="TopRankUserContainer">
                {pointSort[1] && (
                  <TopRank
                    rank={2}
                    name={pointSort[1].name}
                    point={pointSort[1].point}
                  />
                )}
              </div>
              <div className="TopRankUserContainer">
                {pointSort[2] && (
                  <TopRank
                    rank={3}
                    name={pointSort[2].name}
                    point={pointSort[2].point}
                  />
                )}
              </div>
            </div>
            <hr />
            <div className="MobileRatingRankBox">
              <MobileRank pointSort={pointSort} />
            </div>
          </div>
          <NavBar />
        </Mobile>
      </div>
    </>
  );
}

export default RatingPage;
