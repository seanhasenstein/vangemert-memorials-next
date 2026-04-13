import { Metadata } from 'next';

import { getImages } from '@/lib/s3';

import Gallery from '@/components/Gallery';

export const metadata: Metadata = {
  title: 'Slant Memorials Gallery | Van Gemert Memorials',
  description:
    'Browse our gallery of slant memorial headstones. Custom-designed slant-face granite monuments crafted by Van Gemert Memorials in De Pere, WI.',
};

export default async function SlantGalleryPage() {
  const images = await getImages('slant-memorials');

  return <Gallery galleryImages={images} galleryName="Slant Memorials" />;
}
