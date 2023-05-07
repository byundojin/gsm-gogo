import "./MobileRank.css";

import Gold from "../img/Goldmedal_Img.png";
import Silver from "../img/Silvermedal_Img.png";
import Bronze from "../img/Bronzemedal_Img.png";

function MobileRank(props) {
  return (
    <div>
      {props.pointSort.map((a, i) => {
        return (
          <div key={i} className="RankContainer">
            {i + 1 > 3 ? (
              <span className="RankNumberTitle">{i + 1}</span>
            ) : (
              <img
                className="RankMedalImg"
                src={i + 1 == 1 ? Gold : i + 1 == 2 ? Silver : Bronze}
              />
            )}
            <div className="MobileRankBox">
              <p className="RankText MobileRankTitle">
                {props.pointSort[i].name}
              </p>
              <p className="RankText MobileRankPoint">
                {props.pointSort[i].point}P
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MobileRank;
