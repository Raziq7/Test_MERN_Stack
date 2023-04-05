import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

import './Carousel.css'

// import required modules
import { Pagination } from 'swiper'

function Carousel() {
  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src='https://imgs.search.brave.com/ADK-48evjWSYd-mmb_7jx73bKHqxjNcmLu_0S4HMzrA/rs:fit:1200:641:1/g:ce/aHR0cHM6Ly93d3cu/amRtZWRpYS5jby56/YS9pbWFnZXMvY2Fy/b3VzZWwvRWNvbW1l/cmNlLUJhbm5lci0x/OTIwLmpwZw'/></SwiperSlide>
        <SwiperSlide><img src='https://imgs.search.brave.com/ADK-48evjWSYd-mmb_7jx73bKHqxjNcmLu_0S4HMzrA/rs:fit:1200:641:1/g:ce/aHR0cHM6Ly93d3cu/amRtZWRpYS5jby56/YS9pbWFnZXMvY2Fy/b3VzZWwvRWNvbW1l/cmNlLUJhbm5lci0x/OTIwLmpwZw'/></SwiperSlide>
        <SwiperSlide><img src='https://imgs.search.brave.com/ADK-48evjWSYd-mmb_7jx73bKHqxjNcmLu_0S4HMzrA/rs:fit:1200:641:1/g:ce/aHR0cHM6Ly93d3cu/amRtZWRpYS5jby56/YS9pbWFnZXMvY2Fy/b3VzZWwvRWNvbW1l/cmNlLUJhbm5lci0x/OTIwLmpwZw'/></SwiperSlide>
        <SwiperSlide><img src='https://imgs.search.brave.com/ADK-48evjWSYd-mmb_7jx73bKHqxjNcmLu_0S4HMzrA/rs:fit:1200:641:1/g:ce/aHR0cHM6Ly93d3cu/amRtZWRpYS5jby56/YS9pbWFnZXMvY2Fy/b3VzZWwvRWNvbW1l/cmNlLUJhbm5lci0x/OTIwLmpwZw'/></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carousel
