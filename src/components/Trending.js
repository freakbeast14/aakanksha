import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "../css/carousel.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

export default function Trending() {
  return (
    <>
      <div className="trending-swiper-container">
        <div className="carousel-holder swiper4 trending-swiper">
          <div className="trending-matter-container">
            <div className="trending-matter">
              <div className="trending-heading">Trending on AAKANKSHA</div>
              <div className="trending-desc">Description</div>
              <div className="trending-link">
                <a href="/">Explore More</a>
              </div>
            </div>
          </div>
          <div className="main-container">
            <Swiper
              slidesPerView={window.innerWidth < 768 ? 2 : 3}
              spaceBetween={20}
              slidesPerGroup={1}
              loop={true}
              loopFillGroupWithBlank={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="https://wpshopmart.com/wp-content/uploads/2016/12/Beautiful-Wallpaper-of-Nature.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://wpshopmart.com/wp-content/uploads/2016/12/Desktop-Nature-Wallpaper.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://wpshopmart.com/wp-content/uploads/2016/12/beach-sea-photography.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://wpshopmart.com/wp-content/uploads/2016/12/beautiful-sunrise.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://wpshopmart.com/wp-content/uploads/2016/12/flower-wallpaper-hd-purple-wallpaper.jpg" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
