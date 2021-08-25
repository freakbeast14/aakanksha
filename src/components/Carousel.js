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
import FadeInSection from "./FadeInSection";

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Autoplay]);

export default function Carousel() {
  return (
    <>
    <FadeInSection >
      <div className="explore-div"><div className="explore-title">Explore Our products</div><div className="explore-para">Lorem ipsum dolor sit amet</div></div>
      <div className="carousel-holder swiper1 swiper2">
        <div className="main-container">
          <Swiper
            slidesPerView={window.innerWidth <= 768 ? (window.innerWidth <= 576 ? 1 : 2) : 3}
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
              <img src="https://previews.123rf.com/images/vankad/vankad1506/vankad150600029/41796677-delicious-burgers-with-fried-potato-balls-and-beer-on-a-rustic-table.jpg" />
              <div className="swiper1-content">
                <div className="swiper1-slide-header">
                  <span className="swiper1-item-heading">Hand Sandwich</span>
                  <span className="swiper1-item-rate">$10.25</span>
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
                  <span className="swiper1-item-rate">$10.25</span>
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
                  <span className="swiper1-item-rate">$10.25</span>
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
                  <span className="swiper1-item-rate">$10.25</span>
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
                  <span className="swiper1-item-rate">$10.25</span>
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
      <div className="carousel-holder swiper1 swiper3">
        <div className="main-container">
          <Swiper
            slidesPerView={window.innerWidth <= 768 ? (window.innerWidth <= 576 ? 1 : 2) : 3}
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
              <img src="https://previews.123rf.com/images/vankad/vankad1506/vankad150600029/41796677-delicious-burgers-with-fried-potato-balls-and-beer-on-a-rustic-table.jpg" />
              <div className="swiper1-content">
                <div className="swiper1-slide-header">
                  <span className="swiper1-item-heading">Hand Sandwich</span>
                  <span className="swiper1-item-rate">$10.25</span>
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
                  <span className="swiper1-item-rate">$10.25</span>
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
                  <span className="swiper1-item-rate">$10.25</span>
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
                  <span className="swiper1-item-rate">$10.25</span>
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
                  <span className="swiper1-item-rate">$10.25</span>
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
      </FadeInSection>
      <FadeInSection>
      <div className="tips-and-tricks">Tips & Tricks</div>
      <div className="carousel-holder swiper4">
        <div className="main-container">
          <Swiper
            slidesPerView={window.innerWidth <= 768 ? (window.innerWidth <= 576 ? 1 : 2) : 3}
            spaceBetween={35}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            speed={3000}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="https://wpshopmart.com/wp-content/uploads/2016/12/Beautiful-Wallpaper-of-Nature.jpg" />
              <p className="slide-heading">Lorem ipsum dolor sit.</p>
              <p className="slide-date">11 Jan 2021</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://wpshopmart.com/wp-content/uploads/2016/12/Desktop-Nature-Wallpaper.jpg" />
              <p className="slide-heading">Lorem ipsum dolor sit.</p>
              <p className="slide-date">11 Jan 2021</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://wpshopmart.com/wp-content/uploads/2016/12/beach-sea-photography.jpg" />
              <p className="slide-heading">Lorem ipsum dolor sit.</p>
              <p className="slide-date">11 Jan 2021</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://wpshopmart.com/wp-content/uploads/2016/12/beautiful-sunrise.jpg" />
              <p className="slide-heading">Lorem ipsum dolor sit.</p>
              <p className="slide-date">11 Jan 2021</p>
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://wpshopmart.com/wp-content/uploads/2016/12/flower-wallpaper-hd-purple-wallpaper.jpg" />
              <p className="slide-heading">Lorem ipsum dolor sit.</p>
              <p className="slide-date">11 Jan 2021</p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      </FadeInSection>
    </>
  );
}
