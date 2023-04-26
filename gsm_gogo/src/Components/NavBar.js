import "./NavBar.css";

import main_img from "./../img/main_img.png";
import vote_img from "./../img/vote_img.png";
import rating_img from "./../img/rating_img.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="NavBar">
        <Link to="/main/vote" className="Nav">
          <img src={vote_img} />
        </Link>
        <Link to="/main" className="Nav">
          <img src={main_img} />
        </Link>
        <Link to="/main/rating" className="Nav">
          <img src={rating_img} />
        </Link>
      </div>
    </>
  );
}

export default NavBar;
