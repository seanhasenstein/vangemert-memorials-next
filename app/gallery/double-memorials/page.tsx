import { Metadata } from 'next';

import { getImages } from '@/lib/s3';

import Gallery from '@/components/Gallery';

export const metadata: Metadata = {
  title: 'Double Memorials Gallery | Van Gemert Memorials',
};

export default async function DoubleGalleryPage() {
  const images = await getImages('double-memorials');

  return <Gallery galleryImages={images} galleryName="Double Memorials" />;
}
