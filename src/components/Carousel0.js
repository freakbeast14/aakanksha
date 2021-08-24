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

const Carousel0 = () => {
  return (
    <>
      <div className="carousel-holder swiper1 swiper0">
        <div className="main-container">
          <Swiper
            slidesPerView={
              window.innerWidth <= 768 ? (window.innerWidth <= 576 ? 2 : 3) : 4
            }
            spaceBetween={35}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              {/* <div className="img-gradient"> */}
                <img src="https://assets.aboutkidshealth.ca/AKHAssets/fast_food_better_choices.jpg?renditionid=21" />
                <div className="swiper0-matter">Food</div>
              {/* </div> */}
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://img.etimg.com/thumb/msid-83044683,width-1200,height-900,imgsize-869490,resizemode-8,quality-100/opinion/et-commentary/view-a-basic-pandemic-healthcare-model-should-be-expanded-to-other-healthcare-services.jpg" />
              <div className="swiper0-matter">Health Care</div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://s3.envato.com/files/135482222/Image%20Preview_Businesswoman%20Working%20On%20Laptop%20In%20Office.jpg" />
              <div className="swiper0-matter">Kaam Kaj</div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://assets-news.housing.com/news/wp-content/uploads/2020/09/15183141/Types-of-wood-used-for-making-furniture-in-India-FB-1200x700-compressed.jpg" />
              <div className="swiper0-matter">Kuch Bhi</div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Carousel0;
