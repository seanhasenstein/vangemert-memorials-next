import { Metadata } from 'next';

import { getImages } from '@/lib/s3';

import Gallery from '@/components/Gallery';

export const metadata: Metadata = {
  title: 'Granite Colors Gallery | Van Gemert Memorials',
  description:
    'Explore the variety of granite colors available for your memorial. View options from Van Gemert Memorials in De Pere, WI.',
};

export default async function GraniteColorsGalleryPage() {
  const images = await getImages('granite-colors');

  return <Gallery galleryImages={images} galleryName="Granite Colors" />;
}
