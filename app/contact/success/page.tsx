'use client';

import Link from 'next/link';
import styled from 'styled-components';

export default function Success() {
  return (
    <SuccessStyles>
      <div className="success-message">
        <div className="content">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          <h2>Message sent successfully</h2>
          <p>
            Thank you for contacting Van Gemert Memorials. We will be with you
            as soon as we can.
          </p>
          <Link href="/" className="link-button">
            Back to home
          </Link>
        </div>
        <div aria-hidden="true" className="background">
          <svg
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 1463 360"
          >
            <path
              className="path1"
              fill="currentColor"
              d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
            ></path>
            <path
              className="path2"
              fill="currentColor"
              d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
            ></path>
          </svg>
        </div>
      </div>
    </SuccessStyles>
  );
}

const SuccessStyles = styled.div`
  padding: 5rem 1.5rem;

  .success-message {
    padding: 3rem 1.875rem 4rem;
    position: relative;
    max-width: 1024px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

    svg {
      margin: 0 0 0.5rem;
      width: 3rem;
      height: 3rem;
      color: #2dbb7b;
    }

    h2 {
      font-size: 1.5rem;
      margin: 0 0 1.25rem;
    }

    p {
      margin: 0 auto;
      max-width: 500px;
      font-size: 1.125rem;
      line-height: 1.65;
    }
  }

  .content {
    position: relative;
    z-index: 200;
  }

  .link-button {
    margin: 1.5rem 0 0;
    padding: 0.75rem 1.25rem;
    max-width: 15rem;
    width: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: flex-end;
    font-size: 1rem;
    font-weight: 400;
    color: #1f2937;
    line-height: 1;
    text-decoration: none;
    text-align: center;
    background-color: #fff;
    border: 1px solid #d1d5db;
    border-radius: 0.25rem;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

    svg {
      margin: 0 0 0 0.375rem;
      height: 0.8125rem;
      width: 0.8125rem;
      color: #9ca3af;
    }

    &:hover {
      border-color: #bbc1ca;
      color: #111827;
      box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 2px 2px 0px;
    }

    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }

    &:focus-visible {
      box-shadow: #f8fafc 0px 0px 0px 2px, #1967d2 0px 0px 0px 4px,
        rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    }
  }

  .background {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;

    svg {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;

      .path1 {
        opacity: 0.04;
        color: #a3a3a3;
      }

      .path2 {
        opacity: 0.04;
        color: #525252;
      }
    }
  }

  @media (max-width: 1072px) {
    padding: 1.5rem;
  }

  @media (max-width: 500px) {
    .link-button {
      max-width: unset;
    }
  }
`;
