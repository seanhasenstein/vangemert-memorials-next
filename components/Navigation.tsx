'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styled from 'styled-components';

const links = [
  { id: 1, slug: '/', text: 'Home' },
  { id: 2, slug: '/services', text: 'Services' },
  { id: 3, slug: '/gallery/single-memorials', text: 'Gallery' },
  { id: 4, slug: '/staff', text: 'Staff' },
  { id: 5, slug: '/about', text: 'About' },
  { id: 6, slug: '/contact', text: 'Contact' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <NavStyles role="navigation" aria-label="Main Navigation" id="menu">
      <h2 className="sr-only">Main Navigation</h2>
      <ul>
        {links.map(l => (
          <li key={l.id}>
            <Link
              href={l.slug}
              className={pathname === l.slug ? 'current-page' : ''}
            >
              {l.text}
            </Link>
          </li>
        ))}
      </ul>
    </NavStyles>
  );
}

const NavStyles = styled.nav`
  display: none;

  @media (min-width: 700px) {
    display: block;

    ul {
      padding: 0.5rem 0;
      margin: 1.125rem 0 0;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      background: none;

      &.open {
        margin: 1.125rem 0 0;
      }
    }

    li:last-of-type a {
      margin-right: 0;
      padding-right: 0;
    }

    a {
      margin: 0 1rem;
      padding: 0.625rem 1rem;
      color: rgba(255, 255, 255, 0.7);
      font-size: 1rem;
      font-weight: 500;
      letter-spacing: 0.0125em;

      &.current-page {
        color: #fff;
      }

      &:hover {
        color: #fff;
      }

      &:focus {
        outline: 2px solid transparent;
        outline-offset: 2px;
      }

      &:focus-visible {
        text-decoration: underline;
        color: #1967d2;
      }
    }

    button {
      padding: 0.625rem 1.75rem;
    }

    li.sm-screen {
      display: none;
    }
  }

  @media (min-width: 950px) {
    ul {
      margin: 0;
      padding: 0;

      &.open {
        margin: 0;
      }
    }
  }
`;
