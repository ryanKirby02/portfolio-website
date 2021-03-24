import React from 'react';

//styles
import { Layout } from '../styles';
import styled from 'styled-components'

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className='question'>
        <h4>How Do I Start?</h4>
        <div className='anwser'>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Asperiores, similique?
          </p>
        </div>
        <div className='faq-line'></div>
      </div>
      <div className='question'>
        <h4>What's Your Daily Schedule?</h4>
        <div className='anwser'>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Asperiores, similique?
          </p>
        </div>
        <div className='faq-line'></div>
      </div>
      <div className='question'>
        <h4>Are There Different Payment Methods?</h4>
        <div className='anwser'>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Asperiores, similique?
          </p>
        </div>
        <div className='faq-line'></div>
      </div>
      <div className='question'>
        <h4>What Products Do You Offer?</h4>
        <div className='anwser'>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Asperiores, similique?
          </p>
        </div>
        <div className='faq-line'></div>
      </div>
    </Faq>
  );
};

const Faq = styled(Layout) `
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
`

export default FaqSection;
