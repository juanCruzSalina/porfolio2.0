import React from 'react';
import { Flipcard } from '../flipcard/Flipcard';

export const Contact = () => {
  return (
    <div className='background__main'>
      <div className='contact__box'>
        <div className='contact__text'>
          <h2> Contact Me! </h2>
        </div>
        <div className='contact__proffesional'>
          <Flipcard
            icon={'fab fa-linkedin'}
            id={'LinkedIn Profile'}
            value={
              '<a href="https://www.linkedin.com/in/juan-cruz-salina-a74473179/" target="_blank" >Click me!</a>'
            }
          />
          <Flipcard
            icon={'fas fa-file-contract'}
            id={'Curriculum Vitae'}
            value={
              '<b>' +
              '<a href="" download="CurriculumVitae">Download CV</a>' +
              '</b>'
            }
          />
        </div>
        <div className='contact__others'>
          <Flipcard
            icon={'fas fa-envelope-open-text'}
            id={'E-mail'}
            value={'<b>salinajuancruz@gmail.com</b>'}
          />
          <Flipcard
            icon={'fas fa-phone'}
            id={'Phone Number'}
            value={542995945254}
          />
          <Flipcard
            icon={'fab fa-github'}
            id={'GitHub Profile'}
            value={
              '<a href="https://github.com/juanCruzSalina" target="_blank">Click me!</a>'
            }
          />
        </div>
      </div>
    </div>
  );
};
