import React from 'react';
import './feedback.css';
import AVTR1 from '../../assets/AVTR1.jpg';
import AVTR2 from '../../assets/AVTR2.jpg';
import AVTR3 from '../../assets/AVTR3.jpg';
import AVTR4 from '../../assets/AVTR4.jpg';
import AVTR5 from '../../assets/AVTR5.jpg';
import AVTR6 from '../../assets/AVTR6.jpg';
// Import Swiper React components
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Lena De Geer',
    designation: 'IT Regional Head',
    review: 'TBA',
  },
  {
    avatar: AVTR2,
    name: 'Robert Mitchell',
    designation: 'Managing Director',
    review: 'TBA',
  },
  {
    avatar: AVTR3,
    name: 'Celeen David',
    designation: 'Project Manager',
    review:
      'Fred is a great team player. He is multidisciplinary professional. He creates everything with passion backed up with research!',
  },
  {
    avatar: AVTR4,
    name: 'Ivan Papic',
    designation: 'Senior Software Developer',
    review: 'TBA',
  },
  {
    avatar: AVTR5,
    name: 'Kim Bienes',
    designation: 'Project Manager',
    review: 'TBA',
  },
  {
    avatar: AVTR6,
    name: 'Bharat Shankar',
    designation: 'Digital Project Lead',
    review: 'TBA',
  },
];

const Feedback = () => {
  return (
    <section id="feedback">
      <h5>Working with me</h5>
      <h2>Feedbacks</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review, designation }, index) => {
          return (
            <SwiperSlide className="testimonial" key={index}>
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small>{designation}</small>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Feedback;
