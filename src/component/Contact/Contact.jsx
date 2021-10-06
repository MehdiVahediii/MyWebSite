/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import { validateEmail } from '../../utils/validation.js';
import Button from '../Button/Button';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [area, setArea] = useState('');
  const [error, setError] = useState({});
  const handelChangeInputName = (event) => {
    if (event.target.value) {
      setName(event.target.value);
      setError({
        ...error,
        name: null,
      });
    } else {
      setError({
        ...error,
        name: 'نام خالی است',
      });
    }
  };

  const handelChangeInputEmail = (event) => {
    if (event.target.value) {
      if (validateEmail(event.target.value)) {
        setEmail(event.target.value);
        setError({
          ...error,
          email: null,
        });
      } else {
        setError({
          ...error,
          email: 'ایمیل اشتباه است',
        });
      }
    } else {
      setError({
        email: null,
      });
    }
  };
  const handelChangeInputArea = (event) => (
    setArea(event.target.value)
  );
  const handelSubmit = () => {
    if (!(error.email) && !(error.name) && area) {
      alert(`${name} عزیز اطلاعات شما دریافت شد `);
      console.log('Data', `${name}\n${email}\n${area}`);
    } else {
      alert('لطفا فرم را صحیح پر کنید');
      console.log('Error', 'Error');
    }
  };
  return (
    <div className="col-6">
      <form className="form" onSubmit={handelSubmit}>
        <input className="form-control my-2" onChange={handelChangeInputName} type="text" placeholder="نام و نام خانوادگی" required />
        <div id="email" className="form-label my-2">
          ایمیل :
          {email}
        </div>
        <input className="form-control my-2" onChange={handelChangeInputEmail} type="text" placeholder="ایمیل" required />
        {error.email && <span className="bg-danger text-white p-1 my-2">{error.email}</span>}
        <textarea className="form-control my-2" onChange={handelChangeInputArea} placeholder="چیزی تایپ کنید" rows="5" />
        <div className="d-flex justify-content-center my-4">
          <Button>ارسال</Button>
        </div>
      </form>
    </div>

  );
};
export default Contact;
