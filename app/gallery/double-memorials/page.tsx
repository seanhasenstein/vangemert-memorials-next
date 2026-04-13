import { Metadata } from 'next';

import { getImages } from '@/lib/s3';

import Gallery from '@/components/Gallery';

export const metadata: Metadata = {
  title: 'Double Memorials Gallery | Van Gemert Memorials',
  description:
    'Browse our gallery of double companion memorial headstones. Custom-designed granite monuments for couples crafted by Van Gemert Memorials in De Pere, WI.',
};

export default async function DoubleGalleryPage() {
  const images = await getImages('double-memorials');

  return <Gallery galleryImages={images} galleryName="Double Memorials" />;
}
