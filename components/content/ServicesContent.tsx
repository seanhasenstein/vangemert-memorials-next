'use client';

import { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const memorialServices = [
  'Custom design',
  'Installation',
  'Cleaning and restoration',
  'Foundation leveling and repair',
  'On-site engraving and lettering',
];

export default function ServicesContent() {
  const [activeItem, setActiveItem] = useState<number | undefined>(undefined);

  const handleClick = (item: number) => {
    setActiveItem(item);
    if (item === activeItem) {
      setActiveItem(undefined);
    }
  };

  return (
    <ServicesStyles>
      <div className="container">
        <h2>Our Services</h2>
        <p className="intro">
          We are uniquely qualified to assist you in selecting and manufacturing
          your memorial. We are proud to have our own designer to assist you
          should you have a special design in mind or you can select a standard
          design from one of our numerous design books.
        </p>
        <div className="grid">
          <div className="img">
            <Image
              src="/images/memorial.jpg"
              alt="Memorial example"
              width={640}
              height={474}
              quality={100}
              className="triple-one"
            />
          </div>
          <div className="content">
            <dl>
              <div className="item">
                <dt>
                  <button
                    aria-expanded={activeItem === 1}
                    aria-controls={`accordion-panel-1`}
                    id={`accordion-panel-1`}
                    onClick={() => handleClick(1)}
                    className={activeItem === 1 ? 'active' : ''}
                  >
                    <span className="title">Memorials and Monuments</span>
                    <span className="icon">
                      <svg
                        className={`${activeItem === 1 ? 'rotate' : ''}`}
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd
                  className={activeItem === 1 ? 'active' : ''}
                  id={`accordion-panel-1`}
                  aria-labelledby={`accordion-item-1`}
                  role="region"
                  hidden={activeItem !== 1}
                >
                  <ul>
                    {memorialServices.map((s, i) => (
                      <li key={i}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {s}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
              <div className="item">
                <dt>
                  <button
                    aria-expanded={activeItem === 2}
                    aria-controls={`accordion-panel-2`}
                    id={`accordion-panel-2`}
                    onClick={() => handleClick(2)}
                    className={activeItem === 2 ? 'active' : ''}
                  >
                    <span className="title">Address Markers</span>
                    <span className="icon">
                      <svg
                        className={`${activeItem === 2 ? 'rotate' : ''}`}
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd
                  className={activeItem === 2 ? 'active' : ''}
                  id={`accordion-panel-2`}
                  aria-labelledby={`accordion-item-2`}
                  role="region"
                  hidden={activeItem !== 2}
                >
                  <p>
                    Address markers make a wonderful addition to any home or
                    business. Let Van Gemert Memorials create a custom marker
                    for you using one of our in-stock stones, or if you already
                    have a stone placed, we can come to you and work on-site.
                  </p>
                </dd>
              </div>
              <div className="item">
                <dt>
                  <button
                    aria-expanded={activeItem === 3}
                    aria-controls={`accordion-panel-3`}
                    id={`accordion-panel-3`}
                    onClick={() => handleClick(3)}
                    className={activeItem === 3 ? 'active' : ''}
                  >
                    <span className="title">Signs</span>
                    <span className="icon">
                      <svg
                        className={`${activeItem === 3 ? 'rotate' : ''}`}
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd
                  className={activeItem === 3 ? 'active' : ''}
                  id={`accordion-panel-3`}
                  aria-labelledby={`accordion-item-3`}
                  role="region"
                  hidden={activeItem !== 3}
                >
                  <p>
                    Stone signs convey quality and performance, which is why so
                    many organizations choose them. Stone signs are virtually
                    maintenance-free and do not succumb to mother nature&apos;s
                    harsh elements. We have produced signs of every size, shape,
                    and color for all types of organizations, small or large.
                  </p>
                </dd>
              </div>
              <div className="item">
                <dt>
                  <button
                    aria-expanded={activeItem === 4}
                    aria-controls={`accordion-panel-4`}
                    id={`accordion-panel-4`}
                    onClick={() => handleClick(4)}
                    className={activeItem === 4 ? 'active' : ''}
                  >
                    <span className="title">Pet and Garden Memorials</span>
                    <span className="icon">
                      <svg
                        className={`${activeItem === 4 ? 'rotate' : ''}`}
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd
                  className={activeItem === 4 ? 'active' : ''}
                  id={`accordion-panel-4`}
                  aria-labelledby={`accordion-item-4`}
                  role="region"
                  hidden={activeItem !== 4}
                >
                  <p>
                    Keeping your pets memory alive with a pet marker is a great
                    way to remember all the good times and memories that you
                    shared with your pet. A garden in your yard could be a great
                    place for the pet marker. Pet markers can help you keep your
                    pets memories alive forever.
                  </p>
                  <p>
                    A memorial garden is an ideal setting to honor and pay
                    tribute to a loved one. An area of quiet reflection and
                    meditation, it can be accented with memorial markers, custom
                    engraved memorial stones, and special remembrances.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </ServicesStyles>
  );
}

const ServicesStyles = styled.div`
  padding: 5rem 1.5rem;

  .container {
    margin: 0 auto;
    max-width: 1024px;
    width: 100%;
  }

  .intro {
    max-width: 42rem;
    line-height: 1.5;
  }

  .grid {
    margin: 4rem 0 0;
    display: flex;
    justify-content: space-between;
    gap: 5rem;
  }

  .content {
    margin: 2rem 0 0;
    min-width: 22rem;
    width: 100%;
  }

  .img {
    max-width: 450px;
    width: 100%;

    img {
      width: 100%;
      height: auto;
    }
  }

  dl {
    margin: 0;
  }

  .item {
    border-top: 1px solid #e5e7eb;

    &:last-of-type {
      border-bottom: 1px solid #e5e7eb;
    }

    ul {
      margin: 0;
      padding: 0;
    }

    li {
      margin: 0 0 0.75rem 0.125rem;
      display: flex;
      align-items: center;
      font-size: 0.875rem;
      color: #1f2937;

      svg {
        margin: 2px 0.5rem 0 0;
        height: 0.9375rem;
        width: 0.9375rem;
        color: #059669;
      }
    }

    p {
      margin: 0 0 1rem;
      font-size: 0.9375rem;
      color: #6b7280;
      line-height: 1.5;
    }
  }

  dt {
    button {
      padding: 1rem 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      color: #8d95a3;
      text-align: left;
      font-family: 'Inter', sans-serif;
      font-size: 1.125rem;
      line-height: 1.75rem;

      &.active {
        padding-bottom: 0;
      }

      &:hover {
        .title,
        .icon {
          color: #000;
        }
      }

      &:focus {
        outline: 2px solid transparent;
        outline-offset: 2px;
      }

      &:focus-visible {
        .title,
        .icon {
          color: #1967d2;
        }

        .title {
          text-decoration: underline;
        }
      }
    }
  }

  dd {
    margin: 0.75rem 0 0;
    padding: 0 3rem 0 0;

    &.active {
      padding-bottom: 1rem;
    }
  }

  .title {
    font-weight: 500;
    color: #111623;
  }

  .icon {
    margin: 0 0 0 0.9375rem;
    padding: 0.125rem;
    height: 1.75rem;
    width: 1.75rem;
    display: flex;
    align-items: center;
    border: 2px solid transparent;
    border-radius: 0.25rem;

    svg {
      height: 1.5rem;
      width: 1.5rem;
      display: flex;
      align-items: center;

      &.rotate {
        transform: rotate(180deg);
      }
    }
  }

  @media (max-width: 950px) {
    .grid {
      margin: 3rem 0 0;
      gap: 3rem;
    }

    .content {
      margin: 0;
    }
  }

  @media (max-width: 700px) {
    padding: 2rem 1.5rem;

    .grid {
      flex-direction: column-reverse;
      gap: 0;
    }

    .img {
      margin-top: 3.5rem;
    }

    .content {
      min-width: unset;
    }
  }
`;
