import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "./MainSwipe.css";

import swipe01_Img from "../img/swipe01_Img.png";
import swipe02_Img from "../img/swipe02_Img.png";
import swipe03_Img from "../img/swipe03_Img.png";

SwiperCore.use([Navigation, Pagination, Autoplay]);

function MainSwipe() {
  return (
    <Swiper
      className="banner MainSwipeContainer"
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }} // 추가
    >
      <SwiperSlide className="swipeBackground">
        <img className="swipeImg" src={swipe01_Img} />
      </SwiperSlide>
      <SwiperSlide className="swipeBackground">
        <img className="swipeImg" src={swipe02_Img} />
      </SwiperSlide>
      <SwiperSlide className="swipeBackground">
        <img className="swipeImg" src={swipe03_Img} />
      </SwiperSlide>
    </Swiper>
  );
}

export default MainSwipe;
