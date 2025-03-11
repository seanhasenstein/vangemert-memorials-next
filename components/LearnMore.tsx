'use client';

import styled from 'styled-components';

import LinkButton from './LinkButton';

export default function LearnMore() {
  return (
    <LearnMoreStyles>
      <p>How can we help you?</p>
      <h3>Learn more about our custom stone products.</h3>
      <div className="actions">
        <LinkButton url="/contact">Send us a message</LinkButton>
        <LinkButton url="/gallery/single-memorials" theme="secondary">
          Examples of our work
        </LinkButton>
      </div>
    </LearnMoreStyles>
  );
}

const LearnMoreStyles = styled.div`
  padding: 3rem 1.5rem 5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  p {
    font-size: 0.9375rem;
    color: #76706f;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.1em;
    margin: 0;
  }

  h3 {
    margin: 2.25rem 0 2.25rem;
    font-size: 1.75rem;
    color: #2a2721;
    line-height: 1.35;
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  @media (max-width: 550px) {
    .actions {
      width: 100%;
      flex-direction: column;

      a {
        width: 100%;
        text-align: center;
        justify-content: center;
      }
    }
  }
`;
