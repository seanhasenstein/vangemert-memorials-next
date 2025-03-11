'use client';

import styled from 'styled-components';

import LinkButton from './LinkButton';

export default function Hero() {
  return (
    <HeroStyles>
      <div className="content">
        <h2>Welcome to Van Gemert Memorials</h2>
        <p>Serving Northeastern Wisconsin for over 100 years.</p>
        <LinkButton url="/contact">Schedule an appointment</LinkButton>
      </div>
    </HeroStyles>
  );
}

const HeroStyles = styled.section`
  margin: -10rem auto 0;
  padding: 3rem 0 3.5rem;
  position: relative;
  max-width: 100%;
  width: 100%;
  background-image: url('/images/hero-sm.jpg');
  background-size: cover;
  background-position: center left;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  .content {
    max-width: 360px;
    text-align: center;
  }

  h2 {
    margin: 0;
    padding: 0;
    font-family: 'Lora', serif;
    font-size: 1.625rem;
    line-height: 1.25;
    letter-spacing: 0.025em;
  }

  p {
    margin: 1.75rem auto 2rem;
    max-width: 19rem;
    width: 100%;
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 1.5;
  }

  h3 {
    margin: 2.5rem 0 0;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    color: #76706f;
    letter-spacing: 0.05em;
  }

  .hours {
    margin: 0.75rem 0 2.625rem;
    font-family: 'Inter', serif;
    font-size: 1rem;
    font-weight: 500;
    color: #393636;
  }

  @media (min-width: 380px) {
    max-width: calc(100% - 3rem);
    border-radius: 0.125rem;
  }

  @media (min-width: 768px) {
    padding: 3rem 4rem 3.5rem;
    justify-content: flex-start;
    background-image: url('/images/hero-lg.jpg');
  }

  @media (min-width: 1072px) {
    max-width: 1024px;
  }
`;
