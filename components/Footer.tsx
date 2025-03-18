'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import { formattedPhoneNumber } from '@/constants';

export default function Footer() {
  const pathname = usePathname();

  return (
    <FooterStyles>
      <div className="row">
        <div className="brand">
          <Image
            src="/images/logo.png"
            alt="Van Gemert Memorials"
            width={400}
            height={103}
            quality={100}
          />
        </div>
        <div className="nav" aria-label="Footer Navigation">
          <h2 className="sr-only">Footer Navigation</h2>
          <ul>
            <li>
              <Link
                href="/services"
                className={pathname === '/services' ? 'active' : ''}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/gallery/single-memorials"
                className={pathname.includes('gallery') ? 'active' : ''}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href="/staff"
                className={pathname === '/staff' ? 'active' : ''}
              >
                Staff
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={pathname === '/about' ? 'active' : ''}
              >
                About
              </Link>
            </li>
            <li>
              <Link href="/faq" className={pathname === '/faq' ? 'active' : ''}>
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={pathname === '/contact' ? 'active' : ''}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="card">
          <h3>Address</h3>
          <p>
            <a
              href="https://goo.gl/maps/mu9fVej2pJgURdLD7"
              target="_blank"
              rel="noreferrer"
            >
              1041 N. Broadway <br />
              De Pere WI 54115
            </a>
          </p>
        </div>
        <div className="card">
          <h3>Store Hours</h3>
          <p>Monday-Friday: 8:00am-5:00pm</p>
          <p>(Appointments upon request)</p>
        </div>
        <div className="card">
          <h3>Phone Number</h3>
          <p>
            <a href="tel:9203368741" target="_blank" rel="noreferrer">
              {formattedPhoneNumber}
            </a>
          </p>
        </div>
        <div className="card certs">
          <h3>Certifications</h3>
          <a href="http://wambonline.org/" target="_blank" rel="noreferrer">
            <Image
              src="/images/waomb.png"
              alt="Wisconsin Association of Monument Builders"
              width={121}
              height={121}
              quality={100}
              className="cert-logo"
            />
          </a>
          <a
            href="https://monumentbuilders.org/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/images/mb.png"
              alt="Monument Builders of North America"
              width={121}
              height={121}
              quality={100}
              className="cert-logo"
            />
          </a>
        </div>
      </div>
      <p className="copyright">
        © {new Date().getFullYear()} Van Gemert Memorials. All Rights Reserved.
      </p>
    </FooterStyles>
  );
}

const FooterStyles = styled.footer`
  padding: 5rem 1.5rem 0;
  background-color: #2a2721;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .brand {
    width: 12rem;
    margin: 0 auto;

    img {
      width: 12rem; /* 192px */
      height: auto;
    }
  }

  .nav {
    margin: 5rem 0;

    ul {
      display: flex;
      flex-direction: column;
    }

    li:last-of-type a {
      margin-bottom: 0;
    }

    a {
      display: block;
      padding: 0.5rem 0;
      margin: 0 0 1.5rem;
      font-family: 'Inter', sans-serif;
      font-size: 1rem;
      font-weight: 500;
      text-decoration: none;
      letter-spacing: 0.025em;
      color: #aba5a0;
      transition: background-color 150ms linear;

      &.active {
        color: #fff;
      }

      &:hover {
        color: #d9d6d4;
      }

      &:focus {
        outline: 2px solid transparent;
        outline-offset: 2px;
      }

      &:focus-visible {
        color: #1967d2;
        text-decoration: underline;
      }
    }
  }

  .card {
    margin: 0 0 5rem;

    p,
    a {
      color: #e4e1dc;
      font-size: 0.9375rem;
    }

    a {
      &:hover {
        text-decoration: underline;
      }

      &:focus {
        outline: 2px solid transparent;
        outline-offset: 2px;
      }

      &:focus-visible {
        color: #1967d2;
        text-decoration: underline;
      }
    }
  }

  .certs {
    a {
      border-radius: 0.25rem;

      &:first-of-type {
        margin-right: 1.5rem;
      }

      &:focus-visible {
        outline-color: #1967d2;
      }

      .cert-logo {
        width: 3rem;
        height: auto;
      }
    }
  }

  h3 {
    margin: 0 0 1.125rem;
    font-family: 'Inter', sans-serif;
    font-size: 0.9375rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #9c9c9c;
  }

  p {
    margin: 0;
    line-height: 1.625;
    transition: color 250ms ease-in-out;

    &.copyright {
      margin: 0 auto;
      padding: 1.25rem 0;
      max-width: 1024px;
      width: 100%;
      font-family: 'Inter', sans-serif;
      font-size: 0.9375rem;
      color: rgba(255, 255, 255, 0.2);
      line-height: 1.35;
      letter-spacing: 0.025em;
      text-align: center;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
    }
  }

  @media (min-width: 950px) {
    padding: 5rem 1.75rem 0;
    text-align: left;

    .row {
      margin: 0 auto 6rem;
      max-width: 1024px;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    .brand {
      margin: 0;
    }

    .nav {
      margin: 0;

      a {
        margin: 0;
      }
    }

    .card {
      margin: 0 0 1.25rem;
    }

    p.copyright {
      text-align: left;
    }
  }

  @media (min-width: 800px) {
    .nav {
      ul {
        flex-direction: row;
      }

      li {
        margin: 0 1rem;

        &:last-of-type {
          margin-right: 0;
        }
      }

      a {
        padding: 0.625rem 0.875rem;
      }
    }
  }
`;
