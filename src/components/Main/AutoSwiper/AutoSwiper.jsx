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
            src="https://images.wallpaperscraft.ru/image/gory_sneg_zasnezhennyj_180213_2560x1080.jpg   "
            alt="logo"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            // className={styles.logo}
            src="https://images.wallpaperscraft.ru/image/gory_vershiny_ozero_170485_2560x1080.jpg"
            alt="logo"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            // className={styles.logo}
            src="https://images.wallpaperscraft.ru/image/gory_reka_sneg_zima_93245_2560x1080.jpg"
            alt="logo"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
