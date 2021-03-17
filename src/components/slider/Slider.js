import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const Slider = ({ title, img, desc, gHLink, herokuLink }) => {
  return (
    <Fragment>
      <li className='slider__item'>
        <img
          src={
            'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1413&q=80'
          }
          alt='pict'
        />
        <div className='slider__text'>
          <h2 className='desc__title'> Titulo del projecto </h2>
          <p className='desc__text'> Resumen del projecto </p>
          <div className='buttons__links'>
            <Link to={gHLink} className='gh__link'>
              Source Code
            </Link>
            <Link to={herokuLink} className='hk__link'>
              Live Demo
            </Link>
          </div>
        </div>
      </li>
    </Fragment>
  );
};
