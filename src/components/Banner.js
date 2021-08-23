import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "../css/banner.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation, EffectFade } from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);

const Banner = () => {
  return (
    <div className="banner">
      <Swiper
        effect={"fade"}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        classNameName="mySwiper"
      >
      <SwiperSlide>
        <img className="swiper-slide-image" src="banner1.png" alt="banner" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="swiper-slide-image" src="banner2.PNG" alt="banner" />
      </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Banner;
