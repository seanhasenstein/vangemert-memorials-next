import { Metadata } from 'next';

import StaffContent from '@/components/content/StaffContent';

export const metadata: Metadata = {
  title: 'Meet our Staff | Van Gemert Memorials | (920) 336-8741',
  description:
    'Meet our caring staff - here to help you tell your story and provide you the finest quality craftsmanship and service.',
};

export default function Staff() {
  return <StaffContent />;
}
