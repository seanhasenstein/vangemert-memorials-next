'use client';

import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import Navigation from './Navigation';
import MobileNav from './MobileNav';

export default function Header() {
  return (
    <HeaderStyles>
      <div className="container">
        <div className="logo">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Van Gemert Memorials"
              width={400}
              height={103}
              quality={100}
            />
          </Link>
        </div>
        <MobileNav />
        <Navigation />
      </div>
    </HeaderStyles>
  );
}

const HeaderStyles = styled.header`
  width: 100%;
  padding: 1rem 1.5rem;
  position: relative;
  background-color: #2a2721;

  .logo {
    max-width: 11rem;
    width: 100%;

    a {
      padding: 0.25rem;
      display: flex;
      border-radius: 0.125rem;

      &:focus {
        outline: 2px solid transparent;
        outline-offset: 2px;
      }

      &:focus-visible {
        outline: 2px solid #1967d2;
      }

      img {
        width: 12.5rem; /* 200px */
        height: auto;
      }
    }
  }

  .container {
    max-width: 1024px;
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (min-width: 700px) {
    padding: 1.125rem 1.5rem;

    .container {
      align-items: center;
    }
  }

  @media (min-width: 950px) {
    .container {
      flex-direction: row;
    }
  }
`;
