'use client';

import Image from 'next/image';
import styled from 'styled-components';

export default function AboutContent() {
  return (
    <AboutStyles>
      <h2>About Us</h2>
      <p>
        In 1909 Victor L Van Gemert started what is know today as Van Gemert
        Memorials in West De Pere. Victor was a brick layer by trade, so he knew
        how to work with marble, granite and with his hands. He hand tooled
        every monument that went out of the doors of Van Gemert Memorials.
      </p>

      <p>
        After some years Victor&apos;s four sons joined him in the family
        business: Clement F, Alton C, Arnold R, and James V. They ran the
        business out of many small buildings in West De Pere, the last one being
        on 300 Main Street. In 1952 the company moved to it&apos;s current
        location at 3742 Riverside Drive. About 20 years after opening the new
        location, Clement, Alton and Arnold retired and the youngest brother
        James bought out his brothers.
      </p>

      <Image
        src="/images/about.jpg"
        alt="A very old Van Gemert Memorials storefront"
        width={800}
        height={536}
        quality={100}
        className="featured-img"
      />

      <p>
        In 1989 Thomas J Van Gemert, James&apos;s oldest son, bought the
        business from his father and became the third generation Van Gemert to
        own the company. Tom started when he was a young boy in the shop
        sweeping, cleaning, cutting, carving, hand tooling and setting monuments
        in the cemetery.
      </p>

      <p>
        Throughout the history of Van Gemert Memorials our goal has always
        remained the same; to provide superior service and high quality products
        for the communities of Northeast Wisconsin.
      </p>
    </AboutStyles>
  );
}

const AboutStyles = styled.div`
  padding: 3rem 1.5rem;
  max-width: 1024px;
  margin: 0 auto;

  h2 {
    margin: 0 0 2rem;
  }
  p {
    margin: 0 0 2rem;
    max-width: 730px;
    line-height: 1.625;
  }

  .featured-img {
    margin: 0 0 2.5rem;
    max-width: 43.75rem; /* 700px */
    width: 100%;
    height: auto;
  }

  @media (min-width: 1072px) {
    padding: 5rem 0;
  }
`;
