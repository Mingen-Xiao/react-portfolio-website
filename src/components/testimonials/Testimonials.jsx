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
    name: "Lucas Alan",
    review:
      "All the training you have done with Rico has been very helpful. You're giving him a great start to his internship. I have taken notice of your leadership skills and will keep this in mind for future projects",
  },
  {
    avatar: AVTR2,
    name: "William",
    review:
      "Hey Mingen, I noticed you've taken it upon yourself to organize team-building activities. You do a great job at this, and everyone has so much fun at your events. Please let me know if you need any help with any future events.",
  },
  {
    avatar: AVTR3,
    name: "MO",
    review:
      "Mingen, you did a fantastic job managing the conflict that came up during this morning’s meeting. Conflict is inevitable, especially when we’re on deadline and people are stressed, but you knew how to make both sides feel heard. If it wasn’t for your kind and quick response, I think we’d still be dealing with it.",
  },
  {
    avatar: AVTR4,
    name: "Cruz",
    review:
      "Mingen's work looks great! It's clear that you care about your work and take the time to do it correctly. I especially liked that you asked the client about their design preferences before creating their website, and I'm excited to see what you do next.",
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