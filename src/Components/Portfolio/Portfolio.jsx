import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Sidebar from "../../img/1.png";
import Ecommerce from "../../img/2.png";
import HOC from "../../img/3.png";
import MusicApp from "../../img/4.png";
import Music5 from "../../img/5.png";
import 'swiper/css';
import { themeContext } from '../../Context';
import { useContext} from "react";


const Portfolio = () => {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
   <div className="porfolio" id='Portfolio'>

        <span style={{color: darkMode? 'white': ''}}>Recent Projects</span>
        <span>Portfolio</span>

        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='porfolio-slider'
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

export default Portfolio;