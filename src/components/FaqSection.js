import React from 'react';

//styles
import { Layout } from '../styles';
import styled from 'styled-components';

//components
import Toggle from './Toggle';

//animation
import {AnimateSharedLayout} from 'framer-motion';

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title='How Do I Start?'>
          <div className='anwser'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores, similique?
            </p>
          </div>
        </Toggle>
        <Toggle title='What Is Your Daily Schedule?'>
          <div className='anwser'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores, similique?
            </p>
          </div>
        </Toggle>
        <Toggle title='Are There Different Payment Methods?'>
          <div className='anwser'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores, similique?
            </p>
          </div>
        </Toggle>
        <Toggle title='What Products Do You Offer?'>
          <div className='anwser'>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Asperiores, similique?
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(Layout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .anwser {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
