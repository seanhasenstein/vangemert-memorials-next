'use client';

import styled from 'styled-components';

import LinkButton from '../components/LinkButton';

export default function FourOhFour() {
  return (
    <FourOhFourStyles>
      <div className="container">
        <h2>404 Error</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
        <LinkButton url="/">Go to homepage</LinkButton>
      </div>
    </FourOhFourStyles>
  );
}

const FourOhFourStyles = styled.div`
  min-height: calc(100vh - 583px);
  padding: 5rem 1.5rem;
  display: flex;
  justify-content: center;

  .container {
    padding: 2rem 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #fff;
    border: 1px solid #e5e7eb;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.04),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-radius: 0.125rem;
  }

  h2 {
    margin: 0;
    font-family: 'Inter', sans-serif;
    font-size: 1.125rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  p {
    margin: 1rem 0 1.5rem;
    line-height: 1.5;
  }

  @media (max-width: 800px) {
    min-height: unset;
    padding: 1.5rem;

    .container {
      padding: 2rem 3rem;
    }
  }
`;
