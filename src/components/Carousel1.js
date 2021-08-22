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
            spaceBetween={35}
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
              <img src="https://lh3.googleusercontent.com/proxy/gJG31204hnTI-ppJM7Av3YfWBd4kzgvI1KRtRM-XA__wJ8DimPkfFwb5D2HIqyKy8_IpKpOZGZV26j86UwsPND7859g_YWBhZpRuQf9CDEDSUfBCyA" />
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
              <img src="https://assets.aboutkidshealth.ca/AKHAssets/fast_food_better_choices.jpg?renditionid=21" />
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
              <img src="https://annamodisha.com/wp-content/uploads/2020/09/Veg-Toast-Sandwich.jpg" />
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
              <img src="https://www.waitoafreerange.co.nz/media/1847/recipes_2400x180075.jpg?width=1200" />
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
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNrOO17HWIhCP9qg83g_TIiUGAD4477eeau5x6X0h2nODSZ0GdzF7ltQN4_0bSNM1sy_A&usqp=CAU" />
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
