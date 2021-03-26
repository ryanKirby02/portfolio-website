import React from 'react';

//images
import home1 from '../img/home1.png';
import Wave from './Wave'

//styles
import { Layout, Description, Image, Hide } from '../styles';

//framer motion
import { motion } from 'framer-motion';
import { imageAnim, titleAnim, fade } from '../animation'

const AboutSection = () => {
  return (
    <Layout>
      <Description>
        <div className='title'>
          <Hide>
            <motion.h2 variants={titleAnim}>We Work To Make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              Your <span>Dreams</span> Come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>True.</motion.h2>
          </Hide>
        </div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={imageAnim} src={home1} alt='Guy with a camera' />
      </Image>
      <Wave />
    </Layout>
  );
};

export default AboutSection;
