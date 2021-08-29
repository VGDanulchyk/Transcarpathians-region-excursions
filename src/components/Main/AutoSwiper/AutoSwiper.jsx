import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import './AutoSwiper.scss';

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function AutoSwiper() {
  return (
    <>
      <Swiper
        spaceBetween={40}
        centeredSlides={true}
        autoplay={{
          delay: 2600,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            // className={styles.logo}
            src="https://destinations.com.ua/storage/images/Articles17/17November/Carpathian_Mountains_in_Ukraine/Cart_National_Nature_Park.jpg"
            alt="logo"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            // className={styles.logo}
            src="https://destinations.com.ua/storage/images/Articles17/17November/Carpathian_Mountains_in_Ukraine/Carp_National_Nature_Park.jpg"
            alt="logo"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            // className={styles.logo}
            src="https://destinations.com.ua/storage/images/Articles17/17November/Carpathian_Mountains_in_Ukraine/Kolochava.jpg"
            alt="logo"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
