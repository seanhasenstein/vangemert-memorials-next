'use client';

import Link from 'next/link';
import styled from 'styled-components';

const staffList = [
  {
    id: 1,
    name: 'Vic Van Gemert',
    bio: (
      <p>
        Vic represents the third generation of his family in the monument
        business. Vic specializes in engraving, taking the memorial from clean
        slate to finished work of art. Vic also does cemetery work that includes
        cleaning, inscriptions, and installing monuments.
      </p>
    ),
    imgUrl: '/images/staff/vic-van-gemert.jpg',
  },
  {
    id: 2,
    name: 'Clare Little',
    bio: (
      <p>
        Clare is the store manager here at Van Gemert Memorials. You can contact
        Clare from our <Link href="/contact">contact page</Link> with any
        questions or inquiries that you have.
      </p>
    ),
  },
  {
    id: 3,
    name: 'Joel Nimocks',
    bio: (
      <p>
        Joel has been creating designs and hand-etched artwork for memorials for
        over 12 years. He is very humbled when he can honor a family member with
        one of his designs brought to fruition through the production process.
        Outside of his occupation, Joel is a painter, a musician, and enjoys
        time spent with his wife and two daughters.
      </p>
    ),
    imgUrl: '/images/staff/joel-nimocks.jpg',
  },
];

export default function StaffContent() {
  return (
    <StaffStyles>
      <h2>Meet our staff</h2>
      <ul>
        {staffList.map(s => (
          <li key={s.id}>
            {s.imgUrl ? (
              <div className="img">
                <img src={s.imgUrl} alt={s.name} />
              </div>
            ) : null}
            <div className="bio">
              <h3>{s.name}</h3>
              {s.bio}
            </div>
          </li>
        ))}
      </ul>
    </StaffStyles>
  );
}

const StaffStyles = styled.div`
  margin: 0 auto;
  padding: 5rem 1.5rem;
  max-width: 1072px;

  h2 {
    margin: 0;
    text-align: center;
  }

  h3 {
    font-family: 'Inter', sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 1.25rem;
  }

  p {
    margin: 0 0 1.5rem;
    max-width: 600px;
    line-height: 1.65;

    &:last-of-type {
      margin: 0;
    }

    a {
      color: #4338ca;
      text-decoration: underline;
    }
  }

  ul {
    margin: 0;
  }

  li {
    padding: 3.5rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-bottom: 1px solid #e2e8f0;

    &:last-of-type {
      margin: 0;
      border: none;
    }
  }

  .img {
    margin: 0 0 2rem;
    width: 200px;
    height: 250px;
    flex-shrink: 0;
    border: 6px solid #fff;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
      rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }

  @media (min-width: 768px) {
    h2 {
      padding-bottom: 1.25rem;
      text-align: left;
      border-bottom: 1px solid #e2e8f0;
    }

    li {
      flex-direction: row;
      justify-content: flex-start;
      align-items: flex-start;
      text-align: left;

      .bio {
        padding: 0 0 0 3rem;
      }
    }

    .img {
      margin-bottom: 0.5rem;
    }
  }
`;
