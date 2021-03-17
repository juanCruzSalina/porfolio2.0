import React from 'react';
import { Slider } from '../slider/Slider';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';

export const Projects = () => {
  return (
    <div className='background__main'>
      <div className='projects__box'>
        <section className='projects__slideshow'>
          <h2 className='project__title'>My Projects</h2>
          <p className='project__text'>
            These are some projects I've worked on, from school platforms to
            marketplaces! Evertything designed and built with React, using CSS
            and SCSS, alongside different frameworks
          </p>
          <Carousel
            autoplay
            autoplaySpeed={3000}
            pauseOnHover
            dotPosition={'bottom'}
          >
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
        </section>
      </div>
    </div>
  );
};
