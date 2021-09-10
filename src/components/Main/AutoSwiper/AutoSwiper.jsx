import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import photo1 from '../../../img/MainImg/MainSwiperImg/PhotoSwiper1.jpg';
import photo2 from '../../../img/MainImg/MainSwiperImg/PhotoSwiper2.jpg';
import photo3 from '../../../img/MainImg/MainSwiperImg/PhotoSwiper3.jpg';

import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import './AutoSwiper.css';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core';

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function AutoSwiper() {
  return (
    <>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 2600,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
      >
        <SwiperSlide>
          <img src={photo1} alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo2} alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo3} alt="logo" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
