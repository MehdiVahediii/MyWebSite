import PropTypes from 'prop-types';
import React from 'react';
import ItemResume from '../ItemResume/ItemResume';
import Slideshow from '../SlideShow/SlideShow';

const Resume = ({ data }) => (
  <div className="col-8">
    <Slideshow />
    {data.map((item) => (
      [
        <ItemResume data={item.Resume.Resume1} />,
        <ItemResume data={item.Resume.Resume2} />,
      ]
    ))}

  </div>
);
Resume.protoTypes = {
  data: PropTypes.any,
};
export default Resume;
