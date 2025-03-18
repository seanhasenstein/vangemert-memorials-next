import { Metadata } from 'next';

import ContactContent from '@/components/content/ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us | Van Gemert Memorials | Green Bay, WI',
  description:
    'How can we help you? If you have any questions or needs, please contact here. For immediate assistance, call us during store hours at (920) 336-8741.',
};

export default function Contact() {
  return <ContactContent />;
}
