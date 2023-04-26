import NavBar from "../../Components/NavBar.js";
import Rank from "../../Components/Rank.js";
import TopRank from "../../Components/TopRank.js";
import Data from "../../MOCK_DATA.json";

function RatingPage() {
  let pointSort = Data.sort(function (a, b) {
    return b.point - a.point;
  });

  return (
    <>
      <div>
        <h1>포인트 랭킹</h1>
        <h3>TOP3</h3>
        <TopRank rank={1} name={pointSort[0].name} point={pointSort[0].point} />
        <TopRank rank={2} name={pointSort[1].name} point={pointSort[1].point} />
        <TopRank rank={3} name={pointSort[2].name} point={pointSort[2].point} />

        <hr />
        <Rank pointSort={pointSort} />

        <NavBar />
      </div>
    </>
  );
}

export default RatingPage;
