import React from 'react';

export const Presentation = () => {
  return (
    <main className='presentation__main'>
      <section className='picture__text'>
        <div className='picture__wrapper'>
          <div className='presentation__picture'>
            <img
              src='https://g.foolcdn.com/editorial/images/553815/line-on-chart-falling-stock-down.jpg'
              alt='pict'
            />
          </div>
        </div>
        <div className='presentation__description'>
          <h2>A little bit of me...</h2>
          <p>
            Hello there! <br />
            I'm a videogame lover who like to code and learn new stuff.
            <br />
            And likes to stay on the computer for hours and hours!
          </p>
        </div>
      </section>
      <section className='coding__skills'>
        <h2>Why i love coding?</h2>
        <p>
          Since I was a child, I always got interest in new technologies. By
          that time being videogames, and now Software in general! I've seen all
          the crazy stuff people have made over the internet, and personally I
          want to join them. <br />
          So I started to learn by myself almost all the important languages for
          web development, and I'm always eager to learn something new.
          <br />
          So far, these are the laguages I learnt and mastered:
        </p>
        <ul className='skills'>
          <li className='icon__react'>
            <i className='fab fa-react fa-3x' />
          </li>
          <li className='icon__scss'>
            <i class='fab fa-sass fa-3x' />
          </li>
          <li className='icon__html'>
            <i class='fab fa-html5 fa-3x' />
          </li>
          <li className='icon__js'>
            <i class='fab fa-js-square fa-3x' />
          </li>
          <li className='icon__css'>
            <i class='fab fa-css3 fa-3x' />
          </li>
        </ul>
      </section>
    </main>
  );
};
