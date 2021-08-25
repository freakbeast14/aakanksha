import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

import "../css/furniture.css";

// import Swiper core and required modules
import SwiperCore, {
  EffectFade,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/core";

// install Swiper modules
SwiperCore.use([EffectFade, Navigation, Pagination, Autoplay]);

const Furniture = () => {
  return (
    <div className="furniture-holder">
      <div className="furniture-container">
        <div className="furniture-div">
          <div className="furniture-detail">
            <div className="furniture-detail-container fmr">
              <div className="furniture-heading">FURNITURE FOR EVERY ROOM!</div>
              <div className="furniture-para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets .
              </div>
              <div className="furniture-link">
                <a href="#">Learn more</a>
              </div>
            </div>
          </div>
          <div className="furniture-image">
            {/* <img
              src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="f-image"
            /> */}
            <Swiper
              spaceBetween={30}
              effect={"fade"}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              speed={2000}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/amazon-rivet-furniture-1533048038.jpg?crop=1.00xw:0.502xh;0,0.423xh&resize=1200:*" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://media.istockphoto.com/photos/wooden-chairs-at-table-in-bright-open-space-interior-with-lamp-next-picture-id968086564?k=6&m=968086564&s=612x612&w=0&h=akcSZ4mvydFK9xnXi45PSo4mXizwMGxb7j3O_A1qTEU=" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://fastcdn.pro/FileGallery/sermehiranian.com/Posts/3360_SL%20CR.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="furniture-div">
          <div className="furniture-image">
            {/* <img
              src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="f-image"
            /> */}
            <Swiper
              // spaceBetween={30}
              effect={"fade"}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              speed={2000}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/amazon-rivet-furniture-1533048038.jpg?crop=1.00xw:0.502xh;0,0.423xh&resize=1200:*" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://media.istockphoto.com/photos/wooden-chairs-at-table-in-bright-open-space-interior-with-lamp-next-picture-id968086564?k=6&m=968086564&s=612x612&w=0&h=akcSZ4mvydFK9xnXi45PSo4mXizwMGxb7j3O_A1qTEU=" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://fastcdn.pro/FileGallery/sermehiranian.com/Posts/3360_SL%20CR.jpg" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="furniture-detail">
            <div className="furniture-detail-container fml">
              <div className="furniture-heading">FURNITURE FOR EVERY ROOM!</div>
              <div className="furniture-para">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets .
              </div>
              <div className="furniture-link">
                <a href="#">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Furniture;
