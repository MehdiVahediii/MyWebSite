import PropTypes from 'prop-types';
import React from 'react';

const ItemResume = ({ data }) => (
  <div className="card m-4">
    <div className="card-header">
      {data.title}
    </div>
    <div className="card-body">
      <blockquote className="blockquote mb-0">
        <p>{data.etc[1]}</p>
        <footer className="blockquote-footer">
          {data.etc[0]}
          <cite title="Source Title"> سال ساخت </cite>
        </footer>
      </blockquote>
    </div>
  </div>

);
ItemResume.protoTypes = {
  data: PropTypes.any,
};
export default ItemResume;
