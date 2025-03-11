'use client';

import styled from 'styled-components';

import StoreInformation from './StoreInformation';

export default function Welcome() {
  return (
    <WelcomeStyles>
      <div className="content" id="store-details">
        <h2>
          At Van Gemert Memorials, our profession is about art, history, love
          and your story, but most importantly it&apos;s about people...
        </h2>
        <p>
          People who have experienced the loss of a loved one deserve
          professionals who are passionate about their calling. The details of a
          funeral may be forgotten, but a memorial will remain to tell the story
          of a life lived.
        </p>
        <p>
          With the largest indoor showroom in the area and our quantity-purchase
          savings passed on to you, the customer, we strive to provide you the
          finest quality craftsmanship.
        </p>
        <p>
          Every day we strive to make a difference. Let&apos;s tell your story
          together.
        </p>
      </div>
      <CustomStoreInfo />
    </WelcomeStyles>
  );
}

const WelcomeStyles = styled.section`
  margin: 0 auto;
  padding: 3.5rem 0;
  max-width: 1024px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 3rem;

  .content {
    margin: 2.5rem 0 0;
    padding: 0 0 0 5rem;
    max-width: 37rem;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  h2 {
    margin: 0 0 1.25rem;
    font-size: 1.25rem;
    line-height: 1.35;
  }

  p {
    margin: 0 0 1.5rem;
    font-size: 1rem;
    line-height: 1.65;

    &:last-of-type {
      margin: 0;
    }
  }

  @media (max-width: 1072px) {
    padding: 3.5rem 1.5rem;

    .content {
      padding: 0;
    }
  }

  @media (max-width: 767px) {
    flex-direction: column;

    .content {
      margin: 0 auto;
    }
  }

  @media (max-width: 500px) {
    padding: 3rem 1.5rem;

    .content {
      padding: 0 1.5rem;
    }
  }
`;

const CustomStoreInfo = styled(StoreInformation)`
  max-width: 22rem;
  width: 100%;

  @media (max-width: 767px) {
    max-width: unset;
  }
`;
