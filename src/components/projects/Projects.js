import React from 'react';
import { Slider } from '../slider/Slider';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';

export const Projects = () => {
  return (
    <div className='projects__main'>
      <div className='projects__box'>
        <div className='projects__slideshow'>
          <h2 className='project__title'>My Projects</h2>
          <p className='project__text'>
            These are some projects I've worked on, from school platforms to
            marketplaces! Evertything designed and built with React, using CSS
            and SCSS, alongside different frameworks
          </p>
        </div>
        <div className='carousel__container'>
          <Carousel autoplaySpeed={3000} pauseOnHover dotPosition={'bottom'}>
            <div>
              <Slider />
            </div>
            <div>
              <Slider />
            </div>
            <div>
              <Slider />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
