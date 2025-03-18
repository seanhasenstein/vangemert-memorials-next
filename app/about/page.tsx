import { Metadata } from 'next';

import AboutContent from '@/components/content/AboutContent';

export const metadata: Metadata = {
  title: 'About Us | Van Gemert Memorials | Green Bay, WI',
  description:
    'Throughout the history of Van Gemert Memorials our goal has always remained the same - to provide superior service and high quality products for the communities of Northeast Wisconsin.',
};

export default function About() {
  return <AboutContent />;
}
