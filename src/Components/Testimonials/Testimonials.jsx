import React from 'react'
import "./Testimonials.css"
import {Swiper, SwiperSlide} from 'swiper/react'
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css'
const Testimonials = () => {
    const clients = [
            {
                img: profilePic1,
                review:
                "Your work speaks volumes about your skills and dedication. It's evident that you've put your heart and soul into each project. Well done! ",

            },
            {
                img: profilePic2,
                review:
                "Your dedication and skill in handling every project single-handedly are truly remarkable. Thank you for sharing your incredible work. Wishing you all the best! . ",

            },
            {
                img: profilePic3,
                review:
                "That it's amazing work specialy when you work all projects youreslf. thanks i wish you luck . ",

            },
            {
                img: profilePic4,
                review:
                "Your work is truly remarkable! The way you've crafted each project showcases your dedication and talent. Thanks for sharing this amazing work, and best of luck with your future endeavors. ",

            },

        ]

  return (
    <div className="t-wrapper" id='Testimonials'>
        <div className="t-heading">
            <span>Clients alawys get </span>
            <span>Exeptional Work </span>
            <span>from me ...</span>
           <div className="blur t-blur1" style={{background : "var(--pruple)"}}></div>
        </div><div className="blur t-blur2" style={{background : "skyblue"}}></div>

        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable : true}}

        >
            {clients.map((client, index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                        <img src={client.img} alt="" />
                        <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                );
            })}

        </Swiper>
    </div>
  );
};

export default Testimonials