import React from 'react';

import home1 from '../img/home1.png';

const AboutSection = () => {
  return (
    <div>
      <div className='description'>
        <div className='title'>
          <div className='hide'>
            <h2>We Work To Make</h2>
          </div>
          <div className='hide'>
            <h2>
              Your <span>Dreams</span> Come
            </h2>
          </div>
          <div className='hide'>
            <h2>True.</h2>
          </div>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills
        </p>
        <button>Contact Us</button>
      </div>
      <div className='image'>
        <img src={home1} alt='Guy with a camera' />
      </div>
    </div>
  );
};

export default AboutSection;