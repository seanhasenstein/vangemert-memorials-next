import { Metadata } from 'next';

import { getImages } from '@/lib/s3';

import Gallery from '@/components/Gallery';

export const metadata: Metadata = {
  title: 'Benches Gallery | Van Gemert Memorials',
};

export default async function BenchesGalleryPage() {
  const images = await getImages('benches');

  return <Gallery galleryImages={images} galleryName="Benches" />;
}
