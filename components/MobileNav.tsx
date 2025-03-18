'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styled from 'styled-components';

const links = [
  { id: 1, slug: '/', text: 'Home' },
  { id: 2, slug: '/services', text: 'Our Services' },
  { id: 3, slug: '/gallery/single-memorials', text: 'Gallery' },
  { id: 4, slug: '/staff', text: 'Meet our Staff' },
  { id: 5, slug: '/about', text: 'About Us' },
  { id: 6, slug: '/faq', text: 'FAQ' },
  { id: 7, slug: '/contact', text: 'Contact Us' },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    // Only run when pathname changes, not on initial render
    if (prevPathRef.current !== pathname) {
      // Close menu after navigation is complete
      setIsOpen(false);

      // Smooth scroll to top of page
      window.scrollTo({ top: 0 });

      // Update the previous pathname reference
      prevPathRef.current = pathname;
    }
  }, [pathname]);

  return (
    <>
      <NavButtons>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen ? 'true' : 'false'}
          aria-controls="nav-menu"
        >
          {isOpen ? (
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          )}
          <span className="sr-only">Navigation Menu</span>
        </button>
      </NavButtons>
      <MobileNavStyles
        className="mobile-nav"
        role="navigation"
        aria-label="Mobile Navigation"
        id="nav-menu"
      >
        <h2 className="sr-only">Main Navigation</h2>
        <ul className={isOpen ? 'open' : ''}>
          {links.map(l => (
            <li key={l.id}>
              <Link
                href={l.slug}
                onClick={() => {
                  if (l.slug === pathname) {
                    setIsOpen(false);
                  }
                }}
                className={
                  pathname === l.slug
                    ? 'current-page'
                    : pathname.includes('gallery') && l.text === 'Gallery'
                    ? 'current-page'
                    : ''
                }
              >
                {l.text}
              </Link>
            </li>
          ))}
        </ul>
      </MobileNavStyles>
    </>
  );
}

const MobileNavStyles = styled.nav`
  ul {
    display: none;
    flex-direction: column;
    margin: 0;

    &.open {
      display: flex;
      margin-top: 0.75rem;
      height: calc(100vh - 84px);
    }
  }

  li {
    &:first-of-type a {
      border-top: 1px solid rgba(10, 10, 10, 0.4);
    }
  }

  a {
    margin: 0;
    padding: 1.375rem 0;
    display: block;
    text-decoration: none;
    color: #d9d6d4;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.0125em;
    border-bottom: 1px solid rgba(10, 10, 10, 0.4);

    &.current-page {
      color: #bda14b;
    }
  }

  @media (min-width: 700px) {
    &.mobile-nav {
      display: none;
      visibility: hidden;
    }
  }
`;

const NavButtons = styled.div`
  position: absolute;
  right: 1.5rem;
  top: 1.75rem;

  @media (min-width: 700px) {
    display: none;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: #dfe1e6;
  }

  span {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0;
    border: 0;
    height: 1px;
    width: 1px;
    overflow: hidden;
  }
`;
