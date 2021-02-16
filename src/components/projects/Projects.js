import React from 'react';
import { SliderItem } from '../slideritem/SliderItem';

export const Projects = () => {
  let slider1 = {
    id: '#slider1',
    img: 'img',
    desc: 'asdasdads',
  };

  return (
    <div className='background__main'>
      <div className='projects__box'>
        <div className='projects__slider'>
          <SliderItem sliderData={slider1} />
          {/* <SliderItem />
          <SliderItem /> */}
        </div>
        <div className='projects__github'>GH</div>
      </div>
    </div>
  );
};
