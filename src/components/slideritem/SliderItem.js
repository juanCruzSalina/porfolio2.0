import React from 'react';

export const SliderItem = (sliderData) => {
  const { sliderData: slider } = sliderData;
  const { id, img: image, desc } = slider;

  return (
    <li id={id}>
      <img src='' alt={image} />
      <p>{desc}</p>
    </li>
  );
};
