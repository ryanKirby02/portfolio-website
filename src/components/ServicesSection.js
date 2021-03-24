import React from 'react';

//images and Svgs
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png'

//styles
import styled from 'styled-components'
import { Layout, Description, Image, Hide } from '../styles'

const ServicesSection = () => {
  return (
    <Services>
      <Description>
        <h2>
          High <span>Quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className='icon'>
              <img src={clock} alt='Clock Icon' />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className='icon'>
              <img src={teamwork} alt='TeamWork Icon' />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className='icon'>
              <img src={diaphragm} alt='Diaphragm Icon' />
              <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className='icon'>
              <img src={money} alt='Cash Icon' />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt='Cool camera pic' />
      </Image>
    </Services>
  );
};

const Services = styled(Layout) `
    h2 {
        padding-bottom: 5rem;
    }
    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`
const Cards = styled.div `
    display: flex;
    flex-wrap: wrap;
`
const Card = styled.div `
    flex-basis: 20rem;
    .icon {
        display: flex;
        align-items: center;
        h3 {
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
            border-radius: 10px
        }
    }
`

export default ServicesSection;
