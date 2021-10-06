/*  eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import PROJECT_URL from '../../configs/general.js';

const SlideShow = () => {
  const fadeImages = [
    '/assets/images/1.jpg',
    '/assets/images/2.jpg',
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {fadeImages.map((item) => (
        <div className="m-0  d-flex w-auto justify-content-center">
          <img src={`${PROJECT_URL.PROJECT_URL}${item}`} alt="slide1" />
        </div>
      ))}
    </Slider>
  );
};
export default SlideShow;
/*
import React from 'react';
import { Fade } from 'react-slideshow-image';

import './SlideShow.css';

const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: false,
  indicators: true,
};
const SlideShow = () => (
  <Fade {...fadeProperties}>
    <div className="each-fade">
      <div className="image-container">

      </div>
      <h2>First Slide</h2>
    </div>
    <div className="each-fade">
      <div className="image-container">
        <img src={`${PROJECT_URL.PROJECT_URL}${fadeImages[0]}`} alt="slide2" />
      </div>
      <h2>Second Slide</h2>
    </div>
    <div className="each-fade">
      <div className="image-container">
        <img src={`${PROJECT_URL.PROJECT_URL}${fadeImages[0]}`} alt="slide3" />
      </div>
      <h2>Third Slide</h2>
    </div>
  </Fade>
);
export default SlideShow;
 */
