import Gold from "../img/Goldmedal_Img.png";
import Silver from "../img/Silvermedal_Img.png";
import Bronze from "../img/Bronzemedal_Img.png";

import "./TopRank.css";
import { Mobile, PC } from "./reactResponsive";

function TopRank(props) {
  return (
    <>
      <PC>
        <div className="TopRankContainer">
          <div className="top"></div>
          <div>
            <img
              className="PCMedalImg"
              src={props.rank == 1 ? Gold : props.rank == 2 ? Silver : Bronze}
            />
          </div>
          <p className="PCTopRankTitle">{props.name}</p>
          <p className="PCTopRankPoint">{props.point}P</p>
        </div>
      </PC>

      <Mobile>
        <div className="TopRankContainer">
          <div className="top"></div>
          <div>
            <img
              className="MobileMedalImg"
              src={props.rank == 1 ? Gold : props.rank == 2 ? Silver : Bronze}
            />
          </div>
          <p className="MobileTopRankTitle">{props.name}</p>
          <p className="MobileTopRankPoint">{props.point}P</p>
        </div>
      </Mobile>
    </>
  );
}

export default TopRank;
