import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import './AutoSwiper.css';

import logo from '../../img/logo.png';

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core';
import styles from '../Logo/Logo.module.css';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function AutoSwiper() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className={styles.logo} src={logo} alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.logo} src={logo} alt="logo" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.logo} src={logo} alt="logo" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
