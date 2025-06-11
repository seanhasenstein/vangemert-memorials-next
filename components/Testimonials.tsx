'use client';

import { useEffect, useRef, useState } from 'react';

import styled from 'styled-components';

const slides = [
  {
    id: 0,
    quote:
      'Thank you so much for the work on our monument. It is beautiful and exactly what I wanted. I am more than satisfied, I am grateful.',
    credit: 'Mary Carlson',
  },
  {
    id: 1,
    quote:
      "My Parents Memorial Bench was a very Emotional, long intricate project that took 10 months to complete from Start to Final install, and our Family couldn't be more pleased with the finished product! This is all due to Clare's dedication, expertise, determination, and loving commitment for his clients. My Parents Bench Memorial would not nearly of been as beautiful and meaningful as it is without the assistance from Clare and the entire Van Gemert Staff! Clare most definitely brought out the most important parts of our lives and Faith to be represented, as well as incorporating an amazing Marine Corps Tribute for my Dad. God Bless you Clare, for going above and beyond for my Mom & Dad ensuring their Forever Memorial is Perfect!",
    credit: 'Mindy Hartman',
  },
  {
    id: 2,
    quote:
      'It was truly a pleasure working with you to get the perfect headstone for our daughter, Elena. Your kindness and generosity are beyond compare.',
    credit: 'Kyle and Maria Kearns',
  },
  {
    id: 3,
    quote:
      "Words cannot express our gratitude for taking care of John's monument. We are very grateful.",
    credit: 'The family of John Leiterman',
  },
  {
    id: 4,
    quote:
      'Thank you on behalf of my family for the beautiful memorial marker you did for my brother, the design is so fitting for him. It is a wonderful tribute to a wonderful man.',
    credit: 'Lynn Janssen',
  },
  {
    id: 5,
    quote:
      'Thank you very much for your care and concern for me and our family as we chose our memorial. It looks awesome.',
    credit: 'Marjorie Wellner',
  },
  {
    id: 6,
    quote:
      'Thank you for the wonderful job that everyone had done for us on the memorial stone. It is so beautiful.',
    credit: 'Pete, Dan, and Holly Sternard',
  },
  {
    id: 7,
    quote: 'Your service is wonderful and the stone is beautiful!',
    credit: 'Sharon Kent and family',
  },
  {
    id: 8,
    quote:
      'Thank you for all your patience, guidance and support through the process of creating the memorial stone. It was truly a blessing to have you there to help us.',
    credit: 'Debbie and Jenny Anderegg',
  },
  {
    id: 9,
    quote:
      'Just a note to tell you how please we are with the headstone you engraved for us. The quality of work is unsurpassed.',
    credit: 'David and Elaine Demro',
  },
  {
    id: 10,
    quote:
      'You all did a very good job, the monument looks just great! I will pass the good word out.',
    credit: 'Marv K.',
  },
  {
    id: 11,
    quote:
      'Thank you so much for the work on our monument. It is beautiful and exactly what I wanted. I am more than satisfied, I am grateful.',
    credit: 'Mary Carlson',
  },
  {
    id: 13,
    quote:
      'It was truly a pleasure working with you to get the perfect headstone for our daughter, Elena. Your kindness and generosity are beyond compare.',
    credit: 'Kyle and Maria Kearns',
  },
];

export default function Testimonials() {
  const prevBtnRef = useRef<HTMLButtonElement | null>(null);
  const nextBtnRef = useRef<HTMLButtonElement | null>(null);
  const [activeSlide, setActiveSlide] = useState(1);
  const [clickDisabled, setClickDisabled] = useState(false);
  const [hasTransitionClass, setHasTransitionClass] = useState(true);
  const transitionSpeed = 500;
  const totalSlides = slides.length - 2;

  useEffect(() => {
    if (activeSlide === slides.length - 1) {
      setClickDisabled(true);
      setTimeout(() => {
        setHasTransitionClass(false);
        setActiveSlide(1);
      }, transitionSpeed);
    }

    if (activeSlide === 1) {
      setTimeout(() => {
        setHasTransitionClass(true);
      }, transitionSpeed);
    }

    if (activeSlide === 0) {
      setClickDisabled(true);
      setTimeout(() => {
        setHasTransitionClass(false);
        setActiveSlide(slides.length - 2);
      }, transitionSpeed);
    }

    if (activeSlide === slides.length - 2) {
      setTimeout(() => {
        setHasTransitionClass(true);
      }, transitionSpeed);
    }
  }, [activeSlide]);

  useEffect(() => {
    if (clickDisabled) {
      setTimeout(() => {
        setClickDisabled(false);
      }, transitionSpeed * 2);
    }
  }, [clickDisabled]);

  const handlePrevClick = () => {
    setActiveSlide(prevQuote => prevQuote - 1);
  };

  const handleNextClick = () => {
    setActiveSlide(activeSlide + 1);
  };

  return (
    <TestimonialStyles
      aria-labelledby="testimonial-heading"
      $activeSlide={activeSlide}
      $transitionSpeed={transitionSpeed}
    >
      <div className="bg">
        <div className="inner">
          <h3 id="testimonial-heading">Testimonials</h3>
          <ul className="grid">
            {slides.map(({ quote, credit }, i) => (
              <li
                key={i}
                className={`grid-item${i === activeSlide ? ' active' : ''}${
                  hasTransitionClass ? ' transition' : ''
                }`}
              >
                <blockquote>
                  <p className="quote">&ldquo;{quote}&rdquo;</p>
                  <div className="source">- {credit}</div>
                </blockquote>
              </li>
            ))}
          </ul>
          <div aria-live="polite" aria-atomic="true" className="count">
            {activeSlide === 0
              ? totalSlides
              : activeSlide === slides.length - 1
              ? '1'
              : activeSlide}{' '}
            of {totalSlides}
          </div>
          <div className="actions">
            <button
              ref={prevBtnRef}
              onClick={handlePrevClick}
              className="prev"
              aria-label="Previous Testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              ref={nextBtnRef}
              onClick={handleNextClick}
              className="next"
              aria-label="Next Testimonial"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </TestimonialStyles>
  );
}

