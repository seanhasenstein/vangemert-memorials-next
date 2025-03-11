'use client';

import styled from 'styled-components';

import Hero from '@/components/Hero';
import LearnMore from '@/components/LearnMore';
import Testimonials from '@/components/Testimonials';
import Welcome from '@/components/Welcome';

export default function Home() {
  return (
    <>
      <DarkBackgroundStyles aria-hidden="true" />
      <Hero />
      <Welcome />
      <Testimonials />
      <LearnMore />
    </>
  );
}

const DarkBackgroundStyles = styled.div`
  background-color: #2a2721;
  height: 170px;
`;
