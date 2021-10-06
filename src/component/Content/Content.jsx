import PropTypes from 'prop-types';
import React from 'react';

const Content = ({ data }) => (

  data.map((item) => (
    <div className="card mb-3" style={{ width: '800px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={item.About.image} className="img-fluid rounded-start" alt="photos" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">
              {item.About.name}
              &nbsp;
              {item.About.family}
            </h5>
            <p className="card-text">{item.About.description}</p>
            <p className="card-text"><small className="text-muted">{item.About.email}</small></p>
            <p className="card-text"><small className="text-muted">{item.About.phone}</small></p>
          </div>
        </div>
      </div>
    </div>
  ))
);
Content.protoTypes = {
  data: PropTypes.any,
};
export default Content;
