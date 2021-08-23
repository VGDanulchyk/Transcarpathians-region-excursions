import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import './AutoSwiper.scss';

import logo from '../../img/logo.png';

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core';
import styles from '../Logo/Logo.module.scss';

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
            src="https://images.unsplash.com/photo-1469212044023-0e55b4b9745a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80"
            alt="logo"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            // className={styles.logo}
            src="https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80"
            alt="logo"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            // className={styles.logo}
            src="https://images.unsplash.com/photo-1586600822178-26dec0f653a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80"
            alt="logo"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
