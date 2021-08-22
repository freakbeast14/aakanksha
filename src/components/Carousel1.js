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

const Carousel1 = () => {
  return (
    <>
      <div className="explore-div">
        <div className="explore-title" style={{ paddingTop: 70 }}>
          Deals Of The Day!
        </div>
        <div className="explore-para">Lorem ipsum dolor sit amet</div>
      </div>
      <div className="carousel-holder swiper1">
        <div className="main-container">
          <Swiper
            slidesPerView={window.innerWidth <= 768 ? 1 : 3}
            spaceBetween={50}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            // autoplay={{
            //   delay: 1000,
            //   disableOnInteraction: false
            // }}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="https://wpshopmart.com/wp-content/uploads/2016/12/Beautiful-Wallpaper-of-Nature.jpg" />
              <div className="swiper1-content">
                <div className="swiper1-slide-header">
                  <span className="swiper1-item-heading">Hand Sandwich</span>
                  <span className="swiper1-item-rate-green">$10.25</span>
                </div>
                <div className="swiper1-slide-detail">
                  <p className="swiper1-item-detail">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://wpshopmart.com/wp-content/uploads/2016/12/Desktop-Nature-Wallpaper.jpg" />
              <div className="swiper1-content">
                <div className="swiper1-slide-header">
                  <span className="swiper1-item-heading">Hand Sandwich</span>
                  <span className="swiper1-item-rate-green">$10.25</span>
                </div>
                <div className="swiper1-slide-detail">
                  <p className="swiper1-item-detail">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://wpshopmart.com/wp-content/uploads/2016/12/beach-sea-photography.jpg" />
              <div className="swiper1-content">
                <div className="swiper1-slide-header">
                  <span className="swiper1-item-heading">Hand Sandwich</span>
                  <span className="swiper1-item-rate-green">$10.25</span>
                </div>
                <div className="swiper1-slide-detail">
                  <p className="swiper1-item-detail">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://wpshopmart.com/wp-content/uploads/2016/12/beautiful-sunrise.jpg" />
              <div className="swiper1-content">
                <div className="swiper1-slide-header">
                  <span className="swiper1-item-heading">Hand Sandwich</span>
                  <span className="swiper1-item-rate-green">$10.25</span>
                </div>
                <div className="swiper1-slide-detail">
                  <p className="swiper1-item-detail">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://wpshopmart.com/wp-content/uploads/2016/12/flower-wallpaper-hd-purple-wallpaper.jpg" />
              <div className="swiper1-content">
                <div className="swiper1-slide-header">
                  <span className="swiper1-item-heading">Hand Sandwich</span>
                  <span className="swiper1-item-rate-green">$10.25</span>
                </div>
                <div className="swiper1-slide-detail">
                  <p className="swiper1-item-detail">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Carousel1;
