import { Metadata } from 'next';

import { getImages } from '@/lib/s3';

import Gallery from '@/components/Gallery';

export const metadata: Metadata = {
  title: 'Single Memorials Gallery | Van Gemert Memorials',
  description:
    'Browse our gallery of single upright memorial headstones. Custom-designed granite monuments crafted by Van Gemert Memorials in De Pere, WI.',
};

export default async function SingleGalleryPage() {
  const images = await getImages('single-memorials');

  return <Gallery galleryImages={images} galleryName="Single Memorials" />;
}
