import { Metadata } from 'next';

import FaqContent from '@/components/content/FaqContent';

export const metadata: Metadata = {
  title: 'FAQs | Van Gemert Memorials | Green Bay, WI',
  description:
    'Find answers to frequently asked questions about Van Gemert Memorials and what we can do for you. See the most common topics and more.',
};

export default function Faq() {
  return <FaqContent />;
}
