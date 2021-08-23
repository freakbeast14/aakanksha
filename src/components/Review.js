import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-flip/effect-flip.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "../css/carousel.css";
import "../css/review.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Autoplay, EffectFlip } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay, EffectFlip]);

const Review = () => {
  return (
    <>
      <div className="explore-div">
        <div className="explore-title" style={{ paddingTop: 70 }}>What do our customers say?</div>
      </div>
      <div className="carousel-holder swiper1 swiper5">
        <div className="main-container">
          <Swiper
            effect={"flip"}
            slidesPerView={1}
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
              <img src="https://business.twitter.com/content/dam/business-twitter/insights/customer-service-tips.jpg.twimg.1920.jpg" />
              <div className="swiper5-content">
                <div className="swiper5-slide-header">
                  <div className="swiper5-city">Los Angeles</div>
                  <div className="swiper5-company">MillsWorth Travel Company</div>
                </div>
                <div className="swiper5-slide-detail">
                  <div className="swiper5-para">
                  “Over the years, The Agency Creative have worked with us on everything from brand design, video, photography, copy, online and print. Projects are always approached with enthusiasm, care and a focus to deliver on-time and within the agreed budget.”
                  </div>
                  <div className="swiper5-name">~&nbsp;Keity Adren</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.callcentrehelper.com/images/stories/2020/10/happy-customer-on-phone-760.jpg" />
              <div className="swiper5-content">
                <div className="swiper5-slide-header">
                  <div className="swiper5-city">Illinois</div>
                  <div className="swiper5-company">Sabre Tech Company</div>
                </div>
                <div className="swiper5-slide-detail">
                  <div className="swiper5-para">
                  “Over the years, The Agency Creative have worked with us on everything from brand design, video, photography, copy, online and print.”
                  </div>
                  <div className="swiper5-name">~&nbsp;Samuel Jackson</div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://www.bluleadz.com/hubfs/customer-happiness.png" />
              <div className="swiper5-content">
                <div className="swiper5-slide-header">
                  <div className="swiper5-city">California</div>
                  <div className="swiper5-company">Archer Sports Company</div>
                </div>
                <div className="swiper5-slide-detail">
                  <div className="swiper5-para">
                  “Over the years, The Agency Creative have worked with us on everything from brand design, video, photography, copy, online and print. Over the years, The Agency Creative have worked with us on everything from brand design, video, photography, copy, online and print.”
                  </div>
                  <div className="swiper5-name">~&nbsp;Kate Blanchett</div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Review;
