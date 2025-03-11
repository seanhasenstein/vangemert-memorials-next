import { getImages } from '@/lib/s3';

import Gallery from '@/components/Gallery';

export default async function SingleGalleryPage() {
  const images = await getImages('single-memorials');

  return <Gallery galleryImages={images} galleryName="Single Memorials" />;
}
