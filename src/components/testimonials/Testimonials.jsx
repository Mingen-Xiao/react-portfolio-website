/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper as SwiperComponent , SwiperSlide } from 'swiper/react';
 
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "AAA",
    review:
      "Narendra Damodardas Modi is an Indian politician who has served as the 14th prime minister of India since May 2014. Modi was the chief minister of Gujarat",
  },
  {
    avatar: AVTR2,
    name: "BBB",
    review:
      "Narendra Damodardas Modi is an Indian politician who has served as the 14th prime minister of India since May 2014. Modi was the chief minister of Gujarat",
  },
  {
    avatar: AVTR3,
    name: "CCC",
    review:
      "Narendra Damodardas Modi is an Indian politician who has served as the 14th prime minister of India since May 2014. Modi was the chief minister of Gujarat",
  },
  {
    avatar: AVTR4,
    name: "DDD",
    review:
      "Narendra Damodardas Modi is an Indian politician who has served as the 14th prime minister of India since May 2014. Modi was the chief minister of Gujarat",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <SwiperComponent
        className="container testimonials__container"
        // Install Swiper Modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </SwiperComponent>
    </section>
  );
};

export default Testimonials;