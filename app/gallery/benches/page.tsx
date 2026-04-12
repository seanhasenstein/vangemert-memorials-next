import { Metadata } from 'next';

import { getImages } from '@/lib/s3';

import Gallery from '@/components/Gallery';

export const metadata: Metadata = {
  title: 'Benches Gallery | Van Gemert Memorials',
  description:
    'Browse our gallery of memorial benches. Custom-designed granite bench monuments crafted by Van Gemert Memorials in De Pere, WI.',
};

export default async function BenchesGalleryPage() {
  const images = await getImages('benches');

  return <Gallery galleryImages={images} galleryName="Benches" />;
}
