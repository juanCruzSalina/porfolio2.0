import React from 'react';
import { Flipcard } from '../flipcard/Flipcard';

export const Contact = () => {
  return (
    <div className='background__main'>
      <div className='contact__box'>
        <div className='contact__text'>
          <h1> Contact Me! </h1>
        </div>
        <div className='contact__proffesional'>
          <Flipcard icon={'fab fa-linkedin'} id={'asas'} value={'asdad'} />
          <Flipcard
            icon={'fas fa-file-contract'}
            id={'asdas'}
            value={'asdasda'}
          />
        </div>
        <div className='contact__others'>
          <Flipcard
            icon={'fas fa-envelope-open-text'}
            id={'fdsf'}
            value={'asasa'}
          />
          <Flipcard
            icon={'fab fa-whatsapp'}
            id={'dfgdhrfg'}
            value={542995945254}
          />
          <Flipcard icon={'fab fa-github'} id={'dsffjdsf'} value={'asasa'} />
        </div>
      </div>
    </div>
  );
};