type StyleProps = {
  $activeSlide: number;
  $transitionSpeed: number;
};

const TestimonialStyles = styled.section<StyleProps>`
  position: relative;
  width: 100%;
  max-width: 1365.3333333333px;
  margin: 0 auto;
  padding: 0 0 2rem;
  overflow-x: hidden;

  &:before {
    position: absolute;
    left: -50px;
    top: calc(50% - 100px);
    content: '';
    width: 300px;
    height: 250px;
    background: url('/images/leaves.png');
    background-repeat: no-repeat;
    transform: scaleX(-1);
  }

  &:after {
    position: absolute;
    right: -50px;
    top: calc(50% - 100px);
    content: '';
    width: 300px;
    height: 250px;
    background: url('/images/leaves.png');
    background-repeat: no-repeat;
  }

  .bg {
    position: relative;
    margin-bottom: 1.75rem;
    position: relative;
    width: 75%;
    max-width: 1024px;
    margin: 0 auto;
    padding: 4rem 1.75rem;
    background-color: #fff;
    border: 1px solid #e5e7eb;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.04),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-radius: 0.125rem;
    z-index: 1;
  }

  .inner {
    max-width: 1000px;
    margin: 0 auto;
  }

  h3 {
    margin: 0 0 2.65rem;
    font-family: 'Inter', sans-serif;
    font-size: 1.125rem;
    color: #76706f;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-align: center;
  }

  .grid {
    margin: 0 auto;
    display: flex;
  }

  .grid-item {
    margin: 0 auto;
    position: relative;
    width: 100%;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: ${props => `translateX(${props.$activeSlide * -100}%)`};
    opacity: 0;

    &:nth-of-type(2) {
      .quote {
        margin-bottom: 0.875rem;
        font-size: 0.875rem;
      }
    }

    &.active {
      opacity: 1;
    }

    &.active.transition {
      transition: transform ${props => props.$transitionSpeed}ms ease-out,
        opacity ${props => props.$transitionSpeed}ms linear 300ms;
    }
  }

  blockquote {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  .quote {
    margin: 0 0 2.65rem;
    color: #374151;
    font-size: 1.125rem;
    line-height: 1.65;
  }

  .source {
    font-family: 'Lora', serif;
    font-size: 1.125rem;
    font-weight: 600;
    color: #374151;
  }

  .count {
    position: absolute;
    bottom: 1.25rem;
    right: 1.75rem;
    text-align: center;
    font-family: 'Lora', Georgia, 'Times New Roman', Times, serif;
    font-size: 0.9375rem;
    font-style: italic;
    color: #6b7280;
  }

  .actions {
    margin: 2rem 0 0;
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  button {
    padding: 0.75rem;
    background-color: #f9fafb;
    border-radius: 0.125rem;
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px,
      rgba(17, 24, 39, 0.05) 0px 0px 0px 1px,
      rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

    &:hover {
      svg {
        color: #161e2e;
      }
    }

    svg {
      width: 1.5rem;
      height: 1.5rem;
      color: #6b7280;
    }
  }

  @media (min-width: 600px) {
    blockquote {
      padding: 0 6rem;
    }

    .count {
      bottom: 1.5rem;
      right: 2rem;
    }
  }

  @media (min-width: 992px) {
    /* Removed to handle the long testimonial */
    /* blockquote {
      height: 125px;
    } */

    h3 {
      margin-bottom: 1rem;
    }

    .actions {
      margin: 0;
    }

    button {
      position: absolute;

      &.prev,
      &.next {
        top: calc(50% - 22px);
      }

      &.prev {
        left: 25px;
      }
      &.next {
        right: 25px;
      }
    }
  }
`;
