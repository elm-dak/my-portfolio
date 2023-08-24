import React from 'react'
import './Certif.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Sidebar from "../../img/c1.png";
import Ecommerce from "../../img/c2.png";
import HOC from "../../img/c3.png";
import MusicApp from "../../img/c4.png";
import Music5 from "../../img/c5.png";
import 'swiper/css';
import { themeContext } from '../../Context';
import { useContext} from "react";


const Certif = () => {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
   <div className="certif" id='certif'>

        <span style={{color: darkMode? 'white': ''}}>My Certificates</span>
        <span>Certifcate</span>

        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='certif-slider'
        >
            <SwiperSlide>
                <img src={Sidebar} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Ecommerce} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={MusicApp} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Music5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={HOC} alt="" />
            </SwiperSlide>

        </Swiper>
   </div>
  )
}

export default Certif