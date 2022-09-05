/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore,{Autoplay} from 'swiper'
import { delay } from 'lodash';


function Swipper() {
    SwiperCore.use([Autoplay])
  return (
    <Swiper
    spaceBetween={10}
    
    slidesPerView={4}
    loop={true}
     autoplay={{
        delay:2000
     }

     }
  >
    <SwiperSlide><span><img src='https://s2.coinmarketcap.com/static/new-alerts/611522c732a47c001239468a/img/1647313709257_Webp.net-compress-image%20(4).jpg' className='rounded-md' alt='' /></span> </SwiperSlide>
   
    <SwiperSlide><span><img src='https://s2.coinmarketcap.com/static/new-alerts/6115224cb91ba00012e951d7/img/1661946020806_Meta%20280x136.png' className='rounded-md' alt=''/></span></SwiperSlide>
    <SwiperSlide><span><img src='https://s2.coinmarketcap.com/static/new-alerts/630f84537c6300001bd8c71b/img/1661961301321_280x136-1-min.png' className='rounded-md' alt=''/></span></SwiperSlide>
    <SwiperSlide><span><img src='https://s2.coinmarketcap.com/static/new-alerts/611522c732a47c001239468a/img/1647313709257_Webp.net-compress-image%20(4).jpg' className='rounded-md' alt='' /></span></SwiperSlide>
    <SwiperSlide><span><img src='https://s2.coinmarketcap.com/static/new-alerts/611521ecc3074e0013b0c4a9/img/1660103453949_280x136.jpg' className='rounded-md' alt=''/></span></SwiperSlide>
    <SwiperSlide><span><img src='https://s2.coinmarketcap.com/static/new-alerts/61152481ad8e1000124fc878/img/1639738636872_Free-API-Sponsorship-Program-(updated)-280x136.png' className='rounded-md' alt=''/></span></SwiperSlide>
    
  </Swiper>
  )
}

export default Swipper