import styled from 'styled-components';

import { formattedPhoneNumber, rawphoneNumber } from '@/constants';

type Props = {
  className?: string;
};

export default function StoreInformation({ className }: Props) {
  return (
    <StoreInfoStyles className={className}>
      <div className="store-info">
        <div className="store-details">
          <h3>
            <span>Store Information</span>
          </h3>
          <ul>
            <li>
              1041 N. Broadway <br />
              De Pere, WI 54115
            </li>
            <li>
              Phone:{' '}
              <a
                href={`tel:1${rawphoneNumber}`}
                target="_blank"
                rel="noreferrer"
              >
                {formattedPhoneNumber}
              </a>
            </li>
            <li>
              <a
                href="https://goo.gl/maps/rbnnHvvvpfXBcZVn9"
                target="_blank"
                rel="noreferrer"
                className="directions"
              >
                Directions
              </a>
            </li>
          </ul>
        </div>
        <div className="store-hours">
          <h3>
            <span>Store Hours</span>
          </h3>
          <ul>
            <li>
              <span>Monday</span>8:00am-5:00pm
            </li>
            <li>
              <span>Tuesday</span>8:00am-5:00pm
            </li>
            <li>
              <span>Wednesday</span>8:00am-5:00pm
            </li>
            <li>
              <span>Thursday</span>8:00am-5:00pm
            </li>
            <li>
              <span>Friday</span>8:00am-5:00pm
            </li>
            <li>
              <span>Saturday</span>Closed
            </li>
            <li>
              <span>Sunday</span>Closed
            </li>
          </ul>
        </div>
      </div>
    </StoreInfoStyles>
  );
}

const StoreInfoStyles = styled.div`
  flex-shrink: 0;

  .store-info {
    padding: 2rem;
    background-color: #fff;
    border: 1px solid #f0f1f4;
    border-radius: 0.125rem;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.04),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }

  h3 {
    position: relative;
    margin: 0 0 1rem;
    font-size: 1.125rem;

    span {
      padding: 0 1.25rem 0 0;
      position: relative;
      background-color: #fff;
      z-index: 200;
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0.75rem;
      width: 100%;
      height: 1px;
      background-color: #d1d5db;
      z-index: 10;
    }
  }

  .store-hours {
    margin: 3.5rem 0 0;

    li {
      display: flex;
      justify-content: space-between;
    }
  }

  li {
    margin: 0 0 0.5rem;
    line-height: 1.35;

    &:last-of-type {
      margin-bottom: 0;
    }

    span {
      display: inline-flex;
      width: 8rem;
    }

    a {
      &.directions {
        color: #4338ca;
        text-decoration: underline;
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }

  /* @media (max-width: 767px) {
    .store-hours {
      li {
        display: flex;
        justify-content: space-between;
      }
    }
  } */

  @media (max-width: 370px) {
    .store-info {
      padding: 1.25rem;
    }

    li span {
      width: auto;
    }
  }
`;
