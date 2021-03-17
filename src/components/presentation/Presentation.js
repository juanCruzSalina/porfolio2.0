import React from 'react';

export const Presentation = () => {
  return (
    <div className='background__main'>
      <header>
        <div className='presentation__picture'>
          <img
            src='https://g.foolcdn.com/editorial/images/553815/line-on-chart-falling-stock-down.jpg'
            alt='pict'
          />
        </div>
        <div className='presentation__description'>
          <h1> title </h1>
          <p> desc </p>
        </div>
      </header>
      <main className='coding__skills'>
        <h1> Why i love coding? </h1>
        <p>asdsdasdasd</p>
        <ul>
          <li>React</li>
          <li>Scss</li>
          <li>HTML5</li>
          <li>ES6</li>
          <li>CSS3</li>
        </ul>
      </main>
    </div>
  );
};
