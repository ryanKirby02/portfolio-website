import React from 'react';

//images
import home1 from '../img/home1.png';

//styles
import { Layout, Description, Image, Hide } from '../styles';

//framer motion
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <Layout>
      <Description>
        <div className='title'>
          <Hide>
            <motion.h2>We Work To Make</motion.h2>
          </Hide>
          <Hide>
            <h2>
              Your <span>Dreams</span> Come
            </h2>
          </Hide>
          <Hide>
            <h2>True.</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt='Guy with a camera' />
      </Image>
    </Layout>
  );
};

export default AboutSection;
