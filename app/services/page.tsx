import { Metadata } from 'next';

import ServicesContent from '@/components/content/ServicesContent';

export const metadata: Metadata = {
  title: 'Services | Van Gemert Memorials | Green Bay, WI',
  description:
    'Find a list of the services that we provide. We are here to provide you the finest quality craftsmanship.',
};

export default function Services() {
  return <ServicesContent />;
}
