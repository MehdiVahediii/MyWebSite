import PropTypes from 'prop-types';
import React from 'react';

const Image = ({ srcs }) => (<img src={srcs} alt="pic" />);
Image.protoTypes = {
  srcs: PropTypes.any,
};
export default Image;
